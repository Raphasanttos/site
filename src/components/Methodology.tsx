import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, Compass, Users, Workflow } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Compass,
    title: "Posicionamento",
    text: "Mentalidade, mercado de tecnologia, o ecossistema B2B e como se posicionar para a transição de carreira.",
  },
  {
    icon: Users,
    title: "Pessoas",
    text: "Leitura de perfis comportamentais, comunicação adaptativa, inteligência emocional e rapport.",
  },
  {
    icon: Workflow,
    title: "Processo",
    text: "Frameworks técnicos de qualificação (SPIN Selling, BANT) e execução operacional da rotina de pré-vendas.",
  },
];

export function Methodology() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Reveal delay={0.1} className="mt-10">
      <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-widest text-(--color-neon)">Metodologia 3P</p>
        <p className="mt-2 text-sm text-(--color-muted)">
          Posicionamento, Pessoas e Processo — a base de tudo que é ensinado na mentoria.
        </p>

        <div className="mt-5 divide-y divide-(--color-border)">
          {pillars.map(({ icon: Icon, title, text }, i) => {
            const isOpen = open === i;
            return (
              <div key={title}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-4 text-left"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--color-neon)/10 text-(--color-neon)">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="mr-2 font-display text-xs font-bold text-(--color-muted-2)">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold text-(--color-ivory)">{title}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-(--color-muted-2) transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-(--color-neon)" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-14 pr-2 text-sm leading-relaxed text-(--color-muted)">{text}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
