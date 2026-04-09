import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle2 } from "lucide-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <PageHero title="Request a Quote" subtitle="Get a competitive quote tailored to your needs." />
        <section className="py-24 bg-background">
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
      <PageHero title="Request a Quote" subtitle="Get a competitive quote tailored to your needs." />
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border/50 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">Tell Us About Your Shipment</h3>
            <p className="text-muted-foreground mb-8">Fill in the details below and our team will provide a tailored quote.</p>

            {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name *" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} required />
                <Input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <Select value={form.service_type} onValueChange={(value) => setForm({ ...form, service_type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Service *" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Origin" value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} />
                <Input placeholder="Destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} />
              </div>
              <Textarea placeholder="Cargo Description" rows={3} value={form.cargo_description} onChange={(e) => setForm({ ...form, cargo_description: e.target.value })} />
              <Textarea placeholder="Additional Details or Requirements" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
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
