import { motion } from "framer-motion";
import { Eye, MapPin, PlayCircle } from "lucide-react";
import { Property } from "../config/mediaConfig";
import { WhatsAppButton } from "./WhatsAppButton";

type PropertyCardProps = {
  property: Property;
  index: number;
  onPreview: () => void;
};

export function PropertyCard({ property, index, onPreview }: PropertyCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-card backdrop-blur w-full"
    >
      <button type="button" onClick={onPreview} className="block w-full text-left" aria-label={`Открыть ${property.title}`}>
        <div className="relative aspect-[1.18] overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            src={property.videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
            poster={property.images[0]}
            onMouseEnter={(event) => event.currentTarget.play().catch(() => undefined)}
            onMouseLeave={(event) => { event.currentTarget.pause(); event.currentTarget.currentTime = 0; }}
          />
          <motion.img
            className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            src={property.images[0]}
            alt={property.title}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.55 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-ink via-royal-ink/12 to-transparent" />
          <motion.span
            whileHover={{ scale: 1.06 }}
            className="absolute right-4 top-4 rounded-full bg-royal-gold px-4 py-2 text-sm font-extrabold text-royal-ink shadow-xl"
          >
            {property.price}
          </motion.span>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
              <MapPin size={15} className="text-royal-gold" />
              {property.address}
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-royal-gold group-hover:text-royal-ink">
              <Eye size={18} />
            </span>
          </div>
        </div>
      </button>

      <div className="p-5">
        <h3 className="font-display text-2xl font-bold text-white">{property.title}</h3>
        <p className="mt-3 min-h-[4rem] text-sm leading-6 text-royal-mist">{property.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {property.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-royal-mist">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <button type="button" onClick={onPreview} className="inline-flex items-center justify-center gap-2 rounded-full border border-royal-gold/45 px-3 py-3 text-sm font-bold text-royal-gold transition hover:bg-royal-gold hover:text-royal-ink"><PlayCircle size={18}/>Обзор</button>
          <WhatsAppButton title={property.title} address={property.address} className="px-3" />
        </div>
      </div>
    </motion.article>
  );
}
