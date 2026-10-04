import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { CHECKOUT_LINK, whatsappLink } from "../lib/constants";

export function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-(--color-neon)/25 bg-gradient-to-br from-(--color-surface) via-(--color-ink-2) to-(--color-navy)/40 px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-(--color-neon)/25 blur-[100px] animate-pulse-glow"
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold leading-tight text-(--color-ivory) sm:text-5xl">
                Sua vaga como SDR está mais perto do que você imagina
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-(--color-muted) sm:text-lg">
                Garanta sua vaga agora mesmo ou, se preferir, tire suas dúvidas comigo antes no
                WhatsApp.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappLink("Olá, Raphael! Tenho uma dúvida sobre a Formação SDR.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-7 py-4 text-sm font-bold text-(--color-ivory) transition-colors hover:border-(--color-neon)/50 hover:text-(--color-neon)"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                  Suporte no WhatsApp
                </a>
                <a
                  href={CHECKOUT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-(--color-neon) px-9 py-4 text-base font-bold text-(--color-ink) shadow-[0_0_40px_-8px_rgba(60,255,158,0.7)] transition-transform hover:scale-[1.03]"
                >
                  Quero garantir minha vaga agora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
