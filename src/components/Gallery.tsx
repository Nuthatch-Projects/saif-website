import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { GALLERY_ITEMS, SOCIAL_LINKS } from '../utils/constants';

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  // Masonry-style heights
  const heights = ['h-48', 'h-64', 'h-56', 'h-52', 'h-60', 'h-44', 'h-56', 'h-48'];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-warm-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flag-gradient-smooth h-1 w-24 mx-auto rounded-full mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Moments &amp; Memories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into the gees — from braais to hikes, rugby nights to festive jolling.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mb-12">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="mb-4 break-inside-avoid"
            >
              <button
                onClick={() => setSelected(i)}
                className={`w-full ${heights[i % heights.length]} ${item.color} rounded-2xl flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-xl relative overflow-hidden group`}
                aria-label={`View ${item.label}`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <span className="text-white/70 group-hover:text-white font-heading font-semibold text-sm md:text-base px-4 text-center transition-colors relative z-10">
                  [{item.label}]
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Instagram section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-orange-500/20 rounded-3xl p-8 md:p-12 border border-purple-200/30 dark:border-purple-800/30"
        >
          <FaInstagram className="text-4xl mx-auto mb-4 text-pink-500" />
          <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Follow us on Instagram for more moments
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
            Our visual story — braais, hikes, and everything in between.
          </p>

          {/* Placeholder Instagram grid */}
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto mb-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="aspect-square bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-600/30 dark:to-pink-600/30 rounded-xl flex items-center justify-center"
              >
                <span className="text-xs text-gray-400 dark:text-gray-500">[Post {n}]</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
            Instagram feed integration coming soon
          </p>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            <FaInstagram size={20} />
            Follow @saif_freiburg
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl h-96 md:h-[500px] ${GALLERY_ITEMS[selected].color} rounded-3xl flex items-center justify-center`}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close lightbox"
              >
                <HiX size={24} />
              </button>
              <span className="text-white/80 font-heading font-semibold text-lg md:text-xl">
                [{GALLERY_ITEMS[selected].label}]
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
