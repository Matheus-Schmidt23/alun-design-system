/* ===== Comportamento compartilhado dos guias (lê window.DS e window.GFX) ===== */
(function(){
  const DS = window.DS || {};
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  // ---- reveal ----
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: .08 });
  $$('.reveal').forEach(el => io.observe(el));
  if (/[?&]qa(&|$)/.test(location.search)) { document.documentElement.style.scrollBehavior = 'auto'; $$('.reveal').forEach(el => { el.style.transition = 'none'; el.classList.add('show'); }); }
  window.addEventListener('beforeprint', () => $$('.reveal').forEach(el => el.classList.add('show')));

  // ---- toast + copiar ----
  const toast = $('#toast'); let tt;
  function showToast(m){ if(!toast) return; toast.textContent = m; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 1800); }
  function copy(text, msg){
    const done = () => showToast(msg);
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done).catch(done); }
    else { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch(e){} t.remove(); done(); }
  }
  window.DSUI = { showToast, copy };
  $$('[data-hex]').forEach(sw => {
    sw.addEventListener('click', () => { const h = sw.dataset.hex; copy(h, (h.startsWith('#') ? h : 'CSS copiado') + ' copiado!'); });
    sw.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sw.click(); } });
  });

  // ---- scroll-spy + offset da nav ----
  const links = $$('nav.top a[href^="#"]');
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(a => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });
  links.forEach(a => a.addEventListener('click', ev => { const t = $(a.getAttribute('href')); if (t) { ev.preventDefault(); scrollTo({ top: t.getBoundingClientRect().top + scrollY - 52, behavior: 'smooth' }); } }));

  // ---- contraste (WCAG) ----
  function lum(hex){ const c = [1,3,5].map(i => parseInt(hex.slice(i, i+2), 16) / 255).map(v => v <= .03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4)); return .2126*c[0] + .7152*c[1] + .0722*c[2]; }
  function ratio(a, b){ const l1 = lum(a), l2 = lum(b); return (Math.max(l1,l2)+.05) / (Math.min(l1,l2)+.05); }
  const tb = $('#ctrTable');
  if (tb && DS.contrast) {
    tb.innerHTML = DS.contrast.map(([fg, bg, nm, use]) => {
      const r = ratio(fg, bg);
      const cls = r >= 7 ? ['aaa','AAA'] : r >= 4.5 ? ['aa','AA'] : r >= 3 ? ['lg2','Só texto grande'] : ['no','Reprovado'];
      const bord = /^#(FFFFFF|FAFAFA|F4F5F6|FDFBFF)$/i.test(bg) ? 'border:1px solid rgba(22,18,31,.12)' : '';
      return `<tr><td style="width:170px"><span class="ctr-pair" style="background:${bg};color:${fg};${bord}">Aa Texto</span></td><td><b style="font-family:var(--display)">${nm}</b><br><span style="font-size:12.5px;color:var(--muted)">${use}</span></td><td style="text-align:right;white-space:nowrap"><span class="mono" style="margin-right:10px">${r.toFixed(2)}:1</span><span class="ctr-badge ${cls[0]}">${cls[1]}</span></td></tr>`;
    }).join('');
  }

  // ---- download de logo em PNG (gerado no navegador a partir do vetor) ----
  (function(){
    const grid = $('#dlGrid'); if (!grid || !DS.logo) return;
    const KINDS = { logo: Object.assign({ label: 'Logo' }, DS.logo) };
    if (DS.symbol) KINDS.simbolo = Object.assign({ label: 'Símbolo' }, DS.symbol);
    const COLORS = DS.dlColors || [];
    const svgStr = (kind, hex, w, h) => { const K = KINDS[kind]; return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${K.w} ${K.h}" fill="none"><g fill="${hex}">${K.paths}</g></svg>`; };
    const uri = s => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
    function makePng(kind, hex, width){
      const K = KINDS[kind], h = Math.round(width * K.h / K.w);
      return new Promise((res, rej) => {
        const img = new Image();
        img.onload = () => { const c = document.createElement('canvas'); c.width = width; c.height = h; c.getContext('2d').drawImage(img, 0, 0, width, h); c.toBlob(b => b ? res(b) : rej(new Error('toBlob')), 'image/png'); };
        img.onerror = () => rej(new Error('svg'));
        img.src = uri(svgStr(kind, hex, width, h));
      });
    }
    let W = 2048;
    grid.innerHTML = Object.keys(KINDS).map(kind => COLORS.map(c =>
      `<div class="dl-card"><div class="dl-prev${kind === 'simbolo' ? ' sym' : ''}" style="background:${c.bg}"><img alt="${KINDS[kind].label} ${DS.name} ${c.name.toLowerCase()}" src="${uri(svgStr(kind, c.hex, KINDS[kind].w, KINDS[kind].h))}"></div>` +
      `<div class="dl-meta"><b>${KINDS[kind].label} ${c.name.toLowerCase()}</b><span>${c.hex}</span></div>` +
      `<button type="button" class="btn btn-light btn-sm" data-kind="${kind}" data-k="${c.k}" data-hex="${c.hex}">Baixar PNG</button></div>`
    ).join('')).join('');
    const seg = $('#dlSize');
    seg && seg.addEventListener('click', e => { const b = e.target.closest('button[data-w]'); if (!b) return; W = +b.dataset.w; $$('#dlSize button').forEach(x => x.classList.toggle('on', x === b)); });
    grid.addEventListener('click', async e => {
      const b = e.target.closest('button[data-kind]'); if (!b) return;
      const old = b.textContent, w = W; b.disabled = true; b.textContent = 'Gerando…';
      try {
        const blob = await makePng(b.dataset.kind, b.dataset.hex, w);
        const name = `${DS.brand}-${b.dataset.kind}-${b.dataset.k}-${w}px.png`;
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
        showToast('PNG baixado: ' + name);
      } catch (err) { showToast('Não foi possível gerar o PNG neste navegador'); }
      b.disabled = false; b.textContent = old;
    });
  })();

  // ---- tokens + markdown para LLM ----
  const cc = $('#copyCss'); cc && cc.addEventListener('click', () => copy($('#cssTokens').textContent, 'CSS copiado!'));
  const md = ($('#ai-context') || {}).textContent;
  const out = $('#mdOut');
  if (md && out) {
    const text = md.trim();
    $('#genMd').addEventListener('click', () => { out.value = text; out.style.display = 'block'; $('#copyMd').style.display = 'inline-flex'; $('#dlMd').style.display = 'inline-flex'; out.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); });
    $('#copyMd').addEventListener('click', () => copy(out.value, 'Markdown copiado!'));
    $('#dlMd').addEventListener('click', () => { const b = new Blob([out.value], { type: 'text/markdown;charset=utf-8' }); const u = URL.createObjectURL(b); const a = document.createElement('a'); a.href = u; a.download = DS.brand + '-brand-context.md'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(u); });
  }

  // ---- gráficos procedurais da marca (canvas/SVG) ----
  const G = window.GFX || {};
  const draw = el => { const fn = G[el.dataset.gfx]; if (fn) { try { fn(el); } catch (e) { console.warn('gfx', el.dataset.gfx, e); } } };
  $$('[data-gfx]').forEach(el => {
    draw(el);
    if (window.ResizeObserver && el.tagName === 'CANVAS') { let t; new ResizeObserver(() => { clearTimeout(t); t = setTimeout(() => draw(el), 120); }).observe(el); }
  });
})();

