import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappLink } from "../lib/constants";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.4, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 24 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-(--color-neon) text-(--color-ink) shadow-[0_10px_40px_-8px_rgba(60,255,158,0.7)] sm:bottom-8 sm:right-8"
        >
          <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-(--color-neon)/50 blur-xl" />
          <MessageCircle className="h-6 w-6" strokeWidth={2.4} fill="currentColor" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
