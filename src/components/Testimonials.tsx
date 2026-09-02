import { motion } from "framer-motion";
import { CheckCheck, Heart, MessageSquareText, Quote } from "lucide-react";
import { Reveal, RevealGroup } from "./Reveal";
import { revealItem } from "../lib/motion";
import { InstagramIcon } from "./icons/BrandIcons";

const instagramFeatured = {
  handle: "denilson_gomes23",
  likes: 3,
  text: "Eu estava 6 meses parado. Com a mentoria do Raphael consegui uma vaga em menos de 1 semana. Esse cara é fera, foi um dos se não o melhor investimento que fiz ultimamente — já atuava com vendas, mas com o direcionamento do Raphael consegui rapidinho uma oportunidade de contrato muito bom. Deus continue te abençoando, meu irmão 🚀🚀",
};

const testimonials = [
  {
    role: "Profissional em pré-vendas",
    message:
      "Raphael, gostaria de agradecer por sua entrega, tenho aplicado seus ensinamentos e vejo resultados na minha rotina e desenvolvimento. Minhas métricas e agendamentos estão bem melhores depois do seu acompanhamento. Obrigado",
    reply: "Obrigado pelo Feedback 🙏 vamos pra cimaa 🚀",
  },
  {
    role: "Contato do mercado de vendas",
    message:
      "Vi o trabalho que você vem construindo com a Escola SDR e curti muito a forma como você posiciona a formação pra quem quer realmente bater meta e evoluir em pré vendas. Muito bom seu trabalho, parabéns 👏🏽",
    reply: "O meu irmão, obrigado pelo seu feedback! Deus colocou esse projeto no meu coração e aos poucos venho avançando.",
  },
];

const quotes = [
  {
    name: null,
    role: "Aluno(a) da Formação SDR",
    text: "Passando pra te dar um feedback da formação: tem me ajudado muito no meu dia a dia, estou conseguindo agendar mais reuniões e já estou com a meta quase batida. Os conteúdos da plataforma têm me ajudado muito!",
  },
  {
    name: null,
    role: "Aluno(a) da Formação SDR",
    text: "Uma pessoa com conhecimento vasto e de grande humildade. Consegue passar tranquilidade e transmitir conhecimento de forma clara. Indico a todos.",
  },
  {
    name: null,
    role: "Aluno(a) da Formação SDR",
    text: "Você me apresentou um mundo que eu ainda não conhecia, mas que hoje faz total sentido pra mim. Meu objetivo agora é me tornar uma SDR de alta performance — e não poderia ter começado com um mentor melhor.",
  },
  {
    name: null,
    role: "Aluno(a) da Formação SDR",
    text: "Aprender a identificar cada perfil de cliente me ajudou a vender da forma que o cliente quer comprar, e não da forma que eu queria vender. Hoje estou vendendo de forma muito mais fluida.",
  },
  {
    name: null,
    role: "Aluna da Formação SDR",
    text: "Investir na sua mentoria foi uma das melhores coisas que eu fiz. Suas dicas, sua paciência e sua forma de explicar fizeram muita diferença. Hoje me sinto muito mais segura e preparada.",
  },
  {
    name: "Maria Eduarda",
    role: "Aluna da Formação SDR",
    text: "Cara, realmente me encontrei nessa área. Mais uma vez, só tenho a agradecer a você.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-(--color-ink-2)" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-(--color-neon)">Resultados reais</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold text-(--color-ivory) sm:text-4xl">
              Quem aplicou, viu a diferença nas métricas
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-(--color-muted)">
              Feedbacks reais recebidos no WhatsApp e nas redes sociais por quem já passou pelo acompanhamento.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.16}>
          <motion.div
            variants={revealItem}
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border border-(--color-neon)/25 bg-(--color-surface) p-5 shadow-[0_20px_60px_-30px_rgba(60,255,158,0.35)]"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-(--color-navy) to-(--color-surface-2) text-xs font-bold text-(--color-neon-soft)">
                DG
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-(--color-ivory)">{instagramFeatured.handle}</p>
                <p className="text-xs text-(--color-muted-2)">pelo autor</p>
              </div>
              <InstagramIcon className="h-4 w-4 shrink-0 text-(--color-muted-2)" />
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-(--color-ivory)">{instagramFeatured.text}</p>
            <div className="mt-4 flex items-center gap-1.5 border-t border-(--color-border) pt-3 text-xs font-medium text-(--color-muted-2)">
              <Heart className="h-3.5 w-3.5 fill-(--color-neon) text-(--color-neon)" />
              {instagramFeatured.likes} · Comentário no Instagram
            </div>
          </motion.div>

          {testimonials.map((t) => (
            <motion.div
              key={t.role}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-2 shadow-[0_20px_60px_-30px_rgba(60,255,158,0.25)]"
            >
              <div className="flex items-center gap-2 border-b border-(--color-border) px-4 py-3">
                <MessageSquareText className="h-4 w-4 text-(--color-neon)" />
                <span className="text-xs font-semibold uppercase tracking-wide text-(--color-muted-2)">
                  Conversa no WhatsApp
                </span>
              </div>

              <div className="space-y-3 p-4">
                <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-(--color-surface-2) px-4 py-3">
                  <p className="text-sm leading-relaxed text-(--color-ivory)">{t.message}</p>
                  <span className="mt-1 block text-[11px] font-medium text-(--color-muted-2)">{t.role}</span>
                </div>

                <div className="ml-auto flex max-w-[92%] flex-col items-end">
                  <div className="rounded-2xl rounded-tr-sm bg-(--color-neon)/15 px-4 py-3">
                    <p className="text-sm leading-relaxed text-(--color-neon-soft)">{t.reply}</p>
                  </div>
                  <span className="mt-1 flex items-center gap-1 text-[11px] font-medium text-(--color-muted-2)">
                    Raphael <CheckCheck className="h-3.5 w-3.5 text-(--color-neon)" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>

      <Reveal delay={0.2} className="mt-12">
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...quotes, ...quotes].map((q, i) => {
              return (
                <div
                  key={`${q.text}-${i}`}
                  className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-(--color-border) bg-(--color-surface) p-5"
                >
                  <Quote className="h-5 w-5 text-(--color-neon)/60" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-(--color-muted)">{q.text}</p>
                  <p className="mt-4 text-xs font-semibold text-(--color-ivory)">
                    {q.name ?? "Feedback recebido no WhatsApp"}
                    <span className="block font-normal text-(--color-muted-2)">{q.role}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
