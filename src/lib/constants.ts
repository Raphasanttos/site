const WHATSAPP_NUMBER = "553171160592";
const DEFAULT_MESSAGE = "Olá, Raphael! Quero garantir minha vaga na Formação SDR 🚀";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Link curto do WhatsApp Business: a mensagem pré-preenchida
// ("Oi Rapha! Tenho interesse na Formação SDR 📚🚀") é configurada no próprio app.
export const CHECKOUT_LINK = "https://wa.me/message/CGBMYCFBT6M6P1";

export const CONTACT = {
  phoneDisplay: "+55 31 7116-0592",
  email: "Phaelsanttos7@gmail.com",
  instagram: "https://www.instagram.com/euraphaelsantos_",
  linkedin: "https://www.linkedin.com/in/raphael-pereiradossantos",
};

export const NAV_LINKS = [
  { label: "A formação", href: "#formacao" },
  { label: "Para você", href: "#para-quem" },
  { label: "Mentor", href: "#mentor" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Investimento", href: "#investimento" },
  // { label: "Para empresas", href: "#empresas" }, // volta junto com a seção B2B
];
