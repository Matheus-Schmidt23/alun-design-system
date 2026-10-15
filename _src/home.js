// Tela inicial: seleção da marca + comparativo do grupo
const fs = require('fs');
const path = require('path');

module.exports = (H) => {
  const alun = require('./brands/alun')(H), alura = require('./brands/alura')(H), fiap = require('./brands/fiap')(H), startse = require('./brands/startse')(H);

  // logo PM3 a partir dos SVG oficiais (assets)
  const pm3svg = fs.readFileSync(path.join(__dirname, '..', 'assets', 'pm3-logo-branco.svg'), 'utf8');
  const pm3paths = [...pm3svg.matchAll(/<path[^>]*\sd="([^"]+)"[^>]*>/g)].map(m => `<path d="${m[1]}"${/fill-rule="evenodd"/.test(m[0]) ? ' fill-rule="evenodd" clip-rule="evenodd"' : ''}/>`).join('');
  const pm3 = { name: 'PM3', logo: { w: 179, h: 55, paths: pm3paths } };

  const L = (B, hex, h) => H.lg(B, 'logo', hex, `height:${h}px`);
  const sws = arr => `<div class="sws">${arr.map(h => `<i style="background:${h}"${/^#(fff|ffffff)$/i.test(h) ? ' class="w"' : ''}></i>`).join('')}</div>`;

  const dotRows = [[0, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8], [3, 4, 5, 6, 7], [2, 3, 4, 5, 6], [1, 2, 3, 4, 5]];
  const dots = (fill, op) => `<svg viewBox="0 0 9 7" fill="${fill}" fill-opacity="${op}">${dotRows.map((cols, j) => cols.map(c => `<circle cx="${c + .5}" cy="${j + .5}" r=".33"/>`).join('')).join('')}</svg>`;

  const rows = [
    ['Alun', 'alun', ['#000000', '#333131', '#D1CDCD', '#FFFFFF', '#ED1360', '#600724', '#FF9413', '#994800'], 'Flecha · FK Grotesk · FK Grotesk Mono', 'Retos · 0 px', 'Módulos 4×2 · grid 4×4'],
    ['Alura', 'alura', ['#0429BC', '#011676', '#010C53', '#1F53E5', '#0C0C0E', '#F4F5F6'], 'Encode Sans · Encode Sans Expanded · Roboto Flex', '4 px', 'Patterns procedurais · círculo'],
    ['FIAP', 'fiap', ['#ED145B', '#000000', '#FFFFFF', '#ACC1CC', '#75838B'], 'Gotham HTF · Roboto', 'Retos · 0 px', 'Grafismo F · partículas'],
    ['PM3', 'pm3', ['#452E78', '#6645B1', '#000000', '#FFFFFF', '#B9B5C1', '#FFB12A'], 'Inter Tight · Rubik · Playfair Display', '14 – 40 px', 'Grid fluido · canto côncavo'],
    ['StartSe', 'startse', ['#0080ED', '#00183C', '#000000', '#FFFFFF', '#D1D9DB', '#808384', '#00BFB8'], 'Barlow · IBM Plex Sans', '6 – 12 px', 'Seta pontilhada · ícones de traço fino']
  ];

  const wrapGfx = (name, code) => `var ${name}=(function(){var fw={devicePixelRatio:window.devicePixelRatio,addEventListener:function(){},GFX:null};(function(window){${code}})(fw);return fw.GFX;})();`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Design System — Grupo Alun</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Plataforma unificada de Design System do Grupo Alun: guias de Alun, Alura, FIAP, PM3 e StartSe.">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${alun.symbol.w} ${alun.symbol.h}"><g fill="#ED1360">${alun.symbol.paths}</g></svg>`)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=Hanken+Grotesk:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--ink:#0D0C0C;--pm:#D1CDCD;--mag:#ED1360;--or:#FF9413;--serif:"Newsreader",Georgia,serif;--sans:"Hanken Grotesk",system-ui,sans-serif;--mono:"DM Mono",ui-monospace,Consolas,monospace}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:#000;color:#fff;font-family:var(--sans);-webkit-font-smoothing:antialiased;line-height:1.5;overflow-x:hidden}
a{color:inherit;text-decoration:none}
.lg{display:inline-block;line-height:0}.lg svg{height:100%;width:auto}
.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
.lab{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase}
header.top{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 32px;border-bottom:1px solid #222}
header.top .brand{display:flex;align-items:center;gap:16px}
header.top .lab{color:var(--pm)}
header.top nav{display:flex;gap:22px}header.top nav a{font-family:var(--mono);font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--pm);padding:4px 0;border-bottom:1px solid transparent}header.top nav a:hover{color:#fff;border-color:var(--or)}
.intro{padding-top:84px;padding-bottom:56px}
.intro .lab{background:#fff;color:#000;display:inline-block;padding:6px 10px;margin-bottom:28px}
.intro h1{font-family:var(--serif);font-weight:300;font-size:clamp(44px,7vw,104px);line-height:.96;letter-spacing:-.03em;margin:0 0 26px;max-width:15ch}
.intro h1 em{color:var(--mag)}
.intro p{color:var(--pm);font-size:18px;max-width:58ch;margin:0}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;padding-bottom:80px}
.bc{position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;min-height:360px;padding:28px 30px;isolation:isolate;transition:transform .35s ease,box-shadow .35s ease}
.bc:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(0,0,0,.55)}
.bc:focus-visible{outline:3px solid var(--or);outline-offset:4px}
.bc canvas,.bc .bgsvg{position:absolute;inset:0;width:100%;height:100%;z-index:-1}
.bc .row{display:flex;justify-content:space-between;align-items:center;gap:12px}
.bc .row + div{margin-top:30px}
.bc .tagc{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:5px 9px;background:rgba(255,255,255,.14);backdrop-filter:blur(6px)}
.bc .ver{font-family:var(--mono);font-size:11px;letter-spacing:.06em;opacity:.8}
.bc h2{font-size:clamp(22px,2.6vw,32px);line-height:1.08;margin:18px 0 8px;max-width:20ch}
.bc p{margin:0;max-width:44ch;font-size:14.5px;opacity:.9}
.bc .foot{display:flex;justify-content:space-between;align-items:flex-end;gap:18px;margin-top:26px}
.go{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;display:inline-flex;align-items:center;gap:10px;padding:12px 16px;background:#fff;color:#000;white-space:nowrap;transition:gap .25s}
.bc:hover .go{gap:16px}
.sws{display:flex;gap:6px}.sws i{width:22px;height:22px;border-radius:50%;display:block;box-shadow:0 0 0 1px rgba(255,255,255,.28)}.sws i.w{box-shadow:0 0 0 1px rgba(0,0,0,.25)}
/* Alun — faixa larga */
.bc-alun{grid-column:1/-1;min-height:420px;background:#000;border:1px solid #222}
.bc-alun .cv{position:absolute;right:0;top:0;bottom:0;width:48%;z-index:-1}.bc-alun .cv canvas{position:absolute;inset:0;width:100%;height:100%;z-index:0}
.bc-alun .side{position:absolute;left:0;top:0;bottom:0;width:6%;background:#600724;z-index:-1}
.bc-alun .inner{max-width:52%;padding-left:6%}
.bc-alun h2{font-family:var(--serif);font-weight:300;font-size:clamp(30px,4vw,56px);letter-spacing:-.025em;max-width:16ch}
.bc-alun .go{background:var(--mag);color:#000}
.bc-alun .tagc{background:var(--or);color:#000}
/* Alura */
.bc-alura{background:#0C0C0E}
.bc-alura .orb{position:absolute;right:-12%;top:-14%;width:62%;aspect-ratio:1/1;border-radius:50%;background:radial-gradient(circle at 30% 28%,#9AB7F3 0,#1F53E5 34%,#0429BC 62%,#010C53 100%);z-index:-1}
.bc-alura canvas{opacity:.7}
.bc-alura .go{background:#fff;color:#0429BC;border-radius:4px;font-family:var(--sans);text-transform:none;letter-spacing:.01em;font-weight:500;font-size:14px}
/* FIAP */
.bc-fiap{background:#000}
.bc-fiap .go{background:#ED145B;color:#fff;font-weight:500}
/* PM3 */
.bc-pm3{background:#452E78;border-radius:0}
.bc-pm3::before{content:'';position:absolute;right:0;top:0;width:34%;height:44%;background:linear-gradient(135deg,#B04DDD,#FCCBC9);border-radius:0 0 0 70px;z-index:-1}
.bc-pm3 p{max-width:34ch}
.bc-pm3::after{content:'';position:absolute;left:0;bottom:0;width:14px;height:44%;background:#FFB12A;z-index:-1}
.bc-pm3 .go{background:#6645B1;color:#fff;border-radius:14px}
/* StartSe */
.bc-startse{background:#0080ED}
.bc-startse .bgsvg{width:78%;left:auto;right:-10%;opacity:1}
.bc-startse .go{background:#fff;color:#0080ED;border-radius:8px}
/* comparativo */
.cmp{background:#fff;color:var(--ink);padding:88px 0}
.cmp h2{font-family:var(--serif);font-weight:300;font-size:clamp(34px,4.4vw,60px);letter-spacing:-.025em;margin:0 0 14px;line-height:1}
.cmp h2 em{color:var(--mag)}
.cmp .lead{color:#4a4747;max-width:62ch;margin:0 0 34px}
.tbl{border:1px solid var(--ink)}
.tr{display:grid;grid-template-columns:130px 1.3fr 1.5fr .8fr 1.2fr 80px;gap:18px;align-items:center;padding:18px 22px;border-top:1px solid var(--ink)}
.tr:first-child{border-top:none}
.tr.h{background:var(--pm);font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase}
.tr b{font-family:var(--serif);font-weight:400;font-size:24px}
.tr .sws i{width:20px;height:20px;box-shadow:0 0 0 1px rgba(0,0,0,.2)}
.tr a.open{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;border-bottom:1px solid var(--mag);padding-bottom:2px;justify-self:end}
.tr:not(.h):hover{background:#f5f3f3}
.note{margin-top:26px;font-size:13.5px;color:#5b5757;max-width:80ch}
footer{padding:48px 32px;text-align:center;color:var(--pm);font-size:13px;border-top:1px solid #222}
footer .lg{height:30px;margin-bottom:16px}
footer .lab{opacity:.8}
@media(max-width:980px){.grid{grid-template-columns:1fr}.bc-alun .inner{max-width:100%;padding-left:8%}.bc-alun .cv{width:100%;opacity:.22}.tr{grid-template-columns:100px 1fr;gap:8px 16px}.tr.h{display:none}.tr .sws{grid-column:1/-1}.tr > span{grid-column:2/-1}.tr a.open{grid-column:1/-1;justify-self:start}header.top nav{display:none}}
@media(max-width:600px){.wrap{padding:0 20px}.intro{padding-top:56px;padding-bottom:40px}.bc{padding:22px}.bc .foot{flex-direction:column;align-items:flex-start}}
@media(prefers-reduced-motion:reduce){.bc,.bc:hover{transition:none;transform:none}}
</style>
</head>
<body>
<header class="top">
  <div class="brand">${L(alun, '#D1CDCD', 22)}<span class="lab">Design System</span></div>
  <nav><a href="#marcas">Marcas</a><a href="#comparativo">Comparativo</a></nav>
</header>

<section class="wrap intro">
  <div class="lab">Plataforma · Grupo Alun · 2026</div>
  <h1>Um grupo. <em>Cinco</em> identidades.</h1>
  <p>Escolha a marca para abrir o guia de Design System — fundamentos, componentes, peças, voz e tokens de cada uma, no mesmo formato.</p>
</section>

<section class="wrap grid" id="marcas">
  <a class="bc bc-alun" href="alun.html" aria-label="Abrir o guia da Alun">
    <div class="side"></div><div class="cv"><canvas data-g="alunMosaic" data-seed="7" data-variant="full" data-mask="ellipse"></canvas></div>
    <div class="inner">
      <div class="row"><span class="tagc">Marca-mãe</span><span class="ver">v1.0 · Brandbook 2025</span></div>
      <div style="margin-top:34px">${L(alun, '#D1CDCD', 56)}</div>
      <h2>Superpoderes tech para superconquistas humanas.</h2>
      <p>O ecossistema de educação tech que cria a conexão mais profunda e duradoura com seus alunos.</p>
      <div class="foot">${sws(['#000000', '#333131', '#D1CDCD', '#FFFFFF', '#ED1360', '#600724', '#FF9413', '#994800'])}<span class="go">Abrir guia →</span></div>
    </div>
  </a>

  <a class="bc bc-alura" href="alura.html" aria-label="Abrir o guia da Alura">
    <canvas data-g="aluraQuads" data-seed="12" data-mode="quads"></canvas><div class="orb"></div>
    <div class="row"><span class="tagc">Marca do grupo</span><span class="ver">v1.0 · Brand Guidelines V2.0</span></div>
    <div>${L(alura, '#FFFFFF', 34)}<h2>Despertar os superpoderes da tecnologia nas pessoas.</h2><p>Ecossistema de aprendizagem tech conectado ao presente e ao próximo movimento do mercado.</p></div>
    <div class="foot">${sws(['#0429BC', '#011676', '#010C53', '#1F53E5', '#F4F5F6'])}<span class="go">Abrir guia →</span></div>
  </a>

  <a class="bc bc-fiap" href="fiap.html" aria-label="Abrir o guia da FIAP">
    <canvas data-g="fiapParticles" data-seed="3"></canvas>
    <div class="row"><span class="tagc">Marca do grupo</span><span class="ver">v2.0 · Design System 2.0</span></div>
    <div>${L(fiap, '#ED145B', 34)}<h2>A melhor faculdade tech do Brasil.</h2><p>Magenta, preto e luz: graduação, MBAs, pós tech, FIAP School e Colégio Módulo.</p></div>
    <div class="foot">${sws(['#ED145B', '#000000', '#FFFFFF', '#ACC1CC', '#75838B'])}<span class="go">Abrir guia →</span></div>
  </a>

  <a class="bc bc-pm3" href="pm3.html" aria-label="Abrir o guia da PM3">
    <div class="row"><span class="tagc">Marca do grupo</span><span class="ver">v1.0 · Key Visual 2025</span></div>
    <div>${L(pm3, '#FFFFFF', 34)}<h2>Pessoas criam produtos.</h2><p>Ensino de produtos digitais para pessoas reais — grid fluido, roxo profundo e itálico de virada.</p></div>
    <div class="foot">${sws(['#452E78', '#6645B1', '#000000', '#FFFFFF', '#B9B5C1', '#FFB12A'])}<span class="go">Abrir guia →</span></div>
  </a>

  <a class="bc bc-startse" href="startse.html" aria-label="Abrir o guia da StartSe">
    <div class="bgsvg">${dots('#fff', .14)}</div>
    <div class="row"><span class="tagc">Marca do grupo</span><span class="ver">v1.0 · Manual 2026</span></div>
    <div>${L(startse, '#FFFFFF', 30)}<h2>A sua escola internacional de negócios.</h2><p>Lifelong Learning: formações, imersões, Global MBAs, eventos e AI Tools para líderes.</p></div>
    <div class="foot">${sws(['#0080ED', '#00183C', '#000000', '#FFFFFF', '#D1D9DB', '#00BFB8'])}<span class="go">Abrir guia →</span></div>
  </a>
</section>

<section class="cmp" id="comparativo">
  <div class="wrap">
    <div class="lab" style="margin-bottom:20px">Visão geral</div>
    <h2>Lado a lado, <em>sem perder</em> a identidade.</h2>
    <p class="lead">O mesmo esqueleto de guia — essência, logo, cores, tipografia, grafismo, componentes, peças, voz e tokens — com a personalidade visual de cada marca.</p>
    <div class="tbl">
      <div class="tr h"><span>Marca</span><span>Cores principais</span><span>Tipografia</span><span>Cantos</span><span>Assinatura gráfica</span><span></span></div>
      ${rows.map(([n, id, colors, fonts, radius, gfx]) => `<div class="tr"><b>${n}</b>${sws(colors)}<span>${fonts}</span><span>${radius}</span><span>${gfx}</span><a class="open" href="${id}.html">Abrir →</a></div>`).join('')}
    </div>
    <p class="note">Fontes oficiais licenciadas (Flecha, FK Grotesk, Gotham HTF, entre outras) não acompanham a plataforma: os guias usam fontes abertas de desenho semelhante apenas para visualização, e indicam a fonte oficial em cada página.</p>
  </div>
</section>

<footer>
  ${L(alun, '#D1CDCD', 26)}
  <div class="lab">Plataforma de Design System · Grupo Alun · 2026</div>
  <div style="margin-top:8px">Alun · Alura · FIAP · PM3 · StartSe</div>
</footer>

<script>
${wrapGfx('GA', alun.gfx)}
${wrapGfx('GU', alura.gfx)}
${wrapGfx('GF', fiap.gfx)}
(function(){
  var map={alunMosaic:GA.mosaic,aluraQuads:GU.quads,fiapParticles:GF.particles};
  function draw(){[].forEach.call(document.querySelectorAll('canvas[data-g]'),function(cv){var f=map[cv.dataset.g];if(!f)return;
    if(cv.dataset.g==='alunMosaic'){var s=cv.parentNode.getBoundingClientRect();}
    try{cv.dataset.gfx=cv.dataset.g;f(cv);}catch(e){}});}
  draw();var t;window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(draw,150)});
})();
</script>
</body>
</html>
`;
};
