import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, whatsappLink } from "../lib/constants";
import { InstagramIcon, LinkedinIcon } from "./icons/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-ink-2) py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-(--color-ivory)">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--color-neon) text-sm font-black text-(--color-ink)">
                SDR
              </span>
              Formação SDR
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--color-muted)">
              Mentoria ao vivo que forma profissionais de pré-vendas do zero, mesmo sem experiência em vendas.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-(--color-muted-2)">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-(--color-muted) transition-colors hover:text-(--color-neon)">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-(--color-muted-2)">Contato</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-(--color-muted) transition-colors hover:text-(--color-neon)"
                >
                  <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-sm text-(--color-muted) transition-colors hover:text-(--color-neon)"
                >
                  <Mail className="h-4 w-4" /> {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-(--color-muted-2)">Redes sociais</p>
            <div className="mt-4 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ivory) transition-colors hover:border-(--color-neon)/50 hover:text-(--color-neon)"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ivory) transition-colors hover:border-(--color-neon)/50 hover:text-(--color-neon)"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ivory) transition-colors hover:border-(--color-neon)/50 hover:text-(--color-neon)"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--color-border) pt-8 text-xs text-(--color-muted-2) sm:flex-row">
          <p>© {new Date().getFullYear()} Formação SDR — Raphael Santos. Todos os direitos reservados.</p>
          <p>Feito com foco em quem quer bater meta.</p>
        </div>
      </div>
    </footer>
  );
}
