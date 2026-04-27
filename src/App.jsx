import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const PageNotFound = lazy(() => import('./lib/PageNotFound'));

import Layout from './components/layout/Layout';

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const SeaFreight = lazy(() => import('./pages/services/SeaFreight'));
const AirFreight = lazy(() => import('./pages/services/AirFreight'));
const InlandTransport = lazy(() => import('./pages/services/InlandTransport'));
const CustomsClearance = lazy(() => import('./pages/services/CustomsClearance'));
const WarehousingPage = lazy(() => import('./pages/services/Warehousing'));
const ProjectLogistics = lazy(() => import('./pages/services/ProjectLogistics'));
const RoRo = lazy(() => import('./pages/services/RoRo'));
const Consultancy = lazy(() => import('./pages/services/Consultancy'));
const WhyAndIndustries = lazy(() => import('./pages/WhyAndIndustries'));
const Company = lazy(() => import('./pages/Company'));
const Contact = lazy(() => import('./pages/Contact'));
const Quote = lazy(() => import('./pages/Quote'));
const Careers = lazy(() => import('./pages/Careers'));

function DeferredPage({ children }) {
  return (
    <Suspense fallback={<div className="min-h-[40vh] bg-background" />}>
      {children}
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<DeferredPage><About /></DeferredPage>} />
            <Route path="/services" element={<DeferredPage><Services /></DeferredPage>} />
            <Route path="/services/sea-freight" element={<DeferredPage><SeaFreight /></DeferredPage>} />
            <Route path="/services/air-freight" element={<DeferredPage><AirFreight /></DeferredPage>} />
            <Route path="/services/inland-transport" element={<DeferredPage><InlandTransport /></DeferredPage>} />
            <Route path="/services/customs-clearance" element={<DeferredPage><CustomsClearance /></DeferredPage>} />
            <Route path="/services/warehousing" element={<DeferredPage><WarehousingPage /></DeferredPage>} />
            <Route path="/services/project-logistics" element={<DeferredPage><ProjectLogistics /></DeferredPage>} />
            <Route path="/services/roro" element={<DeferredPage><RoRo /></DeferredPage>} />
            <Route path="/services/consultancy" element={<DeferredPage><Consultancy /></DeferredPage>} />
            <Route path="/why-us" element={<DeferredPage><WhyAndIndustries /></DeferredPage>} />
            <Route path="/company" element={<DeferredPage><Company /></DeferredPage>} />
            <Route path="/contact" element={<DeferredPage><Contact /></DeferredPage>} />
            <Route path="/quote" element={<DeferredPage><Quote /></DeferredPage>} />
            <Route path="/careers" element={<DeferredPage><Careers /></DeferredPage>} />
          </Route>
          <Route path="*" element={<DeferredPage><PageNotFound /></DeferredPage>} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
