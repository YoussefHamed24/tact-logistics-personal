import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";
import CTASection from "../../components/home/CTASection";

const HERO_IMG = "https://images.unsplash.com/photo-1574023278095-e0a8c0a28e66?w=1920&q=95";
const STRIP_IMG = "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&q=90";

const features = [
  { title: "Vehicle Transport", desc: "Safe and efficient roll-on/roll-off services for cars, SUVs, trucks, and commercial vehicles." },
  { title: "Heavy Machinery", desc: "Specialized RoRo handling for construction equipment, agricultural machinery, and industrial vehicles." },
  { title: "Secure Lashing", desc: "Professional lashing and securing services ensuring zero-damage transport for all wheeled and tracked cargo." },
  { title: "Regular Sailings", desc: "Frequent scheduled RoRo services connecting Egyptian ports to major global destinations." },
  { title: "Global Routes", desc: "Coverage across Mediterranean, Red Sea, Gulf, and transatlantic RoRo trade lanes." },
  { title: "Documentation", desc: "Complete handling of vehicle import/export documentation, certificates, and customs formalities." },
];

export default function RoRo() {
  return (
    <>
      <PageHero title="RoRo Services" subtitle="Roll-on/Roll-off transport for vehicles & heavy machinery." image={HERO_IMG} />

      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="RoRo Shipping" title="Drive On. Sail Across." description="Specialist roll-on/roll-off services for all types of wheeled and tracked cargo worldwide." />
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
        <motion.img initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} src={STRIP_IMG} alt="RoRo vehicles" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Vehicle Specialists</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Every Wheel. Every Ocean.</h2>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}