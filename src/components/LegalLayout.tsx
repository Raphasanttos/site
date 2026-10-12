import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "./Footer";

type Props = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalLayout({ title, updatedAt, children }: Props) {
  return (
    <div className="min-h-screen bg-(--color-ink)">
      <header className="border-b border-(--color-border) bg-(--color-ink-2)">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="font-display text-lg font-bold text-(--color-ivory)">
            Formação SDR
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-(--color-muted) transition-colors hover:text-(--color-neon)"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-bold text-(--color-ivory) sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-(--color-muted-2)">Última atualização: {updatedAt}</p>
        <div className="legal-content mt-10 space-y-5 text-[15px] leading-relaxed text-(--color-muted)">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
