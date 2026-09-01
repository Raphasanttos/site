import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "../lib/constants";

export function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-(--color-neon)/25 bg-gradient-to-br from-(--color-surface) via-(--color-ink-2) to-(--color-navy)/40 px-6 py-16 text-center sm:px-16">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-(--color-neon)/25 blur-[100px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold leading-tight text-(--color-ivory) sm:text-5xl">
                Sua vaga como SDR está mais perto do que você imagina
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-(--color-muted) sm:text-lg">
                Fale agora comigo no WhatsApp e garanta sua vaga na próxima turma da Formação SDR.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-(--color-neon) px-9 py-4 text-base font-bold text-(--color-ink) shadow-[0_0_40px_-8px_rgba(60,255,158,0.7)] transition-transform hover:scale-[1.03]"
              >
                Quero garantir minha vaga agora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
