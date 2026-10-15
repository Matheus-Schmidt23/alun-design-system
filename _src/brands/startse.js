// StartSe — Design System (fonte: Manual de Identidade Visual StartSe 2026 v2 + startse.com)
module.exports = (H) => {
  const { sec, sw, swGrid, ramp, card, rule, li, dd, dodont, sub, tile, lg, tokensPre } = H;

  const AC = '#0080ED', AM = '#00183C', PR = '#000000', BR = '#FFFFFF', CC = '#D1D9DB', CM = '#808384', VD = '#00BFB8';

  // logo: wordmark + seta pontilhada (partes do SVG oficial do site)
  const FULL = 'M141.457 2.384a1.192 1.192 0 1 0 0-2.384 1.192 1.192 0 0 0 0 2.384M143.907 23.973a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M147.417 2.384a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M147.417 5.894a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M147.417 20.331a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M147.417 23.973a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M150.993 2.384a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M150.993 5.894a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M150.993 9.536a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M150.993 16.755a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M150.993 20.331a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M150.993 23.973a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M154.503 2.384a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M154.503 5.894a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M154.503 9.536a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M154.503 13.113a1.192 1.192 0 1 0 0-2.384 1.192 1.192 0 0 0 0 2.384M154.503 16.755a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M154.503 20.331a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M154.503 23.973a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M158.013 2.384a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M158.013 5.894a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M158.013 9.536a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M158.013 13.113a1.192 1.192 0 1 0 0-2.384 1.192 1.192 0 0 0 0 2.384M158.013 16.755a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M158.013 20.331a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M158.013 23.973a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M161.589 5.894a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M161.589 9.536a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M161.589 13.113a1.192 1.192 0 1 0 0-2.384 1.192 1.192 0 0 0 0 2.384M161.589 16.755a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M161.589 20.331a1.192 1.192 0 1 0 0-2.383 1.192 1.192 0 0 0 0 2.383M165.232 9.536a1.192 1.192 0 1 0 0-2.384 1.192 1.192 0 0 0 0 2.384M165.232 13.113a1.192 1.192 0 1 0 0-2.385 1.192 1.192 0 0 0 0 2.385M165.232 16.755a1.192 1.192 0 1 0 0-2.384 1.192 1.192 0 0 0 0 2.384M168.808 13.113a1.192 1.192 0 1 0 0-2.385 1.192 1.192 0 0 0 0 2.385';
  const LETTERS = 'M90.795 18.742h-.53l-.795.132a6.1 6.1 0 0 1-2.185 0c-.397-.132-.53-.53-.53-1.192V9.205h4.239c.397 0 .794-.397.794-.794V5.43q0-.133-.132-.265v-.133l-.133-.132c-.132-.133-.397-.265-.53-.265h-4.238V.795s0-.133-.132-.133L86.49.53h-1.192l-3.112 1.92a.73.73 0 0 0-.398.663v1.92h-4.106c-1.788-.132-3.51.53-4.9 1.656-.265.265-.53.53-.663.794V5.96c0-.53-.397-1.06-.927-1.06H68.08c-.53 0-.927.398-.927 1.06v16.888c0 .53.397 1.06.927 1.06h2.98c.53 0 .927-.398.927-1.06v-9.272c0-.662.132-1.192.397-1.788 1.06-2.185 4.106-2.318 5.166-2.318h4.106v9.272c-.265 2.45 1.523 4.768 3.973 5.165h1.788c.398 0 .927 0 1.391-.132.795 0 1.656-.133 2.318-.397a1 1 0 0 0 .662-.928v-2.715c0-.728-.397-.993-.993-.993M105.894 9.603l-1.391-.265c-2.715-.398-4.9-.795-4.9-2.318s1.788-2.45 4.503-2.45 4.371.53 6.424 1.655c.397.265.927.132 1.192-.265.397-.53.662-1.06 1.059-1.655.133-.265.265-.53.53-.795.133-.265.265-.53.133-.795-.133-.265-.265-.53-.53-.53C110.199.795 107.086 0 103.907.132c-2.45-.132-4.9.53-7.086 1.92-1.92.928-3.112 3.113-3.112 5.299 0 3.84 2.582 5.96 7.88 6.821l1.656.265c3.245.397 5.033.927 5.033 2.45s-1.92 2.45-4.636 2.45c-2.715 0-5.033-.662-7.218-2.052-.398-.265-1.06-.265-1.39.132-.398.397-1.789 2.45-1.921 2.715-.265.398 0 .927.397 1.192 2.98 1.788 6.556 2.583 9.934 2.583 2.583.133 5.033-.53 7.218-1.92 2.053-1.192 3.245-3.378 3.245-5.696.199-3.642-2.516-5.828-8.013-6.688M128.212 4.9a13.6 13.6 0 0 0-3.245-.397c-5.033-.397-9.404 3.378-9.801 8.543v1.06c0 5.96 3.973 9.801 10.198 9.801s5.166-.794 7.219-2.318c.265-.132.397-.53.397-.794q0-.398-.397-.795c-1.192-1.192-1.656-1.523-1.656-1.656-.265-.265-.53-.265-.795-.265-.264 0-.397.133-.662.265l-.132.133c-1.192.662-2.583.927-3.974 1.06-2.847 0-4.9-1.391-5.165-3.51h13.178c.53 0 .928-.398.928-.928v-.794c.132-2.186-.53-4.371-1.656-6.093-.993-1.722-2.517-2.782-4.437-3.311m1.391 7.02h-9.404c.662-2.052 2.715-3.377 4.9-3.112 2.583 0 4.239 1.126 4.504 3.113M43.775 18.742h-.398l-.927.132a6.1 6.1 0 0 1-2.185 0c-.397-.132-.53-.53-.53-1.192V9.205h4.106c.53 0 .927-.397.927-1.06V5.763c0-.53-.397-1.06-.927-1.06h-3.973V1.06c0-.53-.398-1.06-.928-1.06s-.397 0-.53.132l-3.112 1.921c-.265.132-.397.53-.397.795v15.496c-.265 2.45 1.523 4.769 3.973 5.166h1.788c.398 0 .928 0 1.391-.133.795 0 1.656-.132 2.318-.397a1 1 0 0 0 .662-.927v-2.45c-.331-.464-.728-.861-1.258-.861M63.51 4.702h-2.98c-.53 0-.927.397-.927 1.06v.132c-1.391-.927-2.848-1.39-4.504-1.39h-.132c-2.45-.133-4.9.794-6.821 2.317-1.92 1.92-2.98 4.636-2.848 7.351-.132 2.715.927 5.298 2.715 7.219 1.855 1.722 4.172 2.516 6.755 2.516h.265c1.656 0 3.245-.53 4.503-1.523v.265c0 .53.398 1.06.928 1.06h2.98c.53 0 .927-.398.927-1.06V5.828c.199-.662-.331-1.126-.861-1.126M50.397 16.027l.133-.133v-3.377c.265-.928.662-1.788 1.39-2.318l.265-.265.133-.133c.132-.132.265-.132.265-.265.132-.132.265-.132.397-.264.265-.133.53-.265.927-.265.398 0 .265-.133.398-.133h1.06c1.655-.132 3.112.662 4.105 1.92v6.226c-.927 1.192-2.45 2.053-4.106 1.92-1.39 0-2.582-.397-3.642-1.39l-.133-.133v-.198l-.198-.133-.133-.132-.132-.133c-.133-.265-.398-.53-.398-.794 0-.265 0-.133-.132-.265z';
  const SYM_S = 'M24.702 9.603l-1.325-.265c-2.715-.398-4.9-.795-4.9-2.318s1.788-2.45 4.503-2.45 4.371.53 6.424 1.655c.397.265.927.133 1.192-.265.397-.53.662-1.06 1.06-1.655.132-.265.265-.53.53-.795.132-.265.264-.53.132-.795-.133-.265-.265-.53-.53-.53C29.073.795 25.96 0 22.782.132c-2.45-.132-4.901.53-7.02 1.855-1.92 1.192-3.113 3.245-3.113 5.563 0 3.84 2.583 5.96 7.88 6.82l1.656.266c3.246.397 5.034.927 5.034 2.45s-1.921 2.45-4.636 2.45-5.033-.662-7.219-2.053c-.397-.265-1.06-.265-1.39.133-.398.397-1.789 2.45-1.921 2.715-.265.397 0 .927.397 1.192 2.98 1.788 6.557 2.583 10.067 2.583 2.582.132 5.033-.53 7.218-1.92 2.053-1.193 3.245-3.378 3.245-5.696-.132-3.841-2.98-6.026-8.278-6.887';
  const DOT = 'M2.98 23.973a2.98 2.98 0 1 0 0-5.96 2.98 2.98 0 0 0 0 5.96';

  const B = {
    id: 'startse', name: 'StartSe', version: 'v1.0',
    description: 'Design System da StartSe: logo, cores, tipografia, grafismo de pontos, ícones, componentes, peças e tom — baseado no Manual de Identidade Visual 2026.',
    footerNote: 'Baseado no Manual de Identidade Visual StartSe 2026 (v2)',
    fontsHref: 'https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap',
    navLogoHex: '#FFFFFF', footLogoHex: '#FFFFFF', faviconHex: AC,
    logo: { w: 170, h: 25, paths: `<path d="${DOT}${SYM_S}${LETTERS}${FULL}"/>` },
    symbol: { w: 67, h: 25, paths: `<path d="${DOT}"/><path d="${SYM_S}"/><g transform="translate(-103 0)"><path d="${FULL}"/></g>` },
    dlColors: [
      { k: 'azul-claro', hex: AC, name: 'Azul claro', bg: '#FFFFFF' },
      { k: 'azul-marinho', hex: AM, name: 'Azul marinho', bg: '#FFFFFF' },
      { k: 'branco', hex: '#FFFFFF', name: 'Branco', bg: AM },
      { k: 'preto', hex: PR, name: 'Preto', bg: CC }
    ],
    theme: {
      action: AC,
      vars: {
        '--c-deep': AM, '--c-action': AC, '--c-action-hover': '#0067BF', '--on-action': '#fff', '--c-black': '#000', '--c-soft': '#A9C0DA', '--c-accent': VD, '--on-accent': '#00183C',
        '--c-tint': '#D6E8FB', '--c-sec': AC, '--on-sec': '#fff', '--c-title2': AC,
        '--ink': '#1F2A33', '--paper': '#FAFAFA', '--text-2': '#4d5a61', '--muted': '#5B6264','--line': 'rgba(0,24,60,.12)', '--fog-soft': '#E6ECEE', '--sec-alt': '#FFFFFF',
        '--grad-b': 'linear-gradient(135deg,#00183C 0%,#0080ED 100%)',
        '--display': '"Barlow",system-ui,sans-serif', '--body': '"IBM Plex Sans","Calibri",system-ui,sans-serif', '--serif': '"Barlow",sans-serif', '--mono': '"IBM Plex Mono",ui-monospace,Consolas,monospace',
        '--serif-style': 'normal', '--serif-w': '300',
        '--r-sm': '6px', '--r-btn': '8px', '--r-card': '12px', '--r-xl': '20px', '--r-pill': '999px', '--r-chk': '5px', '--r-piece': '10px',
        '--shadow': '0 1px 2px rgba(0,24,60,.05),0 8px 24px rgba(0,24,60,.07)', '--shadow-lg': '0 2px 4px rgba(0,24,60,.06),0 22px 48px rgba(0,24,60,.16)',
        '--h-w': '700', '--h-tt': 'none', '--h-ls': '-.015em', '--h-lh': '1',
        '--btn-w': '600', '--btn-ls': '.04em', '--btn-tt': 'uppercase',
        '--nav-bg': 'rgba(0,24,60,.94)', '--nav-dim': '#A9C0DA', '--num-bg': 'transparent', '--num-fg': AC, '--q-w': '700', '--q-tt': 'none', '--vx-font': '"Barlow",sans-serif', '--h4-w': '700', '--h4-tt': 'none', '--kicker-font': '"IBM Plex Mono",monospace',
        '--al-info-bg': '#E1EFFD', '--al-info-fg': '#0A3A6E', '--al-info': AC
      }
    },
    contrast: [
      [BR, AC, 'Branco sobre Azul claro', 'Botão e faixas — só texto grande (≥ 24 px) ou negrito grande'],
      [BR, AM, 'Branco sobre Azul marinho', 'Texto em fundos institucionais'],
      [AC, AM, 'Azul claro sobre Azul marinho', 'Wordmark/Barlow em fundo marinho (o manual também admite branco)'],
      [AM, BR, 'Azul marinho sobre Branco', 'Títulos e texto em fundo claro'],
      [AC, BR, 'Azul claro sobre Branco', 'Títulos grandes e links'],
      [CM, BR, 'Cinza médio sobre Branco', 'Texto de corpo e legendas'],
      [CM, CC, 'Cinza médio sobre Cinza claro', 'Texto secundário em fundos neutros'],
      [PR, CC, 'Preto sobre Cinza claro', 'Texto em fundos neutros'],
      [BR, PR, 'Branco sobre Preto', 'StartSe University e programas executivos'],
      [PR, VD, 'Preto sobre Verde', 'Detalhes e StartSe AI'],
      [BR, VD, 'Branco sobre Verde', 'Só texto grande'],
      [AM, CC, 'Azul marinho sobre Cinza claro', 'Fundos neutros']
    ]
  };

  const dotRows = [[0, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8], [3, 4, 5, 6, 7], [2, 3, 4, 5, 6], [1, 2, 3, 4, 5]];
  const dotsSvg = (fill, op, extra = '') => `<svg viewBox="0 0 9 7" fill="${fill}" fill-opacity="${op}" ${extra}>${dotRows.map((cols, j) => cols.map(c => `<circle cx="${c + .5}" cy="${j + .5}" r=".33"/>`).join('')).join('')}</svg>`;

  // ---------------- HERO ----------------
  B.hero = `
<header class="hero">
  <div class="hero-dots">${dotsSvg('#fff', .07)}</div>
  <div class="wrap hero-in">
    <div class="h-top"><span>Manual de Identidade Visual —</span><span>2026</span></div>
    <div class="h-right">
      ${lg(B, 'logo', '#fff', 'height:clamp(44px,6vw,84px)')}
      <h1>Design System</h1>
      <p>Um sistema visual de logo, tipografia, cores e iconografia que se conectam para criar uma estética única — resumo da nossa história e do nosso propósito.</p>
      <div class="h-actions"><a class="btn btn-primary" href="#logo" style="background:#fff;color:${AC}">Ver a logo</a><a class="btn btn-secondary" href="#cores">Explorar as cores</a></div>
    </div>
    <div class="h-bottom">Branding requirements</div>
  </div>
</header>`;

  // ---------------- 01 ESSÊNCIA ----------------
  const s1 = sec({
    id: 'essencia', num: '01', label: 'Bem-vindo ao nosso universo visual', title: ['Mais que um logo,', 'um sistema'],
    lead: 'A identidade StartSe é muito mais que um logo: é um sistema visual composto por diversos elementos — tipografia, cores e iconografia — que se conectam e se combinam para criar uma estética única e diferenciada. Não é só um logo: é um resumo da nossa história e do nosso propósito.',
    body: `
    <div class="grid g3 reveal" style="margin-top:40px">
      ${card('Próxima', 'A marca StartSe é próxima: uma paleta que vai do sóbrio azul marinho ao verde vibrante, com cores neutras para o público executivo.', { idx: '01' })}
      ${card('Diversa', 'Diversidade de formatos e públicos: do primeiro passo na carreira à liderança — em programas, imersões, eventos, conteúdo e consultoria.', { idx: '02' })}
      ${card('Adaptável', 'Um sistema modular que se adapta de logo completo a avatar, de digital a impresso, de produto a evento.', { idx: '03', dark: true })}
    </div>

    ${sub('O significado do logo')}
    <div class="grid g3 reveal">
      <div class="card"><div class="mean"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="9" fill="${AC}"/></svg></div><h3>O ponto</h3><p>O ponto no início da wordmark corresponde aos <b>novos começos</b> que provocamos na carreira e na vida das pessoas.</p></div>
      <div class="card"><div class="mean"><span class="rt">rt</span></div><h3>A união “r” e “t”</h3><p>A união das letras “r” e “t” remete à <b>conexão entre os stakeholders</b> do nosso ecossistema.</p></div>
      <div class="card"><div class="mean">${dotsSvg(AC, 1, 'style="height:34px"')}</div><h3>A seta pontilhada</h3><p>Representa o <b>Lifelong Learning</b>: aprendizado contínuo, que acontece de forma ativa e intencional.</p></div>
    </div>

    ${sub('Arquitetura de marca')}
    <div class="grid g3 reveal">
      <div class="arch" style="background:${AC};color:#fff"><b>StartSe</b><span>Azul claro e azul marinho dividem o protagonismo; cinzas neutros; verde só em detalhes (gráficos, notificações).</span></div>
      <div class="arch" style="background:${VD};color:${AM}"><b>StartSe AI</b><span>Braço “AI” (Tech Academy) e redes sociais de IA (@startse.ai): tons verdes passam a predominar.</span></div>
      <div class="arch" style="background:#000;color:#fff"><b>StartSe University</b><span>Programas executivos e comunicação educacional (@startseuniversity_): preto e branco predominam.</span></div>
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">A StartSe integra o ecossistema do Grupo Alun e se apresenta como <b>“a sua Escola Internacional de Negócios”</b> (site), com frentes de formações, imersões internacionais, Global MBAs (com a FIAP), eventos, AI Tools, artigos e consultoria para empresas.</p>`
  });

  // ---------------- 02 LOGO ----------------
  const wr = (inner, label, bg = '#fff', color = '') => `<div style="background:${bg}">${inner}<span${color ? ` style="color:${color}"` : ''}>${label}</span><b class="x"${color ? ` style="color:${color}"` : ''}>✕</b></div>`;
  const noArrow = `<span class="lg" style="height:20px"><svg viewBox="0 0 132 25" fill="none"><g fill="${AC}"><path d="${DOT}M${SYM_S.slice(1)}M${LETTERS.slice(1)}"/></g></svg></span>`;
  const s2 = sec({
    id: 'logo', num: '02', label: 'Nossa logo', cls: 'dark', title: ['Um ponto', 'de partida'],
    lead: 'A marca é o elemento mais visível da identidade: carrega o ponto de partida, a conexão entre as pessoas e o aprendizado contínuo. A <b style="color:#fff">assinatura completa</b> (wordmark + seta pontilhada, na horizontal) é a de uso preferencial.',
    body: `
    <div class="logo-grid reveal" style="margin-top:44px">
      ${tile(B, { bg: 'background:#FDFEFF;color:#1F2A33', hex: AC, label: 'Azul claro — sobre branco' })}
      ${tile(B, { bg: `background:${CC};color:#1F2A33`, hex: AC, label: 'Azul claro — sobre cinza claro' })}
      ${tile(B, { bg: `background:${AC};color:#fff`, hex: '#FFFFFF', label: 'Branca — sobre azul claro' })}
      <div class="logo-tile" style="background:${AM};color:#fff"><span class="lg" style="height:44px"><svg viewBox="0 0 170 25" fill="none"><g fill="#fff"><path d="${DOT}${SYM_S}${LETTERS}"/></g><g fill="${AC}"><path d="${FULL}"/></g></svg></span><small>Wordmark branca, seta em azul claro — sobre azul marinho</small></div>
      ${tile(B, { bg: 'background:#000;color:#fff', hex: '#FFFFFF', label: 'Branca — sobre preto (University)' })}
      ${tile(B, { bg: 'background:#fff;color:#1F2A33', hex: AM, label: 'Azul marinho — sobre branco' })}
      ${tile(B, { bg: 'background:#FDFEFF;color:#1F2A33', kind: 'symbol', hex: AC, label: 'Assinatura simplificada — apps e redes' })}
      ${tile(B, { bg: `background:${CC};color:#1F2A33`, kind: 'symbol', hex: AC, label: 'Simplificada — sobre cinza claro' })}
      ${tile(B, { bg: 'background:#000;color:#fff', kind: 'symbol', hex: '#FFFFFF', label: 'Simplificada — sobre preto' })}
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Aplicações da assinatura: fundo branco com componentes em azul claro · fundo cinza claro com componentes em azul claro · fundo azul claro com componentes brancos · fundo azul marinho com wordmark branca, símbolo azul claro e tagline branca.</p>

    ${sub('Baixar o logo em SVG')}
    <div class="dl-bar reveal"><span class="dl-note">Vetor oficial · fundo transparente · escala sem perda de qualidade</span></div>
    <div class="dl-grid reveal" id="dlGrid"></div>

    ${sub('Construção modular e respiro mínimo')}
    <div class="two reveal" style="align-items:center">
      <div class="constr">
        <div class="cx"><span>x</span><span style="flex:20.5">20,5x</span><span>x</span><span style="flex:5">5x</span><span style="flex:2.5">2,5x</span></div>
        <div class="cbox"><div class="clear">${lg(B, 'logo', '#fff', 'height:44px')}<i class="t">4x</i><i class="r">4x</i></div></div>
      </div>
      <div class="rules">
        ${rule(1, 'Módulo “x”', 'A logo é construída sobre o diâmetro do ponto: x + wordmark (20,5x) + x + seta (5x) + margem final (2,5x).')}
        ${rule(2, 'Respiro mínimo de 4x', 'A logo merece destaque em todos os pontos de contato: mantenha 4x livres em todos os lados entre a logo e qualquer outro elemento.')}
        ${rule(3, 'Reduções máximas', 'Logo completa: 18 px / 3,6 mm de altura. Assinatura simplificada (.S + seta): 55 px / 11 mm. Válido para digital e impresso — inclusive para o selo de certificação.', true)}
      </div>
    </div>`
  });

  // ---------------- 03 CORES ----------------
  const rgb = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(' '); };
  const c = (name, hex, role, o = {}) => Object.assign({ name, hex, role, rgb: rgb(hex), wide: false }, o);
  const bars = (arr) => `<div class="bars">${arr.map(([h, v, n, ol]) => `<div><i style="height:${v}%;background:${h};${ol ? 'outline:1.5px solid #00183C;outline-offset:-1.5px' : ''}"></i><span>${n}</span></div>`).join('')}</div>`;
  const s3 = sec({
    id: 'cores', num: '03', label: 'Nossas cores', cls: 'alt', title: ['Do sóbrio', 'ao vibrante'],
    lead: 'A marca é próxima, diversa e adaptável — e a paleta reflete isso: do sóbrio azul marinho a um verde mais vibrante, passando por cores sóbrias que representam o público executivo (preto, branco, cinza) e o tom educacional (StartSe University). Siga as especificações rigorosamente. Clique em qualquer cor para copiar o HEX.',
    body: `
    ${sub('Primárias')}
    ${swGrid([
      c('Azul claro', AC, 'Protagonista — logo, títulos, botões, links', { wide: true, cmyk: '85 45 0 0', pantone: '2174 C' }),
      c('Azul marinho', AM, 'Protagonista — fundos institucionais e texto', { wide: true, cmyk: '100 70 0 77', pantone: '2767 C' })
    ])}
    ${sub('Secundárias e neutras')}
    ${swGrid([
      c('Preto 100', PR, 'Programas executivos e University', { sm: true, cmyk: '91 79 62 97', pantone: '419 C' }),
      c('Branco 100', BR, 'Respiro e fundos', { sm: true, light: true, bordered: true, cmyk: '0 0 0 0', pantone: '000 C' }),
      c('Cinza claro', CC, 'Fundos neutros', { sm: true, light: true, cmyk: '21 11 13 0', pantone: '7541 C' }),
      c('Cinza médio', CM, 'Texto — corpo e legendas', { sm: true, cmyk: '0 0 0 60', pantone: 'Cool Grey 8C' }),
      c('Verde', VD, 'Detalhes — gráficos e notificações; StartSe AI', { sm: true, cmyk: '75 0 42 0', pantone: '3262 C' })
    ])}
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Valores RGB do manual (azul claro 0·128·237; azul marinho 0·24·60; cinza claro 209·217·219; cinza médio 128·131·132; verde 0·191·184). O PDF exibe o azul claro um pouco mais escuro por conversão de CMYK — para telas, use o RGB.</p>

    ${sub('Hierarquia cromática')}
    <div class="grid g2 reveal">
      <div class="card"><h3 style="font-size:17px">Digital + Pantone</h3>${bars([[AC, 100, 'Azul claro'], [AM, 93, 'Marinho'], [PR, 57, 'Preto'], ['#fff', 57, 'Branco', 1], [CM, 46, 'Cinza médio'], [CC, 37, 'Cinza claro'], [VD, 16, 'Verde']])}<p style="margin-top:12px;font-size:13px">Espaços cromáticos amplos: os tons proprietários de azul claro e azul marinho dividem o protagonismo.</p></div>
      <div class="card"><h3 style="font-size:17px">Impresso CMYK</h3>${bars([[AM, 100, 'Marinho'], [PR, 73, 'Preto'], ['#fff', 73, 'Branco', 1], [CC, 57, 'Cinza claro'], [AC, 37, 'Azul claro'], [CM, 33, 'Cinza médio'], [VD, 16, 'Verde']])}<p style="margin-top:12px;font-size:13px">O azul claro não alcança 100% de fidelidade em CMYK: seu protagonismo é revisto e os tons secundários se aproximam do marinho.</p></div>
    </div>
    <p class="reveal" style="margin-top:14px;font-size:14px">Os cinzas servem como tons neutros — <b>médio para textos</b>, <b>claro para fundos</b>. O verde entra só em detalhes (gráficos, notificações) — exceto no braço AI (Tech Academy, @startse.ai) e, no oposto, preto e branco predominam em programas executivos impressos e na StartSe University (@startseuniversity_).</p>

    ${sub('Escala de interface', 'derivada do site')}
    ${ramp([['001c3b', '#001c3b', 1], ['003060', '#003060', 1], ['004787', '#004787', 1], ['005eb1', '#005eb1', 1], ['0077dd', '#0077dd', 1], ['2f91ff', '#2f91ff', 0], ['74adff', '#74adff', 0], ['a7c8ff', '#a7c8ff', 0], ['d5e3ff', '#d5e3ff', 0], ['ebf1ff', '#ebf1ff', 0]], 10)}
    <p class="reveal" style="margin-top:12px;font-size:13px;color:var(--muted)">Rampa de azuis usada nas interfaces de startse.com. O manual define só as cores principais; a rampa serve de apoio a estados e fundos de UI.</p>

    ${sub('Contraste e acessibilidade', 'calculado')}
    <div class="card reveal" style="padding:10px 18px"><table class="ctr-table" id="ctrTable"></table></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Razões calculadas pela fórmula WCAG 2.x (texto normal exige 4,5:1; grande, 3:1). <b>Branco sobre Azul claro (#0080ED) só atinge o critério para texto grande</b> — por isso, textos pequenos sobre azul claro pedem negrito/tamanho maior ou o azul marinho.</p>`
  });

  // ---------------- 04 TIPOGRAFIA ----------------
  const BW = "'Barlow',sans-serif", PX = "'IBM Plex Sans',sans-serif";
  const s4 = sec({
    id: 'tipografia', num: '04', label: 'Nossa tipografia', title: ['Barlow &', 'IBM Plex Sans'],
    lead: 'Duas famílias minimalistas que se complementam para ilustrar a diversidade e a versatilidade da marca. Como nas cores, a escolha reflete o lado inovador da StartSe: <b>Barlow</b> nos títulos e <b>IBM Plex Sans</b> no corpo. Fonte de segurança: Calibri.',
    body: `
    <div class="fam reveal" style="margin-top:40px;--fams:2">
      <div class="card"><div class="label">Headline, título e subtítulo · Barlow</div><div class="big" style="font-family:${BW};font-weight:600;letter-spacing:-.02em;color:${AC}">Barlow</div>
        <div style="font-family:${BW};font-size:22px;line-height:1.2;font-weight:500">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789!?@#$%&amp;</div>
        <div class="weights" style="font-family:${BW}"><span style="font-weight:200">Thin</span><span style="font-weight:300">Light</span><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span><span style="font-weight:600">Semibold</span><span style="font-weight:700">Bold</span></div>
        <div class="meta">Fonte de headlines tecnológicas que casam com o lado inovador da StartSe. Títulos em Bold/Semibold, na cor azul claro ou azul marinho.</div></div>
      <div class="card"><div class="label">Corpo e retranca · IBM Plex Sans</div><div class="big" style="font-family:${PX};font-weight:400;letter-spacing:-.02em;color:${CM}">Plex Sans</div>
        <div style="font-family:${PX};font-size:20px;line-height:1.3;font-weight:400">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789!?@#$%&amp;</div>
        <div class="weights" style="font-family:${PX}"><span style="font-weight:200">Thin</span><span style="font-weight:300">Light</span><span style="font-weight:400">Regular</span></div>
        <div class="meta">Corpo de texto em cinza médio. Fallback: Calibri. Ambas as famílias têm download livre.</div></div>
    </div>

    ${sub('Aplicações cromáticas')}
    <div class="tcol reveal">
      <div style="background:#fff"><span style="color:${AC}">Barlow</span><em style="color:${CM}">Plex Sans</em></div>
      <div style="background:${CC}"><span style="color:${AC}">Barlow</span><em style="color:${CM}">Plex Sans</em></div>
      <div style="background:${AC}"><span style="color:#fff">Barlow</span><em style="color:#fff">Plex Sans</em></div>
      <div style="background:${AM}"><span style="color:${AC}">Barlow<sup>*</sup></span><em style="color:#fff">Plex Sans</em></div>
      <div style="background:#000"><span style="color:#fff">Barlow</span><em style="color:#fff">Plex Sans</em></div>
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13.5px"><sup>*</sup> No fundo azul marinho, a Barlow também pode ser aplicada em branco. Respeite as combinações: garantem máxima legibilidade e aproveitamento das formas de cada família. A frequência de uso de cada cor de fundo segue a hierarquia cromática.</p>

    ${sub('Hierarquia tipográfica')}
    <div class="card reveal" style="padding:10px 28px">
      <div class="scale">
        <div class="scale-row"><span class="tg">Headline</span><span style="font-family:${BW};font-weight:500;font-size:44px;line-height:1.05;color:${AM}">Apple lança o novo Watch Series 5 em São Francisco —</span><span class="sp">Barlow · 58,2 pt</span></div>
        <div class="scale-row"><span class="tg">Corpo L</span><span style="font-family:${PX};font-size:18px;line-height:1.5;color:${CM}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span><span class="sp">IBM Plex Sans · 18 pt</span></div>
        <div class="scale-row"><span class="tg">Retranca</span><span style="font-family:${PX};font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:${AC}">Tecnologia</span><span class="sp">IBM Plex Sans · 14,2 pt</span></div>
        <div class="scale-row"><span class="tg">Título</span><span style="font-family:${BW};font-weight:600;font-size:22px;text-transform:uppercase;color:${AM}">O novo Apple Watch Series 5 —</span><span class="sp">Barlow · 23 pt</span></div>
        <div class="scale-row"><span class="tg">Subtítulo</span><span style="font-family:${BW};font-weight:600;font-size:13px;letter-spacing:.04em;text-transform:uppercase;color:${AM}">Design e funcionalidades</span><span class="sp">Barlow · 14,2 pt</span></div>
        <div class="scale-row"><span class="tg">Corpo</span><span style="font-family:${PX};font-size:14px;line-height:1.5;color:${CM}">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><span class="sp">IBM Plex Sans · 14,2 pt</span></div>
      </div>
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13px;color:var(--muted)">Tamanhos em pontos, como no manual (peça impressa/editorial). Para web, o site usa Barlow 500 em corpo base de 16 px e botões em Barlow 600 de 13 px, caixa alta.</p>`
  });

  // ---------------- 05 GRAFISMO & ÍCONES ----------------
  const ic = d => `<svg viewBox="0 0 48 48" fill="none" stroke="${AM}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const icons = [
    ['Ideia', ic('<path d="M24 6a12 12 0 0 0-7 21.8V33h14v-5.2A12 12 0 0 0 24 6zM18 38h12M20 42h8"/>')],
    ['Livro', ic('<path d="M6 10h14a4 4 0 0 1 4 4v26a3 3 0 0 0-3-3H6zM42 10H28a4 4 0 0 0-4 4v26a3 3 0 0 1 3-3h15z"/>')],
    ['Busca', ic('<circle cx="21" cy="21" r="13"/><path d="M31 31l12 12"/>')],
    ['Formação', ic('<path d="M4 18l20-9 20 9-20 9zM12 22v10c0 3 6 6 12 6s12-3 12-6V22M44 18v12"/>')],
    ['Foguete', ic('<path d="M24 4c7 5 9 13 7 24H17C15 17 17 9 24 4zM17 28l-6 8 7-2M31 28l6 8-7-2M24 32v10"/><circle cx="24" cy="17" r="3"/>')],
    ['Notebook', ic('<rect x="9" y="10" width="30" height="22" rx="2"/><path d="M4 38h40"/>')],
    ['Troféu', ic('<path d="M14 6h20v12a10 10 0 0 1-20 0zM14 10H6c0 6 3 10 8 10M34 10h8c0 6-3 10-8 10M24 28v8M16 42h16M18 36h12v6H18z"/>')],
    ['Globo', ic('<circle cx="24" cy="22" r="16"/><path d="M8 22h32M24 6c6 5 6 27 0 32M24 6c-6 5-6 27 0 32M24 38v6M16 44h16"/>')],
    ['Estrela', ic('<path d="M24 5l5.5 12 13 1.5-9.7 8.8 2.7 12.9L24 33l-11.5 7.2 2.7-12.9L5.5 18.5l13-1.5z"/>')],
    ['Tempo', ic('<circle cx="24" cy="24" r="18"/><path d="M24 12v12l8 5"/>')],
    ['Conversa', ic('<path d="M6 8h24v16H16l-6 6v-6H6zM34 18h8v18h-4v6l-6-6H20v-6"/>')],
    ['Instituição', ic('<path d="M4 18L24 6l20 12zM8 18v18M18 18v18M30 18v18M40 18v18M4 40h40"/>')]
  ];
  const s5 = sec({
    id: 'grafismo', num: '05', label: 'Grafismo & iconografia', cls: 'dark', title: ['O ponto', 'que se conecta'],
    lead: 'O elemento gráfico central é o <b style="color:#fff">ponto</b> — o mesmo que dá início à wordmark e compõe a seta pontilhada do Lifelong Learning. Em grade, os pontos viram padrões, fundos e destaques; em traço fino, nascem os ícones.',
    body: `
    <div class="two reveal" style="margin-top:40px;align-items:stretch">
      <div class="dotcard" style="background:${AC}">${dotsSvg('#fff', .16, 'style="width:100%;height:100%"')}<div class="cap"><b>Seta pontilhada · sobre azul claro</b>Pontos brancos a 16% de opacidade — como na capa do manual</div></div>
      <div class="dotcard" style="background:#fff">${dotsSvg('#D1D9DB', 1, 'style="width:100%;height:100%"')}<div class="cap" style="color:${AM}"><b>Seta pontilhada · sobre branco</b>Pontos em cinza claro — como no “Bem-vindo”</div></div>
    </div>
    <div class="rules reveal" style="margin-top:20px;grid-template-columns:repeat(2,1fr)">
      ${rule(1, 'Grade de círculos', 'Círculos de mesmo diâmetro (≈ 2/3 do passo) em grade regular, desenhando a seta — ou grupos soltos como “constelações”.')}
      ${rule(2, 'Tons de baixo contraste', 'Em fundo azul, círculos brancos translúcidos; em fundo branco ou cinza, círculos em cinza claro. Nunca competem com o texto.')}
      ${rule(3, 'Sangrando a peça', 'O padrão pode cortar nas bordas para sugerir movimento — a seta sempre aponta para a direita (futuro).')}
      ${rule(4, 'Seta é do logo', 'A seta pontilhada completa só aparece como parte da assinatura; como grafismo, use-a em grande escala e em baixo contraste.', true)}
    </div>

    ${sub('Ícones')}
    <p class="reveal" style="max-width:68ch">Família de ícones de <b style="color:#fff">traço fino e contínuo</b>, em azul marinho, com cantos arredondados — da ideia ao troféu. O manual traz 50 ícones de negócios, educação, tecnologia e IA.</p>
    <div class="icgrid reveal">${icons.map(([n, svg]) => `<div><div class="pi">${svg}</div><span>${n}</span></div>`).join('')}</div>
    <p class="reveal" style="margin-top:12px;font-size:13px;color:var(--c-soft)">Ícones redesenhados como referência de estilo. A biblioteca oficial (50 ícones) está na seção “Ícones” do manual.</p>`
  });

  // ---------------- 06 COMPONENTES ----------------
  const s6 = sec({
    id: 'componentes', num: '06', label: 'Componentes', title: ['Blocos de', 'interface'],
    lead: 'Limpos e diretos, com cantos suaves, caixa alta nos botões e o azul claro como sinal de ação. Tudo abaixo é HTML/CSS real, derivado do site startse.com e do manual.',
    body: `
    <div class="comp reveal">
      <div class="ct"><h3>Botões</h3><span>.btn · primário · secundário · ghost</span></div>
      <div class="row"><a class="btn btn-primary">Saiba mais</a><a class="btn btn-secondary">Sou aluno</a><a class="btn btn-ghost">Ver todos →</a><a class="btn btn-accent">AI Tools</a><a class="btn is-disabled">Indisponível</a></div>
      <div class="on-dark"><div class="row"><a class="btn btn-primary">Saiba mais</a><a class="btn btn-secondary">Sou aluno</a></div></div>
      <div class="cap">Barlow Semibold 13 px, caixa alta, raio de 6–10 px. Primário em Azul claro (#0080ED) com texto branco.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Navegação</h3><span>.nav-demo</span></div>
      <div class="nav-demo"><span>Formações</span><span>Imersões Internacionais</span><span>Global MBAs</span><span>Eventos</span><span>AI Tools</span><span>Artigos</span><span>Sobre Nós</span><span>Para Empresas</span><span>Consultoria</span></div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Tags e chips</h3><span>.tag · .chipo</span></div>
      <div class="row"><span class="tag tag-solid">Novo</span><span class="tag tag-soft">Global MBA</span><span class="tag tag-line">Imersão</span><span class="tag tag-accent">AI</span><span class="tag tag-fog">Evento</span><span class="chipo">O que importa AGORA</span></div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Campos de formulário</h3><span>.field</span></div>
      <div class="row" style="align-items:flex-start">
        <div class="field"><label>Seu e-mail</label><input placeholder="nome@empresa.com"><span class="help">Enviaremos o acesso por aqui.</span></div>
        <div class="field err"><label>Telefone</label><input value="11 9999"><span class="help">Informe o número completo com DDD.</span></div>
        <div class="chk"><i class="on"></i> Quero receber novidades</div><div class="chk"><i></i> Aceito os termos</div>
      </div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Banner e cards</h3><span>.banner · .c-course · .c-stat</span></div>
      <div class="banner"><div class="bdots">${dotsSvg('#fff', .08, 'style="height:100%;width:auto"')}</div><div><span class="tag tag-accent" style="margin-bottom:12px">Novo</span><h4>MBAs Globais FIAP &amp; StartSe: Liderança, IA e Inovação Global</h4><p>Programas de impacto que preparam lideranças à prova de futuro, capazes de levar negócios muito além de suas fronteiras.</p><a class="btn btn-primary btn-sm">Saiba mais</a></div></div>
      <div class="cc-grid" style="margin-top:16px">
        <div class="c-course"><div class="im" style="background:${AM}"><div style="position:absolute;inset:0;opacity:.6">${dotsSvg('#fff', .12, 'style="width:100%;height:100%"')}</div><span class="tag tag-accent">Imersão</span></div><div class="bd"><h4 style="text-transform:none">Vale do Silício</h4><p>Conecte-se ao ecossistema global de inovação.</p><div class="ft"><span>Internacional</span><span style="color:${AC}">→</span></div></div></div>
        <div class="c-stat" style="background:${AC}"><div class="n">00</div><p>Dado de exemplo — substitua pelo número vigente (alunos, países, programas…).</p></div>
        <div class="c-quote" style="background:${AM}"><div class="qm" style="color:${VD};font-style:normal">“</div><p style="font-style:normal;font-family:var(--display);font-weight:600">Lifelong Learning: aprender nunca termina.</p><div class="who">Propósito</div></div>
      </div>
      <div class="cap">O card de estatística traz um número de exemplo (00) — substitua pelo dado vigente.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Faixa de chamada</h3><span>.cta-band</span></div>
      <div class="cta-band"><div><h4>Aprenda com quem faz</h4><p>Formações, imersões e conteúdos para líderes que constroem o futuro dos negócios.</p></div><a class="btn btn-primary" style="background:#fff;color:${AC}">Conheça os programas</a></div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Alertas</h3><span>.alert</span></div>
      <div class="row" style="align-items:flex-start"><div class="alert info"><i>i</i><div>Matrículas abertas até sexta-feira.</div></div><div class="alert ok" style="background:#d9f5f3;color:#0b5a56"><i style="background:${VD};color:#00183C">✓</i><div>Cadastro confirmado.</div></div><div class="alert warn"><i>!</i><div>Faltam 3 dias para o prazo.</div></div><div class="alert err"><i>×</i><div>Não foi possível enviar.</div></div></div>
      <div class="cap">O verde (#00BFB8) é usado em notificações e detalhes, como previsto no manual.</div>
    </div>`
  });

  // ---------------- 07 PEÇAS ----------------
  const s7 = sec({
    id: 'pecas', num: '07', label: 'Peças & layouts', cls: 'black', title: ['Tudo', 'junto'],
    lead: 'Três aplicações de referência montadas com o sistema: fundo de cor chapada, a seta pontilhada em baixo contraste, Barlow nos títulos, Plex Sans no corpo e a assinatura em um canto. Textos são exemplos.',
    body: `
    <div class="pieces" style="margin-top:44px">
      <div class="pc-wrap p-feed reveal"><div class="piece sq" style="background:${AC}">
        <div class="a" style="left:-8%;top:8%;width:90%;opacity:1">${dotsSvg('#fff', .14, 'style="width:100%"')}</div>
        <span class="a" style="left:calc(70*var(--u));top:calc(70*var(--u));font-family:var(--mono);font-size:calc(24*var(--u));letter-spacing:.08em;color:#fff;text-transform:uppercase">Global MBAs · StartSe + FIAP</span>
        <span class="a T" style="left:calc(70*var(--u));bottom:calc(220*var(--u));right:calc(70*var(--u));font-size:calc(124*var(--u));line-height:.98;color:#fff;font-weight:700">Liderança, IA e Inovação Global</span>
        <span class="a R" style="left:calc(70*var(--u));bottom:calc(150*var(--u));font-size:calc(34*var(--u));color:#fff;opacity:.9">Programas à prova de futuro.</span>
        ${lg(B, 'logo', '#fff', 'position:absolute;left:calc(70*var(--u));bottom:calc(64*var(--u));height:calc(40*var(--u))')}
      </div><div class="pc-cap"><b>Feed</b><span>1080 × 1080</span></div></div>

      <div class="pc-wrap p-story reveal"><div class="piece st" style="background:${AM}">
        <div class="a" style="left:-30%;top:46%;width:150%;opacity:1">${dotsSvg(VD, .2, 'style="width:100%"')}</div>
        <span class="a" style="left:calc(70*var(--u));top:calc(120*var(--u));font-family:var(--mono);font-size:calc(30*var(--u));letter-spacing:.08em;color:${VD};text-transform:uppercase">StartSe AI · Tech Academy</span>
        <span class="a T" style="left:calc(70*var(--u));top:calc(210*var(--u));right:calc(70*var(--u));font-size:calc(160*var(--u));line-height:.98;color:#fff;font-weight:700">Aprenda IA aplicada aos negócios</span>
        <div class="a" style="left:calc(70*var(--u));bottom:calc(250*var(--u));padding:calc(28*var(--u)) calc(52*var(--u));background:${VD};color:${AM};border-radius:calc(14*var(--u));font-family:var(--display);font-weight:700;font-size:calc(38*var(--u));letter-spacing:.04em">SAIBA MAIS</div>
        ${lg(B, 'logo', '#fff', 'position:absolute;left:calc(70*var(--u));bottom:calc(110*var(--u));height:calc(46*var(--u))')}
      </div><div class="pc-cap"><b>Stories · StartSe AI</b><span>1080 × 1920</span></div></div>

      <div class="pc-wrap p-poster reveal"><div class="piece" style="background:#000;aspect-ratio:4/5">
        <span class="a" style="left:calc(70*var(--u));top:calc(80*var(--u));font-family:var(--mono);font-size:calc(24*var(--u));letter-spacing:.08em;color:#fff;opacity:.7;text-transform:uppercase">StartSe University</span>
        <span class="a T" style="left:calc(70*var(--u));top:calc(210*var(--u));right:calc(70*var(--u));font-size:calc(112*var(--u));line-height:1;color:#fff;font-weight:600">Programas executivos</span>
        <span class="a R" style="left:calc(70*var(--u));right:calc(70*var(--u));top:calc(560*var(--u));font-size:calc(34*var(--u));line-height:1.4;color:#d1d9db">Formação de alto nível para quem lidera transformação.</span>
        <div class="a" style="right:calc(-60*var(--u));bottom:calc(-60*var(--u));width:60%">${dotsSvg('#fff', .1, 'style="width:100%"')}</div>
        ${lg(B, 'logo', '#fff', 'position:absolute;left:calc(70*var(--u));bottom:calc(70*var(--u));height:calc(40*var(--u))')}
      </div><div class="pc-cap"><b>Poster · University</b><span>1080 × 1350</span></div></div>

      <div class="pc-wrap p-slide reveal"><div class="piece wd" style="background:#fff">
        <div class="a" style="right:-6%;top:0;bottom:0;width:48%;background:${AC}"><div class="a" style="inset:0;padding:8%">${dotsSvg('#fff', .16, 'style="width:100%;height:100%"')}</div></div>
        <span class="a" style="left:calc(110*var(--u));top:calc(110*var(--u));font-family:var(--body);font-size:calc(28*var(--u));letter-spacing:.06em;color:${AC};text-transform:uppercase">Tecnologia</span>
        <span class="a T" style="left:calc(110*var(--u));top:calc(190*var(--u));width:48%;font-size:calc(116*var(--u));line-height:1;color:${AM};font-weight:600">O novo ciclo dos negócios</span>
        <span class="a R" style="left:calc(110*var(--u));top:calc(560*var(--u));width:44%;font-size:calc(34*var(--u));line-height:1.45;color:${CM}">Texto de apoio em IBM Plex Sans, em cinza médio, com no máximo cinco linhas.</span>
        ${lg(B, 'logo', AC, 'position:absolute;left:calc(110*var(--u));bottom:calc(80*var(--u));height:calc(40*var(--u))')}
      </div><div class="pc-cap"><b>Slide</b><span>1920 × 1080</span></div></div>
    </div>`
  });

  // ---------------- 08 VOZ ----------------
  const s8 = sec({
    id: 'voz', num: '08', label: 'Voz & mensagens', cls: 'alt', title: ['Direta,', 'global, para líderes'],
    lead: 'O manual define a identidade visual e <b>não traz um guia de tom de voz</b>. Os princípios abaixo são uma <b>leitura do próprio manual e do site</b> — para alinhar com o time de marca antes de virarem regra.',
    body: `
    <div class="chip-note reveal"><span class="chip-prop">proposta</span> Conteúdo derivado de startse.com e do manual; não é uma diretriz oficial aprovada.</div>
    <div class="grid g3 reveal" style="margin-top:28px">
      ${card('Próxima', 'Fala com executivos e profissionais em transição como parceira: sem jargão desnecessário, sempre com contexto de negócio.', { idx: '01' })}
      ${card('Global', 'Traz o mundo para a conversa: imersões internacionais, Global MBAs, ecossistemas de inovação.', { idx: '02' })}
      ${card('Orientada ao futuro', 'Linguagem de quem aprende continuamente (Lifelong Learning) e prepara lideranças “à prova de futuro”.', { idx: '03', dark: true })}
    </div>

    ${sub('Exemplos do site')}
    <div class="voice-ex reveal">
      <div class="vx" style="background:${AC};color:#fff"><span class="lb" style="color:#fff;opacity:.8">Título de banner</span><p style="font-size:26px">MBAs Globais FIAP &amp; StartSe: Liderança, IA e Inovação Global.</p></div>
      <div class="vx" style="background:${AM};color:#fff"><span class="lb" style="color:#A9C0DA">Apoio</span><p style="font-weight:500;font-size:22px">Programas de impacto que preparam lideranças à prova de futuro, capazes de levar negócios muito além de suas fronteiras.</p></div>
      <div class="vx" style="background:#fff;color:${AM};border:1px solid var(--line)"><span class="lb" style="color:${AC}">Seção</span><p style="font-size:26px">O que importa AGORA</p></div>
    </div>

    ${sub('Escreva assim · evite')}
    ${dodont([
      'Títulos claros, com o benefício ou o tema logo no início',
      'Frases curtas e verbos de ação (“Saiba mais”, “Conheça”)',
      'Termos do ecossistema: Lifelong Learning, Global MBAs, imersões, AI Tools',
      'Dados e fatos verificáveis, com fonte',
      'Títulos longos podem terminar com o travessão — assinatura visual do manual'
    ], [
      'Promessas absolutas de carreira ou de resultado',
      'Jargão técnico sem explicação',
      'Tom de varejo e urgência artificial',
      'Misturar o tom da StartSe University (executivo) com o da StartSe AI (acadêmico-prático) na mesma peça'
    ])}`
  });

  // ---------------- 09 TOKENS & IA ----------------
  const tokenGroups = [
    { comment: 'Marca — oficiais (RGB do manual)', vars: [['--startse-azul-claro', AC, 'CMYK 85 45 0 0 · PMS 2174 C'], ['--startse-azul-marinho', AM, 'CMYK 100 70 0 77 · PMS 2767 C'], ['--startse-preto', PR, 'PMS 419 C'], ['--startse-branco', BR], ['--startse-cinza-claro', CC, 'PMS 7541 C'], ['--startse-cinza-medio', CM, 'Cool Grey 8C'], ['--startse-verde', VD, 'PMS 3262 C']] },
    { comment: 'Interface — rampa de azuis do site (derivada)', vars: [['--startse-azul-900', '#001c3b'], ['--startse-azul-800', '#003060'], ['--startse-azul-700', '#004787'], ['--startse-azul-600', '#005eb1'], ['--startse-azul-500', '#0077dd'], ['--startse-azul-400', '#2f91ff'], ['--startse-azul-300', '#74adff'], ['--startse-azul-200', '#a7c8ff'], ['--startse-azul-100', '#d5e3ff'], ['--startse-azul-50', '#ebf1ff'], ['--startse-fundo', '#FAFAFA'], ['--startse-texto', '#333333']] },
    { comment: 'Tipografia', vars: [['--startse-font-titulo', '"Barlow", "Calibri", sans-serif'], ['--startse-font-corpo', '"IBM Plex Sans", "Calibri", sans-serif']] },
    { comment: 'Forma e espaçamento (base 4 px)', vars: [['--startse-radius-btn', '6px', 'site: 6–10 px'], ['--startse-sp-1', '4px'], ['--startse-sp-2', '8px'], ['--startse-sp-3', '12px'], ['--startse-sp-4', '16px'], ['--startse-sp-6', '24px'], ['--startse-sp-8', '32px'], ['--startse-sp-12', '48px'], ['--startse-sp-16', '64px']] },
    { comment: 'Logo', vars: [['--startse-respiro', '4x', 'x = diâmetro do ponto'], ['--startse-min-logo', '18px', 'altura · 3,6 mm'], ['--startse-min-simplificada', '55px', 'largura · 11 mm']] }
  ];
  tokenGroups.title = 'StartSe — Design tokens v1.0';
  const s9 = sec({
    id: 'ia', num: '09', label: 'Tokens & IA', cls: 'dark', title: ['Pronto para', 'código'],
    lead: 'Tokens CSS para sites, apresentações e ferramentas — e um contexto em Markdown para alimentar outras IAs na criação de peças consistentes com a marca.',
    body: `
    <div class="code-card reveal"><div class="bar"><span>tokens.css</span><button class="btn btn-light btn-sm" id="copyCss">Copiar CSS</button></div>
<pre id="cssTokens">${tokensPre(tokenGroups)}</pre></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Fontes: <code>&lt;link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&amp;family=IBM+Plex+Sans:wght@300;400;500&amp;display=swap" rel="stylesheet"&gt;</code></p>
    <div class="llm-block">
      <h3 class="sub reveal">Contexto para LLM</h3>
      <p class="reveal" style="max-width:66ch">Gera um bloco em Markdown com a identidade completa — pronto para colar como contexto em outra IA.</p>
      <div class="actions reveal" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-accent" id="genMd">Gerar .md para LLM</button><button class="btn btn-light" id="copyMd" style="display:none">Copiar texto</button><button class="btn btn-light" id="dlMd" style="display:none">Baixar .md</button></div>
      <textarea id="mdOut" readonly></textarea>
    </div>`
  });

  B.sections = [
    { id: 'essencia', navLabel: 'Essência', html: s1 }, { id: 'logo', navLabel: 'Logo', html: s2 }, { id: 'cores', navLabel: 'Cores', html: s3 }, { id: 'tipografia', navLabel: 'Tipografia', html: s4 },
    { id: 'grafismo', navLabel: 'Grafismo & ícones', html: s5 }, { id: 'componentes', navLabel: 'Componentes', html: s6 }, { id: 'pecas', navLabel: 'Peças', html: s7 }, { id: 'voz', navLabel: 'Voz', html: s8 }, { id: 'ia', navLabel: 'Tokens & IA', html: s9 }
  ];

  // ---------------- CSS ----------------
  B.css = `
  nav.top a{font-weight:600}
  nav.top a.nav-home{background:#fff;color:${AM}}nav.top a.nav-home:hover{color:${AM}}
  .kicker{font-weight:500;letter-spacing:.06em;font-size:13px;text-transform:none;color:${AM}}
  .kicker .num{border:none;padding:0;color:${AM};font-family:var(--mono);font-weight:500;background:transparent}
  .dark .kicker .num,.black .kicker .num{background:transparent;color:#A9C0DA}
  h2.title{font-size:clamp(36px,5.4vw,78px);font-weight:700;color:${AC};letter-spacing:-.02em;line-height:.98}
  h2.title::after{content:' —';color:${AC}}
  h2.title .c2{color:${AM}}
  .dark h2.title,.black h2.title{color:${AC}}.dark h2.title .c2,.black h2.title .c2{color:#fff}
  .black h2.title::after,.dark h2.title::after{color:${AC}}
  .lead{font-size:17px}
  h3.sub{font-family:var(--mono);font-weight:500;letter-spacing:.06em;text-transform:none;font-size:13px;color:${AM}}
  h3.sub::before{color:${AC}}
  .dark h3.sub,.black h3.sub{color:#A9C0DA}
  h3.sub::before{content:'● ';font-size:10px}
  .card h3{font-weight:700;letter-spacing:-.01em}
  .card .idx{font-family:var(--mono);font-weight:500;font-size:14px;color:${AM}}
  .card.is-dark .idx{color:${VD}}
  .attr span{border-color:${AC};font-weight:600}
  .quote-bar{border-radius:var(--r-xl)}
  .btn{font-size:13px;padding:14px 24px}.btn-sm{padding:10px 18px;font-size:12px}
  .btn-secondary{color:${AC};border-color:${AC}}.btn-secondary:hover{background:${AC};color:#fff}
  .on-dark .btn-secondary,.dark .btn-secondary{color:#fff;border-color:#fff}
  .btn-accent{background:${VD};color:${AM}}
  .tag{font-weight:600;font-size:11px}
  .tag-solid{background:${AM}}.tag-soft{background:#D6E8FB;color:${AM}}.tag-accent{background:${VD};color:${AM}}
  .cta-band{background:${AM}}.cta-band::before{background:${AC}}
  .c-stat{background:${AC}}
  .alert{border-radius:10px}
  .chip-note{font-size:14px;color:var(--text-2)}
  .mean{height:60px;display:flex;align-items:center;margin-bottom:12px}.mean svg{height:100%;width:auto}.mean .rt{font-family:var(--display);font-weight:800;font-size:44px;letter-spacing:-.06em;color:${AC}}
  .arch{border-radius:var(--r-card);padding:26px;display:flex;flex-direction:column;gap:10px;min-height:200px;justify-content:flex-end}.arch b{font-family:var(--display);font-size:28px;letter-spacing:-.01em}.arch span{font-size:14px;opacity:.92;line-height:1.45}
  .bars{display:flex;gap:10px;align-items:flex-end;height:200px;margin-top:16px}.bars > div{flex:1;min-width:0;height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:8px}.bars i{display:block;width:100%;border-radius:3px}.bars span{font-size:10.5px;color:var(--muted);font-family:var(--mono);text-align:center}
  .constr .cx{display:flex;gap:2px;font-family:var(--mono);font-size:12px;color:#A9C0DA;margin-bottom:8px}.constr .cx span{flex:1;text-align:center;border-bottom:1px solid #A9C0DA55;padding-bottom:4px}
  .constr .cbox{border:1px dashed #A9C0DA;padding:34px;display:flex;justify-content:center}.constr .clear{position:relative;padding:34px 44px;border:1px dashed #7aa7d6;background:#ffffff0a}
  .constr .clear i{position:absolute;font-style:normal;font-family:var(--mono);font-size:11px;font-weight:700;color:${AM};background:#A9C0DA;padding:1px 6px;border-radius:4px}.constr .clear .t{top:6px;left:50%;transform:translateX(-50%)}.constr .clear .r{right:8px;top:50%;transform:translateY(-50%)}
  .tcol{display:grid;grid-template-columns:repeat(5,1fr);border-radius:var(--r-card);overflow:hidden;border:1px solid var(--line)}
  .tcol > div{display:flex;flex-direction:column;gap:2px;padding:30px 20px;align-items:flex-start}.tcol span{font-family:var(--display);font-weight:500;font-size:clamp(28px,3.4vw,46px);line-height:1}.tcol em{font-style:normal;font-family:var(--body);font-weight:300;font-size:clamp(18px,2vw,26px)}
  .dotcard{position:relative;border-radius:var(--r-card);aspect-ratio:9/7;overflow:hidden;padding:26px;display:flex;align-items:center;justify-content:center}.dotcard svg{position:absolute;inset:26px;width:calc(100% - 52px);height:calc(100% - 52px)}
  .dotcard .cap{position:absolute;left:0;right:0;bottom:0;padding:26px 22px 16px;background:linear-gradient(0deg,rgba(0,0,0,.4),transparent);color:#fff;font-size:12.5px}.dotcard .cap b{display:block;font-family:var(--display);font-size:14px}
  .icgrid{display:grid;grid-template-columns:repeat(6,1fr);gap:0;border-top:1px solid #ffffff33;border-left:1px solid #ffffff33;margin-top:20px}.icgrid > div{border-right:1px solid #ffffff33;border-bottom:1px solid #ffffff33;background:#fff;aspect-ratio:1/1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:12px}.icgrid .pi{width:46%}.icgrid span{font-family:var(--mono);font-size:11px;color:${AM}}
  .nav-demo{display:flex;flex-wrap:wrap;gap:6px 22px;padding:16px 22px;background:#fff;border:1px solid var(--line);border-radius:10px}.nav-demo span{font-family:var(--display);font-weight:500;font-size:14px;color:#1F2A33}
  .chipo{display:inline-block;border-radius:999px;background:#E6ECEE;color:#1F2A33;font-family:var(--display);font-weight:600;font-size:13px;padding:10px 18px}
  .banner{position:relative;overflow:hidden;border-radius:var(--r-xl);background:linear-gradient(120deg,#0b2c5a,${AM});color:#fff;padding:36px 40px}.banner .bdots{position:absolute;right:0;top:0;bottom:0;display:flex;align-items:center}.banner > div:last-child{position:relative;max-width:620px}.banner h4{font-size:28px;line-height:1.1;margin:0 0 10px;font-weight:700}.banner p{color:#d1d9db;font-size:14.5px;margin:0 0 18px}
  .hero{position:relative;overflow:hidden;background:${AC};color:#fff;min-height:min(calc(100svh - 49px),800px);display:flex}
  .hero-dots{position:absolute;left:-6%;top:6%;bottom:6%;width:min(46%,640px);display:flex;align-items:center}.hero-dots svg{width:100%;height:auto}
  .hero-in{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding-top:34px;padding-bottom:44px;width:100%}
  .h-top{display:flex;justify-content:space-between;font-family:var(--body);font-size:14px;color:#fff;opacity:.9}
  .h-right{margin-left:auto;max-width:560px;margin-top:40px;margin-bottom:40px}
  .h-right h1{font-weight:300;font-size:clamp(46px,6.4vw,92px);line-height:1;letter-spacing:-.02em;margin:22px 0 20px}
  .h-right p{color:#fff;opacity:.92;font-size:17px;margin:0 0 26px}
  .h-actions{display:flex;gap:12px;flex-wrap:wrap}
  .hero .btn-secondary{color:#fff;border-color:#fff}.hero .btn-secondary:hover{background:#fff;color:${AC}}
  .h-bottom{margin-left:auto;max-width:560px;font-family:var(--display);font-weight:400;font-size:24px;color:#fff;opacity:.95;width:100%}
  @media screen and (max-width:980px){.hero-dots{opacity:.5;width:90%}.h-right{margin-left:0}.h-bottom{margin-left:0}.icgrid{grid-template-columns:repeat(4,1fr)}.tcol{grid-template-columns:1fr 1fr}}
  @media screen and (max-width:600px){.icgrid{grid-template-columns:repeat(3,1fr)}.tcol{grid-template-columns:1fr}.banner{padding:26px 22px}}
  `;

  B.gfx = 'window.GFX={};';

  B.md = `# StartSe — Design System / Brand Context (para uso por IA)

> Referência estruturada da identidade StartSe, baseada no Manual de Identidade Visual 2026 (v2). Use sempre os arquivos oficiais da logo — não recrie de memória.

## 1. Marca
- "StartSe — a sua Escola Internacional de Negócios". Integra o Grupo Alun. Frentes: formações, imersões internacionais, Global MBAs (com a FIAP), eventos, AI Tools, artigos, consultoria para empresas.
- A identidade é um sistema (logo + tipografia + cores + iconografia). Marca: próxima, diversa e adaptável.
- Arquitetura: StartSe (azul), StartSe AI / Tech Academy (@startse.ai — verde predominante), StartSe University (@startseuniversity_ — preto e branco predominantes; programas executivos).

## 2. Logo
- Assinatura completa horizontal = wordmark ".StartSe" + seta pontilhada (Lifelong Learning). O ponto = novos começos; a união "r"+"t" = conexão entre stakeholders.
- Versões: azul claro sobre branco ou cinza claro; branca sobre azul claro; sobre azul marinho: wordmark branca, seta/símbolo azul claro e tagline branca. Assinatura simplificada (.S + seta) para apps e avatares.
- Construção: x (diâmetro do ponto) + 20,5x (wordmark) + x + 5x (seta) + 2,5x. Respiro mínimo 4x em todos os lados.
- Reduções máximas: logo completa 18 px / 3,6 mm de altura; simplificada 55 px / 11 mm de largura.
- Proibido: alterar a estrutura, alterar cores (mesmo para um tom da paleta), efeitos gráficos, outline, girar/distorcer, usar sem a seta pontilhada.

## 3. Cores
| Nome | HEX (RGB do manual) | CMYK | Pantone |
|---|---|---|---|
| Azul claro | #0080ED | 85 45 0 0 | 2174 C |
| Azul marinho | #00183C | 100 70 0 77 | 2767 C |
| Preto 100 | #000000 | 91 79 62 97 | 419 C |
| Branco 100 | #FFFFFF | 0 0 0 0 | 000 C |
| Cinza claro | #D1D9DB | 21 11 13 0 | 7541 C |
| Cinza médio | #808384 | 0 0 0 60 | Cool Grey 8C |
| Verde | #00BFB8 | 75 0 42 0 | 3262 C |
- Hierarquia digital/Pantone: azul claro > azul marinho > preto = branco > cinza médio > cinza claro > verde. Impresso CMYK: azul marinho > preto = branco > cinza claro > azul claro > cinza médio > verde.
- Cinza médio para textos; cinza claro para fundos; verde só em detalhes (gráficos, notificações), predominante na StartSe AI; preto/branco predominantes na University e em programas executivos impressos.
- Interface (site): rampa de azuis #001c3b … #ebf1ff; fundo #FAFAFA; texto #333.

## 4. Tipografia
- Barlow (headline, título, subtítulo) e IBM Plex Sans (corpo, retranca). Fallback: Calibri.
- Hierarquia (pt): headline Barlow 58,2 · corpo Plex Sans 18 · retranca Plex Sans 14,2 · subtítulo Barlow 14,2 · título Barlow 23 · corpo Plex Sans 14,2.
- Aplicações cromáticas: sobre branco e cinza claro → Barlow azul claro + Plex cinza médio; sobre azul claro → tudo branco; sobre azul marinho → Barlow azul claro (ou branco) + Plex branco; sobre preto → branco.
- Web (site): Barlow 500 16 px; botões Barlow 600 13 px caixa alta.

## 5. Grafismo e ícones
- Ponto/círculo em grade formando a seta (diâmetro ≈ 2/3 do passo); sobre azul claro em branco com baixa opacidade; sobre branco em cinza claro.
- Ícones de traço fino contínuo em azul marinho (50 no manual).

## 6. Componentes
- Botão primário: Azul claro #0080ED, texto branco, Barlow Semibold 13 px, caixa alta, raio 6–10 px. Botão "Sou aluno" em contorno cinza. Navegação em Barlow Medium. Chips arredondados cinza claro.

## 7. Voz (proposta — não consta no manual)
- Próxima, global, orientada ao futuro (Lifelong Learning). Exemplos do site: "MBAs Globais FIAP & StartSe: Liderança, IA e Inovação Global." · "Programas de impacto que preparam lideranças à prova de futuro…" · "O que importa AGORA".

## 8. Checklist
Logo com respiro 4x e sem alterações · azul claro e marinho no protagonismo · Barlow nos títulos + Plex Sans no corpo · verde só em detalhes (ou na StartSe AI) · seta pontilhada como grafismo em baixo contraste · ícones de traço fino · textos pequenos sobre azul claro com cuidado de contraste.

## 9. Fonte
Manual de Identidade Visual StartSe 2026 (v2) · startse.com
`;

  return B;
};
