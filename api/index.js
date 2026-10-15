// Login simples para a plataforma de Design System do Grupo Alun.
// A senha fica na variável de ambiente DS_PASSWORD (Vercel), não no código.
// As páginas só são entregues pelo servidor depois da senha correta.
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const COOKIE = 'ds_auth';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 dias
const ROOT = path.join(__dirname, '..');
const PAGES = new Set(['index', 'alun', 'alura', 'fiap', 'pm3', 'startse']);
const MIME = { '.html': 'text/html; charset=utf-8', '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.png': 'image/png' };

const token = () => crypto.createHmac('sha256', process.env.DS_PASSWORD).update('alun-design-system:v1').digest('hex');
const safeEqual = (a, b) => crypto.timingSafeEqual(
  crypto.createHash('sha256').update(String(a)).digest(),
  crypto.createHash('sha256').update(String(b)).digest());

function readCookie(req, name) {
  for (const part of (req.headers.cookie || '').split(';')) {
    const i = part.indexOf('=');
    if (i > -1 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return '';
}
function readBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => { data += c; if (data.length > 4096) req.destroy(); });
    req.on('end', () => resolve(data));
    req.on('error', () => resolve(''));
  });
}

const LOGO = '<path d="M61.84 18.43V43H18.84V18.5H61.84V0H29.91C13.63 0 .43 13.2.42 29.48V86H18.83V61.43H61.83V86H80.26V18.43H61.83H61.84Z"/><path d="M117.13 67.57V0H98.7V56.51C98.7 72.79 111.9 86 128.19 86H160.13V67.57H117.13Z"/><path d="M239.99 0V67.57H196.99V0H178.56V56.51C178.56 72.79 191.76 86 208.05 86H228.94C245.23 86 258.43 72.8 258.43 56.51V0H240H239.99Z"/><path d="M356.69 29.48C356.68 13.2 343.48 0 327.2 0H295.27V18.43H276.84V86H295.27V18.5H338.27V86H356.7V29.48H356.69Z"/>';

function loginPage(error) {
  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Design System · Grupo Alun</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;1,300&family=Hanken+Grotesk:wght@400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{min-height:100vh;display:grid;grid-template-columns:1.4fr 1fr;grid-template-rows:1fr 1fr;background:#000;color:#fff;font-family:"Hanken Grotesk",system-ui,sans-serif}
.b1{grid-row:1/3;background:#600724}.b2{background:#ED1360}.b3{background:#FF9413}
form{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:min(92vw,400px);background:#000;border:1px solid #333;padding:34px 32px 30px}
.logo{height:26px;margin-bottom:26px}.logo svg{height:100%;width:auto;fill:#D1CDCD}
.k{font:500 11.5px "DM Mono",monospace;letter-spacing:.08em;text-transform:uppercase;color:#D1CDCD}
h1{font:300 40px/1 "Newsreader",serif;letter-spacing:-.03em;margin:12px 0 10px}h1 em{color:#ED1360}
p{color:#D1CDCD;font-size:14.5px;line-height:1.5;margin-bottom:22px}
label{display:block;font:500 11.5px "DM Mono",monospace;letter-spacing:.08em;text-transform:uppercase;color:#D1CDCD;margin-bottom:8px}
input{width:100%;height:48px;border:1px solid #555;background:#0D0C0C;color:#fff;font-size:16px;padding:0 14px;outline:none;font-family:inherit}
input:focus{border-color:#FF9413}
button{width:100%;height:48px;margin-top:14px;border:0;background:#ED1360;color:#000;font:500 13px "DM Mono",monospace;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}
button:hover{background:#FF9413}
.err{margin-top:12px;font-size:13.5px;color:#ffb3c4;border-left:4px solid #ED1360;padding:8px 12px;background:#2a0612}
@media(max-width:700px){body{grid-template-columns:1fr}.b1{grid-row:auto}}
</style></head>
<body><div class="b1"></div><div class="b2"></div><div class="b3"></div>
<form method="post" action="/" autocomplete="off">
<div class="logo"><svg viewBox="0 0 357 86" aria-label="Alun">${LOGO}</svg></div>
<div class="k">Acesso restrito</div>
<h1>Design <em>System</em></h1>
<p>Plataforma de uso interno do Grupo Alun. Digite a senha para continuar.</p>
<label for="p">Senha</label>
<input id="p" name="password" type="password" autofocus required autocomplete="current-password">
${error ? '<div class="err">Senha incorreta. Tente novamente.</div>' : ''}
<button type="submit">Entrar</button>
</form></body></html>`;
}

function headers(res, extra) {
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  for (const [k, v] of Object.entries(extra || {})) res.setHeader(k, v);
}
function sendHtml(res, status, body) {
  res.statusCode = status;
  headers(res, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(body);
}

// resolve o caminho pedido para um arquivo permitido (páginas na raiz + assets/)
function resolveFile(urlPath) {
  let p = urlPath.replace(/^\/+/, '').replace(/\/+$/, '') || 'index';
  if (PAGES.has(p)) p += '.html';
  const isPage = /^[a-z0-9]+\.html$/.test(p) && PAGES.has(p.replace('.html', ''));
  const isAsset = /^assets\/[A-Za-z0-9._-]+\.(svg|pdf|png)$/.test(p);
  if (!isPage && !isAsset) return null;
  const full = path.join(ROOT, p);
  return fs.existsSync(full) ? full : null;
}

module.exports = async (req, res) => {
  if (!process.env.DS_PASSWORD) return sendHtml(res, 500, 'Configuração ausente: defina DS_PASSWORD.');
  const expected = token();
  const logged = safeEqual(readCookie(req, COOKIE), expected);
  let urlPath = '/';
  try { urlPath = decodeURIComponent((req.url || '/').split('?')[0]); } catch (e) {}

  if (req.method === 'POST') {
    const given = new URLSearchParams(await readBody(req)).get('password') || '';
    if (safeEqual(given, process.env.DS_PASSWORD)) {
      res.statusCode = 303;
      res.setHeader('Set-Cookie', `${COOKIE}=${expected}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`);
      res.setHeader('Location', '/');
      headers(res);
      return res.end();
    }
    await new Promise((r) => setTimeout(r, 900)); // freia tentativas em sequência
    return sendHtml(res, 401, loginPage(true));
  }

  if (/^\/logout\/?$/.test(urlPath)) {
    res.statusCode = 303;
    res.setHeader('Set-Cookie', `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`);
    res.setHeader('Location', '/');
    return res.end();
  }

  if (!logged) return sendHtml(res, 200, loginPage(false));

  const file = resolveFile(urlPath);
  if (!file) return sendHtml(res, 404, '<!doctype html><meta charset="utf-8"><title>Não encontrado</title><p style="font-family:sans-serif;padding:40px">Página não encontrada. <a href="/">Voltar ao início</a></p>');
  const body = fs.readFileSync(file);
  res.statusCode = 200;
  headers(res, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', Vary: 'Cookie' });
  const CHUNK = 256 * 1024; // envia em partes: pm3.html e o PDF passam de 2 MB
  for (let i = 0; i < body.length; i += CHUNK) res.write(body.subarray(i, i + CHUNK));
  res.end();
};
