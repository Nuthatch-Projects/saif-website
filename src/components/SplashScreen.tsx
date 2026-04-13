import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import saifLogo from '../assets/images/saif-logo.png';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'text' | 'exit'>('logo');

  useEffect(() => {
    // Phase 1: Logo fades in (handled by framer-motion on mount)
    // Phase 2: Text appears after logo settles
    const textTimer = setTimeout(() => setPhase('text'), 600);
    // Phase 3: Exit after showing everything
    const exitTimer = setTimeout(() => setPhase('exit'), 2200);
    // Phase 4: Notify parent to unmount splash
    const completeTimer = setTimeout(() => onComplete(), 2900);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-warm-bg dark:bg-dark-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* SA flag stripe at top */}
          <div className="absolute top-0 left-0 right-0 h-1 flag-gradient" />

          {/* Logo */}
          <motion.img
            src={saifLogo}
            alt="SAiF Logo"
            className="h-28 sm:h-36 md:h-44 w-auto drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Welcome text */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={phase === 'text' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ opacity: 0 }}
          >
            <p className="text-lg sm:text-xl font-heading font-semibold text-gray-800 dark:text-gray-200">
              Welcome to
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mt-1">
              <span className="text-sa-green">South Africans</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">in</span>{' '}
              <span className="text-sa-red">Freiburg</span>
            </h1>
          </motion.div>

          {/* Subtle loading bar */}
          <motion.div
            className="mt-8 h-1 rounded-full overflow-hidden w-48 bg-gray-200 dark:bg-gray-700"
            initial={{ opacity: 0 }}
            animate={phase === 'text' ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.3 }}
            style={{ opacity: 0 }}
          >
            <motion.div
              className="h-full rounded-full flag-gradient-smooth"
              initial={{ width: '0%' }}
              animate={phase === 'text' ? { width: '100%' } : {}}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* SA flag stripe at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 flag-gradient" />
        </motion.div>
      ) : (
        /* Exit animation - screen slides up and fades */
        <motion.div
          key="splash-exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-warm-bg dark:bg-dark-bg"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 flag-gradient" />
          <img
            src={saifLogo}
            alt="SAiF Logo"
            className="h-28 sm:h-36 md:h-44 w-auto drop-shadow-lg"
          />
          <div className="mt-6 text-center">
            <p className="text-lg sm:text-xl font-heading font-semibold text-gray-800 dark:text-gray-200">
              Welcome to
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mt-1">
              <span className="text-sa-green">South Africans</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">in</span>{' '}
              <span className="text-sa-red">Freiburg</span>
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 flag-gradient" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
