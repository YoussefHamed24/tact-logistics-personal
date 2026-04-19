import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown,
  Ship, Plane, Truck, FileCheck, Warehouse, Cog, CarFront, MessageSquare, ArrowRight } from
"lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceItems = [
{ icon: Ship, label: "Sea Freight", path: "/services/sea-freight", desc: "FCL, LCL & oversized cargo" },
{ icon: Plane, label: "Air Freight", path: "/services/air-freight", desc: "Express & consolidated air cargo" },
{ icon: Truck, label: "Inland Transport", path: "/services/inland-transport", desc: "Nationwide trucking & GPS tracking" },
{ icon: FileCheck, label: "Customs Clearance", path: "/services/customs-clearance", desc: "Expert compliance & fast clearance" },
{ icon: Warehouse, label: "Warehousing", path: "/services/warehousing", desc: "Bonded storage & distribution" },
{ icon: Cog, label: "Project Logistics", path: "/services/project-logistics", desc: "Heavy-lift & complex cargo" },
{ icon: CarFront, label: "RoRo Services", path: "/services/roro", desc: "Vehicles & rolling equipment" },
{ icon: MessageSquare, label: "Consultancy", path: "/services/consultancy", desc: "Trade advisory & optimization" }];


const navLinks = [
{ label: "Home", path: "/" },
{ label: "About", path: "/about" },
{ label: "Services", path: "/services", children: serviceItems },
{ label: "Why Us & Industries", path: "/why-us" },
{ label: "Partners & Clients", path: "/company" },
{ label: "Case Studies", path: "/case-studies" },
{ label: "Contact", path: "/contact" },
{ label: "Careers", path: "/careers" }];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ── Topbar ──────────────────────────────────────────────── */}
      















      

      {/* ── Main navbar ─────────────────────────────────────────── */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-card/98 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-border" :
      "bg-card border-b border-border"}`
      }>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src="/Tact Freight - Logo - Wide - 3.png"
              alt="Tact Freight"
              className="h-11 w-auto object-contain xl:h-12"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-0">
            {navLinks.map((link) =>
            link.children ?
            <div
              key={link.label}
              ref={servicesMenuRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setServicesOpen(false);
                }
              }}>
              
                  <button className={`flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 ${
              isActive("/services") ?
              "text-accent" :
              "text-muted-foreground hover:text-foreground"}`
              }
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((open) => !open)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setServicesOpen(false);
                  }}>
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen &&
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-2xl shadow-2xl shadow-black/20 border border-border/30 overflow-hidden z-50">
                  
                        <div className="bg-muted/50 px-5 py-3 border-b border-border/40 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Our Services</span>
                          <Link to="/services" className="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                            View all <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-border/20 p-3">
                          {link.children.map((child) =>
                    <Link
                      key={child.path}
                      to={child.path}
                      className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-accent/5 transition-colors group/item bg-white">
                      
                              <div className="w-8 h-8 rounded-lg bg-primary/5 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/10 group-hover/item:border-accent/20 transition-all mt-0.5">
                                <child.icon className="w-4 h-4 text-accent/70 group-hover/item:text-accent" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-foreground group-hover/item:text-accent transition-colors leading-tight">
                                  {child.label}
                                </div>
                                <div className="text-[11px] text-muted-foreground mt-0.5">{child.desc}</div>
                              </div>
                            </Link>
                    )}
                        </div>
                      </motion.div>
                }
                  </AnimatePresence>
                </div> :

            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3.5 py-2 text-[14px] font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 ${
              isActive(link.path) ?
              "text-accent" :
              "text-muted-foreground hover:text-foreground"}`
              }>
              
                  {link.label}
                  {isActive(link.path) &&
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
              }
                </Link>

            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/quote"
              className="hidden xl:inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all hover:shadow-lg hover:shadow-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35">
              
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="xl:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35"
              onClick={() => setMobileOpen(!mobileOpen)}>
              
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ─────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden overflow-hidden border-t border-border">
            
              <div className="bg-card px-4 py-4 space-y-0.5 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) =>
              <React.Fragment key={link.label}>
                    {link.children ?
                <>
                        <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35">
                    
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen &&
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden ml-3 border-l border-accent/30 pl-3">
                      
                              {link.children.map((child) =>
                      <Link
                        key={child.path}
                        to={child.path}
                        className="flex items-center gap-2.5 px-2 py-2 text-sm text-muted-foreground hover:text-accent rounded-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35">
                        
                                  <child.icon className="w-4 h-4 text-accent/60" />
                                  {child.label}
                                </Link>
                      )}
                            </motion.div>
                    }
                        </AnimatePresence>
                      </> :

                <Link
                  to={link.path}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 ${
                  isActive(link.path) ?
                  "text-accent bg-accent/10" :
                  "text-muted-foreground hover:text-foreground hover:bg-muted"}`
                  }>
                  
                        {link.label}
                      </Link>
                }
                  </React.Fragment>
              )}

                <div className="pt-3 mt-2 border-t border-border">
                  <Link
                  to="/quote"
                  className="flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35">
                  
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </nav>
    </>);

}
