import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

const stats = [
  { num: "25+", label: "Years Experience" },
  { num: "50+", label: "Global Partners" },
  { num: "100+", label: "Key Clients" },
  { num: "6", label: "Continents Served" },
];

// Pexels free-use freight/port videos (no auth needed)
const VIDEO_URL = "https://videos.pexels.com/video-files/3735869/3735869-uhd_2560_1440_25fps.mp4";
const HERO_POSTER = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80";

export default function HeroSection() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const showVideo = !isMobile && !prefersReducedMotion;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
      {/* Video background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        {showVideo ? (
          <video
            autoPlay muted loop playsInline preload="metadata"
            className="w-full h-full object-cover opacity-40"
            poster={HERO_POSTER}
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        ) : (
          <img
            src={HERO_POSTER}
            alt=""
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
        )}
      </motion.div>

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

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
        <div className="max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-3xl">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 backdrop-blur-sm text-accent text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Tact Freight — Cairo, Egypt
            </motion.div>

            {/* Headline with stagger */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.03] tracking-tight"
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
              <span className="text-white/88 text-4xl md:text-5xl lg:text-6xl font-medium">
                Delivered with Trust &amp; Precision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 text-lg md:text-xl text-white max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
            >
              Connecting Egypt to global markets with seamless, end-to-end
              logistics solutions across sea, air, and land.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4 max-w-md sm:max-w-none"
            >
              <Link
                to="/quote"
                className="group inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 backdrop-blur-sm"
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
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 max-w-2xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className={`px-8 py-6 text-center ${i < 3 ? "border-r border-white/10" : ""}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent tracking-tight">{stat.num}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
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
