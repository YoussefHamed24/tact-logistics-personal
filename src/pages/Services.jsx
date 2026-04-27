import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import AIServiceDescription from "../components/services/AIServiceDescription";
import { ArrowRight } from "lucide-react";
import CTASection from "../components/home/CTASection";

const HERO_IMG = "/service-images/optimized/sea-freight-hero.webp";

const services = [
  { title: "Sea Freight", desc: "FCL, LCL & oversized cargo across all major trade lanes. We leverage our partnerships with global carriers to offer competitive rates and reliable schedules.", path: "/services/sea-freight", img: "/service-images/optimized/sea-freight-hero.webp", keywords: ["FCL", "LCL", "container shipping", "port operations", "global trade lanes"] },
  { title: "Air Freight", desc: "Express, consolidated & time-critical air cargo solutions. From urgent shipments to regular consolidations, we deliver speed and reliability.", path: "/services/air-freight", img: "/service-images/optimized/air-freight-hero.webp", keywords: ["express air cargo", "time-critical shipments", "IATA", "charter flights", "airway bill"] },
  { title: "Inland Transport", desc: "Nationwide trucking with full GPS visibility. Our extensive fleet network covers all major routes with real-time tracking capabilities.", path: "/services/inland-transport", img: "/service-images/optimized/inland-transport-hero.webp", keywords: ["FTL", "LTL", "GPS tracking", "nationwide trucking", "door-to-door"] },
  { title: "Customs Clearance", desc: "Expert documentation, regulatory compliance, and fast-track clearance services at all Egyptian ports and airports.", path: "/services/customs-clearance", img: "/service-images/optimized/customs-clearance-hero.webp", keywords: ["HS code", "customs broker", "duty optimization", "compliance", "fast-track"] },
  { title: "Warehousing & Distribution", desc: "Bonded and non-bonded warehouse facilities with inventory management, packaging, labeling, and consolidation services.", path: "/services/warehousing", img: "/service-images/optimized/warehousing.webp", keywords: ["bonded warehouse", "inventory management", "consolidation", "distribution", "storage"] },
  { title: "Project Logistics", desc: "Complex project cargo handling, heavy-lift solutions, and turnkey logistics for large-scale industrial projects.", path: "/services/project-logistics", img: "/service-images/optimized/project-logistics.webp", keywords: ["heavy lift", "OOG cargo", "project management", "industrial logistics", "engineering"] },
  { title: "RoRo Services", desc: "Roll-on/Roll-off transport solutions for vehicles, heavy machinery, and oversized rolling equipment.", path: "/services/roro", img: "/service-images/optimized/roro-card.webp", keywords: ["RoRo shipping", "vehicle transport", "roll-on roll-off", "heavy machinery", "lashing"] },
  { title: "Consultancy & Advisory", desc: "Trade route optimization, regulatory advisory, supply chain consulting, and compliance management.", path: "/services/consultancy", img: "/service-images/optimized/consultancy.webp", keywords: ["supply chain optimization", "trade advisory", "regulatory compliance", "cost reduction", "strategy"] },
];

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Comprehensive logistics solutions tailored for global trade." image={HERO_IMG} />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="What We Offer" title="Full-Spectrum Freight Forwarding"
            description="From origin to destination, we manage every element of your supply chain with expertise and precision." />
          <div className="space-y-5">
            {services.map((svc, i) => (
              <motion.div key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <Link to={svc.path}
                  className="group grid md:grid-cols-[320px_1fr] bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/20 hover:-translate-y-0.5 transition-all duration-400"
                >
                  <div className="h-52 md:h-auto overflow-hidden relative">
                    <img src={svc.img} alt={svc.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[200px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:bg-gradient-to-r md:from-transparent md:to-card/30" />
                  </div>
                  <div className="p-8 md:p-9 flex flex-col justify-center">
                    <div className="w-8 h-px bg-accent mb-4 group-hover:w-14 transition-all duration-300" />
                    <h3 className="text-2xl font-bold text-primary mb-3">{svc.title}</h3>
                    <AIServiceDescription
                      serviceTitle={svc.title}
                      defaultDesc={svc.desc}
                      keywords={svc.keywords}
                    />
                    <span className="inline-flex items-center gap-1.5 text-[15px] text-accent font-medium group-hover:gap-3 transition-all mt-5">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
