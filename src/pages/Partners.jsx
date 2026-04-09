import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const shippingLines = [
  "Maersk", "CMA CGM", "MSC", "Hapag-Lloyd", "ONE (Ocean Network Express)",
  "COSCO Shipping", "OOCL", "Unifeeder", "HMM (Hyundai Merchant Marine)",
  "PIL (Pacific International Lines)", "Yang Ming", "Sidra Line", "ARKAS",
];

export default function Partners() {
  return (
    <>
      <PageHero title="Global Partnerships" subtitle="Strategic alliances with the world's leading shipping lines." />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Partners"
            title="Backed by Industry Leaders"
            description="Our partnerships with the world's top shipping lines and logistics providers ensure preferential rates, guaranteed space, and unmatched service quality."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shippingLines.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border/50 rounded-xl p-6 flex items-center gap-4 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-lg">{name[0]}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{name}</h3>
                  <p className="text-xs text-muted-foreground">Strategic Shipping Partner</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}