/* Campus drawing: an axonometric ink drawing of the student's school on grid paper.
   One building per subject (shape by position in the portfolio), an Exam Hall, an Office.
   Progress lights the windows; one flag per building says what needs attention.
   Pure function: campusSvg(model) -> SVG string. No DOM. Shared by the app and the mockups. */
(function (root) {
  const INK = '#191D23', RULE = '#D8D2C4', PENCIL = '#767C86', PAPER = '#FBFAF6';
  const FLAG = { red: '#B3372B', amber: '#A8761B', blue: '#2B4C7E' };
  const S = 26;                       // one grid cell in px
  const CX = 0.866, SY = 0.5;         // 30° axonometric
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const iso = (x, y, z) => [((x - y) * CX * S), ((x + y) * SY * S) - z * S];
  const pt = (x, y, z) => iso(x, y, z).map(v => Math.round(v * 10) / 10).join(',');

  /* eight building shapes, chosen by the subject's position in the portfolio */
  const SHAPES = [
    { name: 'hall',     w: 4, d: 3, h: 2.2, roof: 'pitched' },
    { name: 'tower',    w: 2.4, d: 2.4, h: 3.6, roof: 'flat' },
    { name: 'block',    w: 3.4, d: 3.4, h: 2.6, roof: 'flat' },
    { name: 'long',     w: 5, d: 2.2, h: 1.8, roof: 'pitched' },
    { name: 'lshape',   w: 4, d: 4, h: 2.2, roof: 'flat', cut: true },
    { name: 'pavilion', w: 3, d: 3, h: 2, roof: 'hip' },
    { name: 'clock',    w: 2.2, d: 2.2, h: 3.2, roof: 'pitched', clock: true },
    { name: 'terrace',  w: 4.6, d: 2.4, h: 2.4, roof: 'pitched', bays: 3 },
  ];

  /* plots along a central path: subjects left and right, the Office by the gate, the Exam Hall at the head */
  const ROW = 6, TOP = 5.4;
  function plots(n) {
    const out = [];
    for (let i = 0; i < n; i++) { const row = Math.floor(i / 2); const left = i % 2 === 0; out.push({ x: left ? 0.8 : 9.4, y: TOP + row * ROW + (left ? 0 : ROW / 2) }); }
    return out;
  }

  function face(pts, fill, extra = '') { return `<polygon points="${pts.join(' ')}" fill="${fill}" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"${extra}/>`; }
  function tint(hex, k) { /* mix a colour toward white (k>0) or toward ink (k<0) */
    const c = hex.replace('#', ''); const n = parseInt(c, 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    const t = k > 0 ? [255, 255, 255] : [25, 29, 35]; const a = Math.abs(k);
    r = Math.round(r + (t[0] - r) * a); g = Math.round(g + (t[1] - g) * a); b = Math.round(b + (t[2] - b) * a);
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  /* a box from (x,y) with width w (along x), depth d (along y), height h; faces: top, left(front-left, along x), right(front-right, along y) */
  function box(x, y, w, d, h, opt) {
    const base = opt.base || '#EFE9DB';
    const top = tint(base, 0.45), left = base, right = tint(base, -0.18);
    let s = '';
    s += face([pt(x, y + d, 0), pt(x + w, y + d, 0), pt(x + w, y + d, h), pt(x, y + d, h)], left);          // front-left face (visible, y = y+d)
    s += face([pt(x + w, y + d, 0), pt(x + w, y, 0), pt(x + w, y, h), pt(x + w, y + d, h)], right);         // front-right face (x = x+w)
    if (opt.roof === 'pitched') {
      const r = h + Math.min(w, d) * 0.45;
      // ridge runs along the longer side
      if (w >= d) {
        const ym = y + d / 2;
        s += face([pt(x, y + d, h), pt(x + w, y + d, h), pt(x + w, ym, r), pt(x, ym, r)], tint(base, -0.05));
        s += face([pt(x + w, y + d, h), pt(x + w, y, h), pt(x + w, ym, r)], tint(base, -0.3));
        s += face([pt(x + w, y, h), pt(x, y, h), pt(x, ym, r), pt(x + w, ym, r)], tint(base, 0.25));
      } else {
        const xm = x + w / 2;
        s += face([pt(x + w, y + d, h), pt(x + w, y, h), pt(xm, y, r), pt(xm, y + d, r)], tint(base, -0.3));
        s += face([pt(x, y + d, h), pt(x + w, y + d, h), pt(xm, y + d, r)], tint(base, -0.05));
        s += face([pt(x, y, h), pt(x, y + d, h), pt(xm, y + d, r), pt(xm, y, r)], tint(base, 0.25));
      }
    } else if (opt.roof === 'hip') {
      const r = h + 0.9, xm = x + w / 2, ym = y + d / 2;
      s += face([pt(x, y + d, h), pt(x + w, y + d, h), pt(xm, ym, r)], tint(base, -0.05));
      s += face([pt(x + w, y + d, h), pt(x + w, y, h), pt(xm, ym, r)], tint(base, -0.3));
      s += face([pt(x + w, y, h), pt(x, y, h), pt(xm, ym, r)], tint(base, 0.25));
      s += face([pt(x, y, h), pt(x, y + d, h), pt(xm, ym, r)], tint(base, 0.1));
    } else {
      s += face([pt(x, y, h), pt(x + w, y, h), pt(x + w, y + d, h), pt(x, y + d, h)], top);
      // parapet line
      s += `<polyline points="${[pt(x, y + d, h - 0.18), pt(x + w, y + d, h - 0.18), pt(x + w, y, h - 0.18)].join(' ')}" fill="none" stroke="${INK}" stroke-width="0.8" opacity=".5"/>`;
    }
    return s;
  }

  /* windows on the two visible faces; lit ones glow warm. count is spread across both faces, lit from the bottom up */
  function windows(x, y, w, d, h, lit, total) {
    const rows = Math.max(1, Math.floor(h - 0.6)), colsL = Math.max(1, Math.floor(w * 1.1)), colsR = Math.max(1, Math.floor(d * 1.1));
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < colsL; c++) cells.push({ f: 'L', r, c });
      for (let c = 0; c < colsR; c++) cells.push({ f: 'R', r, c });
    }
    const n = cells.length; const litN = Math.round(Math.min(1, Math.max(0, lit)) * n);
    let s = '';
    cells.forEach((cell, i) => {
      const on = i < litN;
      const z0 = 0.45 + cell.r * 1, z1 = z0 + 0.5;
      let p;
      if (cell.f === 'L') { const u0 = x + 0.35 + cell.c * (w - 0.7) / colsL, u1 = u0 + Math.min(0.5, (w - 0.7) / colsL - 0.15); p = [pt(u0, y + d, z0), pt(u1, y + d, z0), pt(u1, y + d, z1), pt(u0, y + d, z1)]; }
      else { const v1 = y + d - 0.35 - cell.c * (d - 0.7) / colsR, v0 = v1 - Math.min(0.5, (d - 0.7) / colsR - 0.15); p = [pt(x + w, v1, z0), pt(x + w, v0, z0), pt(x + w, v0, z1), pt(x + w, v1, z1)]; }
      s += `<polygon points="${p.join(' ')}" fill="${on ? '#F6DE9A' : '#E7EEF3'}" stroke="${INK}" stroke-width="0.7"${on ? ' opacity="1"' : ' opacity=".9"'}/>`;
    });
    return s;
  }

  function door(x, y, w, d, colour) {
    const u0 = x + w / 2 - 0.32, u1 = x + w / 2 + 0.32;
    return `<polygon points="${[pt(u0, y + d, 0), pt(u1, y + d, 0), pt(u1, y + d, 0.95), pt(u0, y + d, 0.95)].join(' ')}" fill="${colour}" stroke="${INK}" stroke-width="1"/>`
      + `<polygon points="${[pt(u0 - 0.15, y + d, 0.95), pt(u1 + 0.15, y + d, 0.95), pt(u1 + 0.15, y + d + 0.4, 1.1), pt(u0 - 0.15, y + d + 0.4, 1.1)].join(' ')}" fill="${colour}" stroke="${INK}" stroke-width="1" opacity=".9"/>`;
  }

  function flag(x, y, w, d, top, colour) {
    if (!colour) return '';
    const [px, py] = iso(x + w - 0.3, y + 0.3, top);
    return `<line x1="${px}" y1="${py}" x2="${px}" y2="${py - 22}" stroke="${INK}" stroke-width="1.2"/><polygon points="${px},${py - 22} ${px + 14},${py - 18} ${px},${py - 14}" fill="${colour}" stroke="${INK}" stroke-width="1"/>`;
  }

  function tree(x, y, size) {
    const [px, py] = iso(x, y, 0); const r = 7 * size;
    return `<line x1="${px}" y1="${py}" x2="${px}" y2="${py - 12 * size}" stroke="${INK}" stroke-width="1.2"/><circle cx="${px}" cy="${py - 12 * size - r * 0.8}" r="${r}" fill="#E4EBDD" stroke="${INK}" stroke-width="1.2"/><circle cx="${px - r * 0.55}" cy="${py - 12 * size - r * 0.5}" r="${r * 0.7}" fill="#E4EBDD" stroke="${INK}" stroke-width="1.2"/><circle cx="${px + r * 0.5}" cy="${py - 12 * size - r * 0.55}" r="${r * 0.65}" fill="#E4EBDD" stroke="${INK}" stroke-width="1.2"/>`;
  }

  function label(x, y, w, d, text, sub) {
    const [px, py] = iso(x + w / 2, y + d + 0.7, 0);
    const halo = `paint-order="stroke" stroke="${PAPER}" stroke-width="4" stroke-linejoin="round"`;
    return `<text x="${px}" y="${py + 12}" text-anchor="middle" font-size="12.5" font-weight="600" fill="${INK}" ${halo}>${esc(text)}</text>` + (sub ? `<text x="${px}" y="${py + 26}" text-anchor="middle" font-size="10.5" fill="${PENCIL}" ${halo}>${esc(sub)}</text>` : '');
  }

  /* model: { subjects:[{id,name,short,colour,pct,marker,rooms,due}], exam:{marker}, office:{name}, admin:bool, hour:0-23 } */
  function campusSvg(model) {
    const subs = model.subjects || [];
    const P = plots(subs.length);
    const things = [], labels = [];
    // ground: quad, central path, side paths to each plot
    const rows = Math.ceil(Math.max(1, subs.length) / 2);
    const gx0 = -1, gy0 = 0, gx1 = 15, gy1 = TOP + rows * ROW + ROW / 2 + 1.2;
    const ground = `<polygon points="${[pt(gx0, gy0, 0), pt(gx1, gy0, 0), pt(gx1, gy1, 0), pt(gx0, gy1, 0)].join(' ')}" fill="#F3EFE4" stroke="${INK}" stroke-width="1.2"/>`;
    const pathMain = `<polygon points="${[pt(6.2, 3.8, 0), pt(7.8, 3.8, 0), pt(7.8, gy1 - 0.3, 0), pt(6.2, gy1 - 0.3, 0)].join(' ')}" fill="#E9E2D2" stroke="${INK}" stroke-width="0.9"/>`;
    let paths = '';
    subs.forEach((s, i) => { const p = P[i]; const sh = SHAPES[i % SHAPES.length]; const left = p.x < 6; const yy = p.y + sh.d + 0.2;
      paths += `<polygon points="${left ? [pt(p.x + sh.w / 2 - 0.4, yy, 0), pt(p.x + sh.w / 2 + 0.4, yy, 0), pt(p.x + sh.w / 2 + 0.4, yy + 1.2, 0), pt(6.2, yy + 1.2, 0), pt(6.2, yy + 0.4, 0), pt(p.x + sh.w / 2 - 0.4, yy + 0.4, 0)].join(' ') : [pt(p.x + sh.w / 2 - 0.4, yy, 0), pt(p.x + sh.w / 2 + 0.4, yy, 0), pt(p.x + sh.w / 2 + 0.4, yy + 0.4, 0), pt(7.8, yy + 0.4, 0), pt(7.8, yy + 1.2, 0), pt(p.x + sh.w / 2 - 0.4, yy + 1.2, 0)].join(' ')}" fill="#E9E2D2" stroke="${INK}" stroke-width="0.8"/>`; });
    // buildings as drawable things with a depth key
    subs.forEach((s, i) => { const p = P[i]; const sh = SHAPES[i % SHAPES.length]; things.push({ z: p.x + p.y + sh.d, draw: () => {
      const base = tint(s.colour, 0.82);
      let b = `<g class="bldg" data-bldg="${esc(s.id)}" data-i="${i}" role="link" tabindex="0" aria-label="${esc(s.name)}: ${esc(s.summary || '')}" style="cursor:pointer">`;
      b += box(p.x, p.y, sh.w, sh.d, sh.h, { base, roof: sh.roof });
      if (sh.cut) b += box(p.x + sh.w - 1.4, p.y - 1.2, 1.4, 1.2, sh.h, { base, roof: 'flat' });
      b += windows(p.x, p.y, sh.w, sh.d, sh.h, s.pct || 0);
      if (sh.clock) { const [cx, cy] = iso(p.x + sh.w / 2, p.y + sh.d, sh.h - 0.6); b += `<circle cx="${cx}" cy="${cy}" r="9" fill="${PAPER}" stroke="${INK}" stroke-width="1.2"/><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - 6}" stroke="${INK}" stroke-width="1.2"/><line x1="${cx}" y1="${cy}" x2="${cx + 4}" y2="${cy + 2}" stroke="${INK}" stroke-width="1.2"/>`; }
      b += door(p.x, p.y, sh.w, sh.d, s.colour);
      b += flag(p.x, p.y, sh.w, sh.d, sh.roof === 'flat' ? sh.h : sh.h + Math.min(sh.w, sh.d) * 0.45, FLAG[s.marker]);
      labels.push(label(p.x, p.y, sh.w, sh.d, s.short || s.name, s.sub || ''));
      return b + '</g>'; } }); });
    // exam hall at the head of the path
    { const x = 3.5, y = 0.6, w = 7, d = 3, h = 2.4; things.push({ z: x + y + d, draw: () => {
      let b = `<g class="bldg" data-bldg-view="exam" role="link" tabindex="0" aria-label="Exam Hall" style="cursor:pointer">` + box(x, y, w, d, h, { base: '#EFE9DB', roof: 'pitched' });
      for (let c = 0; c < 5; c++) { const u = x + 0.9 + c * 1.3; b += `<polygon points="${[pt(u, y + d, 0), pt(u + 0.3, y + d, 0), pt(u + 0.3, y + d, h - 0.2), pt(u, y + d, h - 0.2)].join(' ')}" fill="${PAPER}" stroke="${INK}" stroke-width="1"/>`; }
      b += windows(x, y, w, d, h, 0); b += door(x, y, w, d, INK); b += flag(x, y, w, d, h + 1.35, FLAG[model.exam && model.exam.marker]);
      labels.push(label(x, y, w, d, 'Exam Hall', model.exam && model.exam.sub || '')); return b + '</g>'; } }); }
    // office by the gate
    { const x = 9.4, y = gy1 - 3.4, w = 2.6, d = 2, h = 1.6; things.push({ z: x + y + d, draw: () => {
      let b = `<g class="bldg" data-bldg-view="office" role="link" tabindex="0" aria-label="${model.admin ? 'Office and Admin' : 'Office'}" style="cursor:pointer">` + box(x, y, w, d, h, { base: '#EFE9DB', roof: 'hip' });
      b += windows(x, y, w, d, h, 0); b += door(x, y, w, d, '#767C86'); b += flag(x, y, w, d, h + 0.9, FLAG[model.office && model.office.marker]);
      labels.push(label(x, y, w, d, 'Office', model.admin ? 'admin' : '')); return b + '</g>'; } }); }
    // trees
    const trees = [[1.2, 1.6, 1], [13.2, 1.4, 1.1], [0.6, gy1 - 1.4, 1.2], [13.6, gy1 - 1, 1], [12.2, 3.2, 0.9], [1.4, gy1 - 6, .9]].map(([x, y, k]) => ({ z: x + y, draw: () => tree(x, y, k) }));
    const all = things.concat(trees).sort((a, b) => a.z - b.z).map(t => t.draw()).join('');
    // gate marker "you are here" at the foot of the path
    const [ex, ey] = iso(7, gy1 - 0.2, 0);
    const gate = `<g aria-hidden="true"><line x1="${ex - 22}" y1="${ey}" x2="${ex + 22}" y2="${ey}" stroke="${INK}" stroke-width="1.4"/><text x="${ex}" y="${ey + 16}" text-anchor="middle" font-size="10.5" fill="${PENCIL}" letter-spacing=".06em">GATE</text></g>`;
    // frame the drawing
    const corners = [iso(gx0, gy0, 0), iso(gx1, gy0, 0), iso(gx1, gy1, 0), iso(gx0, gy1, 0)];
    const minX = Math.min(...corners.map(c => c[0])) - 20, maxX = Math.max(...corners.map(c => c[0])) + 20;
    const minY = -110, maxY = Math.max(...corners.map(c => c[1])) + 40;
    const hour = model.hour == null ? 12 : model.hour; const dusk = hour < 7 || hour >= 19; const evening = !dusk && (hour >= 16);
    const plot = [pt(gx0, gy0, 0), pt(gx1, gy0, 0), pt(gx1, gy1, 0), pt(gx0, gy1, 0)].join(' ');
    const wash = dusk ? `<polygon points="${plot}" fill="#2B4C7E" opacity=".08" pointer-events="none"/>` : evening ? `<polygon points="${plot}" fill="#A8761B" opacity=".06" pointer-events="none"/>` : '';
    return `<svg class="campus" viewBox="${minX} ${minY} ${maxX - minX} ${maxY - minY}" role="group" aria-label="Your campus" font-family="Instrument Sans, ui-sans-serif, system-ui, sans-serif">${ground}${pathMain}${paths}${all}${labels.join('')}${gate}${wash}</svg>`;
  }

  root.campusSvg = campusSvg;
  root.CAMPUS_SHAPES = SHAPES.map(s => s.name);
})(typeof module !== 'undefined' ? module.exports : globalThis);
