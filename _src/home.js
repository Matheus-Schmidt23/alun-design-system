// Tela inicial: fundo escuro, menu com os nomes das marcas e 4 boxes de cor
const fs = require('fs');
const path = require('path');

module.exports = (H) => {
  const alun = require('./brands/alun')(H), alura = require('./brands/alura')(H), fiap = require('./brands/fiap')(H), startse = require('./brands/startse')(H);

  // logo PM3 a partir dos SVG oficiais (assets)
  const pm3svg = fs.readFileSync(path.join(__dirname, '..', 'assets', 'pm3-logo-branco.svg'), 'utf8');
  const pm3paths = [...pm3svg.matchAll(/<path[^>]*\sd="([^"]+)"[^>]*>/g)].map(m => `<path d="${m[1]}"${/fill-rule="evenodd"/.test(m[0]) ? ' fill-rule="evenodd" clip-rule="evenodd"' : ''}/>`).join('');
  const pm3 = { name: 'PM3', logo: { w: 179, h: 55, paths: pm3paths } };

  const logo = (B, hex, h) => H.lg(B, 'logo', hex, `height:${h}px`);

  const menu = [['Alun', 'alun'], ['Alura', 'alura'], ['FIAP', 'fiap'], ['PM3', 'pm3'], ['StartSe', 'startse']];
  const boxes = [
    ['Alun', 'alun', '#600724', alun, 44, 'wide'],
    ['Alura', 'alura', '#0429BC', alura, 46],
    ['FIAP', 'fiap', '#ED145B', fiap, 46],
    ['PM3', 'pm3', '#452E78', pm3, 52],
    ['StartSe', 'startse', '#0080ED', startse, 38]
  ];

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Design System — Grupo Alun</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Plataforma de Design System do Grupo Alun: guias de Alun, Alura, FIAP, PM3 e StartSe.">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${alun.symbol.w} ${alun.symbol.h}"><g fill="#ED1360">${alun.symbol.paths}</g></svg>`)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
html,body{height:100%}
body{background:#0D0C0C;color:#fff;font-family:"DM Mono",ui-monospace,Consolas,monospace;-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;min-height:100vh}
a{color:inherit;text-decoration:none}
.lg{display:inline-block;line-height:0}.lg svg{height:100%;width:auto}
header{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:0 28px;height:68px;flex:none}
header .home{display:inline-flex;align-items:center;gap:14px}
header .home .ds{font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:#a9a5a5;padding-left:14px;border-left:1px solid #ffffff33;line-height:20px;white-space:nowrap}
header nav{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}
header nav a{font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:#a9a5a5;padding:8px 12px;border-bottom:2px solid transparent;transition:color .2s,border-color .2s}
header nav a:hover,header nav a:focus-visible{color:#fff;border-color:#fff;outline:none}
main{flex:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:.8fr 1fr 1fr;gap:12px;padding:0 12px 12px;min-height:0}
.box{position:relative;display:flex;align-items:center;justify-content:center;min-height:240px;transition:transform .3s ease,filter .3s ease}
.box.wide{grid-column:1/-1}
.box:hover,.box:focus-visible{transform:translateY(-4px);filter:brightness(1.08);outline:none}
.box:focus-visible{box-shadow:0 0 0 3px #fff}
.box .go{position:absolute;right:22px;bottom:18px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:0;transform:translateX(-6px);transition:opacity .25s,transform .25s}
.box:hover .go,.box:focus-visible .go{opacity:.95;transform:none}
@media(max-width:760px){header{padding:0 16px}header nav a{padding:8px 8px;font-size:11px}main{display:flex;flex-direction:column;gap:12px}.box{flex:1;min-height:180px}.box .go{display:none}}
@media(max-width:560px){header .home .ds{display:none}}
@media(prefers-reduced-motion:reduce){.box,.box:hover{transition:none;transform:none}}
</style>
</head>
<body>
<header>
  <a class="home" href="index.html" aria-label="Alun — Design System">${logo(alun, '#D1CDCD', 20)}<span class="ds">Design System</span></a>
  <nav aria-label="Marcas">${menu.map(([n, id]) => `<a href="${id}.html">${n}</a>`).join('')}</nav>
</header>
<main>
  ${boxes.map(([n, id, bg, B, h, cls]) => `<a class="box${cls ? ' ' + cls : ''}" href="${id}.html" style="background:${bg}" aria-label="Abrir o guia da ${n}">${logo(B, id === 'alun' ? '#D1CDCD' : '#FFFFFF', h)}<span class="go">Abrir guia →</span></a>`).join('\n  ')}
</main>
</body>
</html>
`;
};
