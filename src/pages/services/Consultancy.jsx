import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";
import CTASection from "../../components/home/CTASection";

const HERO_IMG = "/service-images/optimized/consultancy.webp";
const STRIP_IMG = "/service-images/optimized/consultancy-strip.webp";

const features = [
  { title: "Trade Advisory", desc: "Expert guidance on international trade regulations, market entry strategies, and cross-border compliance." },
  { title: "Supply Chain Optimization", desc: "Data-driven analysis and recommendations to streamline your supply chain and reduce total landed costs." },
  { title: "Compliance Management", desc: "Comprehensive regulatory compliance services including sanctions screening, trade agreement utilization, and licensing." },
  { title: "Route Optimization", desc: "Analysis of shipping routes, transit times, and carrier options to find the most efficient and cost-effective paths." },
  { title: "Technology Solutions", desc: "Guidance on implementing logistics technology including tracking systems, EDI, and supply chain visibility platforms." },
  { title: "Dedicated Advisors", desc: "Experienced logistics consultants assigned to your account, providing personalized strategic counsel." },
];

export default function Consultancy() {
  return (
    <>
      <PageHero title="Consultancy" subtitle="Trade advisory, supply chain optimization & compliance management." image={HERO_IMG} />

      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Advisory Services" title="Strategic Logistics Intelligence" description="Unlock competitive advantages with expert guidance from our seasoned logistics consultants." />
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

      <section className="relative h-[340px] overflow-hidden">
        <motion.img initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} src={STRIP_IMG} alt="Logistics consulting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/66" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Expert Guidance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Strategy That Moves Your Business</h2>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