// ---- componentes em abas + peças em carrossel ----
(function(){
  const $ = (s, r=document) => [...r.querySelectorAll(s)];
  $('.wrap').forEach(w => {
    const comps = [...w.children].filter(c => c.classList.contains('comp'));
    if (comps.length < 3) return;
    const bar = document.createElement('div'); bar.className = 'comp-tabs'; bar.setAttribute('role', 'tablist');
    const btns = comps.map((c, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.setAttribute('role', 'tab');
      const h = c.querySelector('.ct h3'); b.textContent = h ? h.textContent : 'Item ' + (i + 1);
      b.addEventListener('click', () => sel(i)); bar.appendChild(b); c.classList.add('show'); return b;
    });
    function sel(i){ comps.forEach((c, k) => { c.classList.toggle('is-hidden', k !== i); btns[k].setAttribute('aria-selected', k === i ? 'true' : 'false'); }); window.dispatchEvent(new Event('resize')); }
    w.insertBefore(bar, comps[0]); const tq = location.search.match(/[?&]tab=([0-9]+)/); sel(tq ? Math.min(+tq[1], comps.length - 1) : 0);
  });
  $('.pieces').forEach(p => {
    const wrap = document.createElement('div'); wrap.className = 'pieces-wrap'; p.parentNode.insertBefore(wrap, p); wrap.appendChild(p);
    const mk = (cls, t, dir) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'pc-nav ' + cls; b.setAttribute('aria-label', dir < 0 ? 'Anterior' : 'Próxima'); b.textContent = t; b.addEventListener('click', () => p.scrollBy({ left: dir * p.clientWidth * .8, behavior: 'smooth' })); wrap.appendChild(b); return b; };
    const prev = mk('prev', '←', -1), next = mk('next', '→', 1);
    const upd = () => { const max = p.scrollWidth - p.clientWidth; wrap.classList.toggle('can-scroll', max > 4); prev.disabled = p.scrollLeft < 4; next.disabled = p.scrollLeft > max - 4; };
    p.addEventListener('scroll', upd, { passive: true }); window.addEventListener('resize', upd); setTimeout(upd, 300); upd();
  });
})();

