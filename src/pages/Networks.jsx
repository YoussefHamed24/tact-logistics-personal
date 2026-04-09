import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";
import { Globe } from "lucide-react";

const networks = [
  { name: "IATA", full: "International Air Transport Association", desc: "Globally recognized accreditation enabling direct partnerships with airlines for air cargo operations worldwide." },
  { name: "FIATA", full: "International Federation of Freight Forwarders Associations", desc: "Membership in the world's largest freight forwarding network, ensuring adherence to the highest industry standards." },
  { name: "DP World Alliance", full: "DP World Global Network", desc: "Strategic partnership providing priority access to DP World's global network of ports and logistics hubs." },
  { name: "AllForward", full: "AllForward Global Logistics Network", desc: "Membership in a curated network of independent freight forwarders, offering global agent coverage and collaborative solutions." },
  { name: "Freightnet", full: "Freightnet International", desc: "Part of an exclusive international network connecting freight forwarders for seamless cross-border logistics operations." },
];

export default function Networks() {
  return (
    <>
      <PageHero title="Global Networks" subtitle="Connected through the world's most prestigious logistics networks." />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Networks"
            title="Globally Connected"
            description="Our memberships in leading international networks amplify our reach, credibility, and service capabilities across the globe."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networks.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border/50 rounded-xl p-8 hover:border-accent/20 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{n.name}</h3>
                <p className="text-xs text-accent font-medium mb-3">{n.full}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}