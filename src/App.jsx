import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
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
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Careers = lazy(() => import('./pages/Careers'));

function RouteFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center px-6">
      <div className="text-sm text-muted-foreground">Loading...</div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/sea-freight" element={<SeaFreight />} />
              <Route path="/services/air-freight" element={<AirFreight />} />
              <Route path="/services/inland-transport" element={<InlandTransport />} />
              <Route path="/services/customs-clearance" element={<CustomsClearance />} />
              <Route path="/services/warehousing" element={<WarehousingPage />} />
              <Route path="/services/project-logistics" element={<ProjectLogistics />} />
              <Route path="/services/roro" element={<RoRo />} />
              <Route path="/services/consultancy" element={<Consultancy />} />
              <Route path="/why-us" element={<WhyAndIndustries />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/careers" element={<Careers />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
