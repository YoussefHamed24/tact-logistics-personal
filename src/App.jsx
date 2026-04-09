import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SeaFreight from './pages/services/SeaFreight';
import AirFreight from './pages/services/AirFreight';
import InlandTransport from './pages/services/InlandTransport';
import CustomsClearance from './pages/services/CustomsClearance';
import WarehousingPage from './pages/services/Warehousing';
import ProjectLogistics from './pages/services/ProjectLogistics';
import RoRo from './pages/services/RoRo';
import Consultancy from './pages/services/Consultancy';
import WhyAndIndustries from './pages/WhyAndIndustries';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
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
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
