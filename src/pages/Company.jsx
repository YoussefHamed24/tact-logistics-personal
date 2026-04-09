import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";

const HERO_IMG = "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=95";

const shippingLines = [
  "Maersk", "CMA CGM", "MSC", "Hapag-Lloyd", "ONE (Ocean Network Express)",
  "COSCO Shipping", "OOCL", "Unifeeder", "HMM (Hyundai Merchant Marine)",
  "PIL (Pacific International Lines)", "Yang Ming", "Sidra Line", "ARKAS",
];

const networks = [
  { name: "IATA", full: "International Air Transport Association", desc: "Globally recognized accreditation enabling direct partnerships with airlines for air cargo operations worldwide." },
  { name: "FIATA", full: "International Federation of Freight Forwarders Associations", desc: "Membership in the world's largest freight forwarding network, ensuring adherence to the highest industry standards." },
  { name: "DP World Alliance", full: "DP World Global Network", desc: "Strategic partnership providing priority access to DP World's global network of ports and logistics hubs." },
  { name: "AllForward", full: "AllForward Global Logistics Network", desc: "Membership in a curated network of independent freight forwarders, offering global agent coverage and collaborative solutions." },
  { name: "Freightnet", full: "Freightnet International", desc: "Part of an exclusive international network connecting freight forwarders for seamless cross-border logistics operations." },
];

const clients = [
  "BMW", "Nissan", "Suzuki", "Geely", "Otsuka",
  "Abou Ghaly Motors", "Mansour Group", "Mobica",
  "KG Mobility", "Jushi", "GB Auto", "Al-Futtaim",
];

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
            description="Our partnerships with the world's top shipping lines ensure preferential rates, guaranteed space, and unmatched service quality."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shippingLines.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border/50 rounded-xl p-5 flex items-center gap-4 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-lg">{name[0]}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm">{name}</h3>
                  <p className="text-xs text-muted-foreground">Strategic Shipping Partner</p>
                </div>
              </motion.div>
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
            description="We proudly serve some of the world's most recognized brands across diverse industries."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {clients.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border/50 rounded-xl p-6 flex items-center justify-center text-center hover:border-accent/20 hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-bold text-xl">{name[0]}</span>
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