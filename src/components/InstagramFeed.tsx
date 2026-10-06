import { motion } from "framer-motion";
import { Heart, Instagram, MessageCircle, Play } from "lucide-react";
import { contactConfig, instagramMedia } from "../config/mediaConfig";

export function InstagramFeed() {
  return (
    <section id="instagram" className="relative overflow-hidden bg-[#101513] px-4 py-24 sm:px-6 lg:py-32 w-full">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-royal-gold">Live from Instagram</p>
            <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">Живые обзоры и Reels</h2>
          </div>
          <a
            href={contactConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-royal-gold/50 hover:text-royal-gold"
          >
            <Instagram size={18} />
            {contactConfig.instagramHandle}
          </a>
        </motion.div>

        <div className="grid auto-rows-[230px] grid-cols-1 gap-4 md:grid-cols-4">
          {instagramMedia.map((item, index) => (
            <motion.a
              href={item.instagramUrl}
              target="_blank"
              rel="noreferrer"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className={`${item.span} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-card`}
            >
              <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={item.image} alt={item.caption} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/36 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
                {item.type === "reel" && <Play size={14} className="fill-white" />}
                {item.type}
              </div>
              <div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-3 flex items-center gap-4 text-sm font-semibold text-white">
                  <span className="inline-flex items-center gap-1.5">
                    <Heart size={17} />
                    {item.stats}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle size={17} />
                    DM
                  </span>
                </div>
                <p className="text-sm leading-6 text-white/86">{item.caption}</p>
                <span className="mt-4 inline-flex rounded-full bg-white px-3 py-2 text-xs font-extrabold text-royal-ink">
                  Смотреть в Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={contactConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sticky bottom-4 z-20 mt-8 flex items-center justify-between gap-4 rounded-2xl border border-royal-gold/30 bg-royal-ink/82 px-5 py-4 text-white shadow-card backdrop-blur-xl"
        >
          <span className="text-sm font-bold sm:text-base">Больше живых обзоров и сторис в нашем Instagram {contactConfig.instagramHandle}</span>
          <Instagram className="shrink-0 text-royal-gold" size={22} />
        </motion.a>
      </div>
    </section>
  );
}
