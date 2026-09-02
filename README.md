# Formação SDR — Landing Page

Landing page da mentoria **Formação SDR**, de Raphael Santos. Construída em
React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion, com animações de
rolagem, seção de depoimentos reais, oferta B2B (treinamento e implementação
de times de pré-vendas) e CTA direto para WhatsApp.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (tokens de tema em `src/index.css`, paleta verde-escuro / verde-neon / azul-escuro)
- **Framer Motion** para as animações de entrada por rolagem (`whileInView`)
- **lucide-react** para ícones (ícones de marca do Instagram/LinkedIn são SVGs próprios em `src/components/icons/BrandIcons.tsx`, já que a lib removeu ícones de marca)

## Rodando localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento em http://localhost:5173
npm run build     # build de produção em /dist
npm run preview   # serve o build de produção localmente
npm run lint      # oxlint
```

## Estrutura

```
src/
  components/       # Navbar, Hero, Problem, Program, Mentor, Methodology,
                     # Testimonials, B2B, FinalCta, Footer, WhatsAppFloat, ScrollProgress
  components/icons/  # ícones de marca (Instagram, LinkedIn)
  lib/constants.ts   # link do WhatsApp, contatos, links de navegação
  lib/motion.ts       # variantes de animação compartilhadas
  index.css           # tokens de design (cores, fontes, animações)
```

### Atualizando contatos e links

Todos os dados de contato (WhatsApp, e-mail, Instagram, LinkedIn) ficam
centralizados em `src/lib/constants.ts` — basta editar ali para atualizar em
todo o site de uma vez.

## Hospedagem e domínio

O projeto gera um build estático (`npm run build` → pasta `dist/`). **O deploy
já está no ar na Netlify**, em **https://formacaosdr.netlify.app** (Build
command: `npm run build` · Publish directory: `dist` — o arquivo
`public/_redirects` já cuida do fallback de rotas).

### Conectando o domínio `formaçãosdr.com.br` (comprado no registro.br) à Netlify

O domínio já foi comprado no [registro.br](https://registro.br). Como ele tem
acento/cedilha, o DNS/painel vai referenciar a versão ASCII (punycode) dele:
`xn--formaosdr-p2a7b.com.br` — é normal aparecer assim, é o mesmo domínio.
Isso precisa ser feito por quem tem acesso às contas da Netlify e do
registro.br (eu não tenho essas credenciais nem uma ferramenta de deploy
aqui), mas o passo a passo é:

**1. Na Netlify** (site `formacaosdr.netlify.app`):
   - **Site configuration → Domain management → Add a domain**.
   - Digite `formaçãosdr.com.br` (a Netlify aceita acentuação e converte
     sozinha para `xn--formaosdr-p2a7b.com.br` internamente).
   - Quando perguntar sobre DNS, escolha a opção de **manter o DNS no
     registro.br** (não usar "Netlify DNS"), já que o domínio já está lá.
   - A Netlify vai mostrar os registros exatos a criar — normalmente:
     - Domínio raiz → registro **A** apontando para `75.2.60.5`
     - `www` → registro **CNAME** apontando para `formacaosdr.netlify.app`
   - **Siga os valores que aparecerem na tela da Netlify nesse momento**,
     caso sejam diferentes dos acima (a Netlify pode atualizar o IP).

**2. No registro.br:**
   - Acesse [registro.br](https://registro.br) → **Painel** → selecione o
     domínio → **DNS** (ou "Editar Zona").
   - Crie os dois registros indicados pela Netlify:
     - **A** — host `@` (ou em branco/raiz) → `75.2.60.5`
     - **CNAME** — host `www` → `formacaosdr.netlify.app.`
   - Salve. O registro.br costuma levar de alguns minutos a algumas horas
     para propagar.

**3. De volta na Netlify:**
   - Aguarde o status do domínio mudar para "Netlify DNS verificado" /
     "DNS verification succeeded" e ative o **HTTPS** (Let's Encrypt) em
     **Domain management → HTTPS** — é automático assim que o DNS propaga.
   - Defina `formaçãosdr.com.br` como **domínio primário** para que
     `formacaosdr.netlify.app` redirecione para ele.

> Assim que os registros estiverem criados no registro.br, me avisa (ou manda
> um print da tela de Domain management da Netlify) que eu confirmo se está
> tudo certo e se falta algum ajuste.

## Tráfego pago (Meta/Google Ads)

Para dar sustentação a campanhas de tráfego pago:

- Adicione o **Meta Pixel** e/ou **Google Tag / GA4** no `<head>` de `index.html` (ou via um gerenciador de tags como o Google Tag Manager).
- O botão de CTA principal e o botão flutuante de WhatsApp (`src/lib/constants.ts` → `whatsappLink`) são os pontos de conversão — configure eventos de clique nesses elementos como conversão nas plataformas de anúncio.
- A página já é otimizada para performance (build enxuto, imagens/ícones em SVG, sem dependências pesadas), o que ajuda no Quality Score/relevância dos anúncios.
