import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { NAV_LINKS, SOCIAL_LINKS } from '../utils/constants';
import saifLogo from '../assets/images/saif-logo.png';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* SA Flag stripe */}
      <div className="flag-gradient h-[3px] fixed top-0 left-0 right-0 z-[60]" />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center group">
              <img
                src={saifLogo}
                alt="SAiF — South Africans in Freiburg"
                className="h-10 md:h-14 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sa-green dark:hover:text-sa-gold transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={toggleDarkMode}
                className="p-2 ml-1 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <BsSunFill size={18} /> : <BsMoonStarsFill size={18} />}
              </button>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 bg-sa-gold hover:bg-yellow-500 text-black font-semibold text-sm px-4 py-2.5 rounded-full transition-all hover:scale-105 shadow-md"
              >
                <FaWhatsapp size={18} />
                Join Our WhatsApp
              </a>
            </div>

            {/* Mobile buttons */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <BsSunFill size={18} /> : <BsMoonStarsFill size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-white dark:bg-dark-bg pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-gray-800 dark:text-gray-200 py-3 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-sa-gold text-black font-bold py-4 rounded-full text-lg"
              >
                <FaWhatsapp size={22} />
                Join Our WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
