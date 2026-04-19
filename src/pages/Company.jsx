import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";
import { shippingLineLogos, clientLogos } from "../lib/companyLogos";

const HERO_IMG = "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=95";

const networks = [
  { name: "IATA", full: "International Air Transport Association", desc: "Globally recognized accreditation enabling direct partnerships with airlines for air cargo operations worldwide." },
  { name: "FIATA", full: "International Federation of Freight Forwarders Associations", desc: "Membership in the world's largest freight forwarding network, ensuring adherence to the highest industry standards." },
  { name: "DP World Alliance", full: "DP World Global Network", desc: "Strategic partnership providing priority access to DP World's global network of ports and logistics hubs." },
  { name: "AllForward", full: "AllForward Global Logistics Network", desc: "Membership in a curated network of independent freight forwarders, offering global agent coverage and collaborative solutions." },
  { name: "Freightnet", full: "Freightnet International", desc: "Part of an exclusive international network connecting freight forwarders for seamless cross-border logistics operations." },
];

function LogoCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group rounded-[26px] border border-border/50 bg-card/95 p-6 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.42)] transition-all hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_28px_80px_-42px_rgba(239,68,68,0.26)]"
    >
      {item.hasLogo ? (
        <div className="flex h-24 items-center justify-center rounded-2xl bg-white px-6 shadow-sm ring-1 ring-slate-200/80">
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="max-h-12 w-auto max-w-full object-contain"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-border/70 bg-muted/45 px-6 text-center shadow-sm">
          <span className="text-lg font-semibold text-muted-foreground">{item.name}</span>
        </div>
      )}
      <div className="mt-5 text-center">
        <h3 className="text-base font-semibold text-primary">{item.name}</h3>
      </div>
    </motion.div>
  );
}

export default function Company() {
  return (
    <>
      <PageHero
        title="Partners, Networks & Clients"
        subtitle="The alliances, memberships, and brands that define our global reach."
        image={HERO_IMG}
      />

      {/* ── Shipping Line Partners ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Partners"
            title="Backed by Industry Leaders"
            description="Companies with downloaded local logos are shown as image cards. Missing assets remain in place as placeholders so the list stays complete."
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {shippingLineLogos.map((item, i) => (
              <LogoCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Networks ── */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Networks"
            title="Globally Connected"
            description="Our memberships in leading international networks amplify our reach, credibility, and service capabilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networks.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border/50 rounded-xl p-7 hover:border-accent/20 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{n.name}</h3>
                <p className="text-xs text-accent font-medium mb-2">{n.full}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Clients ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Key Clients"
            title="Trusted by the Best"
            description="Current local logo coverage plus clear placeholders for client brands that still need proper high-resolution assets."
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {clientLogos.map((item, i) => (
              <LogoCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
