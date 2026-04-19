import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "../../hooks/use-mobile";

const VIDEO_URL = "https://videos.pexels.com/video-files/2790396/2790396-uhd_2560_1440_25fps.mp4";
const NETWORK_IMG = "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=90";

const pillars = [
  { title: "Supply Chain Simplification", desc: "We streamline complex logistics into a single, cohesive operation." },
  { title: "Professional Credibility", desc: "Decades of experience with a reputation built on trust and delivery." },
  { title: "Integrated Solutions", desc: "From sea to warehouse, every touchpoint managed under one roof." },
  { title: "Technology-Enabled", desc: "Real-time tracking, digital documentation, and AI-driven optimization." },
  { title: "Global Partnerships", desc: "Strategic alliances with the world's leading shipping lines and networks." },
];

export default function WhyChooseStrip() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const showVideo = !isMobile && !prefersReducedMotion;

  return (
    <section className="py-0 bg-background overflow-hidden">
      {/* Video split + pillars */}
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        {/* Left: video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
        >
          {showVideo ? (
            <video
              autoPlay muted loop playsInline preload="metadata"
              poster="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1400&q=90"
              className="w-full h-full object-cover min-h-[400px]"
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1400&q=90"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover min-h-[400px]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3"
            >
              Why Tact Freight
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Built on Five<br />Pillars of Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-3 text-white/60 text-base max-w-xs"
            >
              Expertise, technology, and global reach — delivered as a single solution.
            </motion.p>
          </div>
        </motion.div>

        {/* Right: pillars grid */}
        <div className="bg-primary grid grid-cols-1 sm:grid-cols-2 gap-px">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              className={`p-8 bg-primary transition-colors cursor-default ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 + 0.2 }}
                className="h-px bg-accent mb-4"
              />
              <h3 className="text-white font-semibold text-sm mb-1.5">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global network banner */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          src={NETWORK_IMG}
          alt="Global logistics network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/72" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Reach</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              6 Continents. 50+ Partners. Endless Possibilities.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
