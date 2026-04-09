import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const clients = [
  "BMW", "Nissan", "Suzuki", "Geely", "Otsuka",
  "Abou Ghaly Motors", "Mansour Group", "Mobica",
  "KG Mobility", "Jushi", "GB Auto", "Al-Futtaim",
];

export default function Clients() {
  return (
    <>
      <PageHero title="Our Clients" subtitle="Trusted by industry leaders across the globe." />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Key Clients"
            title="Trusted by the Best"
            description="We are proud to serve some of the world's most recognized brands, delivering logistics excellence across diverse industries."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border/50 rounded-xl p-8 flex items-center justify-center text-center hover:border-accent/20 hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-bold text-2xl">{name[0]}</span>
                  </div>
                  <h3 className="font-semibold text-primary text-sm">{name}</h3>
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