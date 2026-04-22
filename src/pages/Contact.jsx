import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from "lucide-react";

const HERO_IMG = "/service-images/contact_us.jpg";

const contactItems = [
  { icon: MapPin, label: "Address", value: "29 Ahmad Kassem Gouda St., Nasr City, Cairo 11371, Egypt", href: "https://maps.google.com/?q=29+Ahmad+Kassem+Gouda+St+Nasr+City+Cairo+Egypt" },
  { icon: Phone, label: "Phone", value: "(202) 4042643", href: "tel:20240426430" },
  { icon: Mail, label: "Email", value: "operation@tactfreight.com", href: "mailto:operation@tactfreight.com" },
  { icon: Globe, label: "Website", value: "www.tactfreight.com", href: "https://www.tactfreight.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (submitted && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us at operation@tactfreight.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with our team today." image={HERO_IMG} />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.35fr] gap-16">
            <div>
              <SectionHeading label="Get in Touch" title="We're Here to Help" centered={false} />
              <p className="text-base text-muted-foreground mb-8 max-w-md">
                Reach the Tact Freight team directly through the channel that works best for you, or send a message and we will respond within one business day.
              </p>
              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <motion.a key={item.label} href={item.href} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4 group rounded-2xl border border-border/50 bg-card/70 p-4 shadow-sm transition-colors hover:border-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35">
                    <motion.div whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent))" }} className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.label}</h4>
                      <p className="text-[15px] text-muted-foreground group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]" ref={formRef}>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Message Sent</h3>
                    <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>
                    {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="contact-full-name" className="block text-sm font-medium text-primary">Full Name *</label>
                          <Input id="contact-full-name" className="h-11" placeholder="Enter your full name" autoComplete="name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="contact-email" className="block text-sm font-medium text-primary">Email *</label>
                          <Input id="contact-email" className="h-11" placeholder="name@company.com" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="contact-phone" className="block text-sm font-medium text-primary">Phone</label>
                          <Input id="contact-phone" className="h-11" placeholder="Add a phone number" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="contact-company" className="block text-sm font-medium text-primary">Company</label>
                          <Input id="contact-company" className="h-11" placeholder="Company name" autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-message" className="block text-sm font-medium text-primary">Your Message *</label>
                        <Textarea id="contact-message" className="min-h-[140px]" placeholder="Tell us what you need help with" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                      </div>
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button type="submit" disabled={sending} className="bg-accent hover:bg-accent/90 text-white w-full py-6 text-base font-semibold">
                          <Send className="w-4 h-4 mr-2" />
                          {sending ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
