import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/constants";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="investimento" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight text-(--color-ivory) sm:text-4xl">
            O investimento na sua transição de carreira
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-(--color-muted)">
            Se você continuar onde está, quanto isso vai te custar em saúde mental, tempo longe
            da família e dinheiro perdido nos próximos meses?
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-10">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-(--color-neon)/20 blur-[60px]"
            />
            <div className="relative rounded-[1.75rem] border border-(--color-neon)/25 bg-(--color-surface) px-6 py-12 sm:px-12">
              <p className="text-lg text-(--color-muted-2) line-through">R$ 797,00</p>
              <p className="mt-1 font-display text-4xl font-bold text-(--color-neon) sm:text-5xl">
                12x de R$ 49,70
              </p>
              <p className="mt-2 text-base text-(--color-ivory)">
                ou <span className="font-bold text-(--color-neon-soft)">R$ 497,00</span> à vista
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-(--color-muted-2)">
                Pix ou cartão de crédito
              </p>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-(--color-muted)">
                Acesso aos 3 encontros ao vivo comigo, aos meus roteiros validados e ao caminho
                exato para sua nova profissão. Um valor que você recupera na primeira semana do
                novo emprego.
              </p>

              <a
                href={whatsappLink("Olá, Raphael! Quero garantir minha vaga na Formação SDR por R$497.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-neon) px-8 py-4 text-sm font-bold uppercase tracking-wide text-(--color-ink) shadow-[0_0_40px_-8px_rgba(60,255,158,0.7)] transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                Quero entrar na Formação agora
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
