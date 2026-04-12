import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SA_PHRASES } from '../utils/constants';

export default function SaffaPhrases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const nextPhrase = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SA_PHRASES.length);
  }, []);

  const toggleFlip = useCallback((index: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  const current = SA_PHRASES[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flag-gradient-smooth h-1 w-24 mx-auto rounded-full mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Praat Soos 'n Saffa
          </h2>
          <p className="font-accent text-xl text-sa-gold">Talk Like a South African</p>
        </motion.div>

        {/* Featured word spinner */}
        <div className="max-w-md mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-sa-green/10 to-sa-gold/10 dark:from-sa-green/20 dark:to-sa-gold/20 border border-sa-green/20 rounded-3xl p-8 md:p-10 text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-extrabold text-sa-green dark:text-sa-gold mb-3">
                {current.phrase}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                {current.translation}
              </p>
              <p className="font-accent text-lg text-gray-500 dark:text-gray-400">
                {current.example}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextPhrase}
            className="mt-6 w-full bg-sa-green hover:bg-green-700 text-white font-semibold py-4 rounded-full transition-all hover:scale-105 text-lg"
          >
            Learn Another Word
          </button>
        </div>

        {/* Flip card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {SA_PHRASES.map((phrase, i) => (
            <motion.button
              key={phrase.phrase}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              onClick={() => toggleFlip(i)}
              className={`relative h-28 md:h-32 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                flipped.has(i)
                  ? 'bg-sa-green dark:bg-sa-green/80 shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-card hover:shadow-md border border-gray-200 dark:border-gray-700'
              }`}
              aria-label={`${phrase.phrase}: ${phrase.translation}`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-3">
                {flipped.has(i) ? (
                  <div className="text-center">
                    <p className="text-white font-bold text-sm mb-1">{phrase.phrase}</p>
                    <p className="text-white/80 text-xs leading-tight">{phrase.translation}</p>
                  </div>
                ) : (
                  <p className="font-heading font-bold text-lg md:text-xl text-gray-800 dark:text-white">
                    {phrase.phrase}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Tap any word to see its meaning!
        </p>
      </div>
    </section>
  );
}
