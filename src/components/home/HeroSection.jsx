import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";

const stats = [
  { num: "25+", label: "Years Experience" },
  { num: "50+", label: "Global Partners" },
  { num: "100+", label: "Key Clients" },
  { num: "6", label: "Continents Served" },
];

const VIDEO_POSTER_URL = "/service-images/sea-freight-hero.jpg?v=20260427-1";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
      {/* Hero image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={VIDEO_POSTER_URL}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/[0.82] via-black/[0.56] to-black/[0.18]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.46] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-primary/[0.22]" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 sm:py-24">
          <div className="max-w-[19rem] sm:max-w-3xl">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 backdrop-blur-sm text-accent text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] px-3.5 sm:px-4 py-2 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Tact Freight — Cairo, Egypt
            </motion.div>

            {/* Headline with stagger */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[2.55rem] sm:text-[3.7rem] md:text-[4.9rem] lg:text-[4.65rem] font-bold text-white leading-[1.04] tracking-tight"
            >
              Global Freight{" "}
              <span className="relative inline-block">
                <span className="text-accent">Forwarding.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/40 rounded-full origin-left"
                />
              </span>
              <br />
              <span className="text-white/88 text-[1.75rem] sm:text-[2.35rem] md:text-[3.1rem] lg:text-[3.45rem] font-medium">
                Delivered with Trust &amp;
                <br />
                Precision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 text-[1rem] md:text-[1.12rem] text-white max-w-[18rem] sm:max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
            >
              Connecting Egypt to global markets with seamless, end-to-end
              logistics solutions across sea, air, and land.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-4 max-w-md sm:max-w-none"
            >
              <Link
                to="/quote"
                className="group inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-20 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 max-w-2xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className={`px-4 py-5 sm:px-8 sm:py-6 text-center ${i < 3 ? "border-r border-white/10" : ""}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent tracking-tight">{stat.num}</div>
                <div className="mx-auto mt-1 max-w-[5.5rem] text-[10px] leading-snug sm:max-w-none sm:text-xs font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-1 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
