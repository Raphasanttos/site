import { Quote } from "lucide-react";
import { CONTACT } from "../lib/constants";
import { Reveal } from "./Reveal";
import { InstagramIcon, LinkedinIcon } from "./icons/BrandIcons";

const stats = [
  { value: "+ métricas", label: "de agendamento reais em pauta" },
  { value: "100%", label: "conteúdo ao vivo, sem gravações genéricas" },
  { value: "1:1", label: "acompanhamento próximo com os mentorados" },
];

export function Mentor() {
  return (
    <section id="mentor" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-(--color-neon)/25 via-transparent to-(--color-navy-glow)/25 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-(--color-border) bg-(--color-surface-2)">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-(--color-navy) via-(--color-ink-2) to-(--color-surface)">
                  <span className="font-display text-7xl font-bold text-(--color-neon)/70">RS</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-(--color-ink) via-(--color-ink)/70 to-transparent p-6">
                  <p className="font-display text-lg font-bold text-(--color-ivory)">Raphael Santos</p>
                  <p className="text-sm text-(--color-neon-soft)">Fundador — Formação SDR</p>
                </div>
              </div>
              <div className="mt-5 flex justify-center gap-3">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Raphael Santos"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border) text-(--color-ivory) transition-colors hover:border-(--color-neon)/50 hover:text-(--color-neon)"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Raphael Santos"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border) text-(--color-ivory) transition-colors hover:border-(--color-neon)/50 hover:text-(--color-neon)"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-(--color-neon)">Quem te acompanha</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-(--color-ivory) sm:text-4xl">
                Aprenda com quem vive pré-vendas todos os dias
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative mt-6 rounded-2xl border border-(--color-border) bg-(--color-surface) p-6">
                <Quote className="h-6 w-6 text-(--color-neon)/50" />
                <p className="mt-3 text-(--color-muted) leading-relaxed">
                  Deus colocou esse projeto no meu coração há um tempo e aos poucos venho avançando
                  e, de alguma forma, mudando vidas. A Formação SDR nasceu para posicionar quem
                  quer realmente bater meta e evoluir em pré-vendas — sem enrolação, direto ao ponto.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-(--color-border) bg-(--color-surface)/60 p-4">
                    <p className="font-display text-lg font-bold text-(--color-neon)">{s.value}</p>
                    <p className="mt-1 text-xs text-(--color-muted)">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
