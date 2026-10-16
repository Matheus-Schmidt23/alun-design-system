// Alun — Design System (fonte: Brandbook Alun 2025 + alun.com.br)
module.exports = (H) => {
  const { sec, sw, swGrid, card, rule, li, dd, dodont, sub, tile, lg, tokensPre } = H;

  const B = {
    id: 'alun', name: 'Alun', version: 'v1.0',
    description: 'Design System do Grupo Alun: marca, cores, tipografia, grafismo modular, componentes, peças, tom de voz e tokens — baseado no Brandbook 2025.',
    footerNote: 'Baseado no Brandbook Alun 2025',
    fontsHref: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Hanken+Grotesk:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap',
    navLogoHex: '#D1CDCD', footLogoHex: '#D1CDCD', faviconHex: '#ED1360',
    logo: {
      w: 357, h: 86,
      paths: '<path d="M61.84 18.43V43H18.84V18.5H61.84V0H29.91C13.63 0 .43 13.2.42 29.48V86H18.83V61.43H61.83V86H80.26V18.43H61.83H61.84Z"/><path d="M117.13 67.57V0H98.7V56.51C98.7 72.79 111.9 86 128.19 86H160.13V67.57H117.13Z"/><path d="M239.99 0V67.57H196.99V0H178.56V56.51C178.56 72.79 191.76 86 208.05 86H228.94C245.23 86 258.43 72.8 258.43 56.51V0H240H239.99Z"/><path d="M356.69 29.48C356.68 13.2 343.48 0 327.2 0H295.27V18.43H276.84V86H295.27V18.5H338.27V86H356.7V29.48H356.69Z"/>'
    },
    symbol: {
      w: 250, h: 232,
      paths: '<path d="M50 0H100V50H46V182H100V232H50A50 50 0 0 1 0 182V50A50 50 0 0 1 50 0ZM100 50H150V182H100ZM200 0H150V50H204V182H150V232H200A50 50 0 0 0 250 182V50A50 50 0 0 0 200 0Z"/>'
    },
    dlColors: [
      { k: 'preto', hex: '#000000', name: 'Preto', bg: '#FFFFFF' },
      { k: 'placa-mae', hex: '#D1CDCD', name: 'Placa Mãe', bg: '#000000' },
      { k: 'branco', hex: '#FFFFFF', name: 'Branco', bg: '#333131' }
    ],
    theme: {
      action: '#ED1360',
      vars: {
        '--c-deep': '#000000', '--c-action': '#ED1360', '--c-action-hover': '#FF9413', '--on-action': '#000', '--c-black': '#000000',
        '--c-soft': '#D1CDCD', '--c-accent': '#FF9413', '--c-tint': '#D1CDCD', '--c-sec': '#000', '--on-sec': '#fff', '--c-title2': '#ED1360',
        '--ink': '#0D0C0C', '--paper': '#FFFFFF', '--text-2': '#3a3737', '--muted': '#6b6767', '--line': 'rgba(13,12,12,.16)', '--fog-soft': '#D1CDCD', '--sec-alt': '#D1CDCD',
        '--grad-b': 'linear-gradient(90deg,#600724 0%,#ED1360 100%)',
        '--display': '"Newsreader","Flecha M",Georgia,serif', '--body': '"Hanken Grotesk","FK Grotesk",system-ui,sans-serif', '--serif': '"Newsreader","Flecha M",Georgia,serif', '--mono': '"DM Mono","FK Grotesk Mono",ui-monospace,Consolas,monospace',
        '--serif-style': 'normal', '--serif-w': '300',
        '--r-sm': '0', '--r-btn': '0', '--r-card': '0', '--r-xl': '0', '--r-pill': '0', '--r-chk': '0', '--r-piece': '0',
        '--shadow': 'none', '--shadow-lg': '0 0 0 1px #000',
        '--h-w': '300', '--h-tt': 'none', '--h-ls': '-.025em', '--h-lh': '1',
        '--ui': '"DM Mono",monospace', '--btn-font': '"DM Mono",monospace', '--btn-w': '500', '--btn-ls': '.04em', '--kicker-font': '"DM Mono",monospace',
        '--nav-bg': 'rgba(0,0,0,.9)', '--nav-dim': '#D1CDCD', '--on-accent': '#000', '--num-bg': '#ED1360', '--num-fg': '#000', '--num-r': '0',
        '--q-font': '"Newsreader",serif', '--q-w': '300', '--q-tt': 'none', '--vx-font': '"Newsreader",serif', '--h4-w': '400', '--h4-tt': 'none',
        '--al-info-bg': '#ece9e9', '--al-info-fg': '#0D0C0C', '--al-info': '#333131'
      }
    },
    contrast: [
      ['#D1CDCD', '#000000', 'Placa Mãe sobre Preto', 'Texto e logo em blocos pretos'],
      ['#FFFFFF', '#000000', 'Branco sobre Preto', 'Texto corrido em fundo preto'],
      ['#000000', '#D1CDCD', 'Preto sobre Placa Mãe', 'Texto e logo em blocos cinza'],
      ['#000000', '#ED1360', 'Preto sobre Magenta On', 'Títulos e CTA em bloco magenta'],
      ['#FFFFFF', '#ED1360', 'Branco sobre Magenta On', 'Só texto grande (≥24 px)'],
      ['#000000', '#FF9413', 'Preto sobre Odisseia On', 'Títulos em bloco laranja'],
      ['#D1CDCD', '#600724', 'Placa Mãe sobre Magenta Off', 'Texto em bloco vinho'],
      ['#FFFFFF', '#994800', 'Branco sobre Odisseia Off', 'Texto em bloco marrom'],
      ['#FF9413', '#000000', 'Odisseia On sobre Preto', 'Links e CTAs em fundo preto'],
      ['#ED1360', '#000000', 'Magenta On sobre Preto', 'Acento gráfico — não para texto corrido']
    ]
  };

  const BL = '#000000', PM = '#D1CDCD', CZ = '#333131', MON = '#ED1360', MOFF = '#600724', OON = '#FF9413', OOFF = '#994800';

  // ---------------- HERO ----------------
  B.hero = `
<header class="hero">
  <div class="hb h-main">
    <div class="h-top"><span class="lab">Design System · v1.0 · 2026</span><span class="lab dim">alun.com.br</span></div>
    ${lg(B, 'logo', PM, 'height:clamp(40px,6vw,84px);margin:36px 0 34px')}
    <div>
      <h1>Superpoderes <em>tech</em> para superconquistas humanas.</h1>
      <p>Fundamentos, módulos e regras de composição para criar qualquer peça do Grupo Alun — do site ao outdoor — com a mesma voz: expert, sempre em movimento e que convida à comunidade.</p>
    </div>
  </div>
  <div class="hb h-wine"><span class="lab">01</span><span class="lab">Pulso humano.</span></div>
  <div class="hb h-or"><span class="lab">Impulso tech.</span><span class="lab">Alun ecosystem</span></div>
  <div class="hb h-mag"><h2>um chamado para mudar o mundo.</h2></div>
  <div class="hb h-mos">${lg(B, 'symbol', '#000', 'height:clamp(54px,7vw,110px)')}</div>
</header>`;

  // ---------------- 01 ESSÊNCIA ----------------
  const s1 = sec({
    id: 'essencia', num: '01', label: 'Estratégia', title: ['Pulso humano.', 'Impulso tech.'],
    lead: 'Alun vem de <i>alumnus</i> — aluno, em latim. Somos mais que um grupo de educação: um universo de possibilidades complementares em capacitação tech, do online ao presencial, do livre ao regulado, do ensino fundamental ao profissionalizante. Este documento traduz o Brandbook 2025 em um sistema reutilizável.',
    body: `
    <div class="strat reveal">
      <div class="st"><span class="lab-k">Visão</span><p>Em um mundo onde tecnologia é a linguagem universal, seremos o espaço mais relevante para evoluir, impulsionar e conectar os profissionais do futuro, nos consolidando como o maior e mais completo ecossistema de capacitação tech da América Latina.</p></div>
      <div class="st"><span class="lab-k">Propósito</span><p>Oferecer experiências de educação memoráveis. Para todos os profissionais que usam alguma forma de tecnologia. Para todos os estágios de evolução. E para todas as pessoas que querem multiplicar conexões — com seus pares e com o mercado.</p></div>
      <div class="st"><span class="lab-k">Posicionamento</span><p>O ecossistema de educação em tecnologia que cria a conexão mais profunda e duradoura com seus alunos ao longo de suas vidas, construindo pontes reais com o mercado e laços genuínos com uma comunidade que os impulsiona.</p></div>
    </div>

    ${sub('Três direcionadores')}
    <div class="grid g3 reveal">
      <div class="card"><div class="idx">01</div><h3>Fazer junto — um mundo de conexão</h3><p>Ser completa, integrando todas as possibilidades para expandir alcances e horizontes. Conectar-se e ser conector de oportunidades. Criar forte senso de pertencimento.</p></div>
      <div class="card"><div class="idx">02</div><h3>Fazer diferente — um mundo de inovação</h3><p>Viver o mundo pensando sempre em novas técnicas, tecnologias e metodologias. Alimentar-se do talento, da dedicação e da paixão genuína. A veia tech e a vontade de mudar o mundo.</p></div>
      <div class="card"><div class="idx">03</div><h3>Fazer a diferença — evolução para o mundo</h3><p>Ser agente impulsionador capaz de conquistar e manter uma comunidade forte, que une potências para promover mudanças reais em pessoas, empresas e no mundo.</p></div>
    </div>
`
  });

  // ---------------- 02 LOGO ----------------
  const s2 = sec({
    id: 'logo', num: '02', label: 'Logo & símbolo', cls: 'black', title: ['Tech', '&amp; touch'],
    lead: 'A marca nasce do encontro entre a origem da tecnologia e sua conexão com o humano — do código binário ao cartão perfurado. O logotipo de quatro letras em módulos retos e cantos arredondados dá o grid de toda a identidade. O símbolo, inspirado no cérebro, é o ponto de convergência entre máquina e mente: o equilíbrio entre <i>tech</i> e <i>touch</i>.',
    body: `
    ${sub('Baixar o logo em SVG')}
    <div class="dl-bar reveal"><span class="dl-note">Vetor oficial · fundo transparente · escala sem perda de qualidade</span></div>
    <div class="dl-grid reveal" id="dlGrid"></div>

    ${sub('Área de segurança e tamanho mínimo')}
    <div class="clear-demo reveal">
      <div class="cs-box" style="padding:40px"><i class="xt">2X</i><i class="xl">2X</i><i class="xr">2X</i><i class="xb">2X</i>${lg(B, 'logo', PM, 'height:56px')}</div>
      <p style="max-width:470px;margin:0">Sendo <b style="color:#fff">X</b> a largura da haste da letra que compõe o logotipo, a área de segurança é de <b style="color:#fff">duas vezes essa dimensão</b> em todos os lados. O mesmo vale para o símbolo.<br><br><b style="color:#fff">Redução máxima:</b> 20&nbsp;px. Em reduções menores (favicon, avatar) use o símbolo.</p>
    </div>`
  });

  // ---------------- 03 CORES ----------------
  const rgb = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(' '); };
  const c = (name, hex, role, o = {}) => Object.assign({ name, hex, role, rgb: rgb(hex), wide: true }, o);
  const s3 = sec({
    id: 'cores', num: '03', label: 'Cores', title: ['Cores dos', 'questionadores'],
    lead: 'A paleta é cromática e direta: quatro neutros que sustentam a leitura e dois pares de cor — Magenta e Odisseia — cada um com versão <b>On</b> (luz) e <b>Off</b> (sombra). Clique em qualquer cor para copiar o HEX.',
    body: `
    ${sub('Neutros', 'valores medidos no brandbook')}
    ${swGrid([
      c('Preto', BL, 'Base — blocos principais, fundo, texto', { wide: false }),
      c('Cinza', CZ, 'Superfície escura secundária', { wide: false }),
      c('Placa Mãe', PM, 'Cinza quente — fundo neutro, logo em escuro', { wide: false, light: true }),
      c('Branco', '#FFFFFF', 'Respiro e texto', { wide: false, light: true, bordered: true })
    ])}
    ${sub('Cores de destaque')}
    ${swGrid([
      c('Magenta On', MON, 'Energia — blocos de ação, grafismo, módulos', { style: 'color:#000' }),
      c('Magenta Off', MOFF, 'Sombra do magenta — blocos profundos, fundos'),
      c('Odisseia On', OON, 'Laranja — destaque, links e CTAs em fundo preto', { light: true, style: 'color:#000' }),
      c('Odisseia Off', OOFF, 'Sombra do laranja — blocos terrosos')
    ])}
    <p class="reveal" style="margin-top:16px;font-size:13.5px">Valores HEX/RGB medidos nas páginas de paleta do Brandbook 2025 e conferidos com o Design System da FIAP e com o site. <b>Atenção:</b> os campos CMYK e Pantone do PDF original repetem um código de exemplo (B0F867) — confirme com o time de marca antes de produzir material impresso.</p>


    ${sub('Contraste e acessibilidade', 'calculado')}
    <div class="card reveal" style="padding:10px 18px"><table class="ctr-table" id="ctrTable"></table></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">WCAG 2.x: texto normal exige 4,5:1; grande, 3:1. <b>Branco sobre Magenta On só funciona em texto grande</b> — para texto menor use Preto.</p>`
  });

  // ---------------- 04 TIPOGRAFIA ----------------
  const s4 = sec({
    id: 'tipografia', num: '04', label: 'Tipografia', cls: 'alt', title: ['Serifa para', 'um mundo digital'],
    lead: 'Uma tipografia proprietária, protagonista, disruptiva e expansiva. Flecha — uma serifa, tradicionalmente ligada à mídia impressa — numa marca digital; FK Grotesk e FK Grotesk Mono completam o sistema e tensionam retas e arredondados, equilibrando <i>tech</i> e <i>touch</i>.',
    body: `
    <div class="fam reveal" style="margin-top:40px">
      <div class="card"><div class="label">Títulos · Flecha M</div><div class="big" style="font-family:var(--display);font-weight:300;letter-spacing:-.03em">Flecha</div>
        <div style="font-family:var(--display);font-size:22px;line-height:1.2;font-weight:300">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789</div>
        <div class="weights" style="font-family:var(--display)"><span style="font-weight:300">Light</span><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span></div>
        <div class="meta">Sentença em caixa baixa e mista, tracking levemente negativo, entrelinha ~1,0. Grande contraste com o texto de apoio.</div>
        <div class="sub-note">Fonte oficial licenciada (R-Typography). Prévia neste guia: Newsreader.</div></div>
      <div class="card"><div class="label">Subtítulos e corpo · FK Grotesk</div><div class="big" style="font-family:var(--body);font-weight:500;letter-spacing:-.03em">Grotesk</div>
        <div style="font-family:var(--body);font-size:20px;line-height:1.3">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789</div>
        <div class="weights" style="font-family:var(--body)"><span style="font-weight:300">Light</span><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span></div>
        <div class="meta">Regular para corpo, entrelinha ~1,5, nunca justificado. Itálico para ênfase pontual (“<i>alumnus</i>”).</div>
        <div class="sub-note">Fonte oficial licenciada (Florian Karsten). Prévia: Hanken Grotesk.</div></div>
      <div class="card is-dark"><div class="label" style="color:var(--c-soft)">Detalhes e destaques · FK Grotesk Mono</div><div class="big" style="font-family:var(--mono);font-weight:400;letter-spacing:-.02em;font-size:46px">Mono</div>
        <div style="font-family:var(--mono);font-size:15px;line-height:1.5">LINGUAGEM VISUAL / TIPOGRAFIA<br>ALUN.COM.BR · SAIBA MAIS →<br>0123456789</div>
        <div class="weights" style="font-family:var(--mono)"><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span></div>
        <div class="meta" style="color:var(--c-soft)">Caixa alta, pequena. Labels, URLs, números de página, CTAs e etiquetas de seção.</div>
        <div class="sub-note">Fonte oficial licenciada. Prévia: DM Mono.</div></div>
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">As fontes oficiais são licenciadas e não acompanham esta plataforma — baixe em <a href="https://www.r-typography.com/fonts/flecha-m" target="_blank" rel="noopener">r-typography.com</a> e <a href="https://fonts.floriankarsten.com/fk-grotesk" target="_blank" rel="noopener">fonts.floriankarsten.com</a>. As prévias usam fontes abertas de desenho semelhante, apenas para visualização.</p>

    ${sub('A assinatura: serifa grande + apoio pequeno + mono')}
    <div class="type-demo reveal" style="background:#000">
      <div>
        <div class="k M">Linguagem visual</div>
        <h3>A força<br>de muitas<br><span class="c2">mentes.</span></h3>
        <div class="em-line" style="font-family:var(--body);font-size:16px;font-weight:400;margin-top:18px">Um só ecossistema.</div>
      </div>
      <div>
        <ol class="anat">
          <li><div><b>Rótulo</b> — FK Grotesk Mono, caixa alta, 11–13 px; identifica seção, URL ou formato.</div></li>
          <li><div><b>Título</b> — Flecha, grande, em sentença (caixa baixa). Branco ou Placa Mãe sobre preto; preto sobre cor.</div></li>
          <li><div><b>Apoio</b> — FK Grotesk Regular, pequeno, alinhado a um módulo do grid.</div></li>
          <li><div><b>CTA</b> — FK Grotesk Mono, caixa alta, com seta → em Odisseia On (fundo preto).</div></li>
        </ol>
      </div>
    </div>`
  });

  // ---------------- 05 GRAFISMO & GRID ----------------
  const s5 = sec({
    id: 'grafismo', num: '05', label: 'Grafismo & grid', cls: 'black', title: ['Pequenas partes,', 'um todo maior'],
    lead: 'Um sistema feito do coletivo de pequenas partes. O grafismo é formado por <b style="color:#fff">módulos derivados do símbolo</b> — eles mostram como nossa didática transforma o complexo em simples e o simples em complexo. Uma plataforma digital, com módulo 4×2, converte qualquer imagem ou vídeo na linguagem proprietária da Alun.',
    body: `
    <div class="two reveal" style="margin-top:40px;align-items:start">
      <div class="mos-box">
        <canvas data-gfx="mosaic" data-seed="3" data-variant="full" data-mask="ellipse"></canvas>
      </div>
      <div class="rules">
        ${rule(1, 'Módulo 4×2', 'A unidade é um módulo de 4 × 2 células derivado das formas do símbolo: anéis, colchetes, barras e blocos chapados.')}
        ${rule(2, 'Duas versões', 'Uma com pequena dosagem de <b>laranja</b> (Odisseia) e outra apenas de <b>magenta</b> como cores de destaque, sobre preto e Placa Mãe.')}
        ${rule(3, 'Do complexo ao simples', 'Retratos, objetos e formas orgânicas viram mosaico: quanto mais denso o módulo, mais luz na imagem original.')}
        ${rule(4, 'Uma fonte por peça', 'O grafismo ocupa um ou dois blocos do grid — nunca o fundo atrás de texto corrido.', true)}
      </div>
    </div>

    ${sub('Grid modular 4×4')}
    <div class="two reveal" style="align-items:center">
      <div class="grid4">
        <div class="g4-box"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><u style="left:25%"></u><u style="left:50%"></u><u style="left:75%"></u><s style="top:25%"></s><s style="top:50%"></s><s style="top:75%"></s></div>
      </div>
      <div class="rules">
        ${rule(1, '4 módulos cambiantes', 'Baseado no logotipo de quatro letras, o grid divide a peça em 4 colunas × 4 linhas — independente do formato.')}
        ${rule(2, 'Margem 10 px · gutter 20 px', 'Malha modular de 4×4 usada em composições digitais ou impressas.')}
        ${rule(3, 'Blocos de cor chapada', 'Cada módulo (ou grupo de módulos) recebe uma cor da paleta, tipografia ou grafismo — sempre com modularidade equilibrada.')}
        ${rule(4, 'Dosagem', 'Cores, tipografia e elementos visuais em proporção coerente: um bloco de texto, um de cor, um de grafismo.')}
      </div>
    </div>`
  });

  // ---------------- 06 IMAGEM & ÍCONES ----------------
  const ic = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter">${d}</svg>`;
  const icons = [
    ['Programação', ic('<path d="M8 4H4v16h4M16 4h4v16h-4"/>')],
    ['Segurança', ic('<rect x="4" y="10" width="16" height="11"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>')],
    ['Configurações', ic('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><rect x="10" y="10" width="4" height="4"/>')],
    ['Biblioteca', ic('<path d="M4 6h12v14H4zM16 9h4v11h-4M7 10h6M7 14h6"/>')],
    ['Criatividade', ic('<path d="M7 3h10v9a5 5 0 0 1-10 0zM12 12v5M8 21h8"/>')],
    ['Games', ic('<path d="M4 8h16v8l-3 3-3-3h-4l-3 3-3-3zM8 11v3M6.5 12.5h3M16 12.5h1"/>')],
    ['Mobile', ic('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18v.01"/>')],
    ['Arquivos', ic('<path d="M6 3h8l4 4v14H6zM14 3v4h4"/>')],
    ['Comunidade', ic('<circle cx="8" cy="9" r="3"/><circle cx="17" cy="9" r="3"/><path d="M2 20c0-4 3-6 6-6M22 20c0-4-3-6-6-6M9 20c0-3 1.5-5 3-5s3 2 3 5"/>')],
    ['Cima', ic('<path d="M5 15l7-8 7 8"/>')],
    ['Baixo', ic('<path d="M5 9l7 8 7-8"/>')],
    ['Direita', ic('<path d="M9 5l8 7-8 7"/>')]
  ];
  const s6 = sec({
    id: 'imagem', num: '06', label: 'Fotografia & pictogramas', title: ['Gente real,', 'luz de marca'],
    lead: 'O aluno é o centro. Contamos com quatro direcionais fotográficos — mesma intenção, cenários e poses variados — e pictogramas que nascem das retas e curvas da própria marca.',
    body: `
    ${sub('Quatro direcionais fotográficos')}
    <div class="grid g2 reveal">
      <div class="card"><div class="label-k">01 · Aspiracional urbano</div><h3>O aluno numa paisagem aspiracional</h3><p>Em ambiente acadêmico e cosmopolita: arquitetura de vidro, vegetação, estilo contemporâneo e minimalista, laptop na mão, sorriso suave e olhar à frente.</p></div>
      <div class="card"><div class="label-k">02 · Aprendizado online</div><h3>Luz natural e madeira</h3><p>O aluno no contexto de estudo online, em cenários calorosos: interior aconchegante, estantes de madeira, plantas, luz ambiente e expressão concentrada.</p></div>
      <div class="card"><div class="label-k">03 · Comunidade em ação</div><h3>Construções coletivas</h3><p>Grupo diverso colaborando em ambiente industrial moderno — janelas grandes, concreto, vidro, madeira e metal — com linguagem corporal de trabalho em equipe e resolução de problemas.</p></div>
      <div class="card"><div class="label-k">04 · Institucional</div><h3>Professores e alunos</h3><p>Iluminação de recorte suave nas cores da marca, <b>sem tornar a imagem muito neon</b>. Fundo neutro, foco na expressão e na presença; atmosfera profissional, acadêmica e aspiracional.</p></div>
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Palavras-chave e <i>prompts</i> de referência para produção fotográfica ou geração por IA estão reunidos no fim do guia, em Tokens &amp; IA.</p>

    ${H.imgBand({
      tiles: [
        { inner: '<canvas data-gfx="mosaic" data-seed="11" data-variant="full" data-mask="ellipse" data-cell="9"></canvas>', name: 'Mosaico', use: 'Magenta + laranja' },
        { inner: '<canvas data-gfx="mosaic" data-seed="21" data-variant="mono" data-mask="ellipse" data-cell="9"></canvas>', name: 'Só magenta', use: 'Versão sóbria' },
        { inner: `<div class="fill" style="background:${MOFF}"></div>`, name: 'Bloco de cor', use: 'Fundo da peça' },
        { inner: '<canvas data-gfx="mosaic" data-seed="5" data-variant="full" data-mask="diag" data-cell="12"></canvas>', name: 'Faixa de módulos', use: 'Transição bloco ↔ imagem' }
      ],
      note: 'o grafismo ocupa um ou dois blocos por peça; as amostras são exemplos do guia — use imagens do acervo Alun e confirme os direitos de uso e de imagem antes de publicar peças externas.'
    })}

    ${sub('Pictogramas')}
    <p class="reveal" style="max-width:68ch">A base construtiva é uma malha de <b>15 × 15 unidades</b>; a espessura mínima do traço é de 1 unidade. Personalidade derivada da marca, ligada a retas e curvas — didática e essencial.</p>
    <div class="picto reveal">
      ${icons.slice(0, 6).map(([n, svg]) => `<div><div class="pi">${svg}</div><span>${n}</span></div>`).join('')}
    </div>`
  });

  // ---------------- 07 COMPONENTES ----------------
  const s7 = sec({
    id: 'componentes', num: '07', label: 'Componentes', cls: 'alt', title: ['Blocos de', 'construção'],
    lead: 'Retos, chapados e tipográficos. Sem cantos arredondados nem sombras: a hierarquia vem de cor, escala e do rótulo em mono. Tudo abaixo é HTML/CSS real, derivado do estilo do site e do brandbook.',
    body: `
    <div class="comp reveal">
      <div class="ct"><h3>Botões</h3><span>.btn · primário · secundário · ghost · acento</span></div>
      <div class="row"><a class="btn btn-primary">Quero conhecer</a><a class="btn btn-secondary">Saiba mais</a><a class="btn btn-ghost">Conheça a tese →</a><a class="btn btn-accent">Inscreva-se</a><a class="btn is-disabled">Indisponível</a></div>
      <div class="on-black"><div class="row"><a class="btn btn-primary">Quero conhecer</a><a class="btn btn-secondary">Saiba mais</a><a class="btn btn-ghost" style="color:${OON}">Conheça a tese →</a></div></div>
      <div class="cap">Texto em FK Grotesk Mono, caixa alta, +4%. Primário: Magenta On com texto preto (contraste 5,1:1). Em fundo preto, o ghost usa Odisseia On e seta.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Rótulo, tag e badge</h3><span>.kicker · .tag</span></div>
      <div class="row"><span class="tag tag-solid M">Linguagem visual</span><span class="tag tag-accent M">Novo</span><span class="tag tag-line M">Ecossistema</span><span class="tag tag-fog M">01/04</span><span class="tag M" style="background:${MON};color:#000">Potência tech</span></div>
      <div class="cap">Rótulos em caixa preta com mono branco identificam seção e assunto, como nos cabeçalhos do brandbook.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Campos de formulário</h3><span>.field</span></div>
      <div class="row" style="align-items:flex-start">
        <div class="field"><label>Seu e-mail</label><input placeholder="nome@empresa.com"><span class="help">Usamos para enviar o convite.</span></div>
        <div class="field err"><label>Telefone</label><input value="11 9999"><span class="help">Informe o número completo com DDD.</span></div>
        <div class="chk"><i class="on"></i> Quero receber novidades</div><div class="chk"><i></i> Aceito os termos</div>
      </div>
      <div class="cap">Campos retos, borda de 1,5 px; foco em Magenta On; erro sempre com texto, não só com cor.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Cards</h3><span>.c-course · .c-stat · .c-quote</span></div>
      <div class="cc-grid">
        <div class="c-course"><div class="im" style="background:#000"><canvas data-gfx="mosaic" data-seed="31" data-variant="full" data-mask="diag" data-cell="8"></canvas><span class="tag tag-accent M">Tech</span></div><div class="bd"><h4 style="font-weight:300;font-size:26px">Um chamado para mudar o mundo</h4><p>Cursos, formações e comunidade num só ecossistema.</p><div class="ft M"><span>ALUN.COM.BR</span><span>→</span></div></div></div>
        <div class="c-stat" style="background:${MON};color:#000;border-radius:0"><div class="n" style="font-family:var(--display);font-weight:300">95%</div><p style="color:#000">de efetivação após a conclusão dos cursos. <span class="M" style="font-size:11px;display:block;margin-top:10px">EXEMPLO DE DADO · VEJA MAIS →</span></p></div>
        <div class="c-quote" style="background:#000;border:1px solid #333"><div class="qm" style="font-style:normal">“</div><p style="font-style:normal;font-weight:300">A inovação é tech, mas as conexões são humanas.</p><div class="who M">Mensagem para B2C</div></div>
      </div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Faixa de chamada</h3><span>.cta-band</span></div>
      <div class="cta-band"><div><h4 style="font-weight:300">Pulso humano.<br>Impulso tech.</h4><p>Seja parte do maior ecossistema de educação tech da América Latina.</p></div><a class="btn btn-primary">Conhecer o grupo</a></div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Alertas</h3><span>.alert</span></div>
      <div class="row" style="align-items:flex-start"><div class="alert info"><i>i</i><div>Inscrições abertas até sexta-feira.</div></div><div class="alert ok"><i>✓</i><div>Cadastro confirmado.</div></div><div class="alert warn"><i>!</i><div>Faltam 3 dias para o prazo.</div></div><div class="alert err"><i>×</i><div>Não foi possível enviar.</div></div></div>
    </div>`
  });

  // ---------------- 08 PEÇAS ----------------
  const mosCanvas = (seed, v = 'full', mask = 'ellipse', cell = 10) => `<canvas data-gfx="mosaic" data-seed="${seed}" data-variant="${v}" data-mask="${mask}" data-cell="${cell}"></canvas>`;
  const cellBox = (c1, c2, r1, r2, st, inner = '') => `<div class="a" style="left:${(c1 - 1) * 25}%;top:${(r1 - 1) * 25}%;width:${(c2 - c1 + 1) * 25}%;height:${(r2 - r1 + 1) * 25}%;${st}">${inner}</div>`;
  const s8 = sec({
    id: 'pecas', num: '08', label: 'Peças & layouts', cls: 'black', title: ['Tudo', 'junto'],
    lead: 'Layouts montados no grid 4×4: blocos de cor chapada, tipografia serifada grande, um rótulo em mono e uma faixa de módulos. A mesma gramática para feed, stories, slides e impressos.',
    body: `
    <div class="pieces" style="margin-top:44px">
      <div class="pc-wrap p-feed reveal"><div class="piece sq" style="background:#000">
        ${cellBox(1, 1, 1, 2, `background:${MOFF}`)}
        ${cellBox(2, 4, 1, 2, 'background:#000', `<span class="a M" style="right:calc(26*var(--u));top:calc(24*var(--u));font-size:calc(21*var(--u));color:${PM}">ALUN.COM.BR</span>`)}
                ${cellBox(1, 1, 3, 4, 'background:#000', `${lg(B, 'logo', PM, 'position:absolute;left:calc(26*var(--u));bottom:calc(30*var(--u));height:calc(34*var(--u))')}`)}
        ${cellBox(2, 2, 3, 4, '', mosCanvas(9, 'full', 'diag', 8))}
        ${cellBox(3, 4, 3, 4, `background:${MON}`, `<div class="a" style="left:calc(24*var(--u));top:calc(24*var(--u));right:calc(24*var(--u));bottom:calc(24*var(--u));display:flex;flex-direction:column;justify-content:space-between"><span class="M" style="font-size:calc(20*var(--u));color:#000">Mais que<br>conhecimento tech</span><span class="S" style="font-size:calc(74*var(--u));line-height:.98;color:#000;font-weight:300">um chamado para mudar o mundo.</span></div>`)}
      </div><div class="pc-cap"><b>Feed</b><span>1080 × 1080</span></div></div>

      <div class="pc-wrap p-feed reveal"><div class="piece sq" style="background:#000">
        ${cellBox(1, 2, 1, 2, `background:${OON}`, `<span class="a M" style="left:calc(24*var(--u));top:calc(22*var(--u));font-size:calc(20*var(--u));color:#000">ALUN.COM.BR</span>`)}
        ${cellBox(3, 4, 1, 2, '#000', `${lg(B, 'logo', PM, 'position:absolute;left:calc(24*var(--u));top:calc(22*var(--u));height:calc(78*var(--u))')}`)}
        ${cellBox(3, 4, 2, 2, '', mosCanvas(15, 'full', 'ellipse', 8))}
        ${cellBox(1, 2, 3, 4, 'background:#000', `<span class="a S" style="left:calc(24*var(--u));bottom:calc(24*var(--u));right:calc(24*var(--u));font-size:calc(72*var(--u));line-height:1;color:${PM};font-weight:300">Superpoderes tech para superconquistas humanas.</span>`)}
        ${cellBox(3, 4, 3, 4, `background:${OOFF}`)}
      </div><div class="pc-cap"><b>Feed · tagline</b><span>1080 × 1080</span></div></div>

      <div class="pc-wrap p-story reveal"><div class="piece st" style="background:#000">
        <div class="a" style="left:0;top:0;right:0;height:10%;background:#000"><span class="a M" style="left:calc(40*var(--u));top:calc(38*var(--u));font-size:calc(26*var(--u));color:${PM}">ALUN.COM.BR</span></div>
        <div class="a" style="left:0;top:10%;width:100%;height:34%;background:${MON}"><span class="a S" style="left:calc(40*var(--u));bottom:calc(40*var(--u));right:calc(40*var(--u));font-size:calc(124*var(--u));line-height:.96;color:#000;font-weight:300">Pulso humano. Impulso tech.</span></div>
        <div class="a" style="left:0;top:44%;width:100%;height:36%;background:#000">${mosCanvas(27, 'full', 'ellipse', 8)}</div>
        <div class="a" style="left:0;top:80%;width:100%;height:20%;background:${MOFF}">${lg(B, 'logo', PM, 'position:absolute;left:calc(40*var(--u));bottom:calc(46*var(--u));height:calc(50*var(--u))')}</div>
      </div><div class="pc-cap"><b>Stories</b><span>1080 × 1920</span></div></div>

      <div class="pc-wrap p-slide reveal"><div class="piece wd" style="background:#000">
        <div class="a" style="left:0;top:0;width:25%;height:100%;background:${MOFF}"></div>
        <div class="a" style="left:25%;top:0;width:50%;height:100%;background:#000;display:flex;flex-direction:column;justify-content:space-between;padding:calc(64*var(--u))"><span class="M" style="font-size:calc(26*var(--u));color:${PM}">LINGUAGEM VERBAL · TOM DE VOZ</span><span class="S" style="font-size:calc(150*var(--u));line-height:.95;color:#fff;font-weight:300">Expert.<br>Sempre em movimento.</span><span class="R" style="font-size:calc(30*var(--u));color:${PM}">Convida à comunidade.</span></div>
        <div class="a" style="left:75%;top:0;width:25%;height:50%;background:${OON}"></div>
        <div class="a" style="left:75%;top:50%;width:25%;height:50%;">${mosCanvas(33, 'full', 'diag', 7)}</div>
      </div><div class="pc-cap"><b>Slide</b><span>1920 × 1080</span></div></div>
    </div>`
  });

  // ---------------- 09 VOZ ----------------
  const s9 = sec({
    id: 'voz', num: '09', label: 'Tom de voz', title: ['Expert, em', 'movimento'],
    lead: 'Tão importante quanto os temas sobre os quais falamos é definir como falamos. A voz da Alun é <b>expert</b>, está <b>sempre em movimento</b> e <b>convida à comunidade</b> — e se adapta a cada público sem perder a essência.',
    body: `
    <div class="grid g3 reveal" style="margin-top:36px">
      <div class="card"><div class="idx">01</div><h3>Expert</h3><p>Fala com domínio, clareza e segurança. <b>Seguro</b>, <b>preciso</b>, <b>potente</b>.</p><p style="margin-top:10px;color:#9a1b27"><b>Não é</b> prepotência: não é falar difícil, impor verdades ou diminuir outras vozes.</p></div>
      <div class="card"><div class="idx">02</div><h3>Sempre em movimento</h3><p>Fluxo constante: uma ideia leva a outra. <b>Dinâmico</b>, <b>propulsor</b>, <b>interligado</b>.</p><p style="margin-top:10px;color:#9a1b27"><b>Não é</b> pressa ou agitação vazia: cada passo importa e faz parte de um percurso.</p></div>
      <div class="card"><div class="idx">03</div><h3>Convida à comunidade</h3><p>Valoriza múltiplas vozes e provoca o desejo de pertencer. <b>Engaja</b>, <b>inclui</b> (primeira pessoa do plural), <b>conecta</b>.</p><p style="margin-top:10px;color:#9a1b27"><b>Não é</b> agradar a todos nem falar de forma genérica, neutra ou diluída.</p></div>
    </div>

    ${sub('Sobre o que falamos')}
    <div class="grid g2 reveal">
      <div class="card is-dark"><div class="label-k" style="color:${OON}">Potência tech</div><h3 style="font-weight:300;font-size:28px">O ecossistema mais completo do mercado.</h3><p>Somos referência em educação tech. Transformamos conhecimento em potência e potência em mudança. Reunimos mentes diversas e perspectivas complementares.</p></div>
      <div class="card is-dark" style="background:${MOFF}"><div class="label-k" style="color:${PM}">Potência humana</div><h3 style="font-weight:300;font-size:28px">Do individual ao coletivo.</h3><p style="color:${PM}">O aluno é o centro. Somos agentes de impulso e mudança. Unimos potências para ir além.</p></div>
    </div>

    ${sub('Um tom, sete públicos')}
    <div class="aud reveal">
      <div><b>Público interno</b><span>Humana e colaborativa. “Somos Alun. Em nossa veia tech pulsa criatividade.”</span></div>
      <div><b>B2C · Alunos</b><span>Autoridade e proximidade. “A inovação é tech, mas as conexões são humanas.”</span></div>
      <div><b>Professores</b><span>Reconhecimento e respeito. “Sua aula move o mundo.”</span></div>
      <div><b>B2B</b><span>Embasada, estratégica, objetiva. “Uma comunidade tech conectada aos seus desafios.”</span></div>
      <div><b>Investidores</b><span>Clareza e visão de longo prazo. “Grupo Alun: pulso humano, impulso tech.”</span></div>
      <div><b>Sociedade</b><span>Impacto e desenvolvimento. “Alun, uma força em movimento.”</span></div>
      <div><b>Institucional / Press</b><span>Dados, autoridade e consistência. “O conhecimento pulsa onde há conexão.”</span></div>
    </div>`
  });

  // ---------------- 10 ALUN BUSINESS ----------------
  const biz = require('./alun-business')(H, B);

  // ---------------- 11 TOKENS & IA ----------------
  const tokenGroups = [
    { comment: 'Neutros', vars: [['--alun-preto', '#000000', 'Preto'], ['--alun-cinza', '#333131', 'Cinza'], ['--alun-placa-mae', '#D1CDCD', 'Placa Mãe'], ['--alun-branco', '#FFFFFF', 'Branco']] },
    { comment: 'Destaques', vars: [['--alun-magenta-on', '#ED1360'], ['--alun-magenta-off', '#600724'], ['--alun-odisseia-on', '#FF9413'], ['--alun-odisseia-off', '#994800']] },
    { comment: 'Interface — derivadas do site', vars: [['--alun-ink', '#0D0C0C', 'texto em fundo claro']] },
    { comment: 'Tipografia', vars: [['--alun-font-titulo', '"Flecha M", Georgia, serif'], ['--alun-font-corpo', '"FK Grotesk", system-ui, sans-serif'], ['--alun-font-mono', '"FK Grotesk Mono", ui-monospace, monospace']] },
    { comment: 'Forma e grid', vars: [['--alun-radius', '0', 'sem cantos arredondados'], ['--alun-grid', '4', 'colunas e linhas'], ['--alun-margin', '10px'], ['--alun-gutter', '20px']] },
    { comment: 'Espaçamento — base 4 px', vars: [['--alun-sp-1', '4px'], ['--alun-sp-2', '8px'], ['--alun-sp-3', '12px'], ['--alun-sp-4', '16px'], ['--alun-sp-6', '24px'], ['--alun-sp-8', '32px'], ['--alun-sp-12', '48px'], ['--alun-sp-16', '64px']] }
  ];
  tokenGroups.title = 'Alun — Design tokens v1.0';
  const s10 = sec({
    id: 'ia', num: '11', label: 'Tokens & IA', cls: 'dark', title: ['Pronto para', 'código'],
    lead: 'Tokens CSS para sites, apresentações e ferramentas — e um contexto em Markdown para alimentar outras IAs na criação de peças consistentes com a marca.',
    body: `
    <div class="code-card reveal"><div class="bar"><span>tokens.css</span><button class="btn btn-light btn-sm" id="copyCss">Copiar CSS</button></div>
<pre id="cssTokens">${tokensPre(tokenGroups)}</pre></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">As fontes oficiais (Flecha, FK Grotesk) são licenciadas; carregue-as a partir da licença da Alun. Para prévias, use Newsreader, Hanken Grotesk e DM Mono (Google Fonts).</p>
    <h3 class="sub reveal" style="margin-top:56px">Geração de imagens por IA</h3>
    <p class="reveal" style="max-width:66ch">Os quatro direcionais fotográficos, com palavras-chave e <i>prompt</i> de referência (em inglês, como no brandbook) para produção fotográfica ou geração por IA.</p>
    <div class="grid g2 reveal" style="margin-top:20px">
      <div class="card"><div class="label-k">01 · Aspiracional urbano</div><p><b>Prompt:</b> A young student walking in a modern urban environment, glass architecture and greenery, oversized white textured T-shirt, round metal glasses, silver laptop, soft confident smile.</p><div class="kw"><span>soft smile</span><span>confident</span><span>modern student</span><span>minimalist</span><span>urban</span></div></div>
      <div class="card"><div class="label-k">02 · Aprendizado online</div><p><b>Prompt:</b> A young woman with curly hair indoors, focused on her laptop, wooden shelves softly lit by ambient lights, plants, cozy warm lamp.</p><div class="kw"><span>casual &amp; modern</span><span>warm lighting</span><span>wooden shelves</span><span>plants</span><span>focused</span></div></div>
      <div class="card"><div class="label-k">03 · Comunidade em ação</div><p><b>Prompt:</b> A diverse group of five young adults around a table in a modern industrial workspace, large windows, concrete and wood, natural light, collaborating on laptops.</p><div class="kw"><span>teamwork</span><span>problem-solving</span><span>natural light</span><span>industrial workspace</span></div></div>
      <div class="card"><div class="label-k">04 · Institucional</div><p><b>Prompt:</b> A confident older woman with gray hair in soft waves, large black glasses, gray zip-up top, modern dramatic light with warm glow, neutral studio background. <b>Sem tornar a imagem muito neon.</b></p><div class="kw"><span>dramatic light</span><span>warm glow</span><span>neutral studio</span><span>professional</span></div></div>
    </div>
    <div class="llm-block">
      <h3 class="sub reveal">Contexto para LLM</h3>
      <p class="reveal" style="max-width:66ch">Gera um bloco em Markdown com a identidade completa — pronto para colar como contexto em outra IA.</p>
      <div class="actions reveal" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-accent" id="genMd">Gerar .md para LLM</button><button class="btn btn-light" id="copyMd" style="display:none">Copiar texto</button><button class="btn btn-light" id="dlMd" style="display:none">Baixar .md</button></div>
      <textarea id="mdOut" readonly></textarea>
    </div>`
  });

  B.sections = [
    { id: 'essencia', navLabel: 'Estratégia', html: s1 }, { id: 'logo', navLabel: 'Logo', html: s2 }, { id: 'cores', navLabel: 'Cores', html: s3 },
    { id: 'tipografia', navLabel: 'Tipografia', html: s4 }, { id: 'grafismo', navLabel: 'Grafismo & grid', html: s5 }, { id: 'imagem', navLabel: 'Imagem & ícones', html: s6 },
    { id: 'componentes', navLabel: 'Componentes', html: s7 }, { id: 'pecas', navLabel: 'Peças', html: s8 }, { id: 'voz', navLabel: 'Voz', html: s9 }, { id: 'business', navLabel: 'Business', html: biz.html }, { id: 'ia', navLabel: 'Tokens & IA', html: s10 }
  ];

  // ---------------- CSS específico ----------------
  B.css = `
  /* Alun: blocos retos, rótulos em mono, sem sombras */
  .btn,.kicker,.kicker .num,.tag,.chip-prop,.dl-lb,.dl-seg button,.dl-meta b,.logo-tile small,.wrong span,.ctr-pair,.ctr-badge,.field label,.c-kicker,.pc-wrap .pc-cap b,.dd h4,.fam .label,.vx .lb,.code-card .bar,.toast,.proportion div,.sw .hint,.quote-bar small,.attr span,.type-demo .k,.dodont h4,.tok h4,.c-quote .who{font-weight:500}
  .sw .nm{font-weight:400;font-size:22px;letter-spacing:-.01em}
  .fam .label,.scale-row .tg,.label-k,.c-kicker{color:#600724}
  .black .label-k,.dark .label-k,.card.is-dark .label-k{color:#FF9413}
  .section.alt h2.title .c2{color:#600724}
  .dl-meta b{font-size:12.5px}
  .logo-tile small{font-size:11px;text-transform:uppercase;letter-spacing:.04em}
  .wrong span{font-size:10px}
  .proportion div{font-size:10.5px}
  .section.alt .card.is-dark{background:#000}
  nav.top .brand span,nav.top a{font-family:var(--mono);font-weight:500;font-size:11.5px;text-transform:uppercase;letter-spacing:.05em}
  nav.top a.nav-home{border-radius:0;font-size:11px}
  .kicker{display:inline-flex;background:#000;color:#fff;padding:6px 10px;font-size:11.5px;letter-spacing:.08em;margin-bottom:22px}
  .kicker .num{background:${MON};color:#000;padding:1px 6px;font-weight:500}
  .dark .kicker,.black .kicker{background:#fff;color:#000}
  .dark .kicker .num,.black .kicker .num{background:${MON};color:#000}
  h2.title{font-size:clamp(40px,6vw,84px);line-height:.98;margin-bottom:26px}
  h2.title .c2{color:${MON};font-style:italic}
  .black h2.title .c2,.dark h2.title .c2{color:${OON}}
  .lead{font-family:var(--body)}
  h3.sub{font-family:var(--mono);font-weight:500;letter-spacing:.08em;color:#000;background:transparent;display:flex;align-items:center;gap:10px}
  h3.sub::before{content:'';width:10px;height:10px;background:${MON}}
  .black h3.sub,.dark h3.sub{color:#fff}
  .black h3.sub::before,.dark h3.sub::before{background:${OON}}
  .card,.comp,.tok,.rule{border:1px solid #0D0C0C}
  .card:hover{transform:none;box-shadow:6px 6px 0 #000}
  .card h3{font-weight:400;font-size:22px;letter-spacing:-.01em}
  .card .idx,.rule .n{font-family:var(--mono);font-weight:500;font-size:14px;letter-spacing:.04em;color:#000;background:${MON};display:inline-block;padding:2px 7px;margin-bottom:14px}
  .rule .n{margin:0;min-width:0;height:max-content}
  .card.is-dark{border:1px solid #333}
  .sw:hover{box-shadow:none;transform:translateY(-4px)}
  .attr span{border-radius:0;font-family:var(--mono);font-weight:400;font-size:12.5px;letter-spacing:.03em;text-transform:uppercase;border:1px solid #000;color:#000}
  .attr span:hover{background:${MON};color:#000;border-color:#000}
  .mini-attr{display:flex;flex-wrap:wrap;gap:6px;margin-top:16px}
  .mini-attr span{font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.04em;background:${PM};padding:3px 8px}
  .label-k{font-family:var(--mono);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:${MOFF};margin-bottom:10px}
  .black .label-k,.dark .label-k,.card.is-dark .label-k{color:#FF9413}
  .dark .card:not(.is-dark) .label-k,.black .card:not(.is-dark) .label-k{color:${MOFF}}
  .kw{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}.kw span{font-family:var(--mono);font-size:11px;border:1px solid #000;padding:3px 8px}
  .quote-bar{border-radius:0;background:#000;border-left:14px solid ${MON}}
  .quote-bar .qm{font-family:"Newsreader",serif}
  .quote-bar p{font-style:italic}
  .tag{font-family:var(--mono);font-weight:400}
  .btn{border-width:1.5px}
  .btn-secondary{border-color:#000;color:#000}.btn-secondary:hover{background:#000;color:#fff}
  .btn-ghost{color:#000;padding:15px 4px}.btn-ghost:hover{color:${MON}}
  .logo-tile{border-radius:0}
  .cs-box{border-radius:0}
  .c-course,.c-stat,.c-quote,.cta-band{border-radius:0}
  .c-course h4{letter-spacing:-.01em}
  .cta-band{background:#000}.cta-band::before{background:${MON}}
  .field input{border:1px solid #000;font-family:var(--body)}
  .field label{font-family:var(--mono);font-weight:500;font-size:11.5px;letter-spacing:.06em}
  .alert{border-left:6px solid #000;border-radius:0}
  .alert.info{border-color:${CZ}}.alert.ok{border-color:#2c9a4b}.alert.warn{border-color:${OON}}.alert.err{border-color:#c0283a}
  .ctr-pair{border-radius:0}
  .section.alt .card,.section.alt .comp,.section.alt .tok{background:#fff}
  .sw.light.bordered{border:1px solid #0D0C0C}
  .proportion{border-radius:0}
  .strat{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid #000;margin-top:40px}
  .strat .st{padding:30px 28px;border-right:1px solid #000}.strat .st:last-child{border-right:none}
  .strat .st:nth-child(2){background:#000;color:#fff}.strat .st:nth-child(2) p{color:${PM}}
  .strat .st:nth-child(3){background:${MON}}.strat .st:nth-child(3) p{color:#000}
  .strat .lab-k{font-family:var(--mono);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;background:#000;color:#fff;padding:3px 8px;display:inline-block;margin-bottom:16px}
  .strat .st:nth-child(2) .lab-k{background:#fff;color:#000}.strat .st:nth-child(3) .lab-k{background:#000;color:#fff}
  .strat p{font-family:var(--display);font-weight:300;font-size:20px;line-height:1.3;margin:0;color:#000}
  .strat .st:nth-child(3) p{font-weight:400}
  .black .wrong > div{background:#fff}
  /* hero em grid 4×4 */
  .hero{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:auto auto clamp(150px,15vw,210px);background:#000}
  .hb{position:relative;overflow:hidden;padding:26px;display:flex;flex-direction:column;justify-content:space-between}
  .hb .lab,.lab{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase}
  .hb .lab.dim{opacity:.6}
  .h-main{grid-column:1/4;grid-row:1/3;background:#000;color:#fff;padding:32px 36px;min-height:clamp(300px,40vh,420px)}
  .h-top{display:flex;justify-content:space-between;gap:12px;color:${PM}}
  .h-main h1{font-weight:300;font-size:clamp(38px,4.7vw,80px);line-height:.96;letter-spacing:-.03em;color:#fff;margin:0 0 20px;max-width:14ch}
  .h-main h1 em{font-style:italic;color:${MON}}
  .h-main p{color:${PM};max-width:52ch;font-size:15px;margin:0}
  .h-wine{grid-column:4;grid-row:1;background:${MOFF};color:${PM}}
  .h-or{grid-column:4;grid-row:2;background:${OON};color:#000}
  .h-mag{grid-column:1/3;grid-row:3;background:${MON};color:#000;justify-content:flex-end}
  .h-mag h2{font-weight:300;font-size:clamp(28px,3.4vw,56px);max-width:16ch;line-height:.98;letter-spacing:-.03em;color:#000}
  .h-mos{grid-column:3/5;grid-row:3;background:#D1CDCD;justify-content:flex-end;align-items:flex-start}
  .h-mos canvas{position:absolute;left:0;right:0;bottom:0;top:auto;width:100%;height:38%}
  /* mosaico interativo */
  .mos-box{position:relative}
  .mos-box canvas{width:100%;aspect-ratio:16/10;background:#000;display:block;border:1px solid #333}
  .mos-ctl{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:14px}
  /* grid 4×4 */
  .grid4{display:flex;justify-content:center}
  .g4-box{position:relative;width:min(100%,380px);aspect-ratio:1/1;background:${PM};display:grid;grid-template-columns:repeat(4,1fr);gap:20px;padding:10px;border:1px solid #333}
  .g4-box i{background:#fff;display:block}
  .g4-box u,.g4-box s{position:absolute;background:${MON};opacity:.8}
  .g4-box u{top:0;bottom:0;width:1px}.g4-box s{left:0;right:0;height:1px}
  /* pictogramas */
  .picto{display:grid;grid-template-columns:repeat(6,1fr);gap:0;border-top:1px solid #000;border-left:1px solid #000;margin-top:20px}
  .picto > div{border-right:1px solid #000;border-bottom:1px solid #000;background:${PM};aspect-ratio:1/1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:12px}
  .picto .pi{width:44%;color:#000}.picto span{font-family:var(--mono);font-size:11px;letter-spacing:.04em;text-transform:uppercase}
  .picto > div:hover{background:${MON}}
  /* públicos */
  .aud{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border:1px solid #000}
  .aud > div{padding:18px 22px;border-bottom:1px solid #000;display:grid;gap:4px}
  .aud > div:nth-child(odd){border-right:1px solid #000}
  .aud > div:last-child:nth-child(odd){grid-column:1/-1;border-right:none}
  .aud b{font-family:var(--mono);font-weight:500;font-size:12px;letter-spacing:.06em;text-transform:uppercase}
  .aud span{font-size:14.5px;color:#3a3737}
  .logo-tile.sym .lg{height:64px}
  .wrong > div{border-radius:0}
  .wrong .lg{height:26px}
  .piece{border-radius:0}
  .dl-card{border-radius:0}.dl-prev{border-radius:0}
  .tex{border-radius:0}
  .tex canvas{width:100%;height:100%}
  .c-course .im canvas{width:100%;height:100%}
  @media screen and (max-width:980px){
    .hero{grid-template-rows:auto;min-height:0;grid-template-columns:repeat(2,1fr)}
    .h-main{grid-column:1/3;grid-row:auto}.h-wine{grid-column:1;grid-row:auto;min-height:140px}.h-or{grid-column:2;grid-row:auto;min-height:140px}
    .h-mag{grid-column:1/3;grid-row:auto;min-height:200px}.h-mos{grid-column:1/3;grid-row:auto;min-height:140px}
    .strat{grid-template-columns:1fr}.strat .st{border-right:none;border-bottom:1px solid #000}
    .picto{grid-template-columns:repeat(4,1fr)}.aud{grid-template-columns:1fr}.aud > div:nth-child(odd){border-right:none}
  }
  @media screen and (max-width:600px){.picto{grid-template-columns:repeat(3,1fr)}.hb{padding:20px}.h-main{padding:24px}}
  `;
  B.css += biz.css;

  // ---------------- gráficos (módulos 4×2) ----------------
  B.gfx = `
  (function(){
    var COL={on:'${MON}',off:'${MOFF}',oon:'${OON}',ooff:'${OOFF}',pm:'${PM}',bk:'#000',cz:'${CZ}',wh:'#fff'};
    function rng(seed){var s=seed>>>0||1;return function(){s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296;};}
    function noise(seed){var r=rng(seed),p=[];for(var i=0;i<4096;i++)p.push(r());
      function h(x,y){x=((x%64)+64)%64;y=((y%64)+64)%64;return p[(y*64+x)&4095];}
      function s(t){return t*t*(3-2*t);}
      return function(x,y){var xi=Math.floor(x),yi=Math.floor(y),xf=s(x-xi),yf=s(y-yi);
        var a=h(xi,yi),b=h(xi+1,yi),c=h(xi,yi+1),d=h(xi+1,yi+1);return a+(b-a)*xf+(c-a)*yf+(a-b-c+d)*xf*yf;};}
    function cellDraw(ctx,x,y,s,type,variant,r){
      var full=variant==='full';
      if(type==='solidOn'){ctx.fillStyle=COL.on;ctx.fillRect(x,y,s,s);}
      else if(type==='solidPm'){ctx.fillStyle=COL.pm;ctx.fillRect(x,y,s,s);}
      else if(type==='solidOff'){ctx.fillStyle=COL.off;ctx.fillRect(x,y,s,s);}
      else if(type==='bar'){ctx.fillStyle=COL.pm;ctx.fillRect(x,y,s,s);ctx.fillStyle=r()>.5?COL.on:COL.bk;ctx.fillRect(x+s*.4,y+s*.2,s*.2,s*.6);}
      else if(type==='ring'){ctx.fillStyle=COL.off;ctx.fillRect(x,y,s,s);ctx.strokeStyle=COL.on;ctx.lineWidth=Math.max(1,s*.16);ctx.strokeRect(x+s*.26,y+s*.26,s*.48,s*.48);}
      else if(type==='bracket'){ctx.fillStyle=full&&r()>.35?COL.ooff:COL.bk;ctx.fillRect(x,y,s,s);ctx.strokeStyle=full?COL.oon:COL.on;ctx.lineWidth=Math.max(1,s*.14);
        ctx.beginPath();ctx.moveTo(x+s*.42,y+s*.22);ctx.lineTo(x+s*.26,y+s*.22);ctx.lineTo(x+s*.26,y+s*.78);ctx.lineTo(x+s*.42,y+s*.78);
        ctx.moveTo(x+s*.58,y+s*.22);ctx.lineTo(x+s*.74,y+s*.22);ctx.lineTo(x+s*.74,y+s*.78);ctx.lineTo(x+s*.58,y+s*.78);ctx.stroke();}
      else if(type==='dash'){ctx.fillStyle=COL.bk;ctx.fillRect(x,y,s,s);ctx.fillStyle=r()>.5?COL.off:COL.on;ctx.fillRect(x+s*.42,y+s*.3,s*.16,s*.4);}
      else if(type==='orange'){ctx.fillStyle=COL.oon;ctx.fillRect(x,y,s,s);ctx.fillStyle=COL.bk;ctx.fillRect(x+s*.38,y+s*.25,s*.24,s*.5);}
      else if(type==='stripe'){ctx.fillStyle=COL.bk;ctx.fillRect(x,y,s,s);ctx.fillStyle='#3a3838';ctx.fillRect(x+s*.38,y,s*.24,s);}
    }
    // faixa de módulos: progressão ordenada (vazio → traço → anel → colchete → bloco), sem ruído de imagem
    function mosaic(cv,seedOverride,variantOverride){
      var seed=+(seedOverride||cv.dataset.seed||1),variant=variantOverride||cv.dataset.variant||'full',dir=cv.dataset.mask==='diag'?-1:1;
      var dpr=Math.min(window.devicePixelRatio||1,2),w=cv.clientWidth||cv.parentNode.clientWidth,h=cv.clientHeight||cv.parentNode.clientHeight;
      if(!w||!h)return;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);
      var ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#000';ctx.fillRect(0,0,w,h);
      var cell=+(cv.dataset.cell||Math.max(12,Math.round(Math.min(w,h)/10)));var cols=Math.ceil(w/cell),rows=Math.ceil(h/cell);
      var r=rng(seed*13+5),full=variant==='full';
      for(var j=0;j<rows;j++){for(var i=0;i<cols;i++){
        var u=cols>1?i/(cols-1):1;if(dir<0)u=1-u;
        var t=u*.92+(j%2?.03:0)+(r()-.5)*.1,x=i*cell,y=j*cell,ty;
        if(t<.1){if(i%3===0)cellDraw(ctx,x,y,cell,'stripe',variant,r);continue;}
        if(t<.24)ty='dash';else if(t<.4)ty='ring';else if(t<.56)ty='bracket';else if(t<.72)ty=(full&&r()<.14)?'orange':'bar';else if(t<.88)ty='solidOn';else ty=r()<.5?'solidPm':'solidOn';
        cellDraw(ctx,x,y,cell,ty,variant,r);
      }}
    }
    window.GFX={mosaic:function(cv){mosaic(cv);}};
  })();
  `;

  // ---------------- Markdown para LLM ----------------
  B.md = `# Alun — Design System / Brand Context (para uso por IA)

> Referência estruturada da identidade do Grupo Alun, baseada no Brandbook Alun 2025. Ao desenhar logo/símbolo, use sempre os arquivos vetoriais oficiais — não recrie de memória.

## 1. Marca
- Nome: Alun (do latim "alumnus" — aluno). Grupo de educação tech: Alura, FIAP, PM3, StartSe. Site: ALUN.COM.BR
- Tagline: "Superpoderes tech para superconquistas humanas." · Assinaturas de campanha: "Pulso humano. Impulso tech." · "Um chamado para mudar o mundo." · "A força de muitas mentes. Um só ecossistema."
- Visão: ser o espaço mais relevante para evoluir, impulsionar e conectar os profissionais do futuro; maior e mais completo ecossistema de capacitação tech da América Latina.
- Propósito: oferecer experiências de educação memoráveis, para todos os profissionais que usam tecnologia, em todos os estágios, e para quem quer multiplicar conexões.
- Direcionadores: Fazer junto (conexão) · Fazer diferente (inovação) · Fazer a diferença (evolução para o mundo).
- Atributos: Conectora, High touch, Diversa, Parceira, Expansiva, Apaixonada, High tech, Criativa, Disruptiva, Inteligente, Protagonista, Potente, Engajadora.

## 2. Logo
- Logotipo: ALUN em quatro letras de módulos retos e cantos arredondados (wordmark). Símbolo inspirado no cérebro: quadrado de cantos arredondados com duas fendas verticais e entalhes no topo e na base.
- Cores do logo: Preto (#000) em fundo claro; Placa Mãe (#D1CDCD) sobre Preto/Cinza; Preto sobre Placa Mãe.
- Área de segurança: 2X, sendo X a largura da haste da letra. Redução máxima: 20 px; abaixo disso, usar o símbolo.
- Nunca: deformar, rotacionar, outline, cores fora da paleta, fundo sem contraste, ignorar a margem de segurança, sombras, efeitos, sangrar, alterar espaçamentos, quebrar o texto da marca, aplicar na vertical.

## 3. Cores
| Nome | HEX | RGB | Uso |
|---|---|---|---|
| Preto | #000000 | 0 0 0 | Base, blocos principais, texto |
| Cinza | #333131 | 51 49 49 | Superfície escura secundária |
| Placa Mãe | #D1CDCD | 209 205 205 | Cinza quente: fundo neutro, logo sobre preto |
| Branco | #FFFFFF | 255 255 255 | Respiro, texto |
| Magenta On | #ED1360 | 237 19 96 | Energia, blocos de ação, grafismo |
| Magenta Off | #600724 | 96 7 36 | Sombra do magenta, blocos profundos |
| Odisseia On | #FF9413 | 255 148 19 | Laranja: destaque, links/CTAs em fundo preto |
| Odisseia Off | #994800 | 153 72 0 | Sombra do laranja |
- Atenção: CMYK/Pantone do PDF original são placeholder; confirmar com o time de marca.
- Proporção aproximada: Preto ~26% · Magenta On ~19% · Magenta Off ~17% · Placa Mãe ~12% · Odisseia On ~8% · Odisseia Off ~7% · Branco+Cinza ~11%. Blocos de cor chapada, sem gradiente.
- Texto: preto sobre Magenta On/Odisseia On; Placa Mãe ou branco sobre preto/vinho. Branco sobre Magenta On só em texto grande.

## 4. Tipografia
- Títulos: Flecha M/L (serifa, R-Typography), peso leve, caixa baixa/sentença, tracking −2 a −3%, entrelinha ~1.
- Subtítulos e corpo: FK Grotesk (Florian Karsten), Regular, entrelinha 1,5.
- Detalhes: FK Grotesk Mono, caixa alta, 11–13 px — rótulos, URLs, CTAs.
- Escala web (site): H2 48/48 · lead 20/32 · corpo 16/24 · CTA 24/32 em Odisseia On.
- Fontes licenciadas; prévias abertas: Newsreader, Hanken Grotesk, DM Mono.

## 5. Grafismo e grid
- Módulos derivados do símbolo (anéis, colchetes, barras, blocos). Módulo 4×2. Plataforma converte imagem/vídeo em mosaico. Duas versões: magenta + laranja, ou só magenta.
- Grid: malha modular 4×4, margem 10 px, gutter 20 px, independente do formato. Blocos de cor chapada, tipografia e grafismo em dosagem equilibrada.
- Pictogramas: malha 15×15, traço mínimo de 1 unidade, retas e curvas.

## 6. Fotografia
- Quatro direcionais: (1) aluno em paisagem urbana aspiracional; (2) aprendizado online com luz natural e madeira; (3) comunidade colaborando em ambiente industrial moderno; (4) retrato institucional com luz de recorte nas cores da marca, sem ficar neon.
- Prompt de referência (1): A young student walking in a modern urban environment, glass architecture and greenery, oversized white textured T-shirt, round metal glasses, silver laptop, soft confident smile.
- Prompt de referência (2): A young woman with curly hair indoors, focused on her laptop, wooden shelves softly lit by ambient lights, plants, cozy warm lamp.
- Prompt de referência (3): A diverse group of five young adults around a table in a modern industrial workspace, large windows, concrete and wood, natural light, collaborating on laptops.
- Prompt de referência (4): A confident older woman with gray hair in soft waves, large black glasses, gray zip-up top, modern dramatic light with warm glow, neutral studio background.

## 7. Componentes
- Retos, sem raio e sem sombra. Botão primário: Magenta On, texto preto em FK Grotesk Mono caixa alta. Ghost com seta (→) em Odisseia On sobre preto. Rótulos: caixa preta com mono branco. Campos retos com borda 1 px; erro com texto.

## 8. Tom de voz
- Expert (seguro, preciso, potente — sem prepotência); Sempre em movimento (dinâmico, propulsor, interligado — sem pressa vazia); Convida à comunidade (engaja, inclui na 1ª pessoa do plural, conecta — sem genericidade).
- Assuntos: Potência tech (ecossistema mais completo do mercado) · Potência humana (do individual ao coletivo).
- Públicos: interno, B2C (alunos), professores, B2B, investidores, sociedade, institucional/press.
- Exemplos: "A inovação é tech, mas as conexões são humanas." · "Não sonhe com o futuro. Venha criá-lo." · "Educação tech é estratégia de negócio."

## 9. Checklist
Grid 4×4 · blocos de cor chapada · título em serifa leve + apoio em grotesca · rótulo em mono · no máx. 1–2 blocos de grafismo · logo respeitando 2X · texto preto sobre magenta/laranja · voz expert, em movimento, comunitária.

## 10. Fonte
Brandbook Alun 2025 (250822_ALUN_Brandbook_V2) · alun.com.br
`;

  B.md += biz.md;

  return B;
};
