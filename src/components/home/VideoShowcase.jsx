import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    image: "/service-images/optimized/sea-freight-strip.webp",
    label: "Sea Freight",
    desc: "Container handling and dependable ocean capacity across major trade lanes.",
  },
  {
    image: "/service-images/optimized/air-freight-hero.webp",
    label: "Air Freight",
    desc: "Priority air cargo for time-sensitive shipments and high-value moves.",
  },
  {
    image: "/service-images/optimized/inland-transport-hero.webp",
    label: "Inland Transport",
    desc: "Road coverage across Egypt with coordinated door-to-door execution.",
  },
];

export default function VideoShowcase() {
  return (
    <section className="relative py-28 bg-primary overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] mb-4 text-accent">
            <span className="w-4 h-px bg-accent/60" />
            In Motion
            <span className="w-4 h-px bg-accent/60" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Freight In Motion
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            The core services on Tact's homepage now use freight-specific imagery that matches the actual offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.03]"
              style={{ height: i === 1 ? "430px" : "360px" }}
            >
              <img
                src={item.image}
                alt={item.label}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-6 h-px bg-accent mb-3" />
                <h3 className="text-white font-bold text-[1.65rem] leading-tight">{item.label}</h3>
                <p className="text-white/70 text-sm mt-2 max-w-[26ch]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
