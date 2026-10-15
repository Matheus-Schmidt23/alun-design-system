// Alura — Design System (fonte: Alura Rebranding Toolkit / Brand Guidelines V2.0 Abril 2026 + alura.com.br)
module.exports = (H) => {
  const { sec, sw, swGrid, ramp, card, rule, li, dd, dodont, sub, tile, lg, tokensPre } = H;

  const TB = '#0429BC', DB = '#011676', BU = '#010C53', DV = '#1F53E5', NB = '#0C0C0E', WS = '#F4F5F6';

  const B = {
    id: 'alura', name: 'Alura', version: 'v1.0',
    description: 'Design System da Alura: marca, cores, tipografia, grid e patterns, componentes, peças e tom de voz — baseado no Brand Guidelines V2.0 (abril de 2026).',
    footerNote: 'Baseado no Brand Guidelines V2.0 · Abril 2026',
    fontsHref: 'https://fonts.googleapis.com/css2?family=Encode+Sans:wght@200;300;400;500;600;700&family=Encode+Sans+Expanded:wght@200;300;400;500;600&family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,600&family=Roboto+Mono:wght@400;500&display=swap',
    navLogoHex: '#FFFFFF', footLogoHex: '#FFFFFF', faviconHex: TB,
    logo: {
      w: 107, h: 32,
      paths: '<path d="M21.73,32L15.4,5.66c-.2-.8-.46-1.31-.8-1.57-.34-.26-.9-.39-1.73-.39s-1.4.13-1.73.39c-.33.26-.6.77-.8,1.57l-6.33,26.34H0L6.56,4.72c.36-1.41,1.13-2.56,2.29-3.42C10,.44,11.36,0,12.87,0s2.87.44,4.03,1.3c1.16.86,1.92,2.01,2.29,3.43l6.56,27.27h-4.01,0Z"/><path d="M34.23,0h-3.89v32h3.89V0Z"/><path d="M47.92,32c-2.58,0-4.6-.7-5.99-2.08-1.39-1.38-2.09-3.39-2.09-5.96v-15.11h3.89v14.72c0,1.35.1,2.31.31,2.94.23.69.66,1.18,1.29,1.44.58.24,1.47.36,2.72.36h9.38V8.84h3.89v23.16h-13.41Z"/><path d="M66.95,32v-15.11c0-2.57.75-4.57,2.22-5.95,1.48-1.39,3.6-2.09,6.31-2.09h4.39v3.7h-4.7c-1.24,0-2.13.12-2.72.36-.63.26-1.07.75-1.29,1.44-.21.63-.31,1.59-.31,2.94v14.72h-3.9Z"/><path d="M91.16,32c-1.03,0-1.98-.26-2.84-.77-.86-.51-1.56-1.2-2.07-2.06-.51-.85-.77-1.8-.77-2.82,0-1.16.34-2.23,1-3.2.67-.97,1.55-1.66,2.63-2.08l13.91-5.31-.03-.28c-.05-.47-.12-.84-.22-1.14-.22-.69-.66-1.18-1.29-1.44-.58-.24-1.47-.36-2.72-.36h-12.83v-3.7h12.52c2.71,0,4.82.7,6.3,2.09,1.47,1.38,2.22,3.38,2.22,5.95v10.52c0,1.27-.44,2.33-1.34,3.24-.9.91-1.97,1.35-3.27,1.35h-11.2ZM90.54,24.68c-.5.18-.81.38-.96.64-.14.24-.2.6-.2,1.15,0,.73.12,1.2.37,1.45.25.25.7.37,1.41.37h11.2c.13,0,.32-.04.5-.22.14-.14.22-.31.22-.5v-7.7l-12.54,4.8Z"/>'
    },
    symbol: null,
    dlColors: [
      { k: 'preto', hex: NB, name: 'New Black', bg: WS },
      { k: 'branco', hex: '#FFFFFF', name: 'Branco', bg: BU },
      { k: 'tech-blue', hex: TB, name: 'Tech Blue', bg: '#FFFFFF' },
      { k: 'azul-claro', hex: '#7A9FF0', name: 'Azul 300', bg: NB }
    ],
    theme: {
      action: TB,
      vars: {
        '--c-deep': BU, '--c-action': TB, '--c-action-hover': DV, '--on-action': '#fff', '--c-black': NB, '--c-soft': '#B2B4BD', '--c-accent': '#7A9FF0', '--on-accent': BU,
        '--c-tint': '#D1DEF9', '--c-sec': TB, '--on-sec': '#fff', '--c-title2': '#3165E7',
        '--ink': '#1C1D21', '--paper': '#FFFFFF', '--text-2': '#42444D', '--muted': '#6C707F', '--line': 'rgba(28,29,33,.12)', '--fog-soft': '#EEEFF1', '--sec-alt': WS,
        '--grad-b': 'linear-gradient(135deg,#0429BC 0%,#1F53E5 55%,#7A9FF0 100%)',
        '--display': '"Encode Sans",system-ui,sans-serif', '--body': '"Roboto Flex","Encode Sans",system-ui,sans-serif', '--serif': '"Encode Sans Expanded","Encode Sans",sans-serif', '--mono': '"Roboto Mono",ui-monospace,Consolas,monospace',
        '--serif-style': 'normal', '--serif-w': '300',
        '--r-sm': '4px', '--r-btn': '4px', '--r-card': '8px', '--r-xl': '14px', '--r-pill': '999px', '--r-chk': '4px', '--r-piece': '6px',
        '--shadow': '0 1px 2px rgba(1,12,83,.05),0 8px 24px rgba(1,12,83,.07)', '--shadow-lg': '0 2px 4px rgba(1,12,83,.06),0 22px 48px rgba(1,12,83,.16)',
        '--h-w': '300', '--h-tt': 'none', '--h-ls': '-.03em', '--h-lh': '1.04',
        '--btn-font': '"Roboto Flex",system-ui,sans-serif', '--btn-w': '500', '--btn-ls': '.02em', '--btn-tt': 'none',
        '--nav-bg': 'rgba(12,12,14,.88)', '--nav-dim': '#A7A9B4', '--num-bg': 'transparent', '--num-fg': '#7A9FF0', '--q-w': '300', '--q-tt': 'none', '--vx-font': '"Encode Sans",sans-serif', '--h4-w': '500', '--h4-tt': 'none',
        '--al-info-bg': '#E3EDFF', '--al-info-fg': '#021E94', '--al-info': '#0675F9'
      }
    },
    contrast: [
      ['#FFFFFF', TB, 'Branco sobre Tech Blue', 'Botão primário · blocos de marca'],
      ['#FFFFFF', DV, 'Branco sobre Dev Blue', 'Hover do botão · destaques'],
      ['#FFFFFF', DB, 'Branco sobre Deep Blue', 'Seções institucionais'],
      ['#FFFFFF', BU, 'Branco sobre Blue Universe', 'Fundo mais profundo'],
      ['#FFFFFF', NB, 'Branco sobre New Black', 'Interface escura, apresentações'],
      ['#7A9FF0', NB, 'Azul 300 sobre New Black', 'Links e destaques em fundo escuro'],
      ['#7A9FF0', BU, 'Azul 300 sobre Blue Universe', 'Texto de apoio em azul profundo'],
      [TB, '#FFFFFF', 'Tech Blue sobre Branco', 'Links e títulos em fundo claro'],
      [TB, WS, 'Tech Blue sobre White Snow', 'Texto em seções neutras'],
      [NB, '#67FE85', 'New Black sobre Green Dev', 'Acento de campanha (growth)'],
      ['#FFFFFF', '#5D3BC4', 'Branco sobre Purple Tech', 'Acento de campanha (growth)'],
      ['#FFFFFF', '#FC5D03', 'Branco sobre Orange Dev', 'Só texto grande — prefira New Black']
    ]
  };

  // ---------------- HERO ----------------
  B.hero = `
<header class="hero">
  <canvas class="hero-pat" data-gfx="quads" data-seed="12" data-mode="quads"></canvas>
  <div class="orb"></div>
  <div class="wrap hero-in">
    <div class="h-meta"><span>Design System · v1.0 · 2026</span><span>Brand Guidelines V2.0 · Abril 2026</span></div>
    <div class="h-body">
      <h1>Despertar os <em>superpoderes</em> da tecnologia nas pessoas.</h1>
      <p>Fundamentos, componentes e regras de composição para criar qualquer peça Alura — da interface do produto ao slide, do e-mail ao stand — com a precisão de um sistema e a clareza de quem organiza o agora.</p>
      <div class="h-actions"><a class="btn btn-primary" href="#cores">Explorar as cores</a><a class="btn btn-secondary" href="#logo">Ver o logo</a></div>
    </div>
    <div class="h-foot">${lg(B, 'logo', '#fff', 'height:30px')}<span>Ecossistema de aprendizagem tech</span></div>
  </div>
</header>`;

  // ---------------- 01 ESSÊNCIA ----------------
  const s1 = sec({
    id: 'essencia', num: '01', label: 'Essência da marca', title: ['Tecnologia', 'que organiza o agora'],
    lead: 'A Alura é o ecossistema de aprendizagem tech mais conectado ao presente e ao próximo movimento do mercado — onde desenvolvedores, <i>builders</i> e profissionais de tecnologia encontram profundidade técnica, direção clara e uma comunidade ativa. O design é a disciplina que conecta conhecimento e inspiração.',
    body: `
    <div class="grid g2 reveal" style="margin-top:40px">
      <div class="card is-dark" style="background:${BU}"><div class="label-k">Propósito</div><h3 style="font-weight:300;font-size:26px;line-height:1.2">Despertar os superpoderes da tecnologia nas pessoas — amplificando potenciais, vozes e comunidades.</h3></div>
      <div class="card is-dark" style="background:${TB}"><div class="label-k" style="color:#D1DEF9">Sonho</div><h3 style="font-weight:300;font-size:26px;line-height:1.2">Alavancar o protagonismo dev em um mundo onde a tecnologia é a base de todo o mercado e de todas as carreiras.</h3></div>
    </div>

    ${sub('Posicionamento')}
    <div class="card reveal" style="padding:32px 36px"><p style="font-size:17px;max-width:90ch;margin:0">Para pessoas que enxergam a tecnologia como o principal caminho de evolução profissional, do primeiro passo à liderança técnica, a Alura é o ecossistema de aprendizagem tech mais conectado ao presente e ao próximo movimento do mercado. Diferente de escolas tradicionais ou plataformas genéricas, combina <b>profundidade técnica, direção clara e aplicação prática</b> com a força de uma comunidade ativa e a autoridade de <i>founders</i> que vivem a transformação tecnológica em tempo real.</p></div>

    ${sub('Valores e personalidade')}
    <div class="grid g2 reveal">
      <div class="card"><h3>Valores</h3><div class="chips"><span>Protagonismo dev</span><span>Paixão por tecnologia</span><span>Evolução contínua</span><span>Profundidade técnica</span><span>Community-centric</span><span>Nowness</span><span>Inovação contínua</span></div></div>
      <div class="card"><h3>Personalidade</h3><div class="chips"><span>Pessoal</span><span>Encorajadora</span><span>Acolhedora</span><span>Inspiradora</span><span>Mentora</span><span>Inteligente</span><span>Transformadora</span><span>Realista</span><span>Conectora</span></div></div>
    </div>

    ${sub('Princípios de design')}
    <div class="grid g3 reveal">
      ${card('Estética com propósito', 'Estética não é ornamentação: é a expressão do compromisso com a excelência. Forma e conteúdo em harmonia, traduzindo conhecimento em experiências intuitivas.', { idx: '1' })}
      ${card('Convite à evolução', 'Cada projeto guia, desafia e inspira — da descoberta de uma nova habilidade à realização de um sonho profissional.', { idx: '2' })}
      ${card('Laços entre pessoas e ideias', 'Cada escolha de forma, cor e interação aproxima o aluno do seu potencial máximo, fomentando curiosidade e criatividade.', { idx: '3' })}
      ${card('Singularidade', 'Transcender o ordinário: romper com clichês e padrões previsíveis para oferecer experiências que inspiram e empoderam.', { idx: '4' })}
      ${card('Excelência nos detalhes', 'Rigor da concepção à implementação — experiências esteticamente agradáveis, funcionais, acessíveis e emocionalmente impactantes.', { idx: '5' })}
      ${card('Agente de transformação', 'Ir além da apresentação de informação: criar experiências que provoquem mudanças reais em como as pessoas aprendem e se desenvolvem.', { idx: '6', dark: true })}
    </div>

    <div class="quote-bar reveal" style="background:${NB}">
      <div class="qm">“</div>
      <div><p>Nowness não é apenas tempo. É posicionamento.</p><small>Princípio de comunicação · Brand Guidelines V2.0</small></div>
    </div>`
  });

  // ---------------- 02 LOGO ----------------
  const wr = (inner, label, bg = '#fff', color = '') => `<div style="background:${bg}">${inner}<span${color ? ` style="color:${color}"` : ''}>${label}</span><b class="x"${color ? ` style="color:${color}"` : ''}>✕</b></div>`;
  const s2 = sec({
    id: 'logo', num: '02', label: 'Logo', cls: 'black', title: ['Um logotipo,', 'nenhum ruído'],
    lead: 'O logo da Alura é um dos ativos mais valiosos da marca: tipografia limpa, minimalista e moderna, de curvas sutis e equilíbrio visual. Ele traduz a essência contemporânea e tecnológica da Alura e orienta decisões de design. <b style="color:#fff">Nenhuma alteração é permitida</b> — proporções, cores e espaçamentos seguem rigorosamente o guia.',
    body: `
    <div class="logo-grid reveal" style="margin-top:44px">
      ${tile(B, { bg: `background:${WS};color:${NB}`, hex: NB, label: 'New Black — padrão em fundo claro' })}
      ${tile(B, { bg: `background:${NB};color:#fff;border:1px solid rgba(255,255,255,.18)`, hex: '#fff', label: 'Branco — padrão em fundo escuro' })}
      ${tile(B, { bg: `background:${TB};color:#fff`, hex: '#fff', label: 'Branco — sobre Tech Blue' })}
      ${tile(B, { bg: 'background:#fff;color:#1C1D21', hex: TB, label: 'Tech Blue — sobre branco' })}
      ${tile(B, { bg: `background:${BU};color:#fff`, hex: '#fff', label: 'Branco — sobre Blue Universe' })}
      ${tile(B, { bg: 'background:#7A9FF0;color:#010C53', hex: NB, label: 'New Black — sobre Azul 300' })}
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">O guia prevê versões positiva e negativa, e variações para a linha <b style="color:#fff">Alura Para Empresas</b> (<i>primary</i> e <i>secondary</i>). O logo pode ser aplicado contra fundos coloridos da paleta, fotografias, gradientes ou ilustrações — desde que o contraste garanta a leitura. Sobre imagem com pouca leitura, use um fundo neutro, sem grafismos ou textos atrás.</p>

    ${sub('Baixar em PNG')}
    <div class="dl-bar reveal"><span class="dl-lb">Largura do arquivo</span>
      <div class="dl-seg" id="dlSize" role="group" aria-label="Largura do PNG"><button type="button" data-w="512">512 px</button><button type="button" data-w="1024">1024 px</button><button type="button" data-w="2048" class="on">2048 px</button><button type="button" data-w="4096">4096 px</button></div>
      <span class="dl-note">Fundo transparente · gerado a partir do vetor</span></div>
    <div class="dl-grid reveal" id="dlGrid"></div>

    ${sub('Área de respiro')}
    <div class="clear-demo reveal">
      <div class="cs-box"><i class="xt">x</i><i class="xl">x</i><i class="xr">x</i><i class="xb">x</i>${lg(B, 'logo', '#fff', 'height:56px')}</div>
      <p style="max-width:460px;margin:0">A área de respiro é a <b style="color:#fff">altura-x</b> — a medida de um caractere em caixa baixa, proporcional ao logo — em todos os lados. Nenhum texto, foto ou borda de bloco invade essa área.<br><br><b style="color:#fff">Tamanho mínimo:</b> o guia não fixa um valor; recomendamos 64&nbsp;px de largura em tela. <span class="chip-prop">proposta</span></p>
    </div>`
  });

  // ---------------- 03 CORES ----------------
  const rgb = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(' '); };
  const c = (name, hex, role, o = {}) => Object.assign({ name, hex, role, rgb: rgb(hex), wide: false }, o);
  const blueRamp = [['50', '#D1DEF9'], ['100', '#B5CBF6'], ['200', '#9AB7F3'], ['300', '#7A9FF0'], ['400', '#5F8BEC'], ['500', '#4878EA'], ['600', '#3165E7'], ['700', '#1F53E5'], ['800', '#0D3EE3'], ['900', '#052FD3'], ['1000', '#0429BC'], ['1100', '#0323A6'], ['1200', '#021E94'], ['1300', '#021982'], ['1400', '#011676'], ['1500', '#011164'], ['1600', '#010C53']];
  const neutral = [['#F4F5F6', 0], ['#DEDFE3', 0], ['#CDCFD5', 0], ['#BDBFC7', 0], ['#A7A9B4', 0], ['#868998', 1], ['#6C707F', 1], ['#545763', 1], ['#42444D', 1], ['#2F3037', 1], ['#1C1D21', 1], ['#131316', 1], ['#0C0C0E', 1]];
  const s3 = sec({
    id: 'cores', num: '03', label: 'Cores', title: ['Azul em', 'primeiro plano'],
    lead: 'O azul estabelece um tom de confiança e inovação; aliado à neutralidade do preto e à clareza do branco, gera um visual moderno, limpo e marcante. Clique em qualquer cor para copiar o HEX.',
    body: `
    ${sub('Cores principais')}
    ${swGrid([
      c('Tech Blue', TB, 'Cor principal — reconhecimento, botões, assinatura', { wide: true, pantone: 'Pantone 293 C', cmyk: '100 69 0 4' }),
      c('Deep Blue', DB, 'Azul profundo — seções institucionais', { pantone: 'Pantone Reflex Blue C' }),
      c('Blue Universe', BU, 'Azul mais profundo — fundos e gradientes', { cmyk: '100 89 0 0' }),
      c('Dev Blue', DV, 'Azul vibrante — hover, estados e destaques'),
      c('New Black', NB, 'Preto da marca — interface escura, texto'),
      c('White Snow', WS, 'Branco frio — superfícies e respiro', { light: true, bordered: true })
    ])}
    ${sub('Metálicos', 'somente impressão')}
    <div class="sw-grid reveal">
      ${[['Cold Silver', 'Pantone Silver 10077 C', 'linear-gradient(135deg,#dfe2e8,#aab0bb 50%,#e9ecf1)'], ['Tech Silver', 'Pantone 10388 C', 'linear-gradient(135deg,#c9ccd3,#868b96 50%,#d7dae0)'], ['Blue Metalic', 'Pantone 10260 C', 'linear-gradient(135deg,#7a9ff0,#0d3ee3 55%,#7a9ff0)'], ['Dev Metalic', 'Pantone 10272 C', 'linear-gradient(135deg,#5f8bec,#021e94 55%,#5f8bec)']].map(([n, p, g]) => `<div class="sw sm" style="background:${g};color:${/Silver/.test(n) ? '#0C0C0E' : '#fff'};cursor:default"><div><div class="nm">${n}</div><div class="role">Tinta especial</div></div><div class="codes"><b>PANTONE</b>${p}</div></div>`).join('')}
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13px;color:var(--muted)">O guia especifica os metálicos apenas por Pantone. A prévia acima é uma simulação em CSS, sem valor de cor oficial.</p>

    ${sub('Escala de azuis (UI)')}
    ${ramp(blueRamp.map(([n, h], i) => [n, h, i >= 5]), 17)}
    <p class="reveal" style="margin-top:12px;font-size:13.5px">Os azuis complementares ampliam a profundidade do sistema: criam variações, reforçam estados e apoiam a navegação. <b>Tech Blue = 1000</b> · Dev Blue = 700 · Deep Blue = 1400 · Blue Universe = 1600.</p>

    ${sub('Neutros de interface')}
    ${ramp(neutral.map(([h, d]) => [h.slice(1), h, d]), 13)}

    ${sub('Cores de acento — growth', 'uso controlado')}
    ${swGrid([
      c('Purple Tech', '#5D3BC4', 'Campanhas e peças de performance'),
      c('Green Dev', '#67FE85', 'Campanhas e peças de performance', { light: true, style: 'color:#0C0C0E' }),
      c('Tech Red', '#E6193B', 'Campanhas e peças de performance'),
      c('Orange Dev', '#FC5D03', 'Campanhas e peças de performance')
    ])}
    <p class="reveal" style="margin-top:12px;font-size:13.5px">As <b>Growth Accent Colors</b> ampliam a flexibilidade em campanhas de aquisição e conversão, mas funcionam como <b>acentos, não como base</b>: a identidade segue reconhecível por tipografia, grid, tom de voz, componentes, logotipo e cores institucionais.</p>

    ${sub('Cores funcionais de interface')}
    ${swGrid([
      c('Information', '#0675F9', 'Orientação, contexto, feedback neutro', { sm: true }),
      c('Success', '#06F936', 'Confirmação, progresso — tons de 100 a 1000', { sm: true, light: true, style: 'color:#0C0C0E' }),
      c('Warning', '#F95E06', 'Atenção — o amarelo #F9D006 pode ser alternativa', { sm: true }),
      c('Error', '#F8062F', 'Falhas e ações que exigem correção imediata', { sm: true })
    ])}

    ${sub('Gradientes')}
    <div class="grid g3 reveal">
      <div class="grad" style="background:radial-gradient(circle at 20% 25%,#7A9FF0 0,transparent 45%),radial-gradient(circle at 80% 30%,#1F53E5 0,transparent 50%),radial-gradient(circle at 50% 90%,#0429BC 0,transparent 55%),#010C53"><span>Malha azul</span></div>
      <div class="grad" style="background:radial-gradient(circle at 80% 20%,#5D3BC4 0,transparent 48%),radial-gradient(circle at 15% 80%,#1F53E5 0,transparent 55%),radial-gradient(circle at 60% 70%,#0429BC 0,transparent 50%),#0C0C0E"><span>Malha azul + roxo</span></div>
      <div class="grad" style="background:linear-gradient(180deg,#0C0C0E 0%,#011164 45%,#0429BC 100%)"><span>Degradê vertical</span></div>
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13.5px">Os gradientes representam a fluidez do aprendizado. No guia, são criados no Illustrator: retângulos nas cores primárias, rasterizados em um único objeto e transformados com <i>gradient mesh</i>. As malhas acima são aproximações em CSS.</p>

    ${sub('Contraste e acessibilidade', 'calculado')}
    <div class="card reveal" style="padding:10px 18px"><table class="ctr-table" id="ctrTable"></table></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Razões calculadas pela fórmula WCAG 2.x (texto normal exige 4,5:1; grande, 3:1). Em interfaces, azuis claros (≤ 400) só funcionam como texto sobre fundos escuros.</p>`
  });

  // ---------------- 04 TIPOGRAFIA ----------------
  const specRow = (tag, fam, w, size, lh, sample, note) => `<div class="scale-row"><span class="tg">${tag}</span><span style="font-family:${fam};font-weight:${w};font-size:${Math.min(size, 64)}px;line-height:${size > 64 ? 1.05 : lh / size};letter-spacing:${size > 40 ? '-.02em' : '0'}">${sample}</span><span class="sp">${note || ''} ${size}/${lh}</span></div>`;
  const E = "'Encode Sans',sans-serif", R = "'Roboto Flex',sans-serif";
  const s4 = sec({
    id: 'tipografia', num: '04', label: 'Tipografia', cls: 'alt', title: ['Precisão com', 'personalidade'],
    lead: 'A tipografia é tão importante quanto o nome ou o logotipo: combina fontes com precisão e contemporaneidade, evidenciando uma personalidade tecnológica, próxima e acessível. Cada contraste equilibra clareza, fluidez e dinamismo.',
    body: `
    <div class="fam reveal" style="margin-top:40px">
      <div class="card"><div class="label">Títulos e subtítulos · Encode Sans</div><div class="big" style="font-family:${E};font-weight:300;letter-spacing:-.03em">Encode Sans</div>
        <div style="font-family:${E};font-size:20px;line-height:1.25;font-weight:400">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789</div>
        <div class="weights" style="font-family:${E}"><span style="font-weight:200">ExtraLight</span><span style="font-weight:300">Light</span><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span><span style="font-weight:600">SemiBold</span></div>
        <div class="meta">Desenho geométrico e equilibrado: clareza e dinamismo. Pesos leves em títulos grandes; Medium/SemiBold para ênfase em tamanhos menores.</div></div>
      <div class="card"><div class="label">Destaques de campanha · Encode Sans Expanded</div><div class="big" style="font-family:'Encode Sans Expanded',sans-serif;font-weight:200;letter-spacing:-.02em;font-size:44px">Expanded</div>
        <div style="font-family:'Encode Sans Expanded',sans-serif;font-size:17px;line-height:1.3;font-weight:300">AaBbCcDdEeFfGgHh<br>IiJjKkLlMmNnOoPp<br>QqRrSsTtUuVvWwXx 0123</div>
        <div class="weights" style="font-family:'Encode Sans Expanded',sans-serif"><span style="font-weight:200">ExtraLight</span><span style="font-weight:300">Light</span><span style="font-weight:500">Medium</span></div>
        <div class="meta">Uso específico para títulos em destaque — principal aplicação em campanha. Números: casos especiais, uso moderado.</div></div>
      <div class="card is-dark"><div class="label" style="color:var(--c-soft)">Corpo de texto · Roboto Flex</div><div class="big" style="font-family:${R};font-weight:400;letter-spacing:-.02em;font-size:52px">Roboto Flex</div>
        <div style="font-family:${R};font-size:18px;line-height:1.35">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789</div>
        <div class="weights" style="font-family:${R}"><span style="font-weight:300">Light</span><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span><span style="font-weight:600">SemiBold</span></div>
        <div class="meta" style="color:var(--c-soft)">Fonte variável, adapta altura, largura, peso e contraste — ideal para interfaces, animações e peças responsivas.</div></div>
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Fontes abertas (Google Fonts). Licenças e downloads oficiais estão no Brand Guidelines (seção “Informações úteis”).</p>

    ${sub('Escala tipográfica')}
    <p class="reveal" style="max-width:68ch">A escala é <b>progressiva</b>: tamanhos menores crescem em intervalos curtos; maiores, em intervalos amplos — a cada quatro níveis o incremento aumenta 2&nbsp;px (20→24→28→32→36 · 36→42→48→54→60 · 60→68→76→84→92). Todos os <i>line-heights</i> são múltiplos de 4&nbsp;px.</p>
    <div class="card reveal" style="padding:10px 28px">
      <div class="scale">
        ${specRow('Display 07', E, 300, 194, 224, 'Alura', 'Encode Sans Light')}
        ${specRow('Display 04', E, 300, 102, 132, 'Nowness', 'Encode Sans Light')}
        ${specRow('Display 01', E, 400, 68, 86, 'Aprenda tech', 'Encode Sans Regular')}
        ${specRow('Heading 07', E, 400, 60, 76, 'Profundidade técnica', 'Encode Sans Regular')}
        ${specRow('Heading 04', E, 400, 42, 56, 'Direção clara e aplicação prática', 'Encode Sans Regular')}
        ${specRow('Heading 02', E, 500, 28, 40, 'Comunidade ativa e impactante', 'Encode Sans Medium')}
        ${specRow('Heading 01', E, 500, 20, 28, 'Dev em T: amplitude e profundidade', 'Encode Sans Medium')}
        ${specRow('Body 06', R, 400, 20, 28, 'Conteúdo que acompanha a velocidade da tecnologia.', 'Roboto Flex Regular')}
        ${specRow('Body 04', R, 400, 16, 24, 'Organizamos pensamento, oferecemos direção e ajudamos a decidir com clareza.', 'Roboto Flex Regular')}
        ${specRow('Body 03', R, 500, 14, 20, 'Texto de apoio e rótulos de interface', 'Roboto Flex Medium')}
        ${specRow('Body 01', R, 400, 10, 16, 'Legendas e metadados', 'Roboto Flex Regular')}
      </div>
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13.5px">Cada estilo existe em duas versões: <b>Light</b> (texto escuro sobre fundo claro) e <b>Dark</b> (texto claro sobre fundo escuro, com um peso a menos — por exemplo, Regular → Light). Display 01–07 · Heading 01–07 · Body 01–06. Todos já estão como <i>text styles</i> nos arquivos Figma.</p>

    ${sub('Ritmo vertical')}
    <div class="grid g3 reveal">
      ${card('Linhas de 4 px', 'O espaçamento e os <i>line-heights</i> seguem incrementos fixos de 4 px, alinhando o fluxo dos parágrafos à malha do grid.')}
      ${card('Exemplo', 'Texto de 61 px (aderente à escala) com line-height de 64 px — divisível por 4, encaixa em linhas e gutters de 4 px.')}
      ${card('Em todos os meios', 'A regra vale em desktop e mobile, em UI e em peças — facilita responsividade, componentes e legibilidade.', { dark: true })}
    </div>`
  });

  // ---------------- 05 GRID, PATTERNS & CÍRCULO ----------------
  const s5 = sec({
    id: 'grid', num: '05', label: 'Grid, patterns & círculo', cls: 'black', title: ['Lógica', 'construída'],
    lead: 'A linguagem visual da Alura parte de uma <b style="color:#fff">lógica de construção, nunca de ornamentação</b>: proporção, ritmo, escala, repetição e variação como fundamentos; formas que parecem ter uma regra interna — um algoritmo, uma malha, um fluxo de dados. Nada deve parecer aleatório, nem excessivo: o minimalismo é o critério de edição.',
    body: `
    <div class="grid g3 reveal" style="margin-top:36px">
      <div class="card is-dark" style="background:#131316;border:1px solid #2F3037"><div class="label-k">Matemática</div><h3>Estrutura invisível</h3><p>Grids, módulos, sequências, progressões, simetrias e deformações controladas organizam a percepção — sem fórmulas literais.</p></div>
      <div class="card is-dark" style="background:#131316;border:1px solid #2F3037"><div class="label-k">Proceduralidade</div><h3>Sistemas que evoluem</h3><p>Uma regra simples gera variações complexas: entrada, transformação e saída. A marca parece viva e adaptável, nunca caótica.</p></div>
      <div class="card is-dark" style="background:#131316;border:1px solid #2F3037"><div class="label-k">Minimalismo</div><h3>Precisão, não falta</h3><p>Cada elemento existe por uma razão; o espaço negativo cria foco, tensão ou respiro. Complexidade vira inteligível.</p></div>
    </div>

    ${sub('Grid modular')}
    <div class="two reveal">
      <div class="gridviz">
        ${[2, 4, 6, 8, 12, 16].map(n => `<div class="gv"><span>${n} col</span><div style="grid-template-columns:repeat(${n},1fr)">${'<i></i>'.repeat(n)}</div></div>`).join('')}
      </div>
      <div class="rules">
        ${rule(1, 'Colunas progressivas', '2, 4, 6, 8, 12 ou 16 colunas, em lógica de subdivisões — válidas para interfaces digitais e composições físicas.')}
        ${rule(2, 'Margens e gutters no canvas', 'Inclua margens e gutters para manter o conteúdo afastado das bordas; em digital ou impresso, podem seguir a plataforma ou a gráfica.')}
        ${rule(3, 'Unidade base de 4 px', 'Margens, gutters, ícones, ilustrações e blocos de texto seguem múltiplos de 4 px, com grid auxiliar tipográfico de linhas de 4 px.')}
        ${rule(4, 'Breakpoints', 'Small · Medium · Large · X-Large — a mesma lógica escala do mobile ao desktop.', true)}
      </div>
    </div>

    ${sub('Patterns procedurais')}
    <p class="reveal" style="max-width:70ch">Patterns são expressões visuais da essência técnica e dinâmica: nascem de regras claras, mas permitem variações. <b style="color:#fff">Opacidade randômica entre 15 e 85%</b>; quando houver cor, sempre as <b style="color:#fff">Brand Colors</b> — nunca cores complementares ou fora do guia. Podem ser criados com o plugin Generista (Figma) ou no Cavalry.</p>
    <div class="pat-box reveal">
      <canvas id="patDemo" data-gfx="quads" data-seed="21" data-mode="quads"></canvas>
      <div class="pat-ctl"><button class="btn btn-primary btn-sm" id="patNew" type="button">Novo pattern</button>
        <div class="dl-seg" id="patMode" role="group" aria-label="Tipo de pattern"><button type="button" data-m="quads" class="on">Quads</button><button type="button" data-m="lines">Linhas</button><button type="button" data-m="dots">Pontos</button></div></div>
    </div>

    ${sub('O círculo')}
    <div class="two reveal" style="align-items:center">
      <div class="circles"><div class="c1"></div><div class="c2"></div><div class="c3"></div></div>
      <div class="rules">
        ${rule('○', 'Comunidade em movimento', 'O círculo é a forma essencial da linguagem: geometria pura e atemporal que representa a comunidade como organismo vivo, com o aluno sempre no centro — conexões, ciclos e evolução.')}
        ${rule('○', 'Elemento versátil', 'Pode compor imagens protagonistas, servir de background ou comunicar rapidamente desconto e preço em animações promocionais.')}
        ${rule('○', 'Com propósito', 'Nunca de forma gratuita ou decorativa — e sem desacompanhar o logo completo, para não virar mera ilustração. Não use como máscara de fotos de pessoas.', true)}
      </div>
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Clonar e espelhar o círculo para criar fluxo é permitido <b style="color:#fff">somente em contextos animados</b> (vinhetas, transições, aberturas); em peças estáticas, o tratamento compromete a integridade da forma.</p>`
  });

  // ---------------- 06 IMAGEM ----------------
  const s6 = sec({
    id: 'imagem', num: '06', label: 'Fotografia & imagem', title: ['Histórias reais,', 'impacto real'],
    lead: 'A fotografia torna visível o impacto da tecnologia na trajetória das pessoas. Valorizamos espontaneidade e imperfeição estética quando carregadas de verdade — as imagens não são decorativas: são componentes ativos da identidade, com função editorial, emocional e estratégica.',
    body: `
    <div class="grid g2 reveal" style="margin-top:36px">
      <div class="card"><div class="label-k">Documental</div><h3>Momentos, não poses</h3><p>Estimule movimento natural, riso espontâneo, concentração genuína. Permita que a pessoa interaja com o ambiente ou o device, como se fosse observada, não dirigida. Cada imagem conta uma micro-história.</p></div>
      <div class="card"><div class="label-k">Autoral</div><h3>Retratos próximos, direção cuidadosa</h3><p>Estética minimalista e sofisticada: foco na expressão, no olhar, na postura. Fundo discreto, paleta sóbria, cenário que não compete. O aluno ou a personalidade tech é inspiração para outros.</p></div>
    </div>
    ${sub('Direção fotográfica')}
    <div class="grid g4 reveal">
      <div class="card"><div class="label-k">Composição</div><p>Assimétrica, planos médios e <i>close-ups</i>. Elementos do ambiente (plantas, mobiliário, janelas) como molduras.</p></div>
      <div class="card"><div class="label-k">Paleta e tom</div><p>Tons terrosos, verdes, beges e neutros. Cores da paleta, principalmente as primárias, nos <i>props</i>. Sem filtros.</p></div>
      <div class="card"><div class="label-k">Luz</div><p>Natural, com sombras marcadas ou suaves; luz de janela para atmosferas calorosas; indireta em ambientes fechados.</p></div>
      <div class="card"><div class="label-k">Diversidade</div><p>Gênero, cor, idade, estilo, corpo e contexto social — múltiplas realidades do Brasil conectado à tecnologia.</p></div>
    </div>

    ${sub('Tratamentos de imagem', 'referências de tom')}
    <div class="tex-grid reveal">
      <div class="tex"><div class="fill" style="background:radial-gradient(circle at 30% 30%,#e8c9a3,#8a6a4a 55%,#3b2c20)"></div><div class="cap"><b>Documental</b>Luz natural, tons terrosos</div></div>
      <div class="tex"><div class="fill" style="background:radial-gradient(circle at 50% 35%,#8a8a8a 0,#444444 55%,#1b1b1b)"></div><div class="cap"><b>Autoral</b>P&amp;B, fundo #444444, luz suave</div></div>
      <div class="tex"><div class="fill" style="background:radial-gradient(circle at 70% 25%,#7A9FF0,#0429BC 50%,#010C53)"></div><div class="cap"><b>High-end</b>Topo de funil, aspiracional</div></div>
      <div class="tex"><div class="fill" style="background:linear-gradient(135deg,#f0ede6,#c9c3b6)"></div><div class="cap"><b>Performance</b>Realista, estilo “não produzido”</div></div>
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13px;color:var(--muted)">Blocos de cor ilustram o tom de cada tratamento — não são fotografias. As imagens oficiais estão no acervo da marca.</p>`
  });

  // ---------------- 07 COMPONENTES ----------------
  const s7 = sec({
    id: 'componentes', num: '07', label: 'Componentes', cls: 'alt', title: ['Blocos de', 'interface'],
    lead: 'Cantos de 4&nbsp;px, azul como protagonista e muito respiro. Tudo abaixo é HTML/CSS real, derivado do site e do toolkit — o mesmo sistema de variáveis (Base, Alias, Mapped, Responsive) do Figma.',
    body: `
    <div class="comp reveal">
      <div class="ct"><h3>Botões</h3><span>.btn · primário · secundário · ghost · acento</span></div>
      <div class="row"><a class="btn btn-primary">Acelere certo na Alura</a><a class="btn btn-secondary">Ver planos</a><a class="btn btn-ghost">Saiba mais →</a><a class="btn btn-accent">Começar agora</a><a class="btn is-disabled">Indisponível</a></div>
      <div class="on-black"><div class="row"><a class="btn btn-primary" style="background:#1F53E5">Acelere certo na Alura</a><a class="btn btn-secondary">Ver planos</a><a class="btn btn-ghost" style="color:#7A9FF0">Saiba mais →</a></div></div>
      <div class="cap">Roboto Flex Medium 14–18 px, raio de 4 px, borda de 0,8 px. Estados: default, hover (Dev Blue), focus, active e disabled — hierarquia primária e secundária.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Seletor de período e navegação com colchetes</h3><span>.pill · .br</span></div>
      <div class="row"><span class="pill">1 Ano</span><span class="pill on">2 Anos • Melhor desconto</span></div>
      <div class="on-black" style="margin-top:18px"><div class="row" style="gap:6px"><span class="br on">Cursos</span><span class="br">Carreiras</span><span class="br">Para empresas</span><span class="br">Blog</span></div></div>
      <div class="cap">O item ativo da navegação ganha colchetes — a assinatura de código da marca aplicada à interface.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Tags e rótulos</h3><span>.tag · .c-kicker</span></div>
      <div class="row"><span class="tag tag-solid">Novo</span><span class="tag tag-soft">Front-end</span><span class="tag tag-line">Data Science</span><span class="tag tag-accent">I.A.</span><span class="tag tag-fog">12 horas</span><span class="c-kicker">Escola de programação</span></div>
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
      <div class="ct"><h3>Cards</h3><span>.c-course · .c-stat · .c-quote</span></div>
      <div class="cc-grid">
        <div class="c-course" style="border-radius:8px"><div class="im" style="background:radial-gradient(circle at 25% 25%,#7A9FF0 0,transparent 45%),radial-gradient(circle at 80% 70%,#1F53E5 0,transparent 55%),#010C53"><canvas data-gfx="quads" data-seed="44" data-mode="dots"></canvas><span class="tag tag-accent">Formação</span></div><div class="bd"><h4>Front-end</h4><p>Do HTML ao React, com projetos aplicados ao mercado.</p><div class="ft"><span>12 cursos</span><span>→</span></div></div></div>
        <div class="c-stat" style="background:${TB};border-radius:8px"><div class="n" style="font-weight:300">+1.300</div><p>cursos na plataforma e comunidade Alura, em todas as áreas da tecnologia.</p></div>
        <div class="c-quote" style="background:${NB};border-radius:8px"><div class="qm" style="color:#7A9FF0;font-style:normal">“</div><p style="font-style:normal;font-weight:300;font-family:var(--display)">Nada é por acaso: cada detalhe existe por uma razão.</p><div class="who">Princípio de design</div></div>
      </div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Faixa de chamada</h3><span>.cta-band</span></div>
      <div class="cta-band" style="border-radius:8px;background:${BU}"><div><h4>Acelere certo.</h4><p>Aprenda com profundidade técnica, direção clara e uma comunidade ativa.</p></div><a class="btn btn-primary" style="background:#fff;color:${TB}">Ver planos</a></div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Alertas e feedback</h3><span>.alert</span></div>
      <div class="row" style="align-items:flex-start"><div class="alert info"><i>i</i><div>Seu plano renova em 3 dias.</div></div><div class="alert ok"><i>✓</i><div>Matrícula confirmada.</div></div><div class="alert warn"><i>!</i><div>Faltam 2 aulas para o certificado.</div></div><div class="alert err"><i>×</i><div>Não foi possível processar o pagamento.</div></div></div>
    </div>`
  });

  // ---------------- 08 PEÇAS ----------------
  const s8 = sec({
    id: 'pecas', num: '08', label: 'Peças & formatos', cls: 'black', title: ['Tudo', 'junto'],
    lead: 'O toolkit organiza a marca em frentes — UI, e-mail, apresentações, growth, plataforma, blog, e-book e redes sociais — todas com <i>canvas &amp; grid</i>, <i>text styles</i> e templates próprios. Abaixo, três aplicações de referência.',
    body: `
    <div class="pieces" style="margin-top:44px">
      <div class="pc-wrap p-feed reveal"><div class="piece sq" style="background:${NB}">
        <canvas data-gfx="quads" data-seed="31" data-mode="quads"></canvas>
        <div class="a" style="left:46%;top:14%;width:62%;aspect-ratio:1/1;border-radius:50%;background:radial-gradient(circle at 30% 30%,#7A9FF0 0,#1F53E5 38%,#0429BC 64%,#010C53 100%)"></div>
        <span class="a M" style="left:calc(60*var(--u));top:calc(60*var(--u));font-family:'Encode Sans Expanded';font-weight:500;font-size:calc(34*var(--u));line-height:1.1;color:#fff;font-family:'Encode Sans Expanded',sans-serif">23<br>FEV</span>
        <span class="a" style="left:calc(60*var(--u));bottom:calc(150*var(--u));font-family:'Encode Sans Expanded',sans-serif;font-weight:200;font-size:calc(230*var(--u));line-height:.9;color:#fff;letter-spacing:-.03em">TALKS</span>
        <span class="a" style="left:calc(60*var(--u));bottom:calc(60*var(--u));font-family:'Encode Sans Expanded',sans-serif;font-weight:300;font-size:calc(96*var(--u));line-height:1;color:#7A9FF0">A.I.</span>
        ${lg(B, 'logo', '#fff', 'position:absolute;right:calc(60*var(--u));bottom:calc(66*var(--u));height:calc(36*var(--u))')}
      </div><div class="pc-cap"><b>Feed · evento</b><span>1080 × 1080</span></div></div>

      <div class="pc-wrap p-story reveal"><div class="piece st" style="background:#010C53">
        <div class="a" style="inset:0;background:radial-gradient(circle at 20% 15%,#7A9FF0 0,transparent 42%),radial-gradient(circle at 85% 35%,#1F53E5 0,transparent 50%),radial-gradient(circle at 40% 100%,#0429BC 0,transparent 55%),#010C53"></div>
        <span class="a" style="left:calc(64*var(--u));top:calc(120*var(--u));right:calc(64*var(--u));font-family:var(--display);font-weight:300;font-size:calc(104*var(--u));line-height:1.06;letter-spacing:-.03em;color:#fff">Sua profissão caminha para uma redefinição profunda.</span>
        <span class="a" style="left:calc(64*var(--u));right:calc(64*var(--u));bottom:calc(300*var(--u));font-family:var(--body);font-size:calc(40*var(--u));line-height:1.35;color:#D1DEF9">O valor agora está na capacidade de aplicar seu conhecimento com IA para resolver problemas em escala.</span>
        <div class="a" style="left:calc(64*var(--u));bottom:calc(150*var(--u));padding:calc(22*var(--u)) calc(40*var(--u));background:#fff;color:${TB};border-radius:calc(8*var(--u));font-family:var(--body);font-weight:500;font-size:calc(34*var(--u))">Acelere certo na Alura</div>
        ${lg(B, 'logo', '#fff', 'position:absolute;left:calc(64*var(--u));bottom:calc(64*var(--u));height:calc(40*var(--u))')}
      </div><div class="pc-cap"><b>Stories</b><span>1080 × 1920</span></div></div>

      <div class="pc-wrap p-slide reveal"><div class="piece wd" style="background:#fff">
        <div class="a" style="left:0;top:0;bottom:0;width:36%;background:${NB}"><canvas data-gfx="quads" data-seed="52" data-mode="lines"></canvas></div>
        <span class="a" style="left:42%;top:calc(120*var(--u));right:calc(90*var(--u));font-family:var(--display);font-weight:300;font-size:calc(120*var(--u));line-height:1.02;letter-spacing:-.03em;color:${NB}">Nowness</span>
        <span class="a" style="left:42%;top:calc(300*var(--u));right:calc(90*var(--u));font-family:var(--body);font-size:calc(40*var(--u));line-height:1.35;color:#42444D">Atuar na fronteira entre presente e futuro e traduzir novidade em entendimento aplicável.</span>
        ${lg(B, 'logo', TB, 'position:absolute;right:calc(90*var(--u));bottom:calc(70*var(--u));height:calc(44*var(--u))')}
      </div><div class="pc-cap"><b>Slide</b><span>1920 × 1080</span></div></div>
    </div>`
  });

  // ---------------- 09 VOZ ----------------
  const s9 = sec({
    id: 'voz', num: '09', label: 'Tom de voz', title: ['Clareza vem', 'antes do impacto'],
    lead: 'Acreditamos que a tecnologia é uma ferramenta de construção, e que o tom de voz é como traduzimos visão em linguagem: organizamos pensamento, oferecemos direção e ajudamos quem lê a decidir com clareza num cenário que muda rápido. <b>Transformamos complexidade em entendimento. Não criamos urgência artificial — damos contexto para a urgência que já existe.</b>',
    body: `
    <div class="grid g3 reveal" style="margin-top:36px">
      ${card('Clareza', 'Organizamos ideias para que façam sentido. Eliminamos ruído, indicamos caminhos e organizamos decisões.', { idx: '01' })}
      ${card('Estruturada', 'Mostramos caminhos possíveis num presente que não espera, com progressão lógica e próximos passos claros.', { idx: '02' })}
      ${card('Técnica', 'Falamos com propriedade porque vivemos tecnologia de perto — com profundidade, sem simplificar demais nem complicar para parecer técnicos.', { idx: '03' })}
      ${card('Construtiva', 'Ajudamos a desenvolver sem ignorar que o mercado valoriza quem acompanha o ritmo. O protagonismo é de quem aprende e aplica.', { idx: '04' })}
      ${card('Segura', 'Conduzimos com responsabilidade: não prometemos o que não podemos sustentar. Não comunicamos promessas irreais nem vendemos atalhos.', { idx: '05' })}
      ${card('Atual', 'Contextualizamos tendências com atenção ao que já está reconfigurando o mercado — o <i>nowness</i>.', { idx: '06', dark: true })}
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Nenhum texto precisa expressar todos os eixos, mas todos devem respeitá-los.</p>

    ${sub('O tom na prática')}
    <div class="voice-ex reveal">
      <div class="vx" style="background:${NB};color:#fff"><span class="lb" style="color:#A7A9B4">Institucional</span><p style="font-weight:300;font-size:28px">Sua profissão caminha para uma redefinição profunda.</p></div>
      <div class="vx" style="background:${TB};color:#fff"><span class="lb" style="color:#D1DEF9">Conteúdo</span><p style="font-weight:300;font-size:28px">Inteligência Artificial em movimento: a revolução da mobilidade urbana.</p></div>
      <div class="vx" style="background:#D1DEF9;color:${BU}"><span class="lb">Direção</span><p style="font-weight:400;font-size:28px">Próximos passos claros, antes que a oportunidade passe.</p></div>
    </div>

    ${sub('Alinhado ou não?')}
    ${dodont([
      'Organiza pensamento',
      'Indica próximos passos',
      'Respeita a inteligência do leitor',
      'Sustenta profundidade com clareza',
      'Alterna frases curtas, que dão direção, com explicações que aprofundam o raciocínio'
    ], [
      'Usa medo',
      'Promete transformação mágica',
      'Exagera tendências',
      'Centraliza o mérito na marca',
      'Excesso de adjetivos, frases infladas e promessas absolutas'
    ], 'Está alinhado', 'Não está alinhado')}`
  });

  // ---------------- 10 TOKENS & IA ----------------
  const tokenGroups = [
    { comment: 'Base — cores da marca (valores brutos)', vars: [['--alura-tech-blue', TB, 'Pantone 293 C · escala 1000'], ['--alura-deep-blue', DB], ['--alura-blue-universe', BU], ['--alura-dev-blue', DV], ['--alura-new-black', NB], ['--alura-white-snow', WS]] },
    { comment: 'Base — escala de azuis', vars: blueRamp.filter((_, i) => i % 2 === 0 || i > 12).map(([n, h]) => [`--alura-blue-${n}`, h]) },
    { comment: 'Acentos (growth) e feedback', vars: [['--alura-purple-tech', '#5D3BC4'], ['--alura-green-dev', '#67FE85'], ['--alura-tech-red', '#E6193B'], ['--alura-orange-dev', '#FC5D03'], ['--alura-info', '#0675F9'], ['--alura-success', '#06F936'], ['--alura-warning', '#F95E06'], ['--alura-error', '#F8062F']] },
    { comment: 'Alias — semânticos', vars: [['--alura-primary', 'var(--alura-tech-blue)'], ['--alura-primary-hover', 'var(--alura-dev-blue)'], ['--alura-surface', 'var(--alura-white-snow)'], ['--alura-surface-dark', 'var(--alura-new-black)']] },
    { comment: 'Tipografia', vars: [['--alura-font-titulo', '"Encode Sans", sans-serif'], ['--alura-font-campanha', '"Encode Sans Expanded", sans-serif'], ['--alura-font-corpo', '"Roboto Flex", sans-serif']] },
    { comment: 'Forma e espaçamento — múltiplos de 4 px', vars: [['--alura-radius-btn', '4px'], ['--alura-sp-1', '4px'], ['--alura-sp-2', '8px'], ['--alura-sp-3', '12px'], ['--alura-sp-4', '16px'], ['--alura-sp-6', '24px'], ['--alura-sp-8', '32px'], ['--alura-sp-12', '48px'], ['--alura-sp-16', '64px']] }
  ];
  tokenGroups.title = 'Alura — Design tokens v1.0';
  const s10 = sec({
    id: 'ia', num: '10', label: 'Tokens & IA', cls: 'dark', title: ['Pronto para', 'código'],
    lead: 'No Figma, as variáveis do design system organizam as decisões em quatro coleções: <b style="color:#fff">Base</b> (valores brutos), <b style="color:#fff">Alias</b> (significado semântico), <b style="color:#fff">Mapped</b> (aplicação por função, em <i>light</i> e <i>dark</i>) e <b style="color:#fff">Responsive</b> (tipografia e espaçamento por tipo de peça). Aqui, a versão em CSS — e um contexto em Markdown para outras IAs.',
    body: `
    <div class="code-card reveal"><div class="bar"><span>tokens.css</span><button class="btn btn-light btn-sm" id="copyCss">Copiar CSS</button></div>
<pre id="cssTokens">${tokensPre(tokenGroups)}</pre></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Fontes: <code>&lt;link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@200;300;400;500;600&amp;family=Encode+Sans+Expanded:wght@200;300;500&amp;family=Roboto+Flex:wght@300;400;500;600&amp;display=swap" rel="stylesheet"&gt;</code></p>
    ${sub('Imagens geradas por IA')}
    <div class="grid g2 reveal">
      <div class="card is-dark" style="background:${BU};border:1px solid #ffffff33"><h3>Campanhas de marca e movimento</h3><p>Imagens <i>high-end</i> geradas por IA em projetos de alta visibilidade (topo de funil): cenas refinadas, controladas e simbólicas, que reforçam que tecnologia e estética refinada coexistem.</p></div>
      <div class="card is-dark" style="background:${NB};border:1px solid #ffffff33"><h3>Campanhas de performance</h3><p>Meio e fundo de funil: imagens mais espontâneas, que simulam a realidade — estilo documental, autoral, “não produzido”. Imperfeições trazem realismo e profundidade.</p></div>
    </div>
    <div class="prompt reveal" style="max-width:none;margin-top:18px;color:#C9D3F5;background:#ffffff0d;border-color:#7A9FF0"><b style="color:#fff">Exemplo de prompt (retrato autoral)</b><br>“Recreate the exactly same person but change the background to #444444, make a very soft light behind her so the background doesn’t look flat. Change the photo to black and white.”<br>Modelo: Nano Banana 2 · Resolução: 2K · Enquadramento: 3:4 · Finalize no Photoshop: camada como objeto inteligente, aplique <i>noise</i> e o efeito <i>soft light</i>.</div>
    <div class="llm-block">
      <h3 class="sub reveal">Contexto para LLM</h3>
      <p class="reveal" style="max-width:66ch">Gera um bloco em Markdown com a identidade completa — pronto para colar como contexto em outra IA.</p>
      <div class="actions reveal" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-accent" id="genMd">Gerar .md para LLM</button><button class="btn btn-light" id="copyMd" style="display:none">Copiar texto</button><button class="btn btn-light" id="dlMd" style="display:none">Baixar .md</button></div>
      <textarea id="mdOut" readonly></textarea>
    </div>`
  });

  B.sections = [
    { id: 'essencia', navLabel: 'Essência', html: s1 }, { id: 'logo', navLabel: 'Logo', html: s2 }, { id: 'cores', navLabel: 'Cores', html: s3 }, { id: 'tipografia', navLabel: 'Tipografia', html: s4 },
    { id: 'grid', navLabel: 'Grid & patterns', html: s5 }, { id: 'imagem', navLabel: 'Imagem', html: s6 }, { id: 'componentes', navLabel: 'Componentes', html: s7 }, { id: 'pecas', navLabel: 'Peças', html: s8 },
    { id: 'voz', navLabel: 'Voz', html: s9 }, { id: 'ia', navLabel: 'Tokens & IA', html: s10 }
  ];

  // ---------------- CSS específico ----------------
  B.css = `
  nav.top a{font-weight:500}
  nav.top a.nav-home{background:#fff;color:${TB}}
  nav.top a.nav-home:hover{color:${TB}}
  .kicker{font-weight:500;letter-spacing:.14em;font-size:12px}
  .kicker .num{border:1px solid currentColor;padding:2px 9px;font-weight:500;color:#0429BC}
  .dark .kicker .num,.black .kicker .num{color:#7A9FF0;background:transparent}
  h2.title{font-size:clamp(38px,5.4vw,76px)}
  h2.title .c2{color:#3165E7}
  .black h2.title .c2,.dark h2.title .c2{color:#7A9FF0}
  h3.sub{font-weight:600;letter-spacing:.12em}
  .card h3{font-weight:500;letter-spacing:-.01em}
  .card .idx{font-weight:300;font-size:34px}
  .label-k{font-family:var(--ui,var(--display));font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${DV};margin-bottom:12px}
  .black .label-k,.dark .label-k,.card.is-dark .label-k{color:#7A9FF0}
  .chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.chips span{font-family:var(--display);font-weight:500;font-size:13.5px;border:1px solid var(--line);border-radius:999px;padding:7px 14px;background:${WS};color:var(--ink)}
  .card:hover{transform:translateY(-3px)}
  .quote-bar{border-radius:var(--r-xl)}
  .quote-bar .qm{color:#7A9FF0}
  .sw .nm{font-weight:500}
  .grad{height:180px;border-radius:var(--r-card);display:flex;align-items:flex-end;padding:16px;color:#fff;font-family:var(--display);font-weight:500;font-size:14px}
  .tag{letter-spacing:.04em;text-transform:none;font-weight:600;font-size:12px}
  .pill{font-family:var(--display);font-weight:600;font-size:14px;border-radius:999px;padding:12px 18px;background:#fff;color:#2F49F0;border:1px solid #D1DEF9;cursor:default}
  .pill.on{background:#2F49F0;color:#fff;border-color:#2F49F0}
  .br{font-family:var(--display);font-weight:500;font-size:15px;color:#A7A9B4;padding:12px 18px;position:relative;cursor:default}
  .br.on{color:#fff}.br.on::before,.br.on::after{position:absolute;top:50%;transform:translateY(-52%);color:#7A9FF0;font-family:var(--mono);font-size:22px;font-weight:300}
  .br.on::before{content:'[';left:2px}.br.on::after{content:']';right:2px}
  .btn{padding:13px 22px;border-width:1px;font-size:14.5px}
  .btn-sm{padding:10px 16px;font-size:13px}
  .alert{border-radius:6px}
  /* hero */
  .hero{position:relative;overflow:hidden;background:${NB};color:#fff;min-height:min(calc(100svh - 49px),820px);display:flex}
  .hero-pat{position:absolute;right:0;top:0;bottom:0;width:62%;height:100%;opacity:.9;-webkit-mask-image:linear-gradient(90deg,transparent,#000 55%);mask-image:linear-gradient(90deg,transparent,#000 55%)}
  .orb{position:absolute;right:-7%;top:50%;width:min(48vw,700px);aspect-ratio:1/1;transform:translateY(-50%);border-radius:50%;background:radial-gradient(circle at 30% 28%,#9AB7F3 0,#1F53E5 34%,#0429BC 62%,#010C53 100%);box-shadow:0 0 120px rgba(31,83,229,.35)}
  .hero-in{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding-top:34px;padding-bottom:40px;width:100%}
  .h-meta{display:flex;justify-content:space-between;gap:16px;font-family:var(--display);font-size:12.5px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#A7A9B4}
  .h-body{max-width:760px;margin:60px 0}
  .hero h1{font-weight:300;font-size:clamp(42px,6vw,92px);line-height:1;letter-spacing:-.035em;margin:0 0 26px}
  .hero h1 em{font-style:normal;color:#7A9FF0}
  .hero p{color:#B2B4BD;font-size:18px;max-width:54ch;margin:0 0 30px}
  .h-actions{display:flex;gap:12px;flex-wrap:wrap}
  .hero .btn-secondary{color:#fff;border-color:rgba(255,255,255,.7)}.hero .btn-secondary:hover{background:#fff;color:}
  .h-foot{display:flex;align-items:center;gap:18px;color:#A7A9B4;font-family:var(--display);font-size:13px}
  /* grid viz */
  .gridviz{display:grid;gap:10px}
  .gv{display:grid;grid-template-columns:54px 1fr;align-items:center;gap:12px}
  .gv span{font-family:var(--mono);font-size:11px;color:#A7A9B4}
  .gv div{display:grid;gap:4px;height:26px}
  .gv i{background:#1F53E5;opacity:.75;border-radius:2px}
  .pat-box canvas{display:block;width:100%;height:340px;background:#000;border:1px solid #2F3037;border-radius:var(--r-card)}
  .pat-ctl{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:14px}
  .circles{position:relative;aspect-ratio:1/1;max-width:420px;width:100%;margin:0 auto}
  .circles div{position:absolute;border-radius:50%}
  .circles .c1{inset:6% 22% 22% 6%;background:radial-gradient(circle at 30% 30%,#9AB7F3,#1F53E5 45%,#0429BC)}
  .circles .c2{inset:30% 4% 4% 34%;background:#fff;mix-blend-mode:screen;opacity:.92}
  .circles .c3{inset:22% 30% 30% 22%;border:2px solid #7A9FF0;background:transparent}
  .black .card.is-dark .label-k{color:#7A9FF0}
  .piece.wd{border-radius:6px}
  .tex .fill{position:absolute;inset:0}
  .c-course .im{background-color:#010C53}
  @media screen and (max-width:980px){.hero-pat{width:100%;opacity:.5}.orb{right:-30%;width:90vw;opacity:.7}.h-meta{flex-direction:column;gap:4px}}
  @media screen and (max-width:600px){.orb{opacity:.38}.hero-pat{opacity:.3}}
  `;

  // ---------------- gráficos ----------------
  B.gfx = `
  (function(){
    function rng(seed){var s=seed>>>0||1;return function(){s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296;};}
    var COLORS=['#0429BC','#1F53E5','#3165E7','#4878EA','#7A9FF0','#B5CBF6','#FFFFFF'];
    var WEIGHTS=[3,4,3,3,2,1,1];
    function pick(r){var t=0,i;for(i=0;i<WEIGHTS.length;i++)t+=WEIGHTS[i];var x=r()*t;for(i=0;i<WEIGHTS.length;i++){x-=WEIGHTS[i];if(x<=0)return COLORS[i];}return COLORS[0];}
    function quads(cv,seed,mode){
      seed=+(seed||cv.dataset.seed||1);mode=mode||cv.dataset.mode||'quads';
      var dpr=Math.min(window.devicePixelRatio||1,2),w=cv.clientWidth||cv.parentNode.clientWidth,h=cv.clientHeight||cv.parentNode.clientHeight;if(!w||!h)return;
      cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);var ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      var r=rng(seed*7919+13),cell=Math.max(14,Math.round(Math.min(w,h)/(mode==='lines'?26:20))),cols=Math.ceil(w/cell),rows=Math.ceil(h/cell);
      for(var j=0;j<rows;j++){for(var i=0;i<cols;i++){
        var u=i/cols,v=j/rows,p=.25+.6*u*(1-Math.abs(v-.5)*.8);
        if(r()>p)continue;
        var a=.15+r()*.7,x=i*cell,y=j*cell,col=pick(r);ctx.globalAlpha=a;ctx.fillStyle=col;
        if(mode==='quads'){var s=cell*(.5+r()*.38);ctx.fillRect(x+(cell-s)/2,y+(cell-s)/2,s,s);}
        else if(mode==='lines'){var L=cell*(1+Math.floor(r()*4));ctx.fillRect(x,y+cell*.4,L,Math.max(2,cell*.18));i+=Math.floor(L/cell);}
        else{ctx.beginPath();ctx.arc(x+cell/2,y+cell/2,cell*(.14+r()*.28),0,6.2832);ctx.fill();}
      }}
      ctx.globalAlpha=1;
    }
    window.GFX={quads:function(cv){quads(cv);}};
    window.addEventListener('load',function(){
      var d=document.getElementById('patDemo'),nb=document.getElementById('patNew'),seg=document.getElementById('patMode');if(!d)return;
      var seed=+d.dataset.seed,mode='quads';
      nb&&nb.addEventListener('click',function(){seed=Math.floor(Math.random()*9000)+10;d.dataset.seed=seed;quads(d,seed,mode);});
      seg&&seg.addEventListener('click',function(e){var b=e.target.closest('button[data-m]');if(!b)return;mode=b.dataset.m;d.dataset.mode=mode;[].forEach.call(seg.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b)});quads(d,seed,mode);});
    });
  })();
  `;

  B.md = `# Alura — Design System / Brand Context (para uso por IA)

> Referência estruturada da identidade Alura, baseada no Brand Guidelines V2.0 (abril de 2026). Use sempre os arquivos oficiais do logo — não recrie de memória. Não inclua nem divulgue senhas de download de fontes presentes nos arquivos originais.

## 1. Marca
- Propósito: despertar os superpoderes da tecnologia nas pessoas — amplificando potenciais, vozes e comunidades.
- Sonho: alavancar o protagonismo dev em um mundo onde a tecnologia é a base de todo o mercado e de todas as carreiras.
- Posicionamento: o ecossistema de aprendizagem tech mais conectado ao presente e ao próximo movimento do mercado — profundidade técnica, direção clara e aplicação prática, com comunidade ativa e autoridade de founders.
- Valores: protagonismo dev, paixão por tecnologia, evolução contínua, profundidade técnica, community-centric, nowness, inovação contínua.
- Personalidade: pessoal, encorajadora, acolhedora, inspiradora, mentora, inteligente, transformadora, realista, conectora.
- Linguagem visual: construída, nunca ornamentação — matemática (grid, módulos, progressões), proceduralidade e design generativo como método, minimalismo como critério de edição. Nada deve parecer aleatório.

## 2. Logo
- Wordmark "Alura" (tipografia limpa, minimalista e moderna). Linha para empresas: "Alura Para Empresas" (primary/secondary).
- Versões: New Black (#0C0C0E) em fundo claro; branco em fundo escuro ou azul; Tech Blue (#0429BC) sobre branco.
- Área de respiro: altura-x. Nenhuma alteração: não distorcer, rotacionar, recolorir fora da paleta, aplicar sombras ou efeitos, usar em outline ou adicionar elementos.
- Sobre imagem: só com contraste suficiente; senão, fundo neutro sem grafismos ou textos.

## 3. Cores
| Nome | HEX | Notas |
|---|---|---|
| Tech Blue | #0429BC | Cor principal (Pantone 293 C; CMYK 100 69 0 4) — escala 1000 |
| Deep Blue | #011676 | Pantone Reflex Blue C — escala 1400 |
| Blue Universe | #010C53 | CMYK 100 89 0 0 — escala 1600 |
| Dev Blue | #1F53E5 | hover/estados — escala 700 |
| New Black | #0C0C0E | preto da marca |
| White Snow | #F4F5F6 | branco frio |
- Metálicos (só impressão): Cold Silver (Pantone Silver 10077 C), Tech Silver (10388 C), Blue Metalic (10260 C), Dev Metalic (10272 C).
- Escala de azuis: 50 #D1DEF9 · 100 #B5CBF6 · 200 #9AB7F3 · 300 #7A9FF0 · 400 #5F8BEC · 500 #4878EA · 600 #3165E7 · 700 #1F53E5 · 800 #0D3EE3 · 900 #052FD3 · 1000 #0429BC · 1100 #0323A6 · 1200 #021E94 · 1300 #021982 · 1400 #011676 · 1500 #011164 · 1600 #010C53.
- Acentos de growth (uso controlado, nunca base): Purple Tech #5D3BC4 · Green Dev #67FE85 · Tech Red #E6193B · Orange Dev #FC5D03.
- Feedback: Information #0675F9 · Success #06F936 · Warning #F95E06 (alternativa #F9D006) · Error #F8062F.
- Proporção: presença relativa, não regra rígida — o azul é a cor principal mas não domina a composição; neutros (preto/branco) dão contraste e respiro.

## 4. Tipografia
- Encode Sans (títulos/subtítulos; Light/Regular/Medium/SemiBold) · Encode Sans Expanded (títulos de destaque em campanha) · Roboto Flex (corpo).
- Escala: Display 01–07 (68/86 até 194/224), Heading 01–07 (20/28 até 60/76), Body 01–06 (10/16 até 20/28). Escala progressiva (+2 px de incremento a cada 4 níveis). Line-heights múltiplos de 4 px. Versões Light e Dark (um peso a menos em fundo escuro).

## 5. Grid, patterns e círculo
- Grid modular de 2, 4, 6, 8, 12 ou 16 colunas; unidade base 4 px; breakpoints small/medium/large/x-large.
- Patterns procedurais: opacidade randômica entre 15 e 85%, apenas Brand Colors. Ferramentas: Generista (Figma), Cavalry.
- Círculo: comunidade como organismo vivo, aluno no centro; nunca decorativo, sempre com o logo completo; espelhar/clonar só em animação; não usar como máscara de fotos de pessoas.

## 6. Fotografia e IA
- Documental (momentos, não poses; luz natural; composição assimétrica; tons terrosos, verdes e neutros; sem filtros) e autoral (retratos próximos, estética minimalista, fundo discreto).
- IA: high-end em topo de funil; realismo/imperfeição em performance.

## 7. Componentes
- Botão primário: Tech Blue, texto claro, raio 4 px, Roboto Flex Medium; hover Dev Blue. Toggle em pílula (#2F49F0). Navegação com colchetes no item ativo.

## 8. Tom de voz
- Clareza antes de impacto. Eixos: clareza, estruturada, técnica, construtiva, segura, atual. Não usa medo, não promete transformação mágica, não exagera tendências, não centraliza mérito na marca. Frases curtas alternadas com explicações estruturadas. Princípio: nowness.

## 9. Checklist
Logo com respiro x · azul como assinatura, não como fundo dominante · Encode Sans leve + Roboto Flex no corpo · grid modular e linhas de 4 px · patterns com opacidade 15–85% em brand colors · círculo com propósito · acentos de growth controlados · texto com clareza e próximo passo.

## 10. Fonte
Alura – Rebranding Toolkit (Brand Guidelines V2.0, abril de 2026) · alura.com.br
`;

  return B;
};
