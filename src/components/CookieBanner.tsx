import { AnimatePresence, m } from "framer-motion";
import { Cookie } from "lucide-react";
import { useState } from "react";

const STORAGE_KEY = "cookie-consent";

function hasConsented() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(() => !hasConsented());

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // navegador sem armazenamento: o aviso volta na próxima visita
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          role="region"
          aria-label="Aviso de cookies"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-(--color-border) bg-(--color-surface)/95 p-5 shadow-2xl backdrop-blur sm:inset-x-6 sm:bottom-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Cookie className="hidden h-6 w-6 shrink-0 text-(--color-neon) sm:block" />
            <p className="text-sm leading-relaxed text-(--color-muted)">
              Usamos apenas o essencial para o site funcionar, sem cookies de rastreamento. Saiba mais na{" "}
              <a href="/politica-de-cookies" className="text-(--color-neon) underline underline-offset-2">
                Política de Cookies
              </a>{" "}
              e na{" "}
              <a href="/politica-de-privacidade" className="text-(--color-neon) underline underline-offset-2">
                Política de Privacidade
              </a>
              .
            </p>
            <button
              type="button"
              onClick={accept}
              className="shrink-0 rounded-full bg-(--color-neon) px-6 py-2.5 text-sm font-bold text-(--color-ink) transition-transform hover:scale-[1.03]"
            >
              Entendi
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
