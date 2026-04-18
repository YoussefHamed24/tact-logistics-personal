import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Ship, Globe } from "lucide-react";

const footerServices = [
  { label: "Sea Freight",       path: "/services/sea-freight" },
  { label: "Air Freight",       path: "/services/air-freight" },
  { label: "Inland Transport",  path: "/services/inland-transport" },
  { label: "Customs Clearance", path: "/services/customs-clearance" },
  { label: "Warehousing",       path: "/services/warehousing" },
  { label: "Project Logistics", path: "/services/project-logistics" },
  { label: "RoRo Services",     path: "/services/roro" },
  { label: "Consultancy",       path: "/services/consultancy" },
];

const footerCompany = [
  { label: "About Us",       path: "/about" },
  { label: "Why Us & Industries", path: "/why-us" },
  { label: "Partners & Clients",  path: "/company" },
  { label: "Case Studies",        path: "/case-studies" },
  { label: "Request a Quote",     path: "/quote" },
  { label: "Contact Us",     path: "/contact" },
  { label: "Careers",        path: "/careers" },
];

const badges = ["IATA Accredited", "FIATA Member", "DP World Alliance", "Cairo, Egypt"];

export default function Footer() {
  return (
    <footer className="bg-[hsl(218,62%,8%)] text-white relative overflow-hidden">

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-accent/6 rounded-full blur-[150px] pointer-events-none" />

      {/* ── CTA Band ──────────────────────────────────────────── */}
      <div className="relative border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-accent/10 border border-accent/20 rounded-2xl px-8 py-7">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                <Ship className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ready to move your cargo?</h3>
                <p className="text-white/50 text-sm mt-0.5">Competitive quotes within 24 hours — sea, air, land & more.</p>
              </div>
            </div>
            <Link
              to="/quote"
              className="group flex-shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-xl hover:shadow-accent/40"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main grid ─────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center shadow-md shadow-accent/30">
                <span className="text-white font-extrabold text-sm">TF</span>
              </div>
              <div>
                <div className="text-base font-bold text-white">Tact Freight</div>
                <div className="text-[9px] uppercase tracking-[0.22em] text-white/35 font-medium">
                  Global Freight Forwarding
                </div>
              </div>
            </Link>

            <p className="text-[13px] text-white/45 leading-relaxed mb-8 max-w-xs">
              A reputation-driven freight forwarder headquartered in Cairo, Egypt — connecting businesses to global markets with reliability, transparency, and speed.
            </p>

            <div className="space-y-3.5">
              {[
                { icon: MapPin, text: "29 Ahmad Kassem Gouda St., Nasr City, Cairo", href: "https://maps.google.com" },
                { icon: Phone, text: "(202) 4042643", href: "tel:20240426430" },
                { icon: Mail,  text: "operation@tactfreight.com", href: "mailto:operation@tactfreight.com" },
                { icon: Globe, text: "www.tactfreight.com", href: "https://www.tactfreight.com" },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-accent/20 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-[12px] text-white/45 group-hover:text-white/70 transition-colors leading-snug pt-0.5">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent/60 mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-[13px] text-white/45 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent/60 mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerCompany.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-[13px] text-white/45 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent/60 mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Contact Channels
            </h4>
            <div className="space-y-2.5 mb-8">
              {[
                { label: "Email Us", href: "mailto:operation@tactfreight.com" },
                { label: "Call Our Team", href: "tel:20240426430" },
                { label: "Visit Website", href: "https://www.tactfreight.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-[13px] text-white/45 hover:text-white transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors flex-shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>

            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent/60 mb-4 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link to="/quote" className="flex items-center gap-2 text-[13px] text-white/45 hover:text-accent transition-colors group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                Request a Quote
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-[13px] text-white/45 hover:text-accent transition-colors group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} Tact Freight. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="text-[10px] px-2.5 py-1 rounded-md border border-white/8 text-white/25 font-medium"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
