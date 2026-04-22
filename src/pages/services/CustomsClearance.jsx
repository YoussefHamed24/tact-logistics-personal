import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";
import CTASection from "../../components/home/CTASection";

const HERO_IMG = "/service-images/customs-clearance-hero.jpg";
const STRIP_IMG = "/service-images/customs-clearance-strip.jpg";

const features = [
  { title: "Documentation Management", desc: "Complete handling of all customs documents including bills of lading, commercial invoices, and certificates of origin." },
  { title: "Regulatory Compliance", desc: "Full compliance with Egyptian customs regulations, tariff classifications, and trade agreements." },
  { title: "Fast-Track Clearance", desc: "Expedited clearance services at all major Egyptian ports and airports, minimizing delays and storage costs." },
  { title: "Tariff Classification", desc: "Expert HS code classification and duty optimization to ensure accurate and cost-effective import/export declarations." },
  { title: "Compliance Advisory", desc: "Guidance on trade restrictions, licensing requirements, and regulatory changes affecting your cargo." },
  { title: "24/7 Operations", desc: "Round-the-clock customs team availability to handle urgent clearances and time-sensitive shipments." },
];

export default function CustomsClearance() {
  return (
    <>
      <PageHero title="Customs Clearance" subtitle="Expert documentation, compliance & fast-track clearance." image={HERO_IMG} />

      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Customs Services" title="Seamless Border Crossings" description="Our certified customs team handles all formalities so your cargo moves without delays." />
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

      {/* Photo banner */}
      <section className="relative h-[340px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={STRIP_IMG}
          alt="Customs documentation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/68" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Certified Experts</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Cleared. Compliant. On Time.</h2>
            <p className="mt-4 text-white/72 text-base max-w-md mx-auto">Our customs brokers work around the clock across all Egyptian entry points.</p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
