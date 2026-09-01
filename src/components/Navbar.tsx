import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, whatsappLink } from "../lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-(--color-border) bg-(--color-ink)/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-(--color-ivory)">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--color-neon) text-sm font-black text-(--color-ink)">
            SDR
          </span>
          Formação SDR
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--color-muted) transition-colors hover:text-(--color-neon)"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-(--color-neon) px-5 py-2.5 text-sm font-bold text-(--color-ink) shadow-[0_0_0_0_rgba(60,255,158,0.6)] transition-all hover:shadow-[0_0_28px_2px_rgba(60,255,158,0.55)]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Garantir minha vaga
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--color-border) text-(--color-ivory) lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-(--color-border) bg-(--color-ink)/97 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-(--color-muted) transition-colors hover:bg-(--color-surface) hover:text-(--color-neon)"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-(--color-neon) px-5 py-3 text-sm font-bold text-(--color-ink)"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                Garantir minha vaga
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
