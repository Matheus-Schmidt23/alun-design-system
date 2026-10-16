// Alun Business — seção do guia da Alun (fonte: ALUN BUSINESS · Transição de marca & narrativa estratégica, dez/2025)
const fs = require('fs');
const path = require('path');

module.exports = (H, B) => {
  const { sec, sw, card, sub, lg, ratio } = H;

  // paleta de Alun Business (valores lidos no PDF; os nomes são sugestões do guia)
  const P = {
    preto: '#000000', grafite: '#33363E', cinza: '#CFD2D8', branco: '#FFFFFF',
    areia: '#E4D7C4', ouro: '#D1A766', azul: '#4B6AFC', marinho: '#0A1E9D'
  };

  // logos do ecossistema (para a arquitetura de marcas)
  const alura = require('./alura')(H), fiap = require('./fiap')(H), startse = require('./startse')(H);
  const pm3svg = fs.readFileSync(path.join(__dirname, '..', '..', 'assets', 'pm3-logo-branco.svg'), 'utf8');
  const pm3paths = [...pm3svg.matchAll(/<path[^>]*\sd="([^"]+)"[^>]*>/g)].map(m => `<path d="${m[1]}"${/fill-rule="evenodd"/.test(m[0]) ? ' fill-rule="evenodd" clip-rule="evenodd"' : ''}/>`).join('');
  const pm3 = { name: 'PM3', logo: { w: 179, h: 55, paths: pm3paths } };

  // lockup ALUN + BUSINESS: ALUN define a altura (Y); BUSINESS ≈ 0,57 Y de caixa-alta, centrado na vertical
  const lock = (hex, h, extra = '') => `<span class="biz-lock" style="--h:${h};color:${hex};${extra}">${lg(B, 'logo', hex, 'height:var(--h)')}<span class="biz-word">BUSINESS</span></span>`;
  const lockTile = (bg, fg, label, cls = '', lab = fg) => `<div class="biz-tile ${cls}" style="background:${bg};color:${fg}">${lock(fg, 'clamp(20px,2.6vw,34px)')}<small style="color:${lab}">${label}</small></div>`;

  // retrato "pixelator": grade de módulos sobre listras de areia, gerada no build (sem fotografia real)
  function pixelPortrait() {
    const C = 34, R = 40, S = 10;
    const hash = (x, y) => { const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453; return n - Math.floor(n); };
    const paths = { [P.preto]: '', [P.grafite]: '', [P.marinho]: '', [P.azul]: '', [P.cinza]: '' };
    for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) {
      const u = (x + .5) / C * 2 - 1, v = (y + .5) / R * 2 - 1;
      const head = (u / .44) ** 2 + ((v + .22) / .52) ** 2 <= 1;
      const hair = ((u / .5) ** 2 + ((v + .3) / .6) ** 2 <= 1) && !head ? true : (head && v < -.52);
      const body = ((u / 1.0) ** 2 + ((v - 1.02) / .62) ** 2 <= 1) && v > .42;
      const neck = Math.abs(u) < .16 && v > .3 && v < .5;
      let col = null;
      if (hair) col = P.preto;
      else if (head) {
        const eye = Math.abs(Math.abs(u) - .17) < .06 && Math.abs(v + .26) < .035;
        const mouth = Math.abs(u) < .13 && Math.abs(v - .02) < .028;
        const t = .55 - u * .55 - (v + .22) * .3 + (hash(x, y) - .5) * .28;
        col = (eye || mouth) ? P.preto : t > .68 ? P.cinza : t > .42 ? P.azul : P.marinho;
      } else if (neck) col = P.marinho;
      else if (body) col = (hash(x, y) > .8) ? P.preto : P.grafite;
      if (col) paths[col] += `M${x * S} ${y * S}h${S - 1}v${S - 1}h-${S - 1}z`;
    }
    let stripes = '';
    for (let x = 0; x < C; x += 2) stripes += `M${x * S} 0h${S}v${R * S}h-${S}z`;
    return `<svg class="biz-portrait" viewBox="0 0 ${C * S} ${R * S}" role="img" aria-label="Exemplo de retrato em pixelator" shape-rendering="crispEdges"><rect width="${C * S}" height="${R * S}" fill="#fff"/><path d="${stripes}" fill="${P.areia}"/>${Object.entries(paths).map(([c, d]) => `<path d="${d}" fill="${c}"/>`).join('')}</svg>`;
  }

  // 8 módulos do pixelator (combinações de cor da paleta)
  const mods = [
    `<div class="pxm" style="background:linear-gradient(90deg,#fff 50%,${P.areia} 50%);outline:1px solid var(--line);outline-offset:-1px"></div>`,
    `<div class="pxm" style="background:${P.cinza}"><i style="background:${P.ouro};width:16%;height:32%"></i></div>`,
    `<div class="pxm" style="background:${P.cinza}"><i style="background:${P.azul};width:32%;height:64%"></i></div>`,
    `<div class="pxm" style="background:${P.azul}"><i style="background:${P.cinza};width:32%;height:64%"></i></div>`,
    `<div class="pxm" style="background:${P.marinho}"><i style="background:${P.azul};width:68%;height:68%;border-radius:22%"></i><i style="background:${P.marinho};width:30%;height:30%"></i></div>`,
    `<div class="pxm" style="background:${P.grafite}"><i style="background:${P.preto};width:30%;height:64%;left:12%;border-radius:40% 0 0 40%"></i><i style="background:${P.preto};width:30%;height:64%;left:58%;border-radius:0 40% 40% 0"></i></div>`,
    `<div class="pxm" style="background:${P.preto}"><i style="background:#6b7280;width:16%;height:34%"></i></div>`,
    `<div class="pxm" style="background:${P.preto}"></div>`
  ].join('');

  // card com o logo oficial da marca (cor da própria marca), no lugar do nome em texto
  const ecoCard = (b, hex, txt) => `<div class="card biz-ecocard"><div class="biz-ecologo">${lg(b, 'logo', hex, 'height:100%')}</div><p>${txt}</p></div>`;

  const rgb = h =>[1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(' ');
  const swatch = (name, role, hex) => ({ name, role, hex, rgb: rgb(hex) });
  const pair = (fg, bg, note) => { const r = ratio(fg, bg); return `<div class="biz-pair"><span style="background:${bg};color:${fg};${bg === '#FFFFFF' ? 'border:1px solid #0002' : ''}">Aa</span><div><b>${r.toFixed(1)}:1</b><small>${note}</small></div></div>`; };

  const panel = (title, tag, inner) => `<div class="comp reveal"><div class="ct"><h3>${title}</h3><span>${tag}</span></div>${inner}</div>`;

  // ---------- 1. Posicionamento ----------
  const pPos = panel('Posicionamento', 'dores · evolução do ecossistema', `
    <p class="biz-statement">Somos o único <em>trusted partner</em> em tecnologia e negócios, com um ecossistema capaz de entregar soluções <em>full stack</em> e atuar de ponta a ponta.</p>
    ${sub('O mercado nunca esteve tão fragmentado — três dores')}
    <div class="grid g3">
      ${card('1 · Pressão competitiva', 'O grande volume de dados e tecnologia aumenta muito a pressão competitiva.')}
      ${card('2 · Adaptação constante', 'A adaptação tornou-se fundamental até em mercados não caóticos.')}
      ${card('3 · Complexidade e atenção', 'Mais complexidade na execução e na disputa incessante pela atenção.')}
    </div>
    ${sub('Evolução natural do ecossistema')}
    <div class="grid g4" style="margin-top:20px">
      ${ecoCard(alura, '#0429BC', 'Profundidade técnica e escala.')}
      ${ecoCard(fiap, '#ED145B', 'Formação executiva, MBA, graduação e Pós-Tech.')}
      ${ecoCard(pm3, '#452E78', 'Excelência em produto, growth e estratégia digital.')}
      ${ecoCard(startse, '#0080ED', 'Visão global, internacionalização e business trends.')}
    </div>
    ${sub('O que enfatizamos')}
    <div class="two">
      <div class="card"><h3>Não somos “mais uma edtech”</h3><p>Nem uma consultoria que atua em recortes: vamos do técnico ao executivo, do negócio à tecnologia, da estratégia à melhor execução — em múltiplas verticais, de <i>Health</i> a <i>Fintechs</i>.</p></div>
      <div class="card"><h3>Único player full stack</h3><p>Ecossistema completo e integrado: tecnologia, produto, liderança, inovação e negócios numa só jornada, com soluções <i>one to one</i> sob medida, a partir de diagnósticos reais.</p></div>
    </div>`);

  // ---------- 2. Logo ----------
  const pLogo = panel('Logo', 'ALUN + BUSINESS', `
    <div class="biz-hero">${lock('#fff', 'clamp(34px,6vw,72px)')}</div>
    <p style="margin-top:16px;max-width:70ch">O logo é a assinatura da Alun com a palavra <b>BUSINESS</b> ao lado, em tipo neutro de caixa-alta (estilo Helvetica). A altura de <b>ALUN</b> é a unidade <b>Y</b>: BUSINESS ocupa cerca de 0,57 Y, centrado na vertical, com cerca de 0,55 Y de respiro entre as duas partes.</p>
    ${sub('Aplicação em cores')}
    <div class="grid g3 biz-tiles">
      ${lockTile(P.preto, '#fff', 'Preto')}
      ${lockTile('#fff', '#000', 'Branco', 'bordered')}
      ${lockTile(P.marinho, '#fff', 'Azul marinho')}
      ${lockTile(P.grafite, '#fff', 'Grafite')}
      ${lockTile(P.cinza, '#000', 'Cinza claro')}
      ${lockTile(P.ouro, '#fff', 'Ouro · como no PDF', '', '#000')}
    </div>
    <p class="cap" style="margin-top:12px">Sobre o ouro, o PDF usa o logo branco (≈ ${ratio('#FFFFFF', P.ouro).toFixed(1)}:1). Para peças em que o logo precisa ser lido com folga, prefira o logo preto sobre ouro (${ratio('#000000', P.ouro).toFixed(1)}:1).</p>
    ${sub('Reserva e escala mínima')}
    <div class="two">
      <div class="card"><h3>Área de reserva</h3><p>Livre em todos os lados, no tamanho de <b>1 Y</b> (a altura de ALUN) — nenhum texto, borda ou imagem entra nessa área.</p>
        <div class="biz-clear"><div class="biz-clear-in">${lock('#000', '34px')}</div></div></div>
      <div class="card"><h3>Escala mínima</h3><p>Altura de ALUN: <b>25 px</b> em meios digitais e <b>10 mm</b> em impressos.</p>
        <div class="biz-min"><div><small>Digital · 25 px</small>${lock('#000', '25px')}</div><div><small>Impresso · 10 mm</small>${lock('#000', '38px')}</div></div></div>
    </div>`);

  // ---------- 3. Cores ----------
  const pCores = panel('Cores', 'paleta Alun Business', `
    <p style="max-width:70ch">Paleta fria e sóbria, com o ouro como único acento quente e dois azuis para ênfase. Os HEX foram lidos no PDF; os <b>nomes são sugestões</b> deste guia.</p>
    <div class="sw-grid biz-sw">
      ${[
        swatch('Preto', 'Base e logo', P.preto), swatch('Grafite', 'Neutro escuro', P.grafite), swatch('Cinza claro', 'Neutro frio', P.cinza),
        swatch('Branco', 'Respiro e fundos', P.branco), swatch('Areia', 'Neutro quente', P.areia), swatch('Ouro', 'Acento quente', P.ouro),
        swatch('Azul vivo', 'Destaque', P.azul), swatch('Azul marinho', 'Institucional', P.marinho)
      ].map(c => sw({ ...c, bordered: c.hex === '#FFFFFF' })).join('')}
      ${sw({ name: 'Gradiente areia → ouro', role: 'Fundos e transições', hex: '#E4D7C4', bg: `linear-gradient(180deg,${P.areia},${P.ouro})`, copy: `linear-gradient(180deg,${P.areia},${P.ouro})`, lines: [`<b>DE</b>${P.areia} &nbsp; <b>PARA</b>${P.ouro}`], light: true })}
    </div>
    ${sub('Contraste dos pares mais usados', 'calculado')}
    <div class="biz-pairs">
      ${pair('#FFFFFF', P.marinho, 'Branco sobre azul marinho')}
      ${pair('#FFFFFF', P.preto, 'Branco sobre preto')}
      ${pair('#FFFFFF', P.grafite, 'Branco sobre grafite')}
      ${pair('#000000', P.cinza, 'Preto sobre cinza claro')}
      ${pair('#000000', P.ouro, 'Preto sobre ouro')}
      ${pair('#FFFFFF', P.azul, 'Branco sobre azul vivo — só texto grande')}
      ${pair('#FFFFFF', P.ouro, 'Branco sobre ouro — só logo/ilustração')}
    </div>`);

  // ---------- 4. Imagem & pixelator ----------
  const pImg = panel('Imagem', 'fotografia + pixelator', `
    <div class="two">
      <div class="card"><h3>Fotografia</h3><p>Retratos de profissionais reais, em plano médio e <i>close</i>: luz natural suave, olhar fora da câmera, expressão serena ou sorriso discreto, fundo de escritório ou sala desfocado, tons neutros e quentes. As imagens aparecem escalonadas, em blocos que se encaixam em diagonal, sobre fundo branco.</p></div>
      <div class="card"><h3>Pixelator</h3><p>A foto é convertida numa grade de módulos com as cores da paleta (preto, grafite, cinza claro, areia, azuis e ouro) sobre listras verticais de areia. É a ponte entre o grafismo modular da Alun e o universo corporativo — use em peças de destaque, uma vez por peça.</p></div>
    </div>
    <div class="biz-px">
      <div class="biz-pxfig">${pixelPortrait()}<small>Exemplo gerado (não é fotografia real)</small></div>
      <div><h3 class="sub" style="margin-top:0">Os 8 módulos de base</h3><div class="pxrow">${mods}</div><p class="cap" style="margin-top:12px">Combinações de cor e forma usadas como “células” do pixelator: blocos lisos, barras e um anel/colchete que se repetem na grade.</p></div>
    </div>`);

  // ---------- 5. Narrativa de transição ----------
  const phase = (n, nome, tempo, desc, items) => `<div class="card biz-phase"><div class="label-k">Fase ${n} · ${tempo}</div><h3>${nome}</h3><p>${desc}</p><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
  const pNarr = panel('Narrativa', 'transição em duas fases', `
    <p style="max-width:70ch">Rebranding é gestão de percepção: a transição é gradual para criar uma “ponte cognitiva” entre o <i>equity</i> de Alura + FIAP para Empresas e a ambição de Alun Business — sem perder reconhecimento, SEO e eficiência comercial enquanto identidades, canais e equipes se sincronizam.</p>
    <div class="two" style="margin-top:22px">
      ${phase(1, 'Integração', 'cerca de 1 ano', 'Alura + FIAP para Empresas atuam como assets de Alun Business, em paralelismo de marcas.', [
        '<b>Identidade:</b> nova marca Alun Business + “Alura + FIAP para Empresas” nos materiais',
        '<b>Conteúdo:</b> materiais mais densos, com conteúdos maiores',
        '<b>Comercial:</b> propostas com dupla marca por 1–2 ciclos, com cláusula explicativa em contratos',
        '<b>Digital:</b> página “Sobre a transição”, redirecionamento parcial e campanhas com criativos de Alun Business'
      ])}
      ${phase(2, 'Consolidação', 'uso indefinido', 'Alun Business como marca única, integrando Alura, FIAP, PM3 e StartSe. Objetivo: maximizar coerência e eficiência de marca.', [
        '<b>Identidade:</b> Alun Business entra como assinatura única em todos os canais',
        '<b>Comercial/legal:</b> novos contratos e renovações só com a marca Alun Business; comunicados finais de encerramento da marca anterior',
        '<b>Conteúdo:</b> manifesto, cases já com a nova marca e calendário editorial'
      ])}
    </div>
    ${sub('Por que em duas fases')}
    <div class="grid g4">
      ${card('Cognitivo', 'Ajuda o cérebro do cliente a mapear “nome antigo / nome novo” sem esforço.')}
      ${card('Comercial', 'Protege o pipeline em andamento que ainda referencia o nome antigo.')}
      ${card('Técnico', 'Transfere gradualmente a autoridade (SEO/Ads) e mitiga quedas de performance.')}
      ${card('Político-organizacional', 'Dá tempo de alinhamento interno: squads, parceiros e imprensa.')}
    </div>
    ${sub('Consciência que queremos construir')}
    <div class="grid g4 biz-msgs">
      <div class="card is-dark"><h3>“Mais integração e potência. É evolução, não ruptura.”</h3></div>
      <div class="card is-dark"><h3>“Especialista full-stack em tech + business.”</h3></div>
      <div class="card is-dark"><h3>“Menos complexidade, mais resultado.”</h3></div>
      <div class="card is-dark"><h3>“Confiança 100% preservada.”</h3></div>
    </div>`);

  // ---------- 6. Fases, KPIs e prazos ----------
  const pKpi = panel('KPIs & prazos', 'o que medir · onde aparece · quando', `
    <div class="two">
      <div class="card"><div class="label-k">Fase 1 · KPIs-chave</div><ul class="biz-list">
        <li><b>Recall de marca:</b> mais pessoas lembram de “Alun Business” espontaneamente</li>
        <li><b>Tráfego orgânico estável:</b> o público continua chegando sem queda significativa</li>
        <li><b>CTR constante:</b> o interesse nas comunicações segue saudável</li>
        <li><b>Taxa de fechamento inalterada:</b> o ritmo comercial não sofre impacto</li>
        <li><b>NPS de clareza elevado:</b> clientes e parceiros entendem a mudança</li></ul></div>
      <div class="card"><div class="label-k">Fase 2 · KPIs-chave</div><ul class="biz-list">
        <li><b>Share of voice:</b> o novo nome ganha espaço nas conversas e canais</li>
        <li><b>Tráfego orgânico recuperado:</b> o público volta a encontrar a marca com naturalidade</li>
        <li><b>Mais buscas por “Alun Business”:</b> cresce o interesse espontâneo</li>
        <li><b>Conversões estáveis:</b> os resultados comerciais seguem consistentes</li>
        <li><b>NPS igual ou maior:</b> clientes mantêm ou ampliam a confiança</li></ul></div>
    </div>
    ${sub('Onde a marca estará visível')}
    <div class="two">
      <div class="card"><div class="label-k">Fase 1</div><ul class="biz-list"><li>Sites <b>fiap.com.br/empresas</b> e <b>alura.com.br/empresas</b></li><li>Eventos proprietários e vídeo de 1’ de manifesto</li><li>E-mail marketing, apresentação institucional e proposta comercial</li><li>Assinatura de e-mail, posts orgânicos e LinkedIn</li><li>Primeiras ações de PR, podcasts e blogs</li></ul></div>
      <div class="card"><div class="label-k">Fase 2</div><ul class="biz-list"><li>Virada definitiva no novo site: <b>alunbusiness.com.br</b></li><li>Ativações em eventos corporativos e de inovação</li><li>Mídia paga (jornais e portais de negócios) e posts impulsionados</li><li>Conteúdo autoral: whitepapers e webinars</li><li>SEO, influenciadores de negócios e brindes premium</li></ul></div>
    </div>
    ${sub('Checkpoints e prazos estimados')}
    <div class="grid g4">
      ${card('2 meses', 'Guia de co-branding, FAQs, treinamento de times e <i>landings</i> de transição publicadas.')}
      ${card('2 meses', 'Review de KPIs e dúvidas do mercado; ajustes de mensagem.')}
      ${card('6 meses', 'Decisão de <i>go-live</i> da consolidação com base em critérios; execução da virada.')}
      ${card('2 meses', 'Auditoria pós-virada e limpeza de resquícios da marca anterior.')}
    </div>`);

  // ---------- 7. Arquitetura & aplicações ----------
  const eco = [alura, fiap, pm3, startse].map(b => `<span class="biz-eco">${lg(b, 'logo', '#fff', 'height:clamp(22px,2.8vw,34px)')}</span>`).join('');
  const pArq = panel('Arquitetura', 'marca-mãe · peças · kits', `
    <div class="on-black biz-arch">
      ${lock('#fff', 'clamp(30px,5vw,60px)')}
      <div class="biz-ecos">${eco}</div>
    </div>
    <p class="cap">Alun Business é a marca-mãe; Alura, FIAP, PM3 e StartSe aparecem como marcas do ecossistema, abaixo da assinatura.</p>
    ${sub('Peças previstas')}
    <div class="grid g3">
      ${card('Digital', 'Site (alunbusiness.com.br), posts e e-mail marketing, assinatura de e-mail, apresentação institucional.')}
      ${card('Mídia e impressos', 'Jornal, revista e elevador (a animar), além de materiais dos eventos corporativos.')}
      ${card('Welcome Kit', 'Camiseta, caneta metálica, garrafa, mochila, moleskine, porta-cartões com bloqueio RFID e hub executivo premium. <i>Team kit</i>: chocolates, lenço e itens de alfaiataria.')}
    </div>`);

  const body = [pPos, pLogo, pCores, pImg, pNarr, pKpi, pArq].join('\n');

  const html = sec({
    id: 'business', num: '10', label: 'Alun Business', title: ['Marca', 'de transição'],
    lead: 'Alun Business é a marca que consolida Alura, FIAP, PM3 e StartSe numa solução única, full stack, em tecnologia e negócios — lançamento 2025/26. Aqui: posicionamento, logo, cores, imagem, narrativa de transição e arquitetura.',
    body
  });

  const css = `
  .biz-statement{font-family:var(--display);font-weight:300;font-size:clamp(24px,3.2vw,42px);line-height:1.12;letter-spacing:-.02em;max-width:26em;margin:0}
  .biz-statement em{color:${P.marinho};font-style:italic}
  .biz-lock{display:inline-flex;align-items:center;gap:calc(var(--h) * .55);line-height:1;max-width:100%}
  .biz-word{font-family:"Helvetica Neue",Helvetica,Arial,"Hanken Grotesk",sans-serif;font-weight:400;font-size:calc(var(--h) * .8);letter-spacing:.01em;line-height:1;text-transform:uppercase;color:inherit;white-space:nowrap}
  .biz-hero{background:#000;display:flex;align-items:center;justify-content:center;padding:clamp(36px,7vw,84px) 24px}
  .biz-tile{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:34px 14px;min-height:180px}
  .biz-tile.bordered{border:1px solid var(--line)}
  .biz-tile small{font-family:var(--mono);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;opacity:.85}
  .biz-clear{margin-top:16px;display:flex;justify-content:center}
  .biz-clear-in{padding:34px;background:repeating-linear-gradient(45deg,#ED136014 0 6px,transparent 6px 12px);outline:1px solid #ED136066}
  .biz-clear-in .biz-lock{background:#fff}
  .biz-min{margin-top:16px;display:flex;gap:34px;flex-wrap:wrap;align-items:flex-end}
  .biz-min small{display:block;font-family:var(--mono);font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
  .biz-sw .sw{min-height:150px}
  .biz-pairs{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px 20px}
  .biz-pair{display:flex;align-items:center;gap:14px}
  .biz-pair > span{width:56px;height:44px;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:600;font-size:18px;flex:none}
  .biz-pair b{display:block;font-family:var(--mono);font-size:14px}
  .biz-pair small{display:block;font-size:12.5px;color:var(--muted);line-height:1.3}
  .biz-px{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:32px;align-items:center;margin-top:28px}
  .biz-pxfig{max-width:360px}.biz-pxfig small{display:block;margin-top:8px;font-size:12px;color:var(--muted)}
  .biz-portrait{display:block;width:100%;height:auto;border:1px solid var(--line)}
  .pxrow{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
  .pxm{position:relative;aspect-ratio:1/1;overflow:hidden;display:flex;align-items:center;justify-content:center}
  .pxm i{position:absolute;display:block}
  .pxm i:first-child{top:50%;left:50%;transform:translate(-50%,-50%)}
  .two > .biz-phase{align-self:stretch;margin:0}
  .biz-phase ul,.biz-list{margin:10px 0 0;padding:0;list-style:none;display:grid;gap:9px}
  .biz-phase li,.biz-list li{font-size:14.5px;line-height:1.45;padding-left:16px;position:relative}
  .biz-phase li::before,.biz-list li::before{content:'';position:absolute;left:0;top:.62em;width:6px;height:6px;background:${P.marinho}}
  .biz-msgs .card.is-dark{background:${P.marinho}}.biz-msgs h3{font-family:var(--display);font-weight:300;font-size:20px;line-height:1.2;text-transform:none;letter-spacing:-.01em;color:#fff}
  .biz-arch{display:flex;flex-direction:column;align-items:center;gap:clamp(24px,4vw,48px);padding:clamp(34px,6vw,72px) 24px}
  .biz-ecos{display:flex;flex-wrap:wrap;justify-content:center;gap:20px clamp(24px,5vw,64px)}
  .biz-eco{display:inline-flex;align-items:center}
  .biz-ecologo{height:34px;display:flex;align-items:center;margin-bottom:14px}
  .biz-ecologo .lg{height:100%;max-width:100%}
  @media screen and (max-width:760px){.biz-px{grid-template-columns:1fr}.biz-pxfig{max-width:none}.pxrow{grid-template-columns:repeat(4,1fr)}}
  `;

  const md = `
## Alun Business (marca de transição — lançamento 2025/26)
- Posicionamento: "Somos o único trusted partner em tecnologia e negócios, com um ecossistema capaz de entregar soluções full stack e atuar de ponta a ponta." Evolução natural do ecossistema (Alura: profundidade técnica e escala; FIAP: formação executiva, MBA, graduação e Pós-Tech; PM3: produto, growth e estratégia digital; StartSe: visão global e business trends).
- Dores de mercado: fragmentação; pressão competitiva por dados e tecnologia; adaptação constante; complexidade de execução e disputa por atenção. Resultado: empresas precisam treinar colaboradores em meio a excesso de trilhas e dispersão de conteúdo.
- Logo: wordmark ALUN + "BUSINESS" em caixa-alta neutra (estilo Helvetica). A altura de ALUN é a unidade Y; BUSINESS ≈ 0,57 Y, centrado na vertical, respiro ≈ 0,55 Y. Reserva: 1 Y em todos os lados. Escala mínima (altura de ALUN): 25 px digital · 10 mm impresso. Versões: branco sobre preto, preto sobre branco/cinza claro, branco sobre azul marinho/grafite/ouro (sobre ouro o contraste é baixo: prefira preto).
- Cores (HEX do PDF; nomes sugeridos): Preto ${P.preto} · Grafite ${P.grafite} · Cinza claro ${P.cinza} · Branco ${P.branco} · Areia ${P.areia} · Ouro ${P.ouro} · Azul vivo ${P.azul} · Azul marinho ${P.marinho} · Gradiente areia → ouro.
- Imagem: retratos de profissionais reais, luz natural suave, olhar fora da câmera, sorriso discreto, fundo desfocado de escritório; blocos escalonados sobre branco. Pixelator: foto convertida em grade de módulos nas cores da paleta sobre listras verticais de areia; 8 módulos de base.
- Transição em 2 fases: (1) Integração, ~1 ano: Alun Business + "Alura + FIAP para Empresas" em paralelismo de marcas; (2) Consolidação, uso indefinido: Alun Business como marca única (novo site alunbusiness.com.br). Checkpoints: 2 meses (guia de co-branding, FAQs, treinamento, landings) · 2 meses (review de KPIs) · 6 meses (decisão de go-live e virada) · 2 meses (auditoria pós-virada).
- KPIs fase 1: recall de marca, tráfego orgânico estável, CTR constante, taxa de fechamento inalterada, NPS de clareza. Fase 2: share of voice, tráfego orgânico recuperado, buscas por "Alun Business", conversões estáveis, NPS igual ou maior.
- Mensagens: "Mais integração e potência. É evolução, não ruptura." · "Especialista full-stack em tech + business." · "Menos complexidade, mais resultado." · "Confiança 100% preservada."
- Arquitetura: Alun Business como marca-mãe, com Alura, FIAP, PM3 e StartSe como marcas do ecossistema.
`;

  return { html, css, md };
};
