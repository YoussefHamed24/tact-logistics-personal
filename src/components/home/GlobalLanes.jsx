import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const regions = [
  {
    name: "Africa",
    desc: "Strategic gateway through Egypt connecting North & Sub-Saharan Africa.",
    img: "https://images.unsplash.com/photo-1484318571209-661cf29a69b3?w=1000&q=90",
    detail: "Alexandria, Port Said, Damietta, Suez — connecting to Mombasa, Lagos, Durban and beyond.",
  },
  {
    name: "Europe",
    desc: "Direct lanes to all major European ports and inland destinations.",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1000&q=90",
    detail: "Rotterdam, Hamburg, Antwerp, Piraeus, Barcelona — weekly sailings on all major routes.",
  },
  {
    name: "Middle East",
    desc: "Extensive coverage of GCC, Levant, and wider MENA region.",
    img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1000&q=90",
    detail: "Jeddah, Dubai, Aqaba, Beirut, Kuwait — air & sea with priority carrier access.",
  },
  {
    name: "Asia",
    desc: "Strong connections to China, India, Southeast Asia, and beyond.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=90",
    detail: "Shanghai, Singapore, Mumbai, Hong Kong — direct FCL & LCL weekly services.",
  },
  {
    name: "Americas",
    desc: "North & South American routes via transshipment hubs.",
    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1000&q=90",
    detail: "New York, Houston, Santos, Cartagena — reliable transshipment through major hubs.",
  },
];

export default function GlobalLanes() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Global Reach"
          title="Connecting Continents"
          description="Our network spans six continents, ensuring your cargo reaches any destination worldwide."
        />

        {/* Tall stacked cards for desktop, scrollable on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onHoverStart={() => setActive(r.name)}
              onHoverEnd={() => setActive(null)}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ height: "320px" }}
            >
              <motion.img
                src={r.img}
                alt={r.name}
                animate={{ scale: active === r.name ? 1.1 : 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/15" />

              {/* Always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-5 h-px bg-accent mb-2" />
                <h3 className="font-bold text-white text-lg mb-1">{r.name}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{r.desc}</p>

                {/* Hover reveal */}
                <AnimatePresence>
                  {active === r.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-accent/90 mt-2 leading-relaxed overflow-hidden"
                    >
                      {r.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Top accent border on hover */}
              <motion.div
                animate={{ scaleX: active === r.name ? 1 : 0 }}
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