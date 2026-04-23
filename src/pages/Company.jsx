import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import LogoRail from "../components/shared/LogoRail";
import SectionHeading from "../components/shared/SectionHeading";
import CTASection from "../components/home/CTASection";
import { shippingLineLogos, clientLogos } from "../lib/companyLogos";

const HERO_IMG = "/service-images/partners & clients.jpg";

const networks = [
  {
    name: "IATA",
    full: "International Air Transport Association",
    logo: "/company-logos/IATA/IATA_idhsFWZqbC_2.svg",
    desc: "Globally recognized accreditation enabling direct partnerships with airlines for air cargo operations worldwide.",
  },
  {
    name: "FIATA",
    full: "International Federation of Freight Forwarders Associations",
    logo: "/company-logos/FIATA_International_Federation_of_Freight_Forwarders_Associations/FIATA_International_Federation_of_Freight_Forwarders_Associations_idIlc3RIIl_1.svg",
    desc: "Membership in the world's largest freight forwarding network, ensuring adherence to the highest industry standards.",
  },
  {
    name: "DP World Alliance",
    full: "DP World Global Network",
    logo: "/company-logos/DP_World/DP_World_idYmx1Uuqx_2.svg",
    desc: "Strategic partnership providing priority access to DP World's global network of ports and logistics hubs.",
  },
  {
    name: "DF Alliance",
    full: "Digital Freight Alliance",
    logo: "/company-logos/Digital_Freight_Alliance.png",
    desc: "Membership in a global digital freight network connecting independent forwarders for wider coverage and stronger collaboration.",
  },
  {
    name: "AllForward",
    full: "AllForward Global Logistics Network",
    logo: "/company-logos/All_Forward/All_Forward_idCvYQyRyv_3.png",
    desc: "Membership in a curated network of independent freight forwarders, offering global agent coverage and collaborative solutions.",
  },
  {
    name: "Freightnet",
    full: "Freightnet International",
    logo: "/company-logos/Freightnet/Freightnet_idpY7kul3W_0.png",
    desc: "Part of an exclusive international network connecting freight forwarders for seamless cross-border logistics operations.",
  },
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
            description="A slower, cleaner partner rail keeps the brands visible without crowding the page."
          />
          <LogoRail items={shippingLineLogos} duration={42} backgroundTone="background" />
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
                <div className="flex h-16 items-center justify-start px-1 mb-5">
                  <img
                    src={n.logo}
                    alt={`${n.name} logo`}
                    className="max-h-10 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
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
            description="Client brands move in a quieter opposing rail so the section feels premium instead of overloaded."
          />
          <LogoRail items={clientLogos} duration={36} reverse accent backgroundTone="background" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
