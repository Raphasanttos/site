import { LegalLayout } from "../components/LegalLayout";
import { CONTACT } from "../lib/constants";

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidade" updatedAt="12 de outubro de 2026">
      <p>
        Esta Política de Privacidade explica como a <strong>Formação SDR</strong>, mentoria conduzida por Raphael
        Santos ("nós"), trata as informações das pessoas que visitam este site e entram em contato conosco, em
        conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>1. Quem é o responsável pelos seus dados</h2>
      <p>
        O controlador dos dados pessoais é Raphael Santos, responsável pela Formação SDR. Para qualquer assunto
        relacionado a privacidade, fale com a gente pelo e-mail{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <p>Este site não possui formulários de cadastro. Coletamos apenas:</p>
      <ul>
        <li>
          <strong>Dados que você nos envia por conta própria</strong> ao falar conosco pelo WhatsApp, e-mail ou
          redes sociais — como nome, telefone, e-mail e o conteúdo da conversa.
        </li>
        <li>
          <strong>Dados de inscrição e pagamento</strong>, quando você decide entrar na formação — como nome,
          CPF, e-mail e telefone, necessários para a matrícula e emissão de comprovantes. Pagamentos são
          processados por plataformas parceiras, e não armazenamos dados de cartão.
        </li>
        <li>
          <strong>Dados técnicos de navegação</strong>, como endereço IP, tipo de navegador e dispositivo,
          registrados automaticamente pelos serviços que hospedam e entregam o site.
        </li>
      </ul>

      <h2>3. Para que usamos seus dados</h2>
      <ul>
        <li>Responder dúvidas e atender você antes, durante e depois da formação;</li>
        <li>Realizar sua matrícula, dar acesso às aulas e enviar avisos sobre a turma;</li>
        <li>Cumprir obrigações legais e fiscais;</li>
        <li>Manter o site funcionando com segurança e corrigir problemas técnicos.</li>
      </ul>
      <p>
        As bases legais são a execução de contrato e de procedimentos preliminares (art. 7º, V, da LGPD), o
        cumprimento de obrigação legal (art. 7º, II), o legítimo interesse (art. 7º, IX) e, quando necessário,
        o seu consentimento (art. 7º, I).
      </p>

      <h2>4. Com quem compartilhamos</h2>
      <p>Não vendemos seus dados. Eles podem ser compartilhados apenas com:</p>
      <ul>
        <li>
          <strong>Serviços que fazem o site funcionar</strong>: a empresa de hospedagem e o Google Fonts (que
          entrega as fontes do site e recebe o seu endereço IP para isso);
        </li>
        <li>
          <strong>WhatsApp (Meta)</strong>, quando você clica nos botões de contato e conversa com a gente;
        </li>
        <li>
          <strong>Plataformas de pagamento</strong>, quando você realiza a inscrição;
        </li>
        <li>
          <strong>Autoridades públicas</strong>, quando houver obrigação legal ou ordem judicial.
        </li>
      </ul>
      <p>
        Alguns desses serviços podem armazenar dados fora do Brasil, sempre com as garantias previstas na
        LGPD.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário para as finalidades acima: durante o relacionamento com você e,
        depois disso, pelo prazo exigido por lei (por exemplo, obrigações fiscais). Encerrados esses prazos, os
        dados são excluídos ou anonimizados.
      </p>

      <h2>6. Seus direitos</h2>
      <p>Pela LGPD, você pode a qualquer momento:</p>
      <ul>
        <li>Confirmar se tratamos seus dados e ter acesso a eles;</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>Pedir a anonimização, o bloqueio ou a exclusão de dados desnecessários;</li>
        <li>Pedir a portabilidade dos seus dados;</li>
        <li>Saber com quem compartilhamos seus dados;</li>
        <li>Revogar o consentimento, quando ele for a base do tratamento;</li>
        <li>Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</li>
      </ul>
      <p>
        Para exercer seus direitos, escreva para <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        Respondemos em até 15 dias.
      </p>

      <h2>7. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não
        autorizado, perda ou uso indevido. Nenhum sistema é 100% seguro, mas trabalhamos para reduzir os
        riscos ao mínimo.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Saiba como usamos cookies e tecnologias semelhantes na nossa{" "}
        <a href="/politica-de-cookies">Política de Cookies</a>.
      </p>

      <h2>9. Alterações nesta política</h2>
      <p>
        Esta política pode ser atualizada a qualquer momento. A data da última atualização fica sempre no topo
        desta página.
      </p>
    </LegalLayout>
  );
}
