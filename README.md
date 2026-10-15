# Plataforma de Design System — Grupo Alun

Tela inicial para escolher a marca + um guia de Design System por marca, todos no formato do guia PM3.

## Como abrir

Dê dois cliques em `index.html` (funciona direto do disco; as fontes vêm do Google Fonts, então é preciso internet para ver a tipografia).

| Arquivo | Marca | Fonte dos dados |
|---|---|---|
| `index.html` | Tela inicial + comparativo do grupo | — |
| `alun.html` | Alun | Brandbook Alun 2025 (PDF) + alun.com.br |
| `alura.html` | Alura | Rebranding Toolkit / Brand Guidelines V2.0, abril 2026 (.fig) + alura.com.br |
| `fiap.html` | FIAP | Design System FIAP 2.0 (.fig) + fiap.com.br |
| `pm3.html` | PM3 | Guia PM3 original (modelo), com link de volta à plataforma. Mantém o login do próprio guia |
| `startse.html` | StartSe | Manual de Identidade Visual 2026 v2 (PDF) + startse.com |

Cada guia tem: essência/estratégia, logo (com download em PNG), cores (clique para copiar, contraste WCAG calculado), tipografia, grafismo/grid, imagem, componentes, peças, voz e tokens CSS + contexto em Markdown para LLM.

## Como editar

O conteúdo de cada marca está em `_src/brands/<marca>.js` (um arquivo de dados por marca). A estrutura e o CSS compartilhado estão em `_src/base.css`, `_src/client.js` e `_src/helpers.js`; a tela inicial, em `_src/home.js`.

Depois de editar, gere os HTML novamente (precisa de Node.js):

```
node _src/build.js
```

`pm3.html` é gerado a partir de `_src/pm3-source/Design-System-PM3.html` (cópia do guia original). Para atualizá-lo, substitua esse arquivo e rode o build.

## Pontos de atenção

- **Fontes licenciadas** (Flecha, FK Grotesk, Gotham HTF, Metronic Slab Pro, etc.) não estão incluídas. Cada guia usa uma fonte aberta de desenho parecido só para visualização e informa a fonte oficial.
- **Cores do Alun:** os campos HEX/RGB/CMYK/Pantone do PDF original repetem um código de exemplo (B0F867). Os HEX/RGB do guia foram medidos nas páginas de paleta e conferidos com o Design System da FIAP e com o site; **CMYK e Pantone do Alun precisam ser confirmados com o time de marca**.
- Conteúdo marcado com a etiqueta **proposta** ou **derivado do site** não consta no material oficial (por exemplo, tom de voz da StartSe, tamanho mínimo do logo da Alura, rampa de azuis da StartSe).
- Fotografias e pictogramas oficiais não foram copiados: os guias usam gráficos procedurais e ícones redesenhados como referência.
- Publicado no Vercel com login por senha (função `api/index.js`; a senha fica na variável de ambiente `DS_PASSWORD`, fora do repositório). O repositório é público e contém os guias em texto aberto.
- O parâmetro `?qa` na URL desliga as animações de entrada (usado só para conferência visual).
