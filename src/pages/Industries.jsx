import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";
const industries = [
  {
    title: "Automotive & Heavy Machinery",
    points: [
      "Specialized transport for vehicles via RoRo and containerized shipping",
      "Heavy machinery logistics for construction and industrial equipment",
      "Dedicated handling for BMW, Nissan, Suzuki, Geely, KG Mobility units",
      "Full compliance with automotive import regulations and certification",
    ],
  },
  {
    title: "Construction & Infrastructure",
    points: [
      "Project cargo for large-scale infrastructure development",
      "Heavy-lift and out-of-gauge transport solutions",
      "Multi-modal logistics for construction materials and equipment",
      "Site delivery coordination and just-in-time scheduling",
    ],
  },
  {
    title: "Retail & Consumer Goods",
    points: [
      "High-volume, fast-moving consumer goods logistics",
      "Warehousing with pick-and-pack and distribution capabilities",
      "Seasonal surge capacity management",
      "E-commerce fulfillment and last-mile delivery coordination",
    ],
  },
  {
    title: "Pharmaceuticals & Healthcare",
    points: [
      "Temperature-controlled shipping for sensitive medical products",
      "GDP-compliant handling and documentation",
      "Expedited clearance for life-saving medications and equipment",
      "Cold chain logistics with continuous monitoring",
    ],
  },
  {
    title: "Agriculture & Food Products",
    points: [
      "Reefer container services for perishable goods",
      "Bulk commodity shipping for agricultural exports",
      "Phytosanitary documentation and compliance management",
      "Port-to-market cold chain solutions",
    ],
  },
  {
    title: "Energy & Industrial Projects",
    points: [
      "Turnkey logistics for oil, gas, and renewable energy projects",
      "Heavy-lift transport for turbines, generators, and industrial equipment",
      "Route surveys and engineering feasibility studies",
      "On-site delivery coordination with project stakeholders",
    ],
  },
];

export default function Industries() {
  return (
    <>
      <PageHero title="Industries We Serve" subtitle="Tailored logistics solutions for every sector." />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Industry Expertise"
            title="Sector-Specific Solutions"
            description="Deep expertise across diverse industries, delivering specialized logistics strategies that meet the unique demands of each sector."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border/50 rounded-xl p-8"
              >
                <div className="mb-5">
                  <div className="w-8 h-px bg-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary">{ind.title}</h3>
                </div>
                <ul className="space-y-3">
                  {ind.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
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