import { AnimatePresence, motion } from "framer-motion";
import { Image as ImageIcon, MapPin, PlayCircle, Video, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Property } from "../config/mediaConfig";
import { WhatsAppButton } from "./WhatsAppButton";

type VideoModalProps = { property: Property | null; onClose: () => void };

export function VideoModal({ property, onClose }: VideoModalProps) {
  const [tab, setTab] = useState<"video" | "photos">("video");
  useEffect(() => setTab("video"), [property?.id]);

  return <AnimatePresence>{property && (
    <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-3 backdrop-blur-sm overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.section initial={{ opacity: 0, scale: .96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .98 }} className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-royal-charcoal shadow-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" aria-label="Закрыть" onClick={onClose} className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white"><X size={20}/></button>
        <div className="grid lg:grid-cols-[1.35fr_.65fr]">
          <div className="p-3 sm:p-5">
            <div className="mb-4 flex gap-2 rounded-full border border-white/10 bg-white/[.05] p-1">
              <button type="button" onClick={() => setTab("video")} className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition ${tab === "video" ? "bg-royal-gold text-royal-ink" : "text-royal-mist"}`}><Video size={16}/>Видеотур</button>
              <button type="button" onClick={() => setTab("photos")} className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition ${tab === "photos" ? "bg-royal-gold text-royal-ink" : "text-royal-mist"}`}><ImageIcon size={16}/>Галерея фото</button>
            </div>
            {tab === "video" ? <div className="aspect-video overflow-hidden rounded-2xl bg-black"><video className="h-full w-full object-cover" src={property.videoSrc} controls autoPlay muted playsInline poster={property.images[0]} /></div> : <div className="grid grid-cols-2 gap-2">{property.images.length === 1 ? <img className="col-span-2 aspect-[16/9] w-full rounded-xl object-cover" src={property.images[0]} alt={`${property.title}, фото 1`} /> : property.images.map((image, index) => <img key={image} className={`${index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"} w-full rounded-xl object-cover`} src={image} alt={`${property.title}, фото ${index + 1}`} />)}</div>}
          </div>
          <div className="flex flex-col p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-royal-gold">Inn Royal House</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">{property.title}</h2>
            <p className="mt-4 inline-flex items-start gap-2 text-sm leading-6 text-royal-mist"><MapPin size={17} className="mt-0.5 shrink-0 text-royal-gold"/>{property.address}</p>
            <p className="mt-4 leading-7 text-royal-mist">{property.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{property.specs.map((spec) => <span key={spec} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white">{spec}</span>)}</div>
            <div className="mt-8"><WhatsAppButton title={property.title} address={property.address} className="w-full" /></div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )}</AnimatePresence>;
}
