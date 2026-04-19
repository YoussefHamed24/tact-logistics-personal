import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const HERO_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=95";

const pillarImages = [
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=90",
  "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?w=900&q=90",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=90",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=90",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=90",
];

const pillars = [
  { title: "Supply Chain Simplification", desc: "We break down the complexity of global logistics into a streamlined, single-source solution. From booking to delivery, our integrated approach eliminates inefficiencies and reduces costs across your entire supply chain." },
  { title: "Professional Credibility", desc: "With decades of combined experience, our team brings deep industry knowledge and a proven track record. Built on consistent delivery, transparent communication, and unwavering commitment to our clients." },
  { title: "Integrated Solutions", desc: "Under one roof: freight forwarding, customs clearance, warehousing, inland transport, and advisory services. This integration ensures seamless coordination, faster transit times, and reduced handling risks." },
  { title: "Technology-Enabled Efficiency", desc: "We leverage cutting-edge logistics technology including real-time GPS tracking, digital documentation, automated reporting, and AI-driven route optimization to deliver visibility and control." },
  { title: "Global Partnerships", desc: "Our strategic alliances with over 50 global partners — including Maersk, CMA CGM, MSC, Hapag-Lloyd — ensure preferential rates, priority space, and extensive coverage across all major trade lanes." },
];

const industries = [
  { title: "Automotive & Heavy Machinery", points: ["Specialized transport for vehicles via RoRo and containerized shipping", "Heavy machinery logistics for construction and industrial equipment", "Dedicated handling for BMW, Nissan, Suzuki, Geely, KG Mobility units", "Full compliance with automotive import regulations and certification"] },
  { title: "Construction & Infrastructure", points: ["Project cargo for large-scale infrastructure development", "Heavy-lift and out-of-gauge transport solutions", "Multi-modal logistics for construction materials and equipment", "Site delivery coordination and just-in-time scheduling"] },
  { title: "Retail & Consumer Goods", points: ["High-volume, fast-moving consumer goods logistics", "Warehousing with pick-and-pack and distribution capabilities", "Seasonal surge capacity management", "E-commerce fulfillment and last-mile delivery coordination"] },
  { title: "Pharmaceuticals & Healthcare", points: ["Temperature-controlled shipping for sensitive medical products", "GDP-compliant handling and documentation", "Expedited clearance for life-saving medications and equipment", "Cold chain logistics with continuous monitoring"] },
  { title: "Agriculture & Food Products", points: ["Reefer container services for perishable goods", "Bulk commodity shipping for agricultural exports", "Phytosanitary documentation and compliance management", "Port-to-market cold chain solutions"] },
  { title: "Energy & Industrial Projects", points: ["Turnkey logistics for oil, gas, and renewable energy projects", "Heavy-lift transport for turbines, generators, and industrial equipment", "Route surveys and engineering feasibility studies", "On-site delivery coordination with project stakeholders"] },
];

export default function WhyAndIndustries() {
  return (
    <>
      <PageHero
        title="Why Us & Industries"
        subtitle="What sets us apart and the sectors we serve."
        image={HERO_IMG}
      />

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Advantage"
            title="What Makes Tact Freight Different"
            description="We don't just move cargo — we engineer complete supply chain solutions built on trust, technology, and global reach."
          />
          <div className="space-y-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ x: 4 }}
                className="group grid md:grid-cols-[260px_1fr] bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-accent/25 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-44 md:h-auto overflow-hidden">
                  <motion.img
                    src={pillarImages[i]}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30" />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <div className="w-8 h-px bg-accent mb-4 group-hover:w-14 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Industry Expertise"
            title="Sector-Specific Solutions"
            description="Deep expertise across diverse industries, delivering specialized logistics strategies that meet the unique demands of each sector."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border/50 rounded-xl p-7 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <div className="w-8 h-px bg-accent mb-4" />
                <h3 className="text-lg font-bold text-primary mb-4">{ind.title}</h3>
                <ul className="space-y-2">
                  {ind.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[15px] text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
