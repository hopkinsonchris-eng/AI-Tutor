/* Loads the Worker's ES modules into a Node test without a bundler. The Worker is deployed by wrangler,
   which bundles imports; here each file is read as text, its imports are satisfied from a map the test
   provides, and its exports are collected. The deployed files are never touched. */
const fs = require('fs'), vm = require('vm'), path = require('path');

function loadModule(file, imports = {}, extraGlobals = {}) {
  let src = fs.readFileSync(file, 'utf8');
  const exportsObj = {};
  // import { a, b as c } from 'x'  /  import X from 'x'  /  import * as X from 'x'
  src = src.replace(/^import\s+\{([^}]*)\}\s+from\s+['"]([^'"]+)['"];?/gm, (_, names, from) =>
    names.split(',').map(n => n.trim()).filter(Boolean).map(n => { const [a, b] = n.split(/\s+as\s+/); return `const ${b || a} = __imports[${JSON.stringify(from)}][${JSON.stringify(a)}];`; }).join('\n'));
  src = src.replace(/^import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/gm, (_, name, from) => `const ${name} = __imports[${JSON.stringify(from)}];`);
  src = src.replace(/^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/gm, (_, name, from) => `const ${name} = (__imports[${JSON.stringify(from)}].default ?? __imports[${JSON.stringify(from)}]);`);
  // export { A, B } from './x'
  src = src.replace(/^export\s+\{([^}]*)\}\s+from\s+['"]([^'"]+)['"];?/gm, (_, names, from) =>
    names.split(',').map(n => n.trim()).filter(Boolean).map(n => { const [a, b] = n.split(/\s+as\s+/); return `__exports[${JSON.stringify(b || a)}] = __imports[${JSON.stringify(from)}][${JSON.stringify(a)}];`; }).join('\n'));
  // export default {   /  export class X  /  export function x  /  export const x  /  export { a, b }
  src = src.replace(/^export\s+default\s+/m, '__exports.default = ');
  src = src.replace(/^export\s+(class|function|async function|const|let)\s+(\w+)/gm, (_, kind, name) => `__exports.${name} = undefined; ${kind} ${name}`);
  src = src.replace(/^export\s+\{([^}]*)\};?/gm, (_, names) => names.split(',').map(n => n.trim()).filter(Boolean).map(n => { const [a, b] = n.split(/\s+as\s+/); return `__exports[${JSON.stringify(b || a)}] = ${a};`; }).join('\n'));
  // hoisted declarations: re-assign after the body so classes/functions declared later are exported too
  const declared = [...src.matchAll(/__exports\.(\w+) = undefined; (?:class|function|async function|const|let) \1/g)].map(m => m[1]);
  src += '\n' + declared.map(n => `__exports.${n} = ${n};`).join('\n');
  const sandbox = { __imports: imports, __exports: exportsObj, console, crypto, fetch: (...a) => sandbox.__fetch(...a), setTimeout, clearTimeout,
    Response, Request, Headers, URL, URLSearchParams, TextEncoder, TextDecoder, atob, btoa, Uint8Array, Date, Math, JSON, parseInt, parseFloat, String, Number, Object, Array, Error, Promise, RegExp, Map, Set, Symbol, ...extraGlobals };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: path.basename(file) });
  return { exports: exportsObj, sandbox };
}

function kv() {
  const m = new Map();
  return {
    async get(k, type) { const v = m.get(k); if (v === undefined) return null; return type === 'json' ? JSON.parse(v) : v; },
    async put(k, v) { m.set(k, String(v)); },
    async delete(k) { m.delete(k); },
    async list({ prefix }) { return { keys: [...m.keys()].filter(k => k.startsWith(prefix)).sort().map(name => ({ name })) }; },
    _map: m,
  };
}

/* A Workflow step that just runs the callback — the durable behaviour is Cloudflare's; the pipeline's
   logic is what these tests cover. Records step names so a test can assert the stages. */
function inlineStep() { const names = []; return { names, async do(name, optsOrFn, maybeFn) { names.push(name); const fn = typeof optsOrFn === 'function' ? optsOrFn : maybeFn; return fn(); }, async sleep() {} }; }

/* A stand-in for an R2 bucket: put/get/delete with the http metadata the Worker sets. */
function r2() {
  const m = new Map();
  return {
    async put(key, body, opts) { const buf = body instanceof ArrayBuffer ? new Uint8Array(body) : body instanceof Uint8Array ? body : new TextEncoder().encode(String(body)); m.set(key, { buf, meta: (opts && opts.httpMetadata) || {} }); },
    async get(key) { const v = m.get(key); if (!v) return null; return { body: v.buf, arrayBuffer: async () => v.buf.buffer.slice(v.buf.byteOffset, v.buf.byteOffset + v.buf.byteLength), httpMetadata: v.meta, size: v.buf.byteLength }; },
    async delete(key) { m.delete(key); },
    _map: m,
  };
}

module.exports = { loadModule, kv, r2, inlineStep };
