import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const HERO_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=95";

const images = [
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=90",
  "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?w=900&q=90",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=90",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=90",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=90",
];

const pillars = [
  {
    title: "Supply Chain Simplification",
    desc: "We break down the complexity of global logistics into a streamlined, single-source solution. From booking to delivery, our integrated approach eliminates inefficiencies and reduces costs across your entire supply chain.",
  },
  {
    title: "Professional Credibility",
    desc: "With decades of combined experience, our team brings deep industry knowledge and a proven track record. We have built our reputation on consistent delivery, transparent communication, and unwavering commitment to our clients.",
  },
  {
    title: "Integrated Solutions",
    desc: "Under one roof, we offer freight forwarding, customs clearance, warehousing, inland transport, and advisory services. This integration ensures seamless coordination, faster transit times, and reduced handling risks.",
  },
  {
    title: "Technology-Enabled Efficiency",
    desc: "We leverage cutting-edge logistics technology including real-time GPS tracking, digital documentation, automated reporting, and AI-driven route optimization to deliver visibility and control across your shipments.",
  },
  {
    title: "Global Partnerships",
    desc: "Our strategic alliances with over 50 global partners — including Maersk, CMA CGM, MSC, Hapag-Lloyd, and more — ensure preferential rates, priority space, and extensive coverage across all major trade lanes.",
  },
];

export default function WhyUs() {
  return (
    <>
      <PageHero title="Why Choose Us" subtitle="Five pillars of excellence that set us apart." image={HERO_IMG} />

      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Advantage"
            title="What Makes Tact Freight Different"
            description="We don't just move cargo — we engineer complete supply chain solutions built on trust, technology, and global reach."
          />
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ x: 4 }}
                className="group grid md:grid-cols-[280px_1fr] gap-0 bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-accent/25 hover:shadow-xl transition-all duration-400"
              >
                {/* Image panel */}
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <motion.img
                    src={images[i]}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30 md:bg-gradient-to-b md:from-transparent md:to-primary/50" />
                </div>
                {/* Text panel */}
                <div className="p-8 flex flex-col justify-center">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.3 }}
                    className="h-px bg-accent mb-5"
                  />
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
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