import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactConfig, whatsappBookingUrl } from "../config/mediaConfig";

type WhatsAppButtonProps = {
  title?: string;
  address?: string;
  className?: string;
  label?: string;
};

export function WhatsAppButton({ title, address, className = "", label = "Забронировать" }: WhatsAppButtonProps) {
  const href = title && address ? whatsappBookingUrl(title, address) : contactConfig.whatsappUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-royal-gold px-5 py-3 text-sm font-extrabold text-royal-ink transition hover:bg-[#f0c97c] ${className}`}
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={contactConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-royal-gold text-royal-ink shadow-[0_0_0_0_rgba(212,175,104,.55)]"
      animate={{ boxShadow: ["0 0 0 0 rgba(212,175,104,.5)", "0 0 0 14px rgba(212,175,104,0)"] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
    >
      <MessageCircle size={23} />
    </motion.a>
  );
}
