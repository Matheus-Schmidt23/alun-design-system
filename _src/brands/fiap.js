// FIAP — Design System (fonte: FIAP DESIGN SYSTEM 2.0 (.fig) + fiap.com.br)
module.exports = (H) => {
  const { sec, sw, swGrid, ramp, card, rule, li, dd, dodont, sub, tile, lg, tokensPre } = H;

  const MG = '#ED145B', BK = '#000000', WH = '#FFFFFF', UL = '#ACC1CC', SL = '#75838B';

  const B = {
    id: 'fiap', name: 'FIAP', version: 'v2.0',
    description: 'Design System da FIAP: logo, cores por produto, tipografia, grafismo, componentes, peças e tom de voz — baseado no Design System 2.0 da Criação FIAP.',
    footerNote: 'Baseado no Design System FIAP 2.0 · Criação FIAP',
    fontsHref: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&family=Roboto+Mono:wght@400;500&family=Roboto+Slab:wght@400;500;700&family=Playfair+Display:ital,wght@1,400;1,500&display=swap',
    navLogoHex: MG, footLogoHex: MG, faviconHex: MG,
    logo: {
      w: 100, h: 28,
      paths: '<path d="M30.906.205h-2.68v27.301h2.68zM17.667 12.929H7.344v2.537h10.323z"/><path d="M0 27.506h2.671V2.742h20.421V.205H0zM89.786.1H73.742v27.3h2.68V2.636h13.22c4.808 0 7.675 2.264 7.675 6.062v.076c0 3.692-3.177 6.176-7.9 6.176H82.85v2.537h6.452c7.388 0 10.693-4.436 10.693-8.827v-.076C99.996 3.191 96.276.1 89.794.1zM53.631 0h-2.286L34.53 27.491h2.876l15.047-24.3 7.743 12.48h3.064zM62.813 19.872l4.739 7.62h2.988l-4.686-7.62z"/>'
    },
    symbol: {
      w: 24, h: 28,
      paths: '<path d="M0 27.506h2.671V2.742h20.421V.205H0zM17.667 12.929H7.344v2.537h10.323z"/>'
    },
    dlColors: [
      { k: 'magenta', hex: MG, name: 'Magenta', bg: BK },
      { k: 'branco', hex: WH, name: 'Branco', bg: BK },
      { k: 'preto', hex: BK, name: 'Preto', bg: '#C8C8C6' },
      { k: 'cinza', hex: UL, name: 'Cinza claro', bg: '#0E0F10' }
    ],
    theme: {
      action: MG,
      vars: {
        '--c-deep': '#0E0F10', '--c-action': MG, '--c-action-hover': '#000', '--on-action': '#fff', '--c-black': '#000', '--c-soft': UL, '--c-accent': MG, '--on-accent': '#fff',
        '--c-tint': '#F6D1DD', '--c-sec': '#000', '--on-sec': '#fff', '--c-title2': MG,
        '--ink': '#14191C', '--paper': '#FFFFFF', '--text-2': '#3b4347', '--muted': '#6a747a', '--line': 'rgba(20,25,28,.14)', '--fog-soft': '#E4E8EA', '--sec-alt': '#F2F4F5',
        '--grad-b': 'linear-gradient(135deg,#000 0%,#6b0b2e 55%,#ED145B 100%)',
        '--display': '"Montserrat","Gotham HTF",system-ui,sans-serif', '--body': '"Roboto",system-ui,sans-serif', '--serif': '"Playfair Display",Georgia,serif', '--mono': '"Roboto Mono",ui-monospace,Consolas,monospace',
        '--serif-style': 'italic', '--serif-w': '500',
        '--r-sm': '0', '--r-btn': '0', '--r-card': '0', '--r-xl': '0', '--r-pill': '0', '--r-chk': '0', '--r-piece': '0',
        '--shadow': 'none', '--shadow-lg': '0 0 0 1px #14191C',
        '--h-w': '600', '--h-tt': 'uppercase', '--h-ls': '-.02em', '--h-lh': '1',
        '--btn-w': '600', '--btn-ls': '.08em', '--btn-tt': 'uppercase',
        '--nav-bg': 'rgba(0,0,0,.9)', '--nav-dim': UL, '--num-bg': MG, '--num-fg': '#fff', '--num-r': '0', '--q-w': '600', '--q-tt': 'uppercase', '--vx-font': '"Montserrat",sans-serif', '--h4-w': '600', '--h4-tt': 'uppercase',
        '--al-info-bg': '#e6eef2', '--al-info-fg': '#1d3744', '--al-info': SL
      }
    },
    contrast: [
      [WH, MG, 'Branco sobre Magenta', 'Botão primário · faixas de campanha'],
      [BK, MG, 'Preto sobre Magenta', 'Alternativa para texto menor sobre magenta'],
      [MG, BK, 'Magenta sobre Preto', 'Links, seta “SAIBA MAIS” e acentos em fundo escuro'],
      [WH, BK, 'Branco sobre Preto', 'Títulos e texto em fundo preto'],
      [UL, BK, 'Cinza claro sobre Preto', 'Subtítulos e descrições em fundo preto'],
      [BK, UL, 'Preto sobre Cinza claro', 'Blocos neutros'],
      [WH, SL, 'Branco sobre Cinza escuro', 'Só texto grande'],
      [BK, '#C8C8C6', 'Preto sobre Cool Gray 3 C', 'Impressos e fundos neutros'],
      [MG, WH, 'Magenta sobre Branco', 'Títulos grandes em fundo claro (≥24 px)'],
      [BK, '#29F4D5', 'Preto sobre Verde FIAP School', 'Acento da FIAP School'],
      [BK, '#FFFD39', 'Preto sobre Amarelo Módulo', 'Acento do Colégio Módulo'],
      [WH, '#5A008C', 'Branco sobre Roxo Módulo', 'Fundo do Colégio Módulo']
    ]
  };

  // ---------------- HERO ----------------
  B.hero = `
<header class="hero">
  <div class="wrap hero-in">
    <div class="h-meta"><span>Design System · v2.0 · 2026</span><span>Criação FIAP</span></div>
    <div class="h-mid">
      <div class="h-txt">
        <h1>A melhor faculdade <span>tech</span> do Brasil.</h1>
        <p>Elementos visuais, padrões de design, guias de tamanho, templates e paleta de cores — um só sistema para unificar interfaces, garantir consistência, acessibilidade e eficiência em todos os produtos e plataformas da FIAP.</p>
        <div class="h-actions"><a class="btn btn-primary" href="#cores">Ver a paleta</a><a class="btn btn-secondary" href="#logo">Logo e variações</a></div>
      </div>
    </div>
  </div>
  <div class="h-strip"><div class="wrap"><b>Vestibular 2027</b><span>Turmas fev./2027</span><span class="ar">↓</span></div></div>
</header>`;

  // ---------------- 01 ESSÊNCIA ----------------
  const s1 = sec({
    id: 'essencia', num: '01', label: 'Direção de arte', title: ['Branding é', 'posicionamento visual'],
    lead: 'Branding não é só estética: é posicionamento visual traduzido em experiência. A Direção de Arte é a guardiã dessa coerência — transforma estratégia institucional em linguagem visual, tom, ritmo e personalidade. Marca é o que as pessoas percebem, sentem e lembram; num mercado saturado de mensagens, quem não constrói uma identidade clara, consistente e relevante vira ruído.',
    body: `
    <div class="grid g2 reveal" style="margin-top:40px">
      <div class="card is-dark" style="background:#000"><div class="label-k">O ecossistema</div><h3>Múltiplos contextos, um sistema visual</h3><p>Educação, tecnologia, inovação, mercado, futuro. A Direção de Arte conecta tudo: o digital conversa com o físico, o institucional com o comercial, o agora com o futuro.</p></div>
      <div class="card"><div class="label-k">Consistência</div><h3>Clareza de identidade, não rigidez</h3><p>Consistência não significa rigidez: significa clareza de identidade, mesmo em constante evolução — decisões mais rápidas, claras e seguras, com menos retrabalho, ruído interno e subjetividade.</p></div>
    </div>

    ${sub('Perguntas de gestão de marca')}
    <div class="grid g4 reveal">
      ${card('Representa a FIAP?', 'Essa comunicação é a cara da marca — visual, tom e ritmo?', { idx: '01' })}
      ${card('Reforça o posicionamento?', 'Ajuda a construir “a melhor faculdade tech do Brasil”?', { idx: '02' })}
      ${card('Está alinhada ao futuro?', 'Conversa com a nossa visão de futuro e com o mercado?', { idx: '03' })}
      ${card('Diferencia ou acompanha?', 'Marca posição ou apenas segue o que o mercado já faz?', { idx: '04', dark: true })}
    </div>

    <p class="reveal" style="margin-top:14px;font-size:13.5px">A FIAP integra o ecossistema do Grupo Alun, ao lado de Alura, PM3 e StartSe. Produtos e linhas: Graduação, Graduação ON, MBA, Pós Tech, Shift, FIAP School, FIAP Empresas, FIAP Next, Nano Courses e o Colégio Módulo.</p>`
  });

  // ---------------- 02 LOGO ----------------
  const wr = (inner, label, bg = '#fff', color = '') => `<div style="background:${bg}">${inner}<span${color ? ` style="color:${color}"` : ''}>${label}</span><b class="x"${color ? ` style="color:${color}"` : ''}>✕</b></div>`;
  const s2 = sec({
    id: 'logo', num: '02', label: 'Logo', cls: 'black', title: ['O F que', 'abre caminho'],
    lead: 'O logotipo da FIAP é o ativo central do sistema. Cada produto tem a sua versão — Graduação, MBA, Empresas, Nano Courses, FIAP School, Colégio Módulo, Next e <i>Let’s Rock The Future</i> — com redução mínima e área de segurança próprias. O <b style="color:#fff">F</b> também é o grafismo-assinatura da marca.',
    body: `
    ${sub('Baixar o logo em SVG')}
    <div class="dl-bar reveal"><span class="dl-note">Vetor oficial · fundo transparente · escala sem perda de qualidade</span></div>
    <div class="dl-grid reveal" id="dlGrid"></div>

    ${sub('Área de segurança e redução mínima')}
    <div class="clear-demo reveal">
      <div class="cs-box"><i class="xt">F</i><i class="xl">F</i><i class="xr">F</i><i class="xb">F</i>${lg(B, 'logo', MG, 'height:56px')}</div>
      <div style="max-width:470px"><p style="margin:0 0 14px">Use o <b style="color:#fff">F do logo em toda a sua altura</b> como referência da área de segurança mínima — a margem que garante legibilidade e impacto visual. Cada variação define a sua letra de referência (F, O, M, R, N ou P).</p>
        <div class="min-tab"><div><b>117 px</b><span>largura mínima digital</span></div><div><b>2,3 cm</b><span>largura mínima impresso</span></div></div>
        <p style="margin:12px 0 0;font-size:12.5px">Redução mínima do logo FIAP. As demais variações têm valores próprios (de 117 a 280&nbsp;px em digital, de 2,3 a 4,3&nbsp;cm em impresso) — consulte a página do produto no arquivo Figma.</p></div>
    </div>`
  });

  // ---------------- 03 CORES ----------------
  const rgb = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(' '); };
  const c = (name, hex, role, o = {}) => Object.assign({ name, hex, role, rgb: rgb(hex), wide: false }, o);
  const s3 = sec({
    id: 'cores', num: '03', label: 'Cores', cls: 'alt', title: ['Magenta,', 'preto e luz'],
    lead: 'A paleta institucional é enxuta: Magenta, preto e branco, com cinzas azulados de apoio. Os produtos têm paletas próprias, nas abas abaixo. Clique em uma cor para copiar o HEX.',
    body: `
    ${sub('Produtos FIAP — institucional, graduação, MBA, Shift, FIAP ON')}
    ${swGrid([
      c('Magenta', MG, 'Cor da marca — logo, destaques, faixas, setas', { wide: true, cmyk: '0 100 22 0', pantone: 'Rubine Red C' }),
      c('Dark', BK, 'Fundo dominante, blocos e texto', { cmyk: '100 100 100 100', pantone: 'Black' }),
      c('White', WH, 'Respiro, texto sobre escuro', { light: true, bordered: true, pantone: 'White' })
    ])}
    ${swGrid([
      c('Cinza claro', UL, 'Subtítulos e apoio em fundo escuro', { light: true, sm: true }),
      c('Cinza escuro', SL, 'Slate gray — texto secundário, overlays', { sm: true }),
      c('Cool Gray 3 C', '#C8C8C6', 'Impressos — neutro', { light: true, sm: true, pantone: 'Cool Gray 3 C' }),
      c('Cinza textura', '#C6C4C3', 'Impressos — textura (27 22 22 0)', { light: true, sm: true, pantone: 'Metallic 10102 C' })
    ])}
    <div class="comp reveal"><div class="ct"><h3>FIAP School</h3><span>paleta do produto</span></div>
    ${swGrid([
      c('#7DE1D3', '#7DE1D3', 'Verde-água', { sm: true, light: true }), c('#29F4D5', '#29F4D5', 'Turquesa vibrante', { sm: true, light: true }), c('#22DBC0', '#22DBC0', 'Turquesa', { sm: true, light: true }), c('#B7FF00', '#B7FF00', 'Lima', { sm: true, light: true }),
      c('#6DC8BF', '#6DC8BF', 'Verde-água médio', { sm: true, light: true }), c('#A0D4CD', '#A0D4CD', 'Verde-água claro', { sm: true, light: true }), c('#D2DE26', '#D2DE26', 'Verde-limão', { sm: true, light: true }), c('Magenta', MG, 'Compartilhada com a marca FIAP', { sm: true })
    ])}
    </div>
    <div class="comp reveal"><div class="ct"><h3>Colégio Módulo</h3><span>paleta do produto</span></div>
    ${swGrid([
      c('#5A008C', '#5A008C', 'Roxo profundo', { sm: true }), c('#851BFA', '#851BFA', 'Roxo vibrante', { sm: true }), c('#8E7ED5', '#8E7ED5', 'Lavanda', { sm: true }), c('#25DBEF', '#25DBEF', 'Ciano', { sm: true, light: true }), c('#FFFD39', '#FFFD39', 'Amarelo', { sm: true, light: true })
    ])}
    </div>
    <div class="comp reveal"><div class="ct"><h3>Evento NEXT</h3><span>paleta do evento</span></div>
    ${swGrid([c('#FCEA10', '#FCEA10', 'Amarelo', { sm: true, light: true }), c('#67C3CF', '#67C3CF', 'Azul-turquesa', { sm: true, light: true }), c('Dark', BK, 'Base', { sm: true }), c('White', WH, 'Base', { sm: true, light: true, bordered: true })])}
    </div>
    <div class="comp reveal"><div class="ct"><h3>Peças do grupo Alun</h3><span>paleta compartilhada</span></div>
    ${swGrid([c('#FF9414', '#FF9414', 'Odisseia On', { sm: true, light: true }), c('#ED1460', '#ED1460', 'Magenta On', { sm: true }), c('#610725', '#610725', 'Magenta Off', { sm: true }), c('#D1CDCD', '#D1CDCD', 'Placa Mãe', { sm: true, light: true }), c('#333333', '#333333', 'Cinza', { sm: true }), c('#9A4800', '#9A4800', 'Odisseia Off', { sm: true })])}
    </div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">As cores do grupo seguem o guia da marca Alun — veja a plataforma da Alun. Os nomes de algumas cores do FIAP School e do Módulo não constam no arquivo original; os descritivos acima são orientativos.</p>


    ${sub('Contraste e acessibilidade', 'calculado')}
    <div class="card reveal" style="padding:10px 18px"><table class="ctr-table" id="ctrTable"></table></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Razões calculadas pela fórmula WCAG 2.x (texto normal exige 4,5:1; grande, 3:1). Magenta sobre branco e branco sobre magenta ficam no limite — prefira títulos grandes ou texto preto.</p>`
  });

  // ---------------- 04 TIPOGRAFIA ----------------
  const G = "'Montserrat',sans-serif", Rr = "'Roboto',sans-serif";
  const row = (tag, fam, w, size, lh, ls, sample, name) => `<div class="scale-row"><span class="tg">${tag}</span><span style="font-family:${fam};font-weight:${w};font-size:${size}px;line-height:${lh}px;letter-spacing:${ls}px">${sample}</span><span class="sp">${name} · ${size}/${lh} · ${ls > 0 ? '+' : ''}${ls}</span></div>`;
  const s4 = sec({
    id: 'tipografia', num: '04', label: 'Tipografia', title: ['Gotham', 'e Roboto'],
    lead: 'Gotham HTF é o principal tipo da FIAP e dos produtos — títulos e <i>taglines</i>. Roboto sustenta o corpo de texto. Os produtos têm tipos próprios: Metronic Slab Pro e Alianza Script (FIAP School e Módulo) e PP Editorial New Italic (Rock New Ventures).',
    body: `
    <div class="fam reveal" style="margin-top:40px;--fams:2">
      <div class="card is-dark" style="background:#000"><div class="label" style="color:${UL}">Títulos e taglines · Gotham HTF</div><div class="big" style="font-family:${G};font-weight:500;letter-spacing:-.03em;text-transform:uppercase">Gotham</div>
        <div style="font-family:${G};font-size:20px;line-height:1.25;font-weight:500">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789</div>
        <div class="weights" style="font-family:${G}"><span style="font-weight:300">Light</span><span style="font-weight:400">Book</span><span style="font-weight:500">Medium</span><span style="font-weight:700">Bold</span></div>
        <div class="meta" style="color:${UL}">Principal tipo FIAP e produtos. Caixa alta em títulos (Medium), Book em frases de apoio; tracking levemente negativo em títulos grandes.</div>
        <div class="sub-note" style="color:${UL}">Fonte oficial licenciada (Hoefler&amp;Co.). Prévia neste guia: Montserrat.</div></div>
      <div class="card"><div class="label">Corpo de texto · Roboto</div><div class="big" style="font-family:${Rr};font-weight:400;letter-spacing:-.02em">Roboto</div>
        <div style="font-family:${Rr};font-size:20px;line-height:1.3">AaBbCcDdEeFfGgHhIiJjKk<br>LlMmNnOoPpQqRrSsTtUuVv<br>WwXxYyZz 0123456789</div>
        <div class="weights" style="font-family:${Rr}"><span style="font-weight:300">Light</span><span style="font-weight:400">Regular</span><span style="font-weight:500">Medium</span><span style="font-weight:700">Bold</span></div>
        <div class="meta">Utilizada comumente em corpo de texto, rótulos e interface. Fonte aberta (Google Fonts).</div></div>
    </div>

    ${sub('Fontes por produto')}
    <div class="grid g4 reveal">
      <div class="card"><div class="label-k">FIAP School e Módulo</div><div class="ftxt" style="font-family:'Roboto Slab',serif;font-weight:500;font-size:28px">Metronic Slab Pro</div><p>Títulos e subtítulos. Frequentemente combinada com a Alianza Script.</p></div>
      <div class="card"><div class="label-k">FIAP School e Módulo</div><div class="ftxt" style="font-family:'Playfair Display',serif;font-style:italic;font-weight:500;font-size:30px">Alianza Script</div><p>Destaques e títulos de apoio, sempre com a Metronic Slab Pro.</p></div>
      <div class="card"><div class="label-k">Rock New Ventures</div><div class="ftxt" style="font-family:'Playfair Display',serif;font-style:italic;font-size:30px">PP Editorial New</div><p>Itálico para a marca Rock New Ventures. Também usada em logos de produtos FIAP.</p></div>
      <div class="card is-dark"><div class="label-k">Apoio</div><div class="ftxt" style="font-family:${G};font-size:26px;font-weight:500">Telegraf · Neue Montreal</div><p>Também no repertório: PT Sans, Playfair Display, LD Mono Line e Oxanium.</p></div>
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13px;color:var(--muted)">Fontes de produto são licenciadas e a prévia usa substitutas abertas. Quando uma marca de produto exigir tipos próprios, copie os vetores do logo no Figma.</p>

    ${sub('Escala tipográfica')}
    <div class="card reveal" style="padding:10px 28px">
      <div class="scale">
        ${row('Display L', G, 500, 57, 64, -0.25, 'A melhor faculdade', 'Gotham')}
        ${row('Headline M', G, 400, 28, 36, 0, 'Graduações em Dev, IA e Data', 'Gotham')}
        ${row('Title M', Rr, 500, 16, 24, 0.15, 'Título de seção', 'Roboto Medium')}
        ${row('Label M', Rr, 500, 12, 16, 0.5, 'ROTULO DE INTERFACE', 'Roboto Medium')}
        ${row('Body L', Rr, 400, 16, 24, 0.5, 'Domine as tecnologias mais avançadas e crie projetos reais com empresas globais.', 'Roboto')}
        ${row('Body M', Rr, 400, 14, 20, 0.25, 'Texto corrido de apoio em cards e páginas.', 'Roboto')}
      </div>
    </div>`
  });

  // ---------------- 05 GRAFISMO & GRID ----------------
  const bp = [['Extra Small', '0–599 dp', 18], ['Small', '600–904 dp', 30], ['Medium', '905–1239 dp', 48], ['Medium', '1240–1439 dp', 66], ['Large', '1440+ dp', 86]];
  const fmt = [['Feed quadrado', 1080, 1080], ['Feed retrato', 1080, 1350], ['Stories', 1080, 1920], ['Facebook / link', 1200, 628], ['E-book (capa)', 1600, 2400], ['Header HubSpot', 600, 365]];
  const s5 = sec({
    id: 'grafismo', num: '05', label: 'Grafismo, grid & formatos', cls: 'black', title: ['O F', 'em movimento'],
    lead: 'O grafismo-assinatura é o <b style="color:#fff">F</b> do logo, em Magenta, repetido e recortado sobre fundo preto. O layout parte de breakpoints em <i>dp</i>.',
    body: `
    <div class="rules reveal" style="margin-top:40px;grid-template-columns:repeat(3,1fr)">
      ${rule(1, 'Sempre em Magenta', 'O grafismo F usa a cor da marca sobre preto (ou preto sobre Magenta). Nunca recolorir com cores de outros produtos.')}
      ${rule(2, 'Recorte e escala', 'O F pode sangrar nas bordas e variar de escala, mantendo sua proporção. Nunca distorcer, espelhar ou rotacionar.')}
      ${rule(3, 'Fundo em gradiente', 'Preto com leve brilho magenta (“bgGradient”) dá profundidade às peças e aos slides do guia.')}
    </div>

    ${sub('Breakpoints de layout')}
    <div class="bpviz reveal">${bp.map(([n, r, w]) => `<div style="width:${w}%"><b>${n}</b><span>${r}</span></div>`).join('')}</div>`
  });

  // ---------------- 06 IMAGEM / FUNDOS ----------------
  const s6 = sec({
    id: 'imagem', num: '06', label: 'Fundos, selos & imagem', title: ['Escuro, nítido,', 'cheio de futuro'],
    lead: 'As peças FIAP vivem sobre fundos escuros com iluminação dramática — feixes de luz, partículas e gradientes — e prova social em destaque. O Design System 2.0 não fixa um guia de fotografia; reúne bibliotecas de imagens de cursos, desafios (<i>Challenges</i>), parceiros e eventos.',
    body: `

    ${sub('Prova social')}
    <div class="grid g3 reveal">
      <div class="seal"><div class="sn">5</div><div><b>Nota máxima</b><span>nas últimas 32 comissões de avaliação do MEC</span></div></div>
      <div class="seal"><div class="sn" style="font-size:30px">1.300</div><div><b>cursos Alura</b><span>na plataforma e comunidade — “Juntas, FIAP + Alura”</span></div></div>
      <div class="seal"><div class="sn" style="font-size:26px">Top</div><div><b>Maior ecossistema</b><span>de ensino tech do Brasil e da América Latina</span></div></div>
    </div>
    <p class="reveal" style="margin-top:12px;font-size:13px;color:var(--muted)">Números e selos exatamente como aparecem nas peças e no site de referência; confirme o dado vigente antes de publicar.</p>`
  });

  // ---------------- 07 COMPONENTES ----------------
  const s7 = sec({
    id: 'componentes', num: '07', label: 'Componentes', cls: 'alt', title: ['Blocos de', 'interface'],
    lead: 'Retos, escuros e diretos — cantos vivos, caixa alta, magenta como sinal de ação. Tudo abaixo é HTML/CSS real, derivado do site e do arquivo Figma.',
    body: `
    <div class="comp reveal">
      <div class="ct"><h3>Botões e links</h3><span>.btn · primário · secundário · link seta</span></div>
      <div class="row"><a class="btn btn-primary">Inscreva-se</a><a class="btn btn-secondary">Saiba mais</a><a class="btn btn-ghost">Saiba mais →</a><a class="btn btn-accent" style="background:#000;color:#fff">Vestibular 2027</a><a class="btn is-disabled">Indisponível</a></div>
      <div class="on-black"><div class="row"><a class="btn btn-primary">Inscreva-se</a><a class="btn btn-secondary">Saiba mais</a><a class="btn btn-ghost" style="color:${MG}">Saiba mais →</a></div></div>
      <div class="cap">Gotham Medium, caixa alta, +8%. Primário em Magenta com texto branco; em fundo preto, o link “SAIBA MAIS →” aparece em Magenta.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Painel de navegação</h3><span>.menu-panel</span></div>
      <div class="on-black" style="margin-top:0"><div class="menu-panel">
        <div><b>Graduação</b><p>Vestibular 2027 · avaliação digital em 07/nov.</p><a>Inscreva-se →</a></div>
        <div><b>PosTech</b><p>IA, Dev, Engenharia, Data &amp; Cyber.</p><a>Saiba mais →</a></div>
        <div><b>MBAs Tech</b><p>Advanced Tech Programs.</p><a>Saiba mais →</a></div>
        <div><b>Global MBAs</b><p>Advanced Business Programs.</p><a>Saiba mais →</a></div>
      </div></div>
      <div class="cap">Painel preto com filete Magenta, título em caixa alta, descrição pequena e link de ação.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Faixa de campanha</h3><span>.strip</span></div>
      <div class="strip"><b>Vestibular 2027</b><span>| Turmas fev./2027</span><i>⌄</i></div>
      <div class="cap">Faixa de largura total em Magenta com título forte e informação de apoio.</div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Tags e rótulos</h3><span>.tag · .c-kicker</span></div>
      <div class="row"><span class="tag tag-solid">Graduação</span><span class="tag tag-accent">MBA</span><span class="tag tag-line">Pós Tech</span><span class="tag tag-fog">Shift</span><span class="tag" style="background:#29F4D5;color:#000">FIAP School</span><span class="tag" style="background:#FFFD39;color:#000">Módulo</span><span class="c-kicker">Tech Intensive</span></div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Campos de formulário</h3><span>.field</span></div>
      <div class="row" style="align-items:flex-start">
        <div class="field"><label>Seu e-mail</label><input placeholder="nome@email.com"><span class="help">Enviaremos as informações do vestibular.</span></div>
        <div class="field err"><label>Telefone</label><input value="11 9999"><span class="help">Informe o número completo com DDD.</span></div>
        <div class="chk"><i class="on"></i> Quero receber novidades</div><div class="chk"><i></i> Aceito os termos</div>
      </div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Cards</h3><span>.c-course · .c-stat · .c-quote</span></div>
      <div class="cc-grid">
        <div class="c-course c-dark" style="border:1px solid #333"><div class="im" style="background:#050506"><canvas data-gfx="particles" data-seed="22"></canvas><span class="tag tag-accent">MBA</span></div><div class="bd"><h4>MBA em IA para negócios</h4><p>Transformando lideranças e negócios com inteligência artificial.</p><div class="ft"><span>Online ao vivo</span><span style="color:${MG}">→</span></div></div></div>
        <div class="c-stat" style="background:${MG};border-radius:0"><div class="n">5</div><p>Nota máxima nas últimas 32 comissões de avaliação do MEC.</p></div>
        <div class="c-quote" style="background:#000;border:1px solid #333;border-radius:0"><div class="qm" style="color:${MG};font-style:normal">“</div><p style="font-style:normal;font-family:var(--display);font-weight:500;font-size:19px;text-transform:uppercase">Aprender fazendo, com desafios reais.</p><div class="who">Challenge FIAP</div></div>
      </div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Faixa de chamada</h3><span>.cta-band</span></div>
      <div class="cta-band" style="background:#000"><div><h4>Crie projetos reais com empresas globais</h4><p>Graduações em Dev, IA, Engenharia, Cyber, Data e Negócios. Inscreva-se. Vagas limitadas.</p></div><a class="btn btn-primary">Inscreva-se</a></div>
    </div>
    <div class="comp reveal">
      <div class="ct"><h3>Alertas</h3><span>.alert</span></div>
      <div class="row" style="align-items:flex-start"><div class="alert info"><i>i</i><div>Vestibular 2027 com inscrições abertas.</div></div><div class="alert ok"><i>✓</i><div>Inscrição confirmada.</div></div><div class="alert warn"><i>!</i><div>Faltam 3 dias para o prazo.</div></div><div class="alert err"><i>×</i><div>Não foi possível enviar.</div></div></div>
    </div>`
  });

  // ---------------- 08 PEÇAS ----------------
  const s8 = sec({
    id: 'pecas', num: '08', label: 'Peças & layouts', cls: 'black', title: ['Tudo', 'junto'],
    lead: 'Layouts oficiais para redes sociais, apresentações, posts de feed e <i>stories</i>, e-books, certificados e materiais impressos — sempre com regras de espaçamento e alinhamento, e cor de identidade que varia por produto.',
    body: `
    <div class="pieces" style="margin-top:44px">
      <div class="pc-wrap p-feed reveal"><div class="piece sq" style="background:#000">
        <div class="a" style="inset:0;background:radial-gradient(70% 80% at 85% 25%,rgba(237,20,91,.32),transparent 70%)"></div>
        <span class="a T" style="left:calc(64*var(--u));top:calc(64*var(--u));font-size:calc(26*var(--u));letter-spacing:.14em;color:${UL};font-weight:500">TECH INTENSIVE</span>
        <span class="a T" style="left:calc(64*var(--u));bottom:calc(210*var(--u));right:calc(64*var(--u));font-size:calc(120*var(--u));line-height:.95;color:#fff;font-weight:500;text-transform:uppercase">A melhor<br>faculdade<br><span style="color:${MG}">tech</span> do Brasil</span>
        <div class="a" style="left:0;right:0;bottom:0;height:calc(130*var(--u));background:${MG}"></div>
        ${lg(B, 'logo', '#fff', 'position:absolute;left:calc(64*var(--u));bottom:calc(42*var(--u));height:calc(46*var(--u))')}
        <span class="a T" style="right:calc(64*var(--u));bottom:calc(50*var(--u));font-size:calc(28*var(--u));letter-spacing:.1em;color:#fff;font-weight:600">VESTIBULAR 2027 →</span>
      </div><div class="pc-cap"><b>Feed</b><span>1080 × 1080</span></div></div>

      <div class="pc-wrap p-story reveal"><div class="piece st" style="background:#000">
        <div class="a" style="inset:0;background:radial-gradient(90% 55% at 50% 100%,rgba(237,20,91,.38),transparent 72%)"></div>
        <span class="a T" style="left:calc(70*var(--u));top:calc(200*var(--u));right:calc(70*var(--u));font-size:calc(116*var(--u));line-height:1;color:#fff;font-weight:500;text-transform:uppercase">O futuro está <span style="color:${MG}">te contratando</span></span>
        <span class="a R" style="left:calc(70*var(--u));right:calc(70*var(--u));bottom:calc(420*var(--u));font-size:calc(46*var(--u));line-height:1.3;color:${UL}">Estude na faculdade que mais conecta talento e mercado.</span>
        <div class="a" style="left:calc(70*var(--u));bottom:calc(240*var(--u));padding:calc(30*var(--u)) calc(50*var(--u));background:${MG};color:#fff;font-family:var(--display);font-weight:600;font-size:calc(38*var(--u));letter-spacing:.08em">INSCREVA-SE</div>
        ${lg(B, 'logo', MG, 'position:absolute;left:calc(70*var(--u));bottom:calc(100*var(--u));height:calc(52*var(--u))')}
      </div><div class="pc-cap"><b>Stories</b><span>1080 × 1920</span></div></div>

      <div class="pc-wrap p-poster reveal"><div class="piece" style="background:#050506;aspect-ratio:2/3">
        <div class="a" style="inset:0;background:radial-gradient(circle at 80% 10%,rgba(237,20,91,.7),transparent 55%),radial-gradient(circle at 0 100%,rgba(237,20,91,.25),transparent 45%),#050506"></div>
        <span class="a T" style="left:calc(80*var(--u));top:calc(90*var(--u));font-size:calc(34*var(--u));letter-spacing:.14em;color:${MG};font-weight:600">E-BOOK · MBA</span>
        <span class="a T" style="left:calc(80*var(--u));top:calc(260*var(--u));right:calc(80*var(--u));font-size:calc(92*var(--u));line-height:1;color:#fff;font-weight:500;text-transform:uppercase">Transformando lideranças e negócios com IA</span>
        ${lg(B, 'logo', '#fff', 'position:absolute;left:calc(80*var(--u));bottom:calc(90*var(--u));height:calc(60*var(--u))')}
      </div><div class="pc-cap"><b>Capa de e-book</b><span>1600 × 2400</span></div></div>

      <div class="pc-wrap p-slide reveal"><div class="piece wd" style="background:#000">
        <div class="a" style="inset:0;background:radial-gradient(60% 100% at 95% 55%,rgba(237,20,91,.32),transparent 70%)"></div>
        <span class="a T" style="left:calc(110*var(--u));top:calc(96*var(--u));font-size:calc(30*var(--u));letter-spacing:.14em;color:${UL};font-weight:500">FIAP · GRADUAÇÃO ON</span>
        <span class="a T" style="left:calc(110*var(--u));top:calc(260*var(--u));width:58%;font-size:calc(130*var(--u));line-height:.98;color:#fff;font-weight:500;text-transform:uppercase">Crie projetos reais com <span style="color:${MG}">empresas globais</span></span>
        <div class="a" style="left:0;bottom:0;width:100%;height:calc(14*var(--u));background:${MG}"></div>
        ${lg(B, 'logo', '#fff', 'position:absolute;right:calc(110*var(--u));bottom:calc(80*var(--u));height:calc(54*var(--u))')}
      </div><div class="pc-cap"><b>Slide</b><span>1920 × 1080</span></div></div>
    </div>`
  });

  // ---------------- 09 VOZ ----------------
  const s9 = sec({
    id: 'voz', num: '09', label: 'Tom de voz', title: ['Objetivo,', 'inteligente, humano'],
    lead: 'É a linguagem única que expressa a personalidade da FIAP — nosso jeito particular e reconhecível de falar. Mais do que oferecer cursos, queremos conversar abertamente com alunos, alunas e <i>prospects</i> para entender seus sonhos e objetivos. Juntos, vamos ajudar a construir o futuro de cada pessoa.',
    body: `

    ${sub('Falar assim · não falar assim')}
    <div class="dodont reveal">
      <div class="do"><h4>Exemplos — falar assim</h4><ul>${li(['Sua vida tech começa aqui.', 'O futuro como você imagina.', 'Tech Intensive. 100% digital e hands-on.', 'A melhor faculdade tech do Brasil.', 'Aprender fazendo, com desafios reais.', 'Finalize sua matrícula. Últimos dias.', 'Não é sobre estar em Porto Alegre. É sobre criar o amanhã a partir daqui.'])}</ul></div>
      <div class="dont"><h4>Exemplos — não falar assim</h4><ul>${li(['Aqui sua vida começa de verdade!', 'O futuro dos seus sonhos está esperando por você!', 'Cursos completos online pra aprender rapidinho.', 'A faculdade número 1 do Brasil.', 'Aprender tudo facilmente sem esforço.', 'Compre agora mesmo o seu curso.', 'Não perca esta chance!'])}</ul></div>
    </div>

    ${sub('Vocabulário')}
    <div class="grid g2 reveal">
      <div class="card"><div class="label-k">Palavras da marca</div><div class="chips"><span>tecnologia</span><span>inovação</span><span>futuro</span><span>impacto</span><span>transformação</span><span>comunidade</span><span>prática</span><span>hands-on</span><span>ecossistema</span><span>evolução</span><span>AI</span><span>criação</span><span>inteligência</span></div></div>
      <div class="card"><div class="label-k" style="color:#9a1b27">Palavras a evitar</div><div class="chips no"><span>promoção</span><span>liquidação</span><span>corre</span><span>sucesso garantido</span><span>imperdível</span><span>descontão</span><span>preço camarada</span><span>bora</span><span>partiu</span></div></div>
    </div>`
  });

  // ---------------- 10 TOKENS & IA ----------------
  const tokenGroups = [
    { comment: 'Marca — produtos FIAP', vars: [['--fiap-magenta', MG, 'Rubine Red C · CMYK 0 100 22 0'], ['--fiap-dark', BK], ['--fiap-white', WH], ['--fiap-cinza-claro', UL, 'ultrasonic'], ['--fiap-cinza-escuro', SL, 'slate gray'], ['--fiap-cool-gray', '#C8C8C6', 'Cool Gray 3 C'], ['--fiap-atomic-black', '#0E0F10', 'derivada do site']] },
    { comment: 'FIAP School', vars: [['--fiap-school-1', '#7DE1D3'], ['--fiap-school-2', '#29F4D5'], ['--fiap-school-3', '#22DBC0'], ['--fiap-school-lima', '#B7FF00'], ['--fiap-school-4', '#6DC8BF'], ['--fiap-school-5', '#A0D4CD'], ['--fiap-school-limao', '#D2DE26']] },
    { comment: 'Colégio Módulo e Next', vars: [['--fiap-modulo-roxo', '#5A008C'], ['--fiap-modulo-vibrante', '#851BFA'], ['--fiap-modulo-lavanda', '#8E7ED5'], ['--fiap-modulo-ciano', '#25DBEF'], ['--fiap-modulo-amarelo', '#FFFD39'], ['--fiap-next-amarelo', '#FCEA10'], ['--fiap-next-azul', '#67C3CF']] },
    { comment: 'Tipografia', vars: [['--fiap-font-titulo', '"Gotham HTF", sans-serif'], ['--fiap-font-corpo', '"Roboto", sans-serif']] },
    { comment: 'Breakpoints (dp)', vars: [['--fiap-bp-xs', '0–599'], ['--fiap-bp-sm', '600–904'], ['--fiap-bp-md', '905–1239'], ['--fiap-bp-md2', '1240–1439'], ['--fiap-bp-lg', '1440+']] },
    { comment: 'Forma e espaçamento (base 4 px)', vars: [['--fiap-radius', '0', 'cantos vivos'], ['--fiap-sp-1', '4px'], ['--fiap-sp-2', '8px'], ['--fiap-sp-3', '12px'], ['--fiap-sp-4', '16px'], ['--fiap-sp-6', '24px'], ['--fiap-sp-8', '32px'], ['--fiap-sp-12', '48px'], ['--fiap-sp-16', '64px']] }
  ];
  tokenGroups.title = 'FIAP — Design tokens v2.0';
  const s10 = sec({
    id: 'ia', num: '10', label: 'Tokens & IA', cls: 'dark', title: ['Pronto para', 'código'],
    lead: 'Tokens CSS para sites, apresentações e ferramentas — e um contexto em Markdown para alimentar outras IAs na criação de peças consistentes com a marca.',
    body: `
    <div class="code-card reveal"><div class="bar"><span>tokens.css</span><button class="btn btn-light btn-sm" id="copyCss">Copiar CSS</button></div>
<pre id="cssTokens">${tokensPre(tokenGroups)}</pre></div>
    <p class="reveal" style="margin-top:14px;font-size:13.5px">Gotham HTF é licenciada; para prévias abertas use Montserrat. Roboto está no Google Fonts.</p>
    <div class="llm-block">
      <h3 class="sub reveal">Contexto para LLM</h3>
      <p class="reveal" style="max-width:66ch">Gera um bloco em Markdown com a identidade completa — pronto para colar como contexto em outra IA.</p>
      <div class="actions reveal" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px"><button class="btn btn-accent" id="genMd">Gerar .md para LLM</button><button class="btn btn-light" id="copyMd" style="display:none">Copiar texto</button><button class="btn btn-light" id="dlMd" style="display:none">Baixar .md</button></div>
      <textarea id="mdOut" readonly></textarea>
    </div>`
  });

  B.sections = [
    { id: 'essencia', navLabel: 'Essência', html: s1 }, { id: 'logo', navLabel: 'Logo', html: s2 }, { id: 'cores', navLabel: 'Cores', html: s3 }, { id: 'tipografia', navLabel: 'Tipografia', html: s4 },
    { id: 'grafismo', navLabel: 'Grafismo & grid', html: s5 }, { id: 'imagem', navLabel: 'Fundos & selos', html: s6 }, { id: 'componentes', navLabel: 'Componentes', html: s7 }, { id: 'pecas', navLabel: 'Peças', html: s8 },
    { id: 'voz', navLabel: 'Voz', html: s9 }, { id: 'ia', navLabel: 'Tokens & IA', html: s10 }
  ];

  // ---------------- CSS ----------------
  B.css = `
  nav.top a{font-weight:600;letter-spacing:.04em;text-transform:uppercase;font-size:11px}
  nav.top a.nav-home{border-radius:0}
  .kicker{letter-spacing:.18em;color:#14191C}
  .dark .kicker,.black .kicker{color:#ACC1CC}
  .scale-row .tg,.fam .label{color:#14191C}
  h2.title{font-size:clamp(34px,5vw,70px);font-weight:600}
  .black h2.title .c2,.dark h2.title .c2{color:${MG}}
  h3.sub{letter-spacing:.16em;color:#14191C;display:flex;align-items:center;gap:10px}
  h3.sub::before{content:'';width:22px;height:3px;background:${MG}}
  .black h3.sub,.dark h3.sub{color:#fff}
  .card,.comp,.tok,.rule{border:1px solid #14191C}
  .card{border-top:3px solid ${MG}}
  .card.is-dark{border-top:3px solid ${MG}}
  .card:hover{transform:none;box-shadow:6px 6px 0 ${MG}}
  .card h3{font-weight:600;text-transform:none;letter-spacing:-.01em}
  .card .idx{font-weight:500;color:${MG}}
  .rule{border-left:3px solid ${MG}}
  .rule .n{color:${MG}}
  .label-k{font-family:var(--display);font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#14191C;margin-bottom:12px;display:flex;align-items:center;gap:8px}
  .label-k::before{content:'';width:8px;height:8px;background:${MG}}
  .card.is-dark .label-k,.black .label-k,.dark .label-k{color:#ACC1CC}
  .attr span{border-radius:0;border-color:#14191C;color:#14191C;text-transform:uppercase;font-size:12px;letter-spacing:.06em;font-weight:500}
  .attr span:hover{background:${MG};border-color:${MG};color:#fff}
  .quote-bar{border-radius:0;border-left:14px solid ${MG}}
  .quote-bar p{font-weight:500}
  .btn{font-size:12.5px}
  .btn-secondary{border-color:#000;color:#000}.btn-secondary:hover{background:#000;color:#fff}
  .btn-ghost{color:${MG}}.btn-ghost:hover{color:#000}
  .btn-accent{background:#000;color:#fff}
  .dark .btn-ghost,.black .btn-ghost{color:${MG}}
  .tag{font-weight:600;letter-spacing:.1em}
  .tag-solid{background:#000}.tag-soft{background:#F6D1DD;color:#000}
  .cta-band{background:#000}.cta-band::before{background:${MG}}
  .field input{border:1px solid #14191C}
  .alert{border-radius:0;border-left:5px solid #000}
  .alert.info{border-color:${SL}}.alert.ok{border-color:#2c9a4b}.alert.warn{border-color:#ffb12a}.alert.err{border-color:#c0283a}
  .ctr-pair{border-radius:0}
  .c-stat .n{font-weight:500}
  .proportion{border-radius:0}
  .logo-tile,.wrong > div,.cs-box,.dl-card,.dl-prev,.tex,.piece{border-radius:0}
  .tex .fill{position:absolute;inset:0}
  .min-tab{display:flex;gap:12px}.min-tab div{flex:1;border:1px solid rgba(255,255,255,.25);padding:14px 16px}.min-tab b{display:block;font-family:var(--display);font-size:26px;color:${MG};font-weight:600;letter-spacing:-.02em}.min-tab span{font-size:12px;color:${UL}}
  .ftxt{margin:6px 0 10px;line-height:1.1}
  /* hero */
  .hero{position:relative;overflow:hidden;background:radial-gradient(70% 90% at 92% 55%,rgba(237,20,91,.30),transparent 68%),#000;color:#fff;min-height:min(calc(100svh - 49px),640px);display:flex}
  .hero-pt{position:absolute;inset:0;width:100%;height:100%}
  .hero-in{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding-top:34px;padding-bottom:96px;width:100%}
  .h-meta{display:flex;justify-content:space-between;gap:16px;font-family:var(--display);font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${UL}}
  .h-mid{display:grid;grid-template-columns:minmax(0,1fr);align-items:center;margin:36px 0}.h-txt{max-width:760px}
  .h-logo{width:100%;height:auto;max-height:46vh;overflow:visible}
  .hero h1{font-weight:500;font-size:clamp(34px,4.4vw,66px);line-height:1;letter-spacing:-.025em;text-transform:uppercase;margin:0 0 22px}
  .hero h1 span{color:${MG}}
  .hero p{color:${UL};font-size:16px;max-width:56ch;margin:0 0 28px}
  .h-actions{display:flex;gap:12px;flex-wrap:wrap}
  .hero .btn-secondary{color:#fff;border-color:#fff}.hero .btn-secondary:hover{background:#fff;color:#000}
  .h-strip{position:absolute;left:0;right:0;bottom:0;z-index:3;background:${MG};color:#fff;font-family:var(--display);font-weight:600;text-transform:uppercase;letter-spacing:.06em;font-size:15px}
  .h-strip .wrap{display:flex;align-items:center;gap:18px;padding-top:16px;padding-bottom:16px}
  .h-strip b{font-weight:700;font-size:18px}.h-strip .ar{margin-left:auto}
  /* grafismo cards */
  .gfx-card{position:relative;background:#000;border:1px solid #2a2f33;aspect-ratio:16/10}
  .gfx-card canvas{position:absolute;inset:0;width:100%;height:100%}
  .gfx-card .cap{position:absolute;left:0;right:0;bottom:0;padding:34px 16px 14px;background:linear-gradient(0deg,rgba(0,0,0,.8),transparent);font-size:12px;color:#ddd}
  .gfx-card .cap b{display:block;font-family:var(--display);font-size:13.5px;color:#fff;text-transform:uppercase;letter-spacing:.06em}
  .bpviz{display:flex;flex-direction:column;gap:8px}
  .bpviz div{background:#14191C;border-left:4px solid ${MG};padding:12px 16px;display:flex;gap:14px;align-items:baseline;min-width:200px}
  .bpviz b{font-family:var(--display);text-transform:uppercase;letter-spacing:.06em;font-size:13px;color:#fff}.bpviz span{font-family:var(--mono);font-size:12px;color:${UL}}
  .fmtviz{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;align-items:end}
  .fmtviz div{display:flex;flex-direction:column;gap:6px}
  .fmtviz i{display:block;background:${MG};border:1px solid #fff2}
  .fmtviz b{font-family:var(--display);font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#fff}.fmtviz span{font-family:var(--mono);font-size:11px;color:${UL}}
  .seal{display:flex;gap:18px;align-items:center;border:1px solid #14191C;border-top:3px solid ${MG};padding:22px}
  .seal .sn{font-family:var(--display);font-weight:600;font-size:52px;line-height:1;letter-spacing:-.04em;color:${MG};min-width:72px}
  .seal b{display:block;font-family:var(--display);text-transform:uppercase;font-size:14px;letter-spacing:.06em}.seal span{font-size:13px;color:var(--muted)}
  .menu-panel{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid ${MG}}
  .menu-panel > div{padding:20px;border-right:1px solid rgba(237,20,91,.4)}.menu-panel > div:last-child{border-right:none}
  .menu-panel b{display:block;font-family:var(--display);text-transform:uppercase;letter-spacing:.04em;font-size:14px;color:#fff;margin-bottom:6px}
  .menu-panel p{font-size:12.5px;color:${UL};margin:0 0 14px}
  .menu-panel a{font-family:var(--display);font-weight:600;font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:${MG}}
  .strip{background:${MG};color:#fff;display:flex;align-items:center;gap:14px;padding:16px 24px;font-family:var(--display);font-weight:600;text-transform:uppercase;letter-spacing:.06em}
  .strip b{font-size:18px}.strip span{font-size:13px;opacity:.95}.strip i{margin-left:auto;font-style:normal}
  .bul{margin:0;padding:0;list-style:none}.bul li{padding:9px 0 9px 22px;border-top:1px solid var(--line);position:relative;font-size:15px}.bul li:first-child{border-top:none}.bul li::before{content:'';position:absolute;left:0;top:17px;width:10px;height:3px;background:${MG}}
  .bul.inv li{border-color:rgba(255,255,255,.14);color:#ddd}
  .chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px}.chips span{font-family:var(--display);font-weight:500;font-size:12.5px;text-transform:uppercase;letter-spacing:.05em;border:1px solid #14191C;padding:7px 12px}
  .chips.no span{border-color:#9a1b27;color:#9a1b27;text-decoration:line-through}
  .card.is-dark .bul li{color:#ddd}
  @media screen and (max-width:980px){.h-mid{grid-template-columns:1fr}.h-logo{max-height:200px}.menu-panel{grid-template-columns:1fr 1fr}.fmtviz{grid-template-columns:repeat(3,1fr)}.h-meta{flex-direction:column;gap:4px}.h-strip .wrap{flex-wrap:wrap}}
  @media screen and (max-width:600px){.menu-panel{grid-template-columns:1fr}.fmtviz{grid-template-columns:repeat(2,1fr)}.min-tab{flex-direction:column}}
  `;

  // ---------------- gráficos ----------------
  B.gfx = `
  (function(){
    function rng(seed){var s=seed>>>0||1;return function(){s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296;};}
    function setup(cv){var dpr=Math.min(window.devicePixelRatio||1,2),w=cv.clientWidth||cv.parentNode.clientWidth,h=cv.clientHeight||cv.parentNode.clientHeight;if(!w||!h)return null;
      cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);var ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);return {ctx:ctx,w:w,h:h};}
    function particles(cv){
      var s=setup(cv);if(!s)return;var ctx=s.ctx,w=s.w,h=s.h,r=rng(+(cv.dataset.seed||1)*97+5);
      var g=ctx.createRadialGradient(w*.35,h*.55,0,w*.35,h*.55,Math.max(w,h)*.7);g.addColorStop(0,'rgba(237,20,91,.22)');g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle='#050506';ctx.fillRect(0,0,w,h);ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      var fx=w*.34,fy=h*.56,N=Math.round(w*h/260);
      for(var i=0;i<N;i++){
        var side=r()<.62?1:-1,t=Math.pow(r(),1.4),spread=(r()-.5)*2;
        var x=fx+side*t*w*.85, bend=Math.sin(t*3.1+spread*1.2)*h*.14*(1-t*.2);
        var y=fy+spread*h*(.02+t*.34)*Math.pow(t,.6)+bend*(side>0?1:-.6);
        var near=1-Math.min(1,Math.abs(x-fx)/(w*.5)),sz=.5+r()*1.6+near*1.2,a=(.12+r()*.7)*(.35+near*.65);
        ctx.fillStyle='rgba(237,20,91,'+a.toFixed(3)+')';ctx.beginPath();ctx.arc(x,y,sz,0,6.2832);ctx.fill();
        if(r()<.04){ctx.fillStyle='rgba(255,255,255,'+(a*.9).toFixed(3)+')';ctx.beginPath();ctx.arc(x,y,sz*.8,0,6.2832);ctx.fill();}
      }
      var f=ctx.createRadialGradient(fx,fy,0,fx,fy,Math.min(w,h)*.22);f.addColorStop(0,'rgba(255,170,200,.55)');f.addColorStop(.35,'rgba(237,20,91,.28)');f.addColorStop(1,'rgba(237,20,91,0)');ctx.fillStyle=f;ctx.fillRect(0,0,w,h);
    }
    function fgrafismo(cv){
      var s=setup(cv);if(!s)return;var ctx=s.ctx,w=s.w,h=s.h,r=rng(+(cv.dataset.seed||1)*131+7);
      var g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,'#050506');g.addColorStop(1,'#2a0612');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      var F=new Path2D('M0 27.506h2.671V2.742h20.421V.205H0zM17.667 12.929H7.344v2.537h10.323z');
      var base=Math.min(w,h)*.26;
      for(var k=0;k<5;k++){
        var sc=(base/28)*(.35+r()*1.5),x=(r()*1.1-.05)*w,y=(r()*1.1-.05)*h;
        ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.globalAlpha=.35+r()*.5;ctx.fillStyle=r()<.92?'#ED145B':'#fff';ctx.fill(F);ctx.restore();
      }
      var sc2=(Math.min(w,h)*.34)/28;ctx.globalAlpha=1;
      for(var i=0;i<3;i++){ctx.save();ctx.translate(w*.1+i*(24*sc2*.9),h*.16);ctx.scale(sc2,sc2);ctx.fillStyle='#ED145B';ctx.fill(F);ctx.restore();}
    }
    window.GFX={particles:particles,fgrafismo:fgrafismo};
  })();
  `;

  B.md = `# FIAP — Design System / Brand Context (para uso por IA)

> Referência estruturada da identidade FIAP, baseada no Design System FIAP 2.0 (Criação FIAP). Ao desenhar logo, use sempre os arquivos vetoriais oficiais — não recrie de memória.

## 1. Marca
- Posicionamento: "A melhor faculdade tech do Brasil". Faz parte do ecossistema do Grupo Alun (com Alura, PM3 e StartSe). Assinatura: "Let's rock the future".
- Produtos e linhas: Institucional, Graduação, Graduação ON, MBA, Pós Tech, Shift, FIAP School, FIAP Empresas, Nano Courses, Next, Colégio Módulo, Rock New Ventures.
- Direção de arte: branding é posicionamento visual traduzido em experiência; consistência = clareza de identidade, não rigidez. Perguntas de gestão: representa a FIAP? reforça o posicionamento? está alinhada ao futuro? diferencia ou só acompanha o mercado?
- Palavras da marca: tecnologia, inovação, futuro, impacto, transformação, comunidade, prática, hands-on, ecossistema, evolução, AI, criação, inteligência.

## 2. Logo
- Wordmark FIAP com o "F" de destaque (também usado como grafismo e favicon). Cor padrão: Magenta #ED145B sobre preto; branco sobre preto/imagem; branco sobre magenta; preto sobre cinza.
- Área de segurança: o "F" (ou a letra de referência da variação: O, M, R, N, P) em toda a sua altura. Redução mínima do logo FIAP: 117 px digital / 2,3 cm impresso; outras variações têm valores próprios.
- Variações: rara utilização e CNPJ (documentos oficiais), Graduação ON, MBA ON, Vestibular, MBA Refresh, Let's Rock The Future, FIAP Empresas, Nano Courses, Módulo, FIAP School.

## 3. Cores
| Nome | HEX | Notas |
|---|---|---|
| Magenta | #ED145B | CMYK 0 100 22 0 · Rubine Red C |
| Dark | #000000 | CMYK 100 100 100 100 |
| White | #FFFFFF | — |
| Cinza claro | #ACC1CC | texto de apoio em fundo escuro |
| Cinza escuro | #75838B | slate gray |
| Cool Gray 3 C | #C8C8C6 | impressos |
| Cinza textura | #C6C4C3 | CMYK 27 22 22 0 · Metallic 10102 C |
- FIAP School: #7DE1D3 #29F4D5 #22DBC0 #B7FF00 #6DC8BF #A0D4CD #D2DE26 (+ Magenta, Dark, White).
- Colégio Módulo: #5A008C #851BFA #8E7ED5 #25DBEF #FFFD39. Next: #FCEA10 #67C3CF.
- Peças do grupo Alun: #FF9414 #ED1460 #610725 #D1CDCD #333333 #9A4800.
- Uso: fundo preto dominante, magenta em destaque; a cor de identidade (título e frase) varia por produto.

## 4. Tipografia
- Gotham HTF (principal; títulos e taglines — caixa alta Medium em títulos) · Roboto (corpo, rótulos, interface). Produtos: Metronic Slab Pro e Alianza Script (FIAP School/Módulo), PP Editorial New Italic (Rock New Ventures). Apoio: Telegraf, Neue Montreal, PT Sans, Playfair Display, LD Mono Line, Oxanium.
- Escala (tamanho/entrelinha · tracking): Display L 57/64 −0,25 · M 45/52 · S 36/44; Headline L 32/40 · M 28/36 · S 24/32; Title L 22/28 · M 16/24 +0,15 · S 14/20 +0,1; Label L 14/20 +0,1 · M 12/16 +0,5 · S 11/16 +0,5; Body L 16/24 +0,5 · M 14/20 +0,25 · S 12/16 +0,4.

## 5. Grafismo, layout e formatos
- Grafismo F: o F do logo em Magenta, repetido e recortado, sobre preto com gradiente; partículas luminosas magenta em heroes. Nunca distorcer ou recolorir.
- Breakpoints (dp): XS 0–599 · S 600–904 · M 905–1239 · M 1240–1439 · L 1440+.
- Formatos: feed 1080×1080 · retrato 1080×1350 · stories 1080×1920 · Facebook 1200×628 · e-book 1600×2400 · header HubSpot 600×365.

## 6. Imagem e prova social
- Fundos escuros com iluminação dramática, partículas e gradientes. Selo: "Nota máxima nas últimas 32 comissões de avaliação do MEC". Não há guia de fotografia no Design System 2.0.

## 7. Componentes
- Cantos vivos. Botão primário Magenta com texto branco, Gotham Medium caixa alta (+8%). Link "SAIBA MAIS →" em Magenta sobre preto. Painel de navegação preto com filete magenta. Faixa de campanha magenta (ex.: "Vestibular 2027").

## 8. Tom de voz
- Objetivo, coloquial e inteligente; inspirador sem ser motivacional; tech sem clichês; mais humano que vendedor; colaborativo e inclusivo. Frases curtas, rítmicas, verbos de ação.
- Evitar: pontos de exclamação, tom de varejo, informalidade forçada, mensagens genéricas, jargão sem contexto; palavras: promoção, liquidação, corre, sucesso garantido, imperdível, descontão, preço camarada, bora, partiu.
- Exemplos: "Sua vida tech começa aqui." · "O futuro como você imagina." · "Tech Intensive. 100% digital e hands-on." · "Aprender fazendo, com desafios reais."

## 9. Fonte
Design System FIAP 2.0 (Criação FIAP, arquivo Figma) · fiap.com.br
`;

  return B;
};
