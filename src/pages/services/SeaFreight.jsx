import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";
import CTASection from "../../components/home/CTASection";

const HERO_IMG = "/service-images/sea-freight-hero.jpg";
const STRIP_IMG = "/service-images/sea-freight-strip.jpg";
const EXTRA_IMGS = [
  "/service-images/sea-freight-gallery-1.jpg",
  "/service-images/sea-freight-gallery-2.jpg",
];

const features = [
  { title: "Full Container Load (FCL)", desc: "Dedicated containers for your cargo with door-to-door service, available in 20', 40', and 40'HC configurations." },
  { title: "Less than Container Load (LCL)", desc: "Cost-effective consolidation for smaller shipments, combining your cargo with others to maximize efficiency." },
  { title: "Oversized Cargo", desc: "Specialized handling for out-of-gauge cargo including flat-rack, open-top, and breakbulk solutions." },
  { title: "Schedule Reliability", desc: "Leveraging partnerships with 13+ major shipping lines to ensure optimal sailing schedules and transit times." },
  { title: "Cargo Insurance", desc: "Comprehensive marine cargo insurance options to protect your goods throughout the entire journey." },
  { title: "Global Coverage", desc: "Direct services to all major ports worldwide across Africa, Europe, Asia, Middle East, and the Americas." },
];

export default function SeaFreight() {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: videoRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.0]);

  return (
    <>
      <PageHero title="Sea Freight" subtitle="FCL, LCL & oversized cargo across all major global lanes." image={HERO_IMG} />

      {/* Features grid */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Sea Freight Solutions" title="Ocean Cargo Services" description="Our sea freight services cover every type of maritime shipping need, backed by partnerships with the world's leading container lines." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.07)" }}
                className="bg-card border border-border/50 rounded-xl p-6 cursor-default transition-shadow"
              >
                <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ delay: i * 0.07 + 0.2 }} className="h-px bg-accent mb-5" />
                <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section ref={videoRef} className="relative h-[440px] overflow-hidden">
        <motion.img
          style={{ scale }}
          src={STRIP_IMG}
          alt="Sea freight port operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Port Operations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Moving Millions of Tonnes — Every Year</h2>
            <p className="mt-4 text-white/55 text-lg max-w-lg mx-auto">Real-time port coordination at Alexandria, Port Said, Damietta & Suez.</p>
          </motion.div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {EXTRA_IMGS.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl overflow-hidden h-52 group">
                <motion.img src={src} alt="Sea freight operations" className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
