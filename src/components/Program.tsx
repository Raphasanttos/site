import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessagesSquare,
  PhoneCall,
  Radar,
  Sparkles,
  Target,
} from "lucide-react";
import { Reveal, RevealGroup } from "./Reveal";
import { revealItem } from "../lib/motion";
import { whatsappLink } from "../lib/constants";

const modules = [
  {
    icon: Radar,
    title: "Fundamentos de pré-vendas",
    text: "Entenda o papel do SDR/BDR, o funil de vendas e por que essa é a porta de entrada mais rápida para tech.",
  },
  {
    icon: PhoneCall,
    title: "Prospecção e cadência",
    text: "Scripts, cold call, cold mail e social selling na prática — as ferramentas que separam quem é chamado de quem não é.",
  },
  {
    icon: MessagesSquare,
    title: "Discovery e qualificação",
    text: "Como conduzir uma ligação de qualificação, aplicar frameworks (GPCT, BANT) e gerar oportunidades reais.",
  },
  {
    icon: Target,
    title: "Posicionamento e currículo",
    text: "Currículo, LinkedIn e discurso alinhados ao que as empresas de tecnologia procuram em um SDR júnior.",
  },
  {
    icon: Sparkles,
    title: "Processo seletivo",
    text: "Simulações de entrevista, cases reais e como se destacar entre centenas de candidatos.",
  },
  {
    icon: CheckCircle2,
    title: "Acompanhamento próximo",
    text: "Mentoria direta, tira-dúvidas e ajustes de rota até você conquistar sua primeira oportunidade.",
  },
];

export function Program() {
  return (
    <section id="formacao" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[500px] -translate-y-1/2 bg-gradient-to-b from-transparent via-(--color-navy)/25 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-(--color-neon)">A formação</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-(--color-ivory) sm:text-4xl">
                Tudo que você precisa para sair do zero e entrar em pré-vendas
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-(--color-muted)">
                Uma mentoria 100% ao vivo, com 2 encontros diretos ao ponto — sem enrolação,
                sem teoria solta. Você aprende fazendo, com quem já viveu a rotina de bater meta.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-neon) px-7 py-3.5 text-sm font-bold text-(--color-ink) shadow-[0_0_30px_-8px_rgba(60,255,158,0.6)] transition-transform hover:scale-[1.03]"
              >
                Quero garantir minha vaga agora
              </a>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {modules.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                variants={revealItem}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-(--color-border) bg-(--color-surface) p-6"
              >
                <span className="absolute right-5 top-5 font-display text-3xl font-bold text-(--color-border)">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-(--color-neon)/10 text-(--color-neon)">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="pr-8 font-display text-base font-semibold text-(--color-ivory)">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">{text}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
