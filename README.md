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

### Domínio `formaçãosdr.com.br` — ✅ conectado

O domínio foi comprado no [registro.br](https://registro.br). Como ele tem
acento/cedilha, o DNS/painéis (registro.br e Netlify) referenciam a versão
ASCII (punycode) dele: `xn--formaosdr-p2a7b.com.br` — é o mesmo domínio, só
aparece assim.

Ele já está conectado e funcionando, via **Netlify DNS** (a Netlify hospeda a
zona DNS completa do domínio):

1. Na Netlify, o domínio foi adicionado em **Domain management → Add a
   domain**, usando a opção **Netlify DNS** — a Netlify criou os registros A
   (raiz → `75.2.60.5`) e CNAME (`www` → `formacaosdr.netlify.app`)
   automaticamente na própria zona dela (visível em **Go to DNS panel**).
2. No registro.br, os **nameservers** do domínio foram trocados (em
   **DNS → Alterar servidores DNS**) para os 4 nameservers que a Netlify
   atribuiu à zona: `dns1.p09.nsone.net`, `dns2.p09.nsone.net`,
   `dns3.p09.nsone.net`, `dns4.p09.nsone.net`.
3. HTTPS (Let's Encrypt) é emitido automaticamente pela Netlify assim que o
   DNS termina de propagar.

**Nota sobre a barra de endereço:** por ser um domínio `.com.br` com acento,
alguns navegadores (principalmente Chrome) mostram a URL na forma punycode
(`xn--formaosdr-p2a7b.com.br`) em vez da forma acentuada — é uma proteção
anti-phishing do próprio navegador para domínios internacionalizados (IDN),
não é um problema do site, do DNS ou do certificado. O domínio funciona
normalmente dos dois jeitos; em material de divulgação pode-se continuar
usando `formaçãosdr.com.br`.

**Se precisar adicionar e-mail nesse domínio no futuro** (ex.: Google
Workspace), o registro **MX** deve ser criado dentro do painel de DNS da
própria Netlify (**Domain management → [domínio] → Go to DNS panel → Add new
record**), já que a Netlify é quem hospeda a zona DNS agora — não mais o
registro.br.

## Tráfego pago (Meta/Google Ads)

Para dar sustentação a campanhas de tráfego pago:

- Adicione o **Meta Pixel** e/ou **Google Tag / GA4** no `<head>` de `index.html` (ou via um gerenciador de tags como o Google Tag Manager).
- O botão de CTA principal e o botão flutuante de WhatsApp (`src/lib/constants.ts` → `whatsappLink`) são os pontos de conversão — configure eventos de clique nesses elementos como conversão nas plataformas de anúncio.
- A página já é otimizada para performance (build enxuto, imagens/ícones em SVG, sem dependências pesadas), o que ajuda no Quality Score/relevância dos anúncios.
