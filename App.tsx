import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import MagnetLines from './components/MagnetLines';
import Lightning from './components/Lightning';
import Spotlight from './components/Spotlight';

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-black text-white">
      {/* Global Background Effects */}
      <Spotlight />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <AnimatedBackground />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <MagnetLines
            rows={12}
            columns={12}
            containerSize="100vmin"
            lineColor="rgba(99, 102, 241, 0.2)"
            lineWidth="2px"
            lineHeight="40px"
            baseAngle={-10}
          />
        </div>
        <div className="absolute inset-0 opacity-30">
          <Lightning hue={200} xOffset={0} speed={0.8} intensity={0.6} size={1.2} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-16 relative z-10 transition-all duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
