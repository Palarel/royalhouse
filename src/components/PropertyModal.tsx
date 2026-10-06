import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Property } from "../config/mediaConfig";

type PropertyModalProps = {
  property: Property | null;
  onClose: () => void;
};

export function PropertyModal({ property, onClose }: PropertyModalProps) {
  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/72 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.35 }}
            className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/12 bg-royal-charcoal shadow-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-white hover:text-royal-ink"
            >
              <X size={20} />
            </button>
            <div className="grid lg:grid-cols-[1.18fr_.82fr]">
              <div className="grid h-[44vh] grid-cols-2 gap-2 p-2 lg:h-[620px]">
                {property.images.map((image, index) => (
                  <motion.img
                    key={image}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 }}
                    className={`${index === 0 ? "col-span-2" : ""} h-full min-h-0 rounded-2xl object-cover`}
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-royal-gold">image preview</p>
                  <h3 className="mt-3 font-display text-4xl font-bold text-white">{property.title}</h3>
                  <p className="mt-4 leading-7 text-royal-mist">{property.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {property.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/[0.08] px-3 py-2 text-sm font-semibold text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={property.instagramPostUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-royal-gold px-5 py-4 text-sm font-extrabold text-royal-ink transition hover:bg-[#f0c97c]"
                >
                  Открыть обзор в Instagram
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
