import { LegalLayout } from "../components/LegalLayout";
import { CONTACT } from "../lib/constants";

export function CookiePolicy() {
  return (
    <LegalLayout title="Política de Cookies" updatedAt="12 de outubro de 2026">
      <p>
        Esta Política de Cookies explica o que são cookies e como o site da <strong>Formação SDR</strong> usa
        essa e outras tecnologias semelhantes. Ela complementa a nossa{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>

      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos que um site salva no seu navegador para lembrar informações sobre a sua
        visita. Tecnologias parecidas, como o armazenamento local do navegador (localStorage), funcionam de
        forma semelhante.
      </p>

      <h2>2. Quais cookies usamos</h2>
      <p>
        Este site é simples: <strong>não usamos cookies de publicidade, rastreamento ou análise</strong>.
        Usamos apenas:
      </p>
      <ul>
        <li>
          <strong>Necessários</strong> — um registro no armazenamento local do seu navegador
          (<code>cookie-consent</code>) que lembra que você já viu o aviso de cookies, para que ele não apareça
          de novo a cada visita.
        </li>
        <li>
          <strong>De terceiros</strong> — o Google Fonts, usado para carregar as fontes do site, recebe dados
          técnicos como o seu endereço IP. Ao clicar nos botões de contato, você é levado ao WhatsApp, que
          segue as próprias políticas de privacidade e de cookies da Meta.
        </li>
      </ul>
      <p>
        Se no futuro passarmos a usar ferramentas de análise ou de anúncios, esta página será atualizada antes
        disso, e pediremos o seu consentimento quando necessário.
      </p>

      <h2>3. Como controlar os cookies</h2>
      <p>
        Você pode apagar ou bloquear cookies e dados de sites nas configurações do seu navegador. Veja como
        fazer no{" "}
        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
          Chrome
        </a>
        ,{" "}
        <a
          href="https://support.mozilla.org/pt-BR/kb/limpe-cookies-e-dados-de-sites-no-firefox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Firefox
        </a>
        ,{" "}
        <a href="https://support.apple.com/pt-br/105082" target="_blank" rel="noopener noreferrer">
          Safari
        </a>{" "}
        e{" "}
        <a
          href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edge
        </a>
        . Bloquear o armazenamento necessário só faz o aviso de cookies aparecer novamente.
      </p>

      <h2>4. Contato</h2>
      <p>
        Dúvidas sobre esta política? Escreva para <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
    </LegalLayout>
  );
}
