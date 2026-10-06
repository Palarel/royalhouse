import { AnimatePresence } from "framer-motion";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { InstagramFeed } from "./components/InstagramFeed";
import { Navbar } from "./components/Navbar";
import { PropertyShowcase } from "./components/PropertyShowcase";
import { FeatureBento } from "./components/FeatureBento";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <main className="min-h-screen overflow-x-hidden bg-royal-ink text-royal-pearl w-full">
        <Navbar />
        <Hero />
        <PropertyShowcase />
        <InstagramFeed />
        <FeatureBento />
        <Footer />
        <FloatingCta />
      </main>
    </AnimatePresence>
  );
}
