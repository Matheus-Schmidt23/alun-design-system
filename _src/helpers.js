// Funções que geram HTML reutilizável pelos módulos de marca.
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// logo/símbolo inline (cor definida por quem chama)
function lg(B, kind, hex, style = '') {
  const K = kind === 'symbol' ? B.symbol : B.logo;
  return `<span class="lg" style="${style}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${K.w} ${K.h}" fill="none" role="img" aria-label="${esc(B.name)}"><g fill="${hex}">${K.paths}</g></svg></span>`;
}

// seção padrão
function sec({ id, num, label, cls = '', title, lead = '', body = '' }) {
  const t = Array.isArray(title) ? `${title[0]} <span class="c2">${title[1]}</span>` : title;
  return `
<section class="section ${cls}" id="${id}">
  <div class="wrap">
    <div class="kicker reveal"><span class="num">${num}</span> ${label}</div>
    <h2 class="title reveal">${t}</h2>
    ${lead ? `<p class="lead reveal">${lead}</p>` : ''}
    ${body}
  </div>
</section>`;
}

// swatch clicável (copia HEX)
const bestText = hex => (ratio('#FFFFFF', hex) >= ratio('#0D0D0D', hex) ? '#FFFFFF' : '#0D0D0D');
function sw(c) {
  const auto = /^#[0-9a-f]{6}$/i.test(c.hex || '') && !c.bg ? bestText(c.hex) : null;
  const dark = auto ? auto !== '#FFFFFF' : !!c.light;
  const cls = ['sw', c.wide ? 'wide' : '', dark ? 'light' : '', c.bordered ? 'bordered' : '', c.sm ? 'sm' : ''].filter(Boolean).join(' ');
  const copyVal = c.copy || c.hex;
  const bg = c.bg || c.hex;
  const lines = c.lines || [
    [['HEX', c.hex], c.rgb ? ['RGB', c.rgb] : null],
    [c.cmyk ? ['CMYK', c.cmyk] : null, c.pantone ? ['PANTONE', c.pantone] : null]
  ].map(row => row.filter(Boolean).map(([k, v]) => `<b>${k}</b>${v}`).join(' &nbsp; ')).filter(Boolean);
  const style = `background:${bg};${auto && !/color:/.test(c.style || '') ? 'color:' + auto + ';' : ''}${c.style || ''}`;
  return `<div class="${cls}" role="button" tabindex="0" data-hex="${esc(copyVal)}" style="${style}"><span class="hint">${c.copy && !c.copy.startsWith('#') ? 'copiar CSS' : 'copiar HEX'}</span><div><div class="nm">${c.name}</div><div class="role">${c.role || ''}</div></div><div class="codes">${lines.join('<br>')}</div></div>`;
}
const swGrid = (arr, extra = '') => `<div class="sw-grid reveal" ${extra}>${arr.map(sw).join('')}</div>`;

// rampa de tons (escala 50–1600 etc.)
function ramp(items, n) {
  return `<div class="ramp reveal" style="--n:${n || items.length}">${items.map(([name, hex, dark]) => `<div data-hex="${hex}" style="background:${hex};color:${bestText(hex)}"><b>${name}</b>${hex}</div>`).join('')}</div>`;
}

const card = (t, d, o = {}) => `<div class="card${o.dark ? ' is-dark' : ''}">${o.idx ? `<div class="idx">${o.idx}</div>` : ''}<h3>${t}</h3><p>${d}</p></div>`;
const rule = (n, t, d, hl) => `<div class="rule${hl ? ' hl' : ''}"><div class="n">${n}</div><div><h4>${t}</h4><p>${d}</p></div></div>`;
const li = arr => arr.map(x => `<li>${x}</li>`).join('');
const dd = (ok, no) => `<div class="dd reveal" style="margin-top:24px"><div class="ok"><h4>Faça</h4><ul>${li(ok)}</ul></div><div class="no"><h4>Evite</h4><ul>${li(no)}</ul></div></div>`;
const dodont = (ok, no, okT = 'Escreva assim', noT = 'Evite') => `<div class="dodont reveal"><div class="do"><h4>${okT}</h4><ul>${li(ok)}</ul></div><div class="dont"><h4>${noT}</h4><ul>${li(no)}</ul></div></div>`;
const sub = (t, chip) => `<h3 class="sub reveal">${t}${chip ? ` <span class="chip-prop">${chip}</span>` : ''}</h3>`;

// faixa compacta de uso de imagens: 4 amostras + aviso de direitos
const imgBand = ({ tiles, note, chip, lead }) => `${sub('Uso de imagens', chip)}
    ${lead ? `<p class="reveal" style="max-width:70ch">${lead}</p>` : ''}
    <div class="tex-grid tex-strip reveal">${tiles.map(t => `<div class="tex">${t.inner}<div class="cap"><b>${t.name}</b>${t.use}</div></div>`).join('')}</div>
    <p class="reveal img-note"><span class="chip-prop">atenção</span>${note}</p>`;

// tile de logo
const tile = (B, { bg, kind = 'logo', hex, label, sym }) => `<div class="logo-tile${sym || kind === 'symbol' ? ' sym' : ''}" style="${bg}">${lg(B, kind, hex)}<small>${label}</small></div>`;

// bloco de código de tokens, colorido
function tokensPre(groups, extra = '') {
  const lines = [];
  groups.forEach(g => {
    if (g.comment) lines.push(`  <span class="c">/* ${g.comment} */</span>`);
    g.vars.forEach(([n, v, c]) => lines.push(`  <span class="k">${n}</span>: <span class="v">${esc(v)}</span>;${c ? `   <span class="c">/* ${esc(c)} */</span>` : ''}`));
    lines.push('');
  });
  return `<span class="c">/* ${groups.title} */</span>\n:root {\n${lines.join('\n').replace(/\n$/, '')}}\n${extra}`;
}

// luminância/contraste no build (para checar pares)
const lum = hex => { const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(v => v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4)); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; };
const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + .05) / (Math.min(l1, l2) + .05); };

module.exports = { esc, lg, sec, sw, swGrid, ramp, card, rule, li, dd, dodont, sub, imgBand, tile, tokensPre, lum, ratio };
