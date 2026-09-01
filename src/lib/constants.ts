const WHATSAPP_NUMBER = "553171160592";
const DEFAULT_MESSAGE = "Olá, Raphael! Quero garantir minha vaga na Formação SDR 🚀";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  phoneDisplay: "+55 31 7116-0592",
  email: "Phaelsanttos7@gmail.com",
  instagram: "https://www.instagram.com/raphaelsanttos7",
  linkedin: "https://www.linkedin.com/in/raphael-pereiradossantos",
};

export const NAV_LINKS = [
  { label: "A formação", href: "#formacao" },
  { label: "Para você", href: "#para-quem" },
  { label: "Mentor", href: "#mentor" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Para empresas", href: "#empresas" },
];
