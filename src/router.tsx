import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import ServicesPage from './pages/service/services';
import WorkPage from './pages/work/work';
import CompanyPage from './pages/company/company';
import CaseStudyPage from './pages/case-study';
import ServiceDetail from './pages/service/servicedetail/Servicedetail';

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes 
        location={location} 
        key={location.pathname}
      >
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/work/:projectId" element={<CaseStudyPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </AnimatePresence>
  );
} 