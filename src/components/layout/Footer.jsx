import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Globe, Linkedin, Facebook } from "lucide-react";

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
  { label: "Request a Quote",     path: "/quote" },
  { label: "Contact Us",     path: "/contact" },
  { label: "Careers",        path: "/careers" },
];

const accreditationLogos = [
  {
    label: "IATA Accredited",
    src: "/company-logos/IATA/IATA_idhsFWZqbC_1.png",
    className: "h-9 sm:h-10",
  },
  {
    label: "FIATA Member",
    src: "/company-logos/FIATA_International_Federation_of_Freight_Forwarders_Associations/FIATA_International_Federation_of_Freight_Forwarders_Associations_idIlc3RIIl_0.png",
    className: "h-9 sm:h-10",
  },
  {
    label: "DF Alliance",
    src: "/company-logos/download-idBNWckQzW-1776908347387/Digital_Freight_Alliance/Digital_Freight_Alliance_idX1R5R1cM_3.jpeg",
    className: "h-9 sm:h-10",
  },
];

export default function Footer() {
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/tactfreight/", icon: Linkedin },
    { label: "Facebook", href: "https://www.facebook.com/share/1bieXqfQ9J/?mibextid=wwXIfr", icon: Facebook },
  ];

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

      {/* ── Main grid ─────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-accent/20 overflow-hidden p-1">
                <img src="/favicon.png" alt="Tact Freight logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Tact Freight</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-medium">
                  Global Freight Forwarding
                </div>
              </div>
            </Link>

            <p className="text-[15px] text-white/72 leading-relaxed mb-8 max-w-sm">
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
                  <span className="text-[14px] text-white/72 group-hover:text-white transition-colors leading-snug pt-0.5">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent/75 mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-[15px] text-white/72 hover:text-white transition-colors"
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
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent/75 mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerCompany.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-[15px] text-white/72 hover:text-white transition-colors"
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
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent/75 mb-5 flex items-center gap-2">
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
                  className="group flex items-center gap-2 text-[15px] text-white/72 hover:text-white transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors flex-shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>

            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent/75 mb-4 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Social
            </h4>
            <div className="flex flex-col gap-3 mb-8">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-white/80 transition-colors hover:border-accent/40 hover:bg-accent/15 hover:text-white"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-white group-hover:scale-105 transition-transform ${
                      label === "LinkedIn" ? "bg-[#0A66C2]" : "bg-[#1877F2]"
                    }`}
                  >
                    <Icon className="relative h-5 w-5" />
                  </span>
                  <span className="text-[15px] font-medium">{label}</span>
                </a>
              ))}
            </div>

            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent/75 mb-4 flex items-center gap-2">
              <span className="w-3 h-px bg-accent/40" />
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link to="/quote" className="flex items-center gap-2 text-[15px] text-white/72 hover:text-accent transition-colors group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                Request a Quote
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-[15px] text-white/72 hover:text-accent transition-colors group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/45">
            © {new Date().getFullYear()} Tact Freight. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {accreditationLogos.map((item) => (
              <span
                key={item.label}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-white px-3 shadow-sm"
                title={item.label}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className={`${item.className} max-w-[140px] object-contain`}
                  loading="lazy"
                />
              </span>
            ))}
            <span className="text-[12px] px-2.5 py-1 rounded-md border border-white/10 text-white/55 font-medium">
              Cairo, Egypt
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
