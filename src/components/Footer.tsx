import { Instagram, MessageCircle } from "lucide-react";
import { contactConfig } from "../config/mediaConfig";

export function Footer() {
  return (
    <footer className="bg-royal-ink px-4 py-12 text-royal-mist sm:px-6 overflow-hidden w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl font-bold text-white">Inn Royal House</p>
          <p className="mt-2 text-sm">© 2026. Премиальная посуточная аренда квартир и апартаментов.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a className="text-sm font-semibold transition hover:text-white" href="#apartments">
            Апартаменты
          </a>
          <a className="text-sm font-semibold transition hover:text-white" href="#instagram">
            Instagram
          </a>
          <a className="text-sm font-semibold transition hover:text-white" href="#service">
            Сервис
          </a>
          <a
            href={contactConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm font-bold text-white transition hover:border-royal-gold hover:text-royal-gold"
          >
            <Instagram size={16} />
            {contactConfig.instagramHandle}
          </a>
          <a
            href={contactConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-royal-ink transition hover:bg-royal-gold"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
