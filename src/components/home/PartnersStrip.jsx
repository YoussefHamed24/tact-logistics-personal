import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const partners = [
  "Maersk", "CMA CGM", "MSC", "Hapag-Lloyd", "ONE", "COSCO",
  "OOCL", "Unifeeder", "HMM", "PIL", "Yang Ming", "Sidra Line", "ARKAS",
];

const clients = [
  "BMW", "Nissan", "Suzuki", "Geely", "Otsuka",
  "Abou Ghaly Motors", "Mansour", "Mobica", "KG Mobility", "Jushi",
];

function LogoGrid({ items, accent = false }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((name, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-default border
            ${accent
              ? "bg-accent/5 border-accent/15 text-accent hover:bg-accent/15 hover:border-accent/30"
              : "bg-muted/60 border-border/40 text-muted-foreground hover:text-primary hover:bg-card hover:border-accent/20 hover:shadow-md"
            }`}
        >
          {name}
        </motion.div>
      ))}
    </div>
  );
}

export default function PartnersStrip() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Strategic Partnerships"
          title="Backed by the World's Leading Lines"
          description="We partner with global shipping leaders to deliver the best rates, routes, and reliability."
        />

        {/* Partners */}
        <div className="bg-card border border-border/40 rounded-2xl p-8 mb-12 shadow-sm">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Shipping Line Partners
          </p>
          <LogoGrid items={partners} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground px-3">Key Clients</span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        {/* Clients */}
        <div className="bg-gradient-to-br from-accent/5 to-accent/2 border border-accent/15 rounded-2xl p-8 shadow-sm">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
            Trusted by Industry Leaders
          </p>
          <LogoGrid items={clients} accent />
        </div>
      </div>
    </section>
  );
}