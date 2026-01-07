// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import PosSolutions from './pages/PosSolutions';
import BillPayments from './pages/BillPayments';
import FinancialSoftware from './pages/FinancialSoftware';
import Contact from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pos" element={<PosSolutions />} />
          <Route path="/bill-payments" element={<BillPayments />} />
          <Route path="/financial-software" element={<FinancialSoftware />} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;