import { motion } from "framer-motion";
import { ArrowRight, Radio, Target, Users2 } from "lucide-react";
import { whatsappLink } from "../lib/constants";
import { Reveal } from "./Reveal";

const bullets = [
  { icon: Radio, label: "100% ao vivo" },
  { icon: Target, label: "2 encontros diretos ao ponto" },
  { icon: Users2, label: "Networking com empresas" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_70%)]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-(--color-neon)/20 blur-[120px]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-(--color-navy-glow)/30 blur-[110px] animate-float"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-24 h-[320px] w-[320px] rounded-full bg-(--color-navy-glow)/20 blur-[100px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-(--color-neon)/30 bg-(--color-neon)/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-(--color-neon-soft)">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-neon)" />
            A porta de entrada mais rápida para o mercado de tecnologia
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.08] tracking-tight text-(--color-ivory) sm:text-6xl lg:text-[4.2rem]">
            Saia do emprego que você não aguenta mais e atue em uma das{" "}
            <span className="text-gradient">carreiras que mais crescem</span> no Brasil
            <br className="hidden sm:block" /> — mesmo sem experiência em vendas
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-balance text-lg text-(--color-muted) sm:text-xl">
            Uma mentoria ao vivo que forma profissionais de pré-vendas do zero. Em semanas,
            você sai preparado para conquistar sua primeira vaga como SDR.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-(--color-neon) px-8 py-4 text-base font-bold text-(--color-ink) shadow-[0_0_40px_-8px_rgba(60,255,158,0.7)] transition-transform hover:scale-[1.03]"
            >
              Quero garantir minha vaga agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#depoimentos"
              className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-8 py-4 text-base font-semibold text-(--color-ivory) transition-colors hover:border-(--color-neon)/50 hover:text-(--color-neon)"
            >
              Ver resultados de alunos
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {bullets.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-(--color-muted-2)">
                <Icon className="h-4 w-4 text-(--color-neon)" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
