import { motion } from "framer-motion";
import { BedDouble, KeyRound, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: BedDouble,
    title: "Отельный сервис",
    text: "Белоснежное белье, аккуратная сервировка и ощущение номера высокого класса.",
    className: "md:col-span-2",
  },
  {
    icon: KeyRound,
    title: "Умный замок",
    text: "Заселение в любое время без ожидания администратора и лишней суеты.",
    className: "",
  },
  {
    icon: ShieldCheck,
    title: "Идеальная чистота",
    text: "Клининг после каждого гостя, контроль деталей и свежий аромат дома.",
    className: "",
  },
  {
    icon: Sparkles,
    title: "Премиальная атмосфера",
    text: "Свет, фактуры, тишина и красивые ракурсы для отдыха, встреч и контента.",
    className: "md:col-span-2",
  },
];

export function FeatureBento() {
  return (
    <section id="service" className="bg-royal-pearl px-4 py-24 text-royal-ink sm:px-6 lg:py-32 overflow-hidden w-full">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.24em] text-royal-emerald">Стандарты</p>
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Сервис, который чувствуется в деталях</h2>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text, className }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -7, scale: 1.01 }}
              className={`${className} min-h-[240px] rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(11,17,16,.12)]`}
            >
              <div className="mb-10 grid h-14 w-14 place-items-center rounded-2xl bg-royal-emerald text-royal-gold">
                <Icon size={26} />
              </div>
              <h3 className="font-display text-3xl font-bold">{title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-royal-charcoal/70">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
