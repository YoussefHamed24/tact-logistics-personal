import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

const VIDEO_URL = "https://videos.pexels.com/video-files/3735869/3735869-uhd_2560_1440_25fps.mp4";
const POSTER = "https://images.unsplash.com/photo-1518493870346-7e73ecddd93b?w=1800&q=90";

export default function CTASection() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const showVideo = !isMobile && !prefersReducedMotion;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.0]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Parallax video */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {showVideo ? (
          <video
            autoPlay muted loop playsInline preload="metadata"
            poster={POSTER}
            className="w-full h-full object-cover"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        ) : (
          <img
            src={POSTER}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/78 via-white/68 to-red-100/52" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[460px] bg-accent/18 rounded-full blur-[118px] pointer-events-none" />

      <div className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-accent/25 bg-white/55 text-accent text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Request a Quote
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-slate-900">Ready to Move</span><br />
              <span className="text-accent">Your Cargo?</span>
            </h2>
            <p className="mt-6 text-lg text-slate-800 max-w-2xl mx-auto leading-relaxed">
              Tell us your route, cargo, and timing. We will come back with a clear, competitive freight quote and the right transport option for your shipment.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-white px-9 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 border border-slate-300 hover:border-slate-400 bg-white/70 hover:bg-white text-slate-800 px-9 py-4 rounded-xl font-semibold text-base transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
