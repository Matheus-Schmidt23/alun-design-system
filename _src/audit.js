// Auditoria rápida (rodar no console da página): contraste de textos e overflow horizontal.
(() => {
  const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(x => parseFloat(x)); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const lum = ({ r, g, b }) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + .05) / (Math.min(l1, l2) + .05); };
  const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  function bgOf(el) {
    const stack = []; let e = el;
    while (e && e !== document.documentElement) {
      const s = getComputedStyle(e);
      if (s.backgroundImage && /gradient/.test(s.backgroundImage)) return null;
      const c = parse(s.backgroundColor);
      if (c && c.a > 0) { stack.push(c); if (c.a === 1) break; }
      e = e.parentElement;
    }
    let base = { r: 255, g: 255, b: 255, a: 1 };
    if (stack.length && stack[stack.length - 1].a === 1) base = stack.pop();
    while (stack.length) base = blend(stack.pop(), base);
    return base;
  }
  const out = [], seen = new Set();
  document.querySelectorAll('body *').forEach(el => {
    if (/^(SCRIPT|STYLE|CANVAS|svg|path|g|circle|rect)$/i.test(el.tagName)) return;
    const own = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim().length > 1).map(n => n.textContent.trim()).join(' ');
    if (!own) return;
    const s = getComputedStyle(el);
    if (s.visibility === 'hidden' || s.display === 'none' || parseFloat(s.opacity) === 0) return;
    const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return;
    if (el.closest('.is-disabled,[disabled]')) return;
    const fg = parse(s.color), bg = bgOf(el); if (!fg || !bg) return;
    const f = blend(fg, bg), cr = ratio(f, bg);
    const size = parseFloat(s.fontSize), bold = parseInt(s.fontWeight) >= 700, large = size >= 24 || (size >= 18.66 && bold);
    if (cr < (large ? 3 : 4.5)) { const k = own.slice(0, 38) + '|' + cr.toFixed(1); if (!seen.has(k)) { seen.add(k); out.push([own.slice(0, 40), +cr.toFixed(2), Math.round(size), (el.className && el.className.baseVal === undefined ? el.className : '').slice(0, 24)]); } }
  });
  const ov = [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.right > innerWidth + 2 && r.width > 0 && getComputedStyle(e).position !== 'fixed'; }).slice(0, 6).map(e => e.tagName + '.' + (e.className || '').toString().slice(0, 24));
  return JSON.stringify({ w: innerWidth, sw: document.documentElement.scrollWidth, overflow: ov, low: out.slice(0, 40) });
})()
