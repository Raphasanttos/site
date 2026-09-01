import { AlertCircle, Clock3, TrendingDown, Wallet } from "lucide-react";
import { Reveal, RevealGroup } from "./Reveal";
import { revealItem } from "../lib/motion";
import { motion } from "framer-motion";

const pains = [
  {
    icon: Clock3,
    title: "Rotina que não te deixa evoluir",
    text: "Emprego que consome suas horas e não abre nenhuma porta pro futuro que você quer.",
  },
  {
    icon: Wallet,
    title: "Salário que não acompanha o esforço",
    text: "Você trabalha muito e sente que o retorno financeiro nunca vem na mesma proporção.",
  },
  {
    icon: TrendingDown,
    title: "Medo de não ter experiência",
    text: '"Preciso de experiência pra conseguir vaga, mas preciso de vaga pra ter experiência."',
  },
  {
    icon: AlertCircle,
    title: "Tecnologia parece distante",
    text: "Você acha que precisa saber programar ou ter faculdade de exatas pra entrar no mercado tech.",
  },
];

export function Problem() {
  return (
    <section id="para-quem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-(--color-neon)">Reconhece essa sensação?</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-bold text-(--color-ivory) sm:text-4xl">
              Você não precisa continuar preso a isso
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-(--color-muted)">
              Pré-vendas é uma das únicas carreiras de tecnologia que{" "}
              <span className="text-(--color-ivory) font-semibold">não exige diploma, código ou experiência prévia</span>{" "}
              — só direcionamento certo.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 transition-colors hover:border-(--color-neon)/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-(--color-navy) text-(--color-neon)">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-(--color-ivory)">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">{text}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-(--color-neon)/0 blur-2xl transition-all duration-500 group-hover:bg-(--color-neon)/15" />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
