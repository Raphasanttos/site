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

O projeto gera um build estático (`npm run build` → pasta `dist/`), então pode
ser hospedado em qualquer provedor de sites estáticos. Recomendado:

### Vercel (recomendado)

1. Importe este repositório em [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite** (detectado automaticamente).
3. Build command: `npm run build` · Output directory: `dist` (já configurado em `vercel.json`).
4. Depois do primeiro deploy, vá em **Settings → Domains** e adicione o domínio próprio `formaçãosdr.com.br` (forma ASCII/punycode: `xn--formaosdr-p2a7b.com.br` — é assim que ele aparece no DNS), apontando o DNS do registrador para os nameservers/CNAME indicados pela Vercel.

### Netlify (alternativa)

1. Importe o repositório em [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build` · Publish directory: `dist` (o arquivo `public/_redirects` já cuida do fallback de rotas).
3. Adicione o domínio próprio em **Site settings → Domain management**.

### Conectando o domínio `formaçãosdr.com.br` (comprado no registro.br)

O domínio **formaçãosdr.com.br** já foi comprado no
[registro.br](https://registro.br). Como ele tem acento/cedilha, o DNS/painel
vai referenciar a versão ASCII (punycode) dele: `xn--formaosdr-p2a7b.com.br` —
é normal aparecer assim, é o mesmo domínio.

1. Faça o deploy do projeto primeiro (Vercel ou Netlify) e adicione o domínio
   em **Settings → Domains** (Vercel) ou **Domain management** (Netlify),
   digitando `formaçãosdr.com.br` (ou a versão `xn--...`, tanto faz) — a
   plataforma vai mostrar os registros DNS exatos a usar (eles podem mudar
   com o tempo, então siga o que aparecer na tela nesse momento).
2. Acesse [registro.br](https://registro.br) → **Painel** → selecione o
   domínio → **DNS**.
3. Se o domínio ainda estiver usando os DNS padrão do registro.br, crie os
   registros indicados pela Vercel/Netlify:
   - **Domínio raiz** (`formaçãosdr.com.br`): registro **A** apontando
     para o IP informado pela plataforma (ex.: `76.76.21.21` na Vercel).
   - **Subdomínio `www`**: registro **CNAME** apontando para o host informado
     (ex.: `cname.vercel-dns.com.` na Vercel, ou `<site>.netlify.app.` na
     Netlify).
4. Salve e aguarde a propagação (pode levar de minutos a algumas horas).
5. Volte na Vercel/Netlify e confirme que o domínio ficou com o status
   "válido"/"verificado" — o certificado SSL é emitido automaticamente.

> Isso precisa ser feito por quem tem acesso à conta do registro.br e da
> Vercel/Netlify — não tenho essas credenciais nem uma ferramenta de deploy
> aqui. Assim que o site estiver publicado em algum lugar, me avisa (pode ser
> só o link) que eu confirmo com vocês se os registros DNS estão certos.

## Tráfego pago (Meta/Google Ads)

Para dar sustentação a campanhas de tráfego pago:

- Adicione o **Meta Pixel** e/ou **Google Tag / GA4** no `<head>` de `index.html` (ou via um gerenciador de tags como o Google Tag Manager).
- O botão de CTA principal e o botão flutuante de WhatsApp (`src/lib/constants.ts` → `whatsappLink`) são os pontos de conversão — configure eventos de clique nesses elementos como conversão nas plataformas de anúncio.
- A página já é otimizada para performance (build enxuto, imagens/ícones em SVG, sem dependências pesadas), o que ajuda no Quality Score/relevância dos anúncios.
