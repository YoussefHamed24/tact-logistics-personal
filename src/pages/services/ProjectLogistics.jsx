import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";
import CTASection from "../../components/home/CTASection";

const HERO_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=95";
const STRIP_IMG = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=90";
const EXTRA_IMGS = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=85",
];

const features = [
  { title: "Heavy-Lift Solutions", desc: "Specialized equipment and expertise for moving oversized, out-of-gauge, and super-heavy cargo." },
  { title: "Industrial Projects", desc: "End-to-end logistics for large-scale construction, energy, and infrastructure development projects." },
  { title: "Engineering Studies", desc: "Route surveys, load planning, and feasibility studies to ensure safe and efficient project cargo movement." },
  { title: "Multi-Modal Transport", desc: "Coordinated sea, air, and road transport solutions designed specifically for complex project timelines." },
  { title: "Risk Management", desc: "Comprehensive risk assessment, cargo insurance, and contingency planning for high-value project cargo." },
  { title: "Dedicated Project Team", desc: "Assigned project managers with 24/7 availability, providing single-point-of-contact coordination." },
];

export default function ProjectLogistics() {
  return (
    <>
      <PageHero title="Project Logistics" subtitle="Complex, large-scale project cargo & heavy-lift solutions." image={HERO_IMG} />

      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Project Cargo" title="No Project Too Complex" description="From single oversized pieces to complete plant relocations, we engineer logistics solutions for the impossible." />
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

      <section className="relative h-[360px] overflow-hidden">
        <motion.img initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} src={STRIP_IMG} alt="Heavy lift project logistics" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/78" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Project Specialists</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Engineering the Impossible Move</h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {EXTRA_IMGS.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl overflow-hidden h-52">
                <motion.img src={src} alt="Project logistics" className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}