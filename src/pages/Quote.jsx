import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle2 } from "lucide-react";

const HERO_IMG = "/service-images/sea-freight-strip.jpg";

const serviceOptions = [
  { value: "sea_freight", label: "Sea Freight" },
  { value: "air_freight", label: "Air Freight" },
  { value: "inland_transport", label: "Inland Transport" },
  { value: "customs_clearance", label: "Customs Clearance" },
  { value: "warehousing", label: "Warehousing & Distribution" },
  { value: "project_logistics", label: "Project Logistics" },
  { value: "roro", label: "RoRo Services" },
  { value: "consultancy", label: "Consultancy & Advisory" },
];

export default function Quote() {
  const [form, setForm] = useState({
    full_name: "", company: "", email: "", phone: "",
    service_type: "", origin: "", destination: "",
    cargo_description: "", message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [serviceError, setServiceError] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    if (submitted && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.service_type) {
      setServiceError(true);
      setError("Please select the service you need before submitting your quote request.");
      return;
    }
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, form_type: "quote" }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly at operation@tactfreight.com");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <>
        <PageHero title="Request a Quote" subtitle="Get a competitive quote tailored to your needs." image={HERO_IMG} />
        <section className="py-24 bg-background" ref={topRef}>
          <div className="max-w-xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-3">Quote Request Submitted</h2>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for your inquiry. Our team will review your request and get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Request a Quote" subtitle="Get a competitive quote tailored to your needs." image={HERO_IMG} />
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">Tell Us About Your Shipment</h3>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl">Fill in the details below and our team will provide a tailored quote with the most suitable transport option.</p>

            {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="quote-full-name" className="block text-sm font-medium text-primary">Full Name *</label>
                  <Input id="quote-full-name" className="h-11" placeholder="Enter your full name" autoComplete="name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-company" className="block text-sm font-medium text-primary">Company</label>
                  <Input id="quote-company" className="h-11" placeholder="Enter company name" autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="quote-email" className="block text-sm font-medium text-primary">Email *</label>
                  <Input id="quote-email" className="h-11" placeholder="name@company.com" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-primary">Phone</label>
                  <Input id="quote-phone" className="h-11" placeholder="Add a direct phone number" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="quote-service" className="block text-sm font-medium text-primary">Service Needed *</label>
                <Select
                  value={form.service_type}
                  onValueChange={(value) => {
                    setForm({ ...form, service_type: value });
                    setServiceError(false);
                    setError(null);
                  }}
                >
                  <SelectTrigger
                    id="quote-service"
                    aria-invalid={serviceError}
                    className={serviceError ? "border-red-300 ring-red-200" : ""}
                  >
                    <SelectValue placeholder="Select the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {serviceError && (
                  <p className="text-sm text-red-700">Please choose a service so the team can route your request correctly.</p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="quote-origin" className="block text-sm font-medium text-primary">Origin</label>
                  <Input id="quote-origin" className="h-11" placeholder="City, port, or airport of origin" value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-destination" className="block text-sm font-medium text-primary">Destination</label>
                  <Input id="quote-destination" className="h-11" placeholder="Destination city, port, or airport" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="quote-cargo" className="block text-sm font-medium text-primary">Cargo Description</label>
                <Textarea id="quote-cargo" className="min-h-[96px]" placeholder="Describe the cargo, volume, weight, or shipment type" rows={3} value={form.cargo_description} onChange={(e) => setForm({ ...form, cargo_description: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label htmlFor="quote-message" className="block text-sm font-medium text-primary">Additional Details</label>
                <Textarea id="quote-message" className="min-h-[96px]" placeholder="Add any timing, documentation, customs, or handling requirements" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <Button type="submit" disabled={sending} className="bg-accent hover:bg-accent/90 text-white w-full py-6 text-base font-semibold">
                <Send className="w-4 h-4 mr-2" />
                {sending ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
