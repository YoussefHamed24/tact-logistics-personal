import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import VideoShowcase from "../components/home/VideoShowcase";
import WhyChooseStrip from "../components/home/WhyChooseStrip";
import GlobalLanes from "../components/home/GlobalLanes";
import PartnersStrip from "../components/home/PartnersStrip";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <VideoShowcase />
      <GlobalLanes />
      <WhyChooseStrip />
      <PartnersStrip />
      <CTASection />
    </>
  );
}