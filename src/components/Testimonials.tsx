import { motion } from "framer-motion";
import { CheckCheck, MessageSquareText } from "lucide-react";
import { Reveal, RevealGroup } from "./Reveal";
import { revealItem } from "../lib/motion";

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
              Feedbacks reais recebidos diretamente no WhatsApp por quem já passou pelo acompanhamento.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.16}>
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
    </section>
  );
}
