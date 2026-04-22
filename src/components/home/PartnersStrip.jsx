import React from "react";
import SectionHeading from "../shared/SectionHeading";
import LogoRail from "../shared/LogoRail";
import { shippingLineLogos, clientLogos } from "../../lib/companyLogos";

export default function PartnersStrip() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Strategic Partnerships"
          title="Backed by the World's Leading Lines"
          description="A cleaner presentation of shipping partners and key clients, with placeholders left visible only where logo assets are still missing."
        />

        {/* Partners */}
        <div className="rounded-[28px] border border-border/40 bg-card/85 p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)] backdrop-blur-sm mb-10">
          <p className="mb-5 text-center text-[13px] font-bold uppercase tracking-[0.24em] text-foreground/70">
            Shipping Line Partners
          </p>
          <LogoRail items={shippingLineLogos} duration={42} backgroundTone="background" />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-foreground/70 px-3">Key Clients</span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        {/* Clients */}
        <div className="rounded-[28px] border border-accent/15 bg-gradient-to-br from-accent/8 via-background to-accent/5 p-8 shadow-[0_24px_80px_-48px_rgba(239,68,68,0.4)]">
          <p className="mb-5 text-center text-[13px] font-bold uppercase tracking-[0.24em] text-accent/90">
            Trusted by Industry Leaders
          </p>
          <LogoRail items={clientLogos} duration={36} reverse accent backgroundTone="background" />
        </div>
      </div>
    </section>
  );
}
