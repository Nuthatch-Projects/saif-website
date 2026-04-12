import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiExternalLink } from 'react-icons/hi';
import { LEKKER_LINKS } from '../utils/constants';

const categoryIcons: Record<string, string> = {
  'SA in Germany': '\u{1F1FF}\u{1F1E6}',
  'Freiburg & Black Forest': '\u{1F332}',
  'Community Resources': '\u{1F91D}',
};

const categoryColors: Record<string, string> = {
  'SA in Germany': 'border-sa-gold',
  'Freiburg & Black Forest': 'border-sa-green',
  'Community Resources': 'border-sa-blue',
};

export default function LekkerLinks() {
  const [openCategory, setOpenCategory] = useState<string | null>('SA in Germany');

  return (
    <section id="contact" className="py-20 md:py-28 bg-warm-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flag-gradient-smooth h-1 w-24 mx-auto rounded-full mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lekker Links
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Useful resources for South Africans living in Freiburg and the Black Forest region.
          </p>
        </motion.div>

        <div className="space-y-4">
          {Object.entries(LEKKER_LINKS).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-dark-card rounded-2xl border-l-4 ${categoryColors[category]} overflow-hidden shadow-sm`}
            >
              <button
                onClick={() => setOpenCategory(openCategory === category ? null : category)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 dark:hover:bg-dark-surface/50 transition-colors"
                aria-expanded={openCategory === category}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{categoryIcons[category]}</span>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                <HiChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    openCategory === category ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <AnimatePresence>
                {openCategory === category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-3">
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-gray-50 dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors group"
                        >
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white group-hover:text-sa-green dark:group-hover:text-sa-gold transition-colors">
                              {link.label}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {link.description}
                            </p>
                          </div>
                          <HiExternalLink className="text-gray-400 group-hover:text-sa-green dark:group-hover:text-sa-gold flex-shrink-0 ml-3" size={20} />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
