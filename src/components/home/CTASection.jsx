import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

const POSTER = "/service-images/optimized/contact-us-cta.webp";

export default function CTASection() {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], isMobile || prefersReducedMotion ? [1, 1, 1] : [1.1, 1.05, 1.0]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={POSTER}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/34 via-slate-950/12 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/54 via-slate-950/20 to-white/10" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[460px] bg-white/16 rounded-full blur-[118px] pointer-events-none" />

      <div className="relative z-10 py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative px-6 py-10 md:px-12 md:py-14"
          >
            <div className="absolute inset-x-0 top-1/2 h-[24rem] -translate-y-1/2 rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78),rgba(255,255,255,0.46)_34%,rgba(255,255,255,0.12)_62%,rgba(255,255,255,0)_100%)] blur-2xl" />
            <div className="absolute inset-x-8 top-1/2 h-[18rem] -translate-y-1/2 rounded-[3rem] bg-white/10 backdrop-blur-[1px]" />
            <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-accent/30 bg-white/70 text-accent text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Request a Quote
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-slate-900">Ready to Move</span><br />
              <span className="text-accent">Your Cargo?</span>
            </h2>
            <p className="mt-6 text-lg text-slate-950 max-w-2xl mx-auto leading-relaxed">
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
                className="inline-flex items-center gap-2.5 border border-slate-900/12 hover:border-slate-900/20 bg-white/90 hover:bg-white text-slate-900 px-9 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
