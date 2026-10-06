import { motion } from "framer-motion";
import { Instagram, Send } from "lucide-react";
import { contactConfig } from "../config/mediaConfig";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 w-full overflow-hidden"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-white/[0.08] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-md sm:px-5">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-royal-gold/50 bg-royal-gold/15 font-display text-lg text-royal-gold">
            IR
          </span>
          <span>
            <span className="block font-display text-lg font-bold leading-5 text-white">Inn Royal House</span>
            <span className="hidden text-xs uppercase tracking-[0.22em] text-royal-mist/70 sm:block">
              premium apartments
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-royal-mist md:flex">
          <a className="transition hover:text-white" href="#apartments">
            Апартаменты
          </a>
          <a className="transition hover:text-white" href="#instagram">
            Instagram
          </a>
          <a className="transition hover:text-white" href="#service">
            Сервис
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            aria-label="Открыть Instagram Inn Royal House"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/10 text-white transition hover:scale-105 hover:border-royal-gold/60 hover:bg-royal-gold/15"
            href={contactConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} />
          </a>
          <a
            className="group flex h-10 items-center gap-2 rounded-full bg-royal-gold px-4 text-sm font-bold text-royal-ink shadow-lg shadow-royal-gold/20 transition hover:-translate-y-0.5 hover:bg-[#f0c97c]"
            href={contactConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Send size={16} className="transition group-hover:translate-x-0.5" />
            <span className="hidden sm:inline">Связаться</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
