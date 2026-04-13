import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import CommunityHub from './components/CommunityHub';
import LekkerLinks from './components/LekkerLinks';
import SaffaPhrases from './components/SaffaPhrases';
import BraaiWeather from './components/BraaiWeather';
import FloatingSocial from './components/FloatingSocial';
import WorldCupBanner from './components/WorldCupBanner';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('saif-dark-mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('saif-dark-mode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />

      {/* Braai weather widget between hero and about */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-4">
        <BraaiWeather />
      </div>

      <About />
      <Events />
      <Gallery />
      <CommunityHub />
      <SaffaPhrases />
      <LekkerLinks />
      <Footer />
      <FloatingSocial />
      <WorldCupBanner />
    </div>
  );
}
