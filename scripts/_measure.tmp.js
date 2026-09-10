const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const ctx=await b.newContext({viewport:{width:1180,height:820}});const p=await ctx.newPage();
 await p.addInitScript(()=>{localStorage.setItem('platform:session','tok-matthew');});await p.goto('http://127.0.0.1:8787/');await p.waitForSelector('#rail-l .ccard');
 await p.click('#rail-l [data-course="EDX-9MA0"]');await p.waitForSelector('#rail-l [data-open="EDX-9MA0|P2"]');await p.click('#rail-l [data-open="EDX-9MA0|P2"]');await p.waitForSelector('[data-station="formulae"]');await p.click('[data-station="formulae"]');await p.waitForTimeout(200);
 const r=await p.evaluate(()=>{const c=document.querySelector('main.centre');const w=()=>Math.round(c.getBoundingClientRect().width);const out={cs:{minW:getComputedStyle(c).minWidth,w:getComputedStyle(c).width,cols:getComputedStyle(c.parentElement).gridTemplateColumns},before:w()};
  const st=document.querySelector('.stations');st.style.display='none';out.noStations=w();st.style.display='';
  const sec=document.querySelector('#v-rooms');const kids=[...sec.querySelector('.panel').children];out.byChild={};for(const k of kids){const d=k.style.display;k.style.display='none';out.byChild[(k.className||k.tagName).slice(0,18)+'#'+kids.indexOf(k)]=w();k.style.display=d;}
  const hidden=[...document.querySelectorAll('main.centre > section.hide')];for(const h of hidden){h.style.display='none';}out.hiddenOff=w();return out;});
 console.log(JSON.stringify(r,null,1));await b.close();})().catch(e=>{console.error(e.message);process.exit(1);});
