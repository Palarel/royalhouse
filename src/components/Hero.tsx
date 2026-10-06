import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, KeyRound, MapPin, Sparkles, Star } from "lucide-react";

const badges = [
  { icon: Star, label: "5.0 Рейтинг" },
  { icon: KeyRound, label: "Бесконтактный заезд 24/7" },
  { icon: MapPin, label: "Премиум локации" },
];

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(my, { stiffness: 80, damping: 22 });
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  return (
    <section
      id="top"
      className="grain relative isolate min-h-screen overflow-hidden bg-noise-soft px-4 pb-16 pt-28 sm:px-6 lg:pt-32 w-full"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width - 0.5);
        my.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,17,16,.34)_0%,rgba(11,17,16,.86)_88%)]" />
      <motion.div
        style={{ x: imageX, y: imageY }}
        className="absolute right-[-8%] top-[14%] -z-10 h-[58vh] w-[58vw] min-w-[420px] max-w-[120%] overflow-hidden rounded-[2rem] border border-white/10 opacity-60 shadow-card"
      >
        <img className="h-full w-full object-cover" src="/properties/property-01-cover.webp" alt="" />
      </motion.div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-royal-gold/30 bg-royal-gold/10 px-4 py-2 text-sm font-semibold text-royal-gold"
          >
            <Sparkles size={16} />
            Посуточная аренда квартир премиум-класса
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
            className="font-display text-[clamp(3.2rem,9vw,8.8rem)] font-extrabold leading-[0.88] tracking-normal text-white"
          >
            {["Inn", "Royal", "House"].map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { y: 80, opacity: 0, filter: "blur(12px)" },
                  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.8 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-royal-mist sm:text-xl"
          >
            Апартаменты с отельной подачей, живыми обзорами в Instagram и продуманным заездом без лишних
            сообщений. Красивый интерьер, чистота и приватность с первой минуты.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.75 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <motion.span
                whileHover={{ y: -4, scale: 1.03 }}
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.09] px-4 py-3 text-sm font-semibold text-white backdrop-blur"
              >
                <Icon size={17} className="text-royal-gold" />
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.42, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[520px] w-full max-w-[520px]"
        >
          <div className="absolute inset-x-8 bottom-0 top-16 rounded-[2rem] border border-white/12 bg-white/[0.06] shadow-glow backdrop-blur" />
          <motion.img
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-8 h-[72%] w-[72%] rounded-[1.7rem] object-cover shadow-card"
            src="/checkin-1.png"
            alt="Премиальный интерьер апартаментов Inn Royal House"
          />
          <motion.img
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 right-1 h-[50%] w-[50%] rounded-[1.4rem] border-4 border-royal-ink object-cover shadow-card"
            src="/checkin-2.png"
            alt="Ванная зона премиальных апартаментов"
          />
          <div className="absolute right-4 top-0 rounded-2xl border border-white/12 bg-royal-ink/70 p-4 backdrop-blur-md">
            <span className="block font-display text-4xl font-bold text-royal-gold">24/7</span>
            <span className="text-sm text-royal-mist">заезд</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#apartments"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-sm font-semibold text-royal-mist md:flex"
      >
        <span>Листайте к апартаментам</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.7, repeat: Infinity }}>
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
