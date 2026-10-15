// Gera as páginas HTML do Design System (uma por marca) + a tela inicial.
// Uso: node build.js          (cria ../alun.html, ../alura.html, ../fiap.html, ../startse.html, ../index.html)
const fs = require('fs');
const path = require('path');
const H = require('./helpers');

const OUT = path.join(__dirname, '..');
const base = fs.readFileSync(path.join(__dirname, 'base.css'), 'utf8');
const client = fs.readFileSync(path.join(__dirname, 'client.js'), 'utf8');

const BRANDS = ['alun', 'alura', 'fiap', 'startse'];

function favicon(B) {
  const K = B.symbol || B.logo;
  const hex = B.faviconHex || B.theme.action;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${K.w} ${K.h}"><g fill="${hex}">${K.paths}</g></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function themeCss(t) {
  return ':root{' + Object.entries(t.vars).map(([k, v]) => `${k}:${v}`).join(';') + '}';
}

function page(B) {
  const nav = B.sections.map(s => `<li><a href="#${s.id}">${s.navLabel}</a></li>`).join('');
  const navLogo = H.lg(B, 'logo', B.navLogoHex || '#fff');
  const footLogo = H.lg(B, 'logo', B.footLogoHex || B.navLogoHex || '#fff');
  const DS = {
    brand: B.id, name: B.name,
    logo: B.logo, symbol: B.symbol || null,
    dlColors: B.dlColors, contrast: B.contrast
  };
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Design System — ${B.name}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${H.esc(B.description)}">
<link rel="icon" type="image/svg+xml" href="${favicon(B)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${B.fontsHref}" rel="stylesheet">
<style>
${themeCss(B.theme)}
${base}
${B.css || ''}
</style>
</head>
<body>

<nav class="top">
  <div class="brand">${navLogo} <span>Design System</span></div>
  <ul>${nav}</ul>
  <a class="nav-home" href="index.html">&larr; Marcas do grupo</a>
</nav>

${B.hero}

${B.sections.map(s => s.html).join('\n')}

<footer>
  ${footLogo}
  <div>Design System · ${B.name} · ${B.version} · <b>2026</b> · ${B.footerNote}</div>
  <div style="margin-top:10px"><a href="index.html">Plataforma de Design System · Grupo Alun</a></div>
</footer>

<div class="toast" id="toast">Copiado!</div>

<script type="text/markdown" id="ai-context">${B.md.replace(/<\/script/gi, '<\\/script')}</script>
<script>window.DS=${JSON.stringify(DS)};</script>
<script>
${B.gfx || 'window.GFX={};'}
</script>
<script>
${client}
</script>
</body>
</html>
`;
}

for (const id of BRANDS) {
  if (!fs.existsSync(path.join(__dirname, 'brands', id + '.js'))) { console.log('pulando', id, '(sem módulo)'); continue; }
  const mod = require('./brands/' + id);
  const B = mod(H);
  fs.writeFileSync(path.join(OUT, id + '.html'), page(B));
  console.log('ok', id + '.html', Math.round(fs.statSync(path.join(OUT, id + '.html')).size / 1024) + ' KB');
}
if (fs.existsSync(path.join(__dirname, 'home.js'))) {
  const html = require('./home')(H);
  fs.writeFileSync(path.join(OUT, 'index.html'), html);
  console.log('ok index.html');
}

// PM3: guia original (modelo), copiado de _src/pm3-source com link de volta à plataforma
const pm3Src = path.join(__dirname, 'pm3-source', 'Design-System-PM3.html');
if (fs.existsSync(pm3Src)) {
  let html = fs.readFileSync(pm3Src, 'utf8');
  const pdfLink = '<a class="btn btn-pdf btn-sm" href="Design-System-PM3.pdf" download>Baixar PDF</a>';
  if (!html.includes(pdfLink)) throw new Error('PM3: link do PDF não encontrado para o patch');
  // sem botão de PDF (padrão dos demais guias): só o link de volta, no mesmo formato
  html = html.replace(pdfLink,
    '<a class="btn btn-pdf btn-sm" href="index.html">&larr; Marcas do grupo</a>');
  // sem tela de senha própria (o acesso já é protegido pelo login da plataforma)
  const g0 = html.indexOf('<div id="gate"'), g1 = html.indexOf('<nav class="top">');
  if (g0 < 0 || g1 < g0) throw new Error('PM3: bloco da tela de senha não encontrado para o patch');
  html = html.slice(0, g0) + html.slice(g1);
  html = html.replace('<html lang="pt-BR">', '<html lang="pt-BR" class="unlocked">');
  // remove o bloco visual de usos incorretos do logo
  const w0 = html.indexOf('<div class="wrong reveal">');
  if (w0 > -1) {
    // o bloco termina no </div> que antecede o fechamento do wrap e da seção
    const sec = html.indexOf('</section>', w0);
    const wrapClose = html.lastIndexOf('</div>', sec);          // fecha .wrap
    const blockClose = html.lastIndexOf('</div>', wrapClose - 1); // fecha .wrong
    html = html.slice(0, w0).trimEnd() + '\n  ' + html.slice(blockClose + '</div>'.length).trimStart();
  }
  fs.writeFileSync(path.join(OUT, 'pm3.html'), html);
  console.log('ok pm3.html', Math.round(fs.statSync(path.join(OUT, 'pm3.html')).size / 1024) + ' KB');
}
