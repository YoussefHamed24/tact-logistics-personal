import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { shippingLineLogos, clientLogos } from "../../lib/companyLogos";

function LogoGrid({ items, accent = false }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
          className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300
            ${accent
              ? "bg-gradient-to-br from-accent/10 via-background to-accent/5 border-accent/15 hover:border-accent/35 hover:shadow-[0_18px_50px_-24px_rgba(239,68,68,0.5)]"
              : "bg-card/90 border-border/50 hover:border-accent/20 hover:shadow-[0_18px_50px_-24px_rgba(15,23,42,0.4)]"
            }`}
        >
          <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="flex min-h-[132px] flex-col justify-between gap-6">
            {item.hasLogo ? (
              <div className="flex h-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="max-h-10 w-auto max-w-[78%] object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex h-16 items-center justify-center rounded-2xl border border-dashed border-border/70 bg-muted/45 px-4 text-center shadow-sm">
                <span className="text-[14px] font-semibold text-muted-foreground">{item.name}</span>
              </div>
            )}
            <div className="text-center">
              <div className={`text-[15px] font-semibold ${accent ? "text-foreground" : "text-primary"}`}>
                {item.name}
              </div>
            </div>
          </div>
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
          description="Available companies use local logo assets. Missing ones stay visible as placeholders so the remaining asset gaps are easy to identify."
        />

        {/* Partners */}
        <div className="rounded-[28px] border border-border/40 bg-card/85 p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)] backdrop-blur-sm mb-12">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Shipping Line Partners
          </p>
          <LogoGrid items={shippingLineLogos} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground px-3">Key Clients</span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        {/* Clients */}
        <div className="rounded-[28px] border border-accent/15 bg-gradient-to-br from-accent/8 via-background to-accent/5 p-8 shadow-[0_24px_80px_-48px_rgba(239,68,68,0.4)]">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.24em] text-accent">
            Trusted by Industry Leaders
          </p>
          <LogoGrid items={clientLogos} accent />
        </div>
      </div>
    </section>
  );
}
