import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Layers3 } from "lucide-react";
import { Reveal, RevealGroup } from "./Reveal";
import { revealItem } from "../lib/motion";
import { whatsappLink } from "../lib/constants";

const offers = [
  {
    icon: Building2,
    title: "Treinamento para empresas",
    text: "Capacitação da sua equipe comercial em prospecção, qualificação e cadência de pré-vendas — aplicado à realidade do seu negócio.",
    bullets: ["Diagnóstico do time atual", "Playbook de prospecção sob medida", "Treinamento ao vivo com o time"],
  },
  {
    icon: Layers3,
    title: "Implementação de times de pré-vendas",
    text: "Estruturação completa da operação de SDR/BDR para pequenas e médias empresas que ainda não têm um time de pré-vendas.",
    bullets: [
      "Desenho do processo e funil",
      "Definição de métricas e metas",
      "Contratação e onboarding do time",
      "Treinamento completo do time",
    ],
  },
];

export function B2B() {
  return (
    <section id="empresas" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-(--color-navy)/20 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-(--color-neon)">Para empresas</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold text-(--color-ivory) sm:text-4xl">
              Sua empresa também pode ter um time de pré-vendas de alta performance
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-(--color-muted)">
              Além da formação individual, ofereço treinamento e implementação de operações de
              pré-vendas para pequenas e médias empresas que querem gerar mais oportunidades qualificadas.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.15}>
          {offers.map(({ icon: Icon, title, text, bullets }) => (
            <motion.div
              key={title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-(--color-border) bg-(--color-surface) p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-navy) text-(--color-neon)">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-(--color-ivory)">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">{text}</p>
              <ul className="mt-5 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-(--color-muted)">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-neon)" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Olá, Raphael! Quero saber mais sobre ${title.toLowerCase()} para minha empresa.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 self-start text-sm font-bold text-(--color-neon) transition-colors hover:text-(--color-neon-soft)"
              >
                Falar sobre esse serviço
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
