import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const regions = [
  {
    name: "Africa",
    desc: "Strategic gateway through Egypt connecting North & Sub-Saharan Africa.",
    img: "/service-images/optimized/africa-lanes.webp",
    position: "center 68%",
    detail: "Alexandria, Port Said, Damietta, Suez — connecting to Mombasa, Lagos, Durban and beyond.",
  },
  {
    name: "Europe",
    desc: "Direct lanes to all major European ports and inland destinations.",
    img: "/service-images/optimized/europe-lanes.webp",
    detail: "Rotterdam, Hamburg, Antwerp, Piraeus, Barcelona — weekly sailings on all major routes.",
  },
  {
    name: "Middle East",
    desc: "Extensive coverage of GCC, Levant, and wider MENA region.",
    img: "/service-images/optimized/middle-east-lanes.webp",
    detail: "Jeddah, Dubai, Aqaba, Beirut, Kuwait — air & sea with priority carrier access.",
  },
  {
    name: "Asia",
    desc: "Strong connections to China, India, Southeast Asia, and beyond.",
    img: "/service-images/optimized/asia-lanes.webp",
    detail: "Shanghai, Singapore, Mumbai, Hong Kong — direct FCL & LCL weekly services.",
  },
  {
    name: "Americas",
    desc: "North & South American routes via transshipment hubs.",
    img: "/service-images/optimized/americas-lanes.webp",
    detail: "New York, Houston, Santos, Cartagena — reliable transshipment through major hubs.",
  },
];

export default function GlobalLanes() {
  return (
    <section className="py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Global Reach"
          title="Connecting Continents"
          description="Our network spans six continents, ensuring your cargo reaches any destination worldwide."
        />

        {/* Region cards with always-readable detail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ minHeight: "360px" }}
            >
              <motion.img
                src={r.img}
                alt={r.name}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: r.position || "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/15" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-5 h-px bg-accent mb-2" />
                <h3 className="font-bold text-white text-lg mb-1">{r.name}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{r.desc}</p>
                <p className="text-xs text-accent/95 mt-3 leading-relaxed">
                  {r.detail}
                </p>
              </div>

              <motion.div
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 right-0 h-0.5 bg-accent origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
