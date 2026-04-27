import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";
import CTASection from "../../components/home/CTASection";

const HERO_IMG = "/service-images/optimized/warehousing.webp";
const STRIP_IMG = "/service-images/optimized/warehousing-strip.webp";
const EXTRA_IMGS = [
  "/service-images/optimized/warehouse-gallery-1.webp",
  "/service-images/optimized/warehouse-gallery-2.webp",
];

const features = [
  { title: "Bonded Warehouses", desc: "Secure bonded facilities for duty-deferred storage, offering flexibility for import timing and cash flow management." },
  { title: "Inventory Management", desc: "Real-time inventory tracking, stock level monitoring, and automated reporting for complete supply chain visibility." },
  { title: "Packaging & Consolidation", desc: "Professional re-packaging, palletizing, and cargo consolidation services to optimize your shipments." },
  { title: "Labeling Services", desc: "Compliant labeling, barcoding, and tagging services meeting local and international regulatory requirements." },
  { title: "Secure Storage", desc: "Climate-controlled options, 24/7 CCTV surveillance, and comprehensive insurance for all stored goods." },
  { title: "Distribution", desc: "Last-mile delivery coordination and distribution management across Egypt and the wider region." },
];

export default function WarehousingPage() {
  return (
    <>
      <PageHero title="Warehousing" subtitle="Bonded warehouses, inventory management & distribution." image={HERO_IMG} />

      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Warehousing Solutions" title="Your Cargo. Safe & Ready." description="State-of-the-art warehousing facilities in Egypt's key logistics zones." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.07)" }} className="bg-card border border-border/50 rounded-xl p-6 cursor-default transition-shadow">
                <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ delay: i * 0.07 + 0.2 }} className="h-px bg-accent mb-5" />
                <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="relative h-[360px] overflow-hidden">
        <motion.img initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} src={STRIP_IMG} alt="Warehouse interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/66" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Storage Excellence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Scale. Managed with Precision.</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {EXTRA_IMGS.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl overflow-hidden h-52">
                <motion.img src={src} alt="Warehouse" className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
