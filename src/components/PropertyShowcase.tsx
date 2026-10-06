import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Property, PropertyCategory, properties } from "../config/mediaConfig";
import { PropertyCard } from "./PropertyCard";
import { VideoModal } from "./VideoModal";

const filters: { id: PropertyCategory; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "studio", label: "Студии" },
  { id: "one-room", label: "1-комнатные" },
  { id: "two-room", label: "2-комнатные" },
];

export function PropertyShowcase() {
  const [activeFilter, setActiveFilter] = useState<PropertyCategory>("all");
  const [preview, setPreview] = useState<Property | null>(null);
  const visibleProperties = useMemo(
    () => properties.filter((item) => activeFilter === "all" || item.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="apartments" className="relative bg-royal-ink px-4 py-24 sm:px-6 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-royal-gold">Каталог</p>
            <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">Апартаменты с характером</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-royal-mist">
              Выберите апартаменты, чтобы посмотреть видеотур, фотографии, характеристики и сразу написать нам в WhatsApp.
            </p>
          </motion.div>

          <LayoutGroup>
            <div className="flex w-full gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/[0.06] p-1 no-scrollbar md:w-auto">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className="relative h-11 shrink-0 rounded-full px-5 text-sm font-bold text-royal-mist transition hover:text-white"
                >
                  {activeFilter === filter.id && (
                    <motion.span
                      layoutId="active-filter"
                      className="absolute inset-0 rounded-full bg-royal-gold shadow-lg shadow-royal-gold/20"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className={activeFilter === filter.id ? "relative text-royal-ink" : "relative"}>
                    {filter.label}
                  </span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visibleProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
                onPreview={() => setPreview(property)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <VideoModal property={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
