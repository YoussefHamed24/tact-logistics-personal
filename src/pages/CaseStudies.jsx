import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const HERO_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=95";

const caseStudies = [
  {
    id: 1, client: "Abou Ghaly Motors", industry: "Automotive", service: "RoRo & Sea Freight",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=85",
    challenge: "Importing 500+ vehicles monthly from East Asia and Europe with strict port storage deadlines.",
    result: "30% reduction in port dwell time, zero demurrage fees for 18 consecutive months.",
    tag: "Automotive", tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    id: 2, client: "Jushi Egypt", industry: "Manufacturing", service: "Project Logistics & Customs",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85",
    challenge: "Relocating an entire fiberglass production line from China to Egypt, including 200+ OOG pieces.",
    result: "Delivered on schedule in 14 weeks with zero damage incidents, saving $480,000 in projected delays.",
    tag: "Manufacturing", tagColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  },
  {
    id: 3, client: "Otsuka Pharmaceuticals", industry: "Pharmaceuticals", service: "Air Freight & Cold Chain",
    img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=900&q=85",
    challenge: "Establishing a reliable cold-chain air freight corridor for temperature-sensitive medical supplies.",
    result: "99.8% on-time delivery rate with zero temperature excursions across 200+ shipments.",
    tag: "Pharma", tagColor: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  {
    id: 4, client: "Mansour Group", industry: "Retail & Distribution", service: "Sea Freight & Warehousing",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85",
    challenge: "Managing seasonal inventory peaks with unpredictable SKU volumes from 6 different source countries.",
    result: "40% improvement in stock turnover and warehouse utilization, reducing carry costs by $200K annually.",
    tag: "Retail", tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(null);
  const regionId = useId();

  return (
    <>
      <PageHero title="Case Studies" subtitle="Real results for real clients." image={HERO_IMG} />
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Work"
            title="Client Success Stories"
            description="A selection of the complex logistics challenges we've solved."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={cs.img} alt={cs.client} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cs.tagColor}`}>{cs.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{cs.client}</h3>
                  <p className="text-[15px] text-accent font-medium mb-4">{cs.service}</p>
                  <AnimatePresence>
                    {active === cs.id && (
                      <motion.div id={`${regionId}-${cs.id}`} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="space-y-3 mb-4">
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Challenge</p>
                            <p className="text-[15px] text-foreground">{cs.challenge}</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Result</p>
                            <p className="text-[15px] text-green-800">{cs.result}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    aria-expanded={active === cs.id}
                    aria-controls={`${regionId}-${cs.id}`}
                    onClick={() => setActive(active === cs.id ? null : cs.id)}
                    className="flex items-center gap-1 text-[15px] text-accent font-semibold hover:gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 rounded-md"
                  >
                    {active === cs.id ? "Show less" : "Read more"} <ChevronRight className="w-4 h-4" />
                  </button>
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
