import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RefreshCw, ChevronRight, Building2, Globe, Package, TrendingUp } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";
import { base44 } from "@/api/base44Client";

const HERO_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=95";

const caseStudyTemplates = [
  {
    id: 1,
    client: "Abou Ghaly Motors",
    industry: "Automotive",
    service: "RoRo & Sea Freight",
    img: "https://images.unsplash.com/photo-1574023278095-e0a8c0a28e66?w=900&q=85",
    keywords: ["vehicle import", "RoRo shipping", "Egyptian customs", "automotive logistics", "time-sensitive delivery"],
    challenge: "Importing 500+ vehicles monthly from East Asia and Europe with strict port storage deadlines.",
    result: "30% reduction in port dwell time, zero demurrage fees for 18 consecutive months.",
    tag: "Automotive",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    id: 2,
    client: "Jushi Egypt",
    industry: "Manufacturing",
    service: "Project Logistics & Customs",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85",
    keywords: ["heavy lift", "factory equipment", "oversized cargo", "industrial project", "Chinese manufacturer"],
    challenge: "Relocating an entire fiberglass production line from China to Egypt, including 200+ OOG pieces.",
    result: "Delivered on schedule in 14 weeks with zero damage incidents, saving $480,000 in projected delays.",
    tag: "Manufacturing",
    tagColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  },
  {
    id: 3,
    client: "Otsuka Pharmaceuticals",
    industry: "Pharmaceuticals",
    service: "Air Freight & Cold Chain",
    img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=900&q=85",
    keywords: ["cold chain", "pharmaceutical import", "temperature-controlled", "IATA compliant", "GDP logistics"],
    challenge: "Establishing a reliable cold-chain air freight corridor for temperature-sensitive medical supplies.",
    result: "99.8% on-time delivery rate with zero temperature excursions across 200+ shipments.",
    tag: "Pharma",
    tagColor: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  {
    id: 4,
    client: "Mansour Group",
    industry: "Retail & Distribution",
    service: "Sea Freight & Warehousing",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85",
    keywords: ["LCL consolidation", "inventory management", "bonded warehouse", "multi-SKU", "distribution"],
    challenge: "Managing seasonal inventory peaks with unpredictable SKU volumes from 6 different source countries.",
    result: "40% improvement in stock turnover and warehouse utilization, reducing carry costs by $200K annually.",
    tag: "Retail",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
];

function CaseStudyCard({ cs }) {
  const [narrative, setNarrative] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const generate = async () => {
    setLoading(true);
    setOpen(true);
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a logistics success story writer for Tact Freight, an Egyptian freight forwarding company.

Write a realistic, compelling case study narrative for the following client engagement:

Client: ${cs.client}
Industry: ${cs.industry}
Service: ${cs.service}
Challenge: ${cs.challenge}
Result: ${cs.result}
Keywords to incorporate: ${cs.keywords.join(", ")}

Write 3 short paragraphs:
1. "The Challenge" - describe the client's logistics problem in detail
2. "Our Approach" - how Tact Freight designed and executed the solution
3. "The Outcome" - concrete results, ROI, and long-term impact

Tone: professional, confident, specific. Use realistic numbers and logistics terminology.
Format: Return as plain text with "The Challenge:", "Our Approach:", "The Outcome:" as paragraph headers.`,
    });
    setNarrative(typeof result === "string" ? result : result?.text || result);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/20 transition-all duration-300"
    >
      {/* Image header */}
      <div className="relative h-52 overflow-hidden">
        <img src={cs.img} alt={cs.client} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cs.tagColor}`}>
            {cs.tag}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">{cs.client}</h3>
          <p className="text-white/65 text-sm">{cs.service}</p>
        </div>
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-3 divide-x divide-border/40 border-b border-border/40">
        {[
          { icon: Building2, label: "Industry", value: cs.industry },
          { icon: Package, label: "Service", value: cs.service.split(" ")[0] },
          { icon: TrendingUp, label: "Result", value: "Measured ROI" },
        ].map((m) => (
          <div key={m.label} className="px-4 py-3 text-center">
            <m.icon className="w-3.5 h-3.5 text-accent mx-auto mb-1" />
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{m.label}</p>
            <p className="text-xs font-semibold text-primary mt-0.5 truncate">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="mb-4 space-y-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Challenge</span>
            <p className="text-sm text-primary mt-1">{cs.challenge}</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Result</span>
            <p className="text-sm text-accent font-medium mt-1">{cs.result}</p>
          </div>
        </div>

        {/* AI narrative */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              {loading ? (
                <div className="flex items-center gap-2 py-4 text-muted-foreground text-sm">
                  <RefreshCw className="w-4 h-4 animate-spin text-accent" />
                  Generating case study narrative…
                </div>
              ) : narrative ? (
                <div className="pt-4 border-t border-border/40 space-y-3">
                  {narrative.split("\n").filter(Boolean).map((para, i) => (
                    <p key={i} className={`text-sm leading-relaxed ${para.match(/^(The Challenge:|Our Approach:|The Outcome:)/) ? "font-semibold text-primary" : "text-muted-foreground"}`}>
                      {para}
                    </p>
                  ))}
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Generate button */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={generate}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent text-sm font-semibold px-4 py-2.5 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-200"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {loading ? "Generating…" : narrative ? "Regenerate Story" : "Generate Full Story"}
          </button>
          {narrative && !loading && (
            <button onClick={() => setOpen(!open)}
              className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
              {open ? "Collapse" : "Expand"}
              <ChevronRight className={`w-3 h-3 transition-transform ${open ? "rotate-90" : ""}`} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real client successes powered by precision logistics."
        image={HERO_IMG}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Client Success Stories"
            title="Results That Speak for Themselves"
            description="Click 'Generate Full Story' on any case study to have AI create a detailed narrative of how we solved the challenge."
          />

          {/* AI intro banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-start gap-4 bg-accent/5 border border-accent/20 rounded-xl p-5"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">AI-Powered Case Study Narratives</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Each case study below is based on real client engagements. Click <strong>Generate Full Story</strong> to have our AI create a detailed, realistic narrative — including the challenge, our approach, and measurable outcomes.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyTemplates.map((cs) => (
              <CaseStudyCard key={cs.id} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}