// ---- simetria: nenhuma grade termina com linha incompleta / coluna vazia ----
(function(){
  const cs = el => getComputedStyle(el);
  const grids = () => [...document.querySelectorAll('body *')].filter(e => !e.closest('svg,pre,canvas,.pieces,.hero-mos,.h-mos') && cs(e).display === 'grid');
  function reset(g){ if (!g.hasAttribute('data-bal')) return; g.style.gridTemplateColumns = ''; [...g.children].forEach(k => { k.style.gridColumn = ''; }); g.removeAttribute('data-bal'); }
  function balance(){
    const gs = grids(); gs.forEach(reset);
    gs.forEach(g => {
      const kids = [...g.children].filter(k => cs(k).display !== 'none' && cs(k).position !== 'absolute');
      const N = kids.length; if (N < 2) return;
      const tracks = cs(g).gridTemplateColumns.split(' ').map(parseFloat).filter(v => !isNaN(v));
      const C = tracks.length; if (C < 2) return;
      if (Math.max(...tracks) - Math.min(...tracks) > 2) return;              // só colunas iguais
      if (kids.some(k => { const s = cs(k); return (s.gridColumnStart !== 'auto' && !/^span 1$/.test(s.gridColumnStart)) || s.gridRowStart !== 'auto'; })) return; // itens com posição própria
      const gap = parseFloat(cs(g).columnGap) || 0, W = g.clientWidth;
      const r = N % C;
      if (N >= C && r === 0) return;
      g.setAttribute('data-bal', '1');
      if (N < C) { g.style.gridTemplateColumns = 'repeat(' + N + ',1fr)'; return; }
      // tenta uma única linha ou um divisor limpo
      for (let c = Math.min(N, C + 2); c >= 2; c--) {
        if (N % c) continue;
        if ((W - gap * (c - 1)) / c >= tracks[0] * .78) { g.style.gridTemplateColumns = 'repeat(' + c + ',1fr)'; return; }
      }
      // última linha ocupa toda a largura, repartida igualmente
      g.style.gridTemplateColumns = 'repeat(' + (C * r) + ',1fr)';
      kids.forEach((k, i) => { k.style.gridColumn = 'span ' + (i >= N - r ? C : r); });
    });
  }
  let t; const run = () => { clearTimeout(t); t = setTimeout(balance, 120); };
  window.addEventListener('resize', run); window.addEventListener('load', balance); setTimeout(balance, 400);
  window.__balance = balance;
})();

// modo QA: ?qa&only=logo,cores mostra só as seções listadas
(function(){
  const m = location.search.match(/[?&]only=([^&]+)/); if (!m) return;
  const keep = decodeURIComponent(m[1]).split(',');
  document.querySelectorAll('.hero,.section').forEach(s => { if (!keep.includes(s.id || 'hero')) s.style.display = 'none'; });
})();
