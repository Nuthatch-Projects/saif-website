import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const ZA = '\u{1F1FF}\u{1F1E6}';
const MX = '\u{1F1F2}\u{1F1FD}';
const CZ = '\u{1F1E8}\u{1F1FF}';
const KR = '\u{1F1F0}\u{1F1F7}';

const GROUP_MATCHES = [
  {
    label: 'OPENING MATCH',
    date: 'Thursday, 11 June 2026',
    time: '21:00 CET',
    fixture: `${MX} Mexico vs South Africa ${ZA}`,
    venue: 'Estadio Azteca, Mexico City',
    highlight: true,
  },
  {
    label: 'Match 2',
    date: 'Thursday, 18 June 2026',
    time: '18:00 CET',
    fixture: `${CZ} Czechia vs South Africa ${ZA}`,
    venue: 'Mercedes-Benz Stadium, Atlanta',
    highlight: false,
  },
  {
    label: 'Match 3',
    date: 'Wednesday, 24 June 2026',
    time: '03:00 CET',
    fixture: `${ZA} South Africa vs Korea Republic ${KR}`,
    venue: 'Estadio BBVA, Monterrey',
    highlight: false,
  },
];

export default function WorldCupBanner() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* Floating banner trigger */}
      {!open && (
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, type: 'spring', stiffness: 100 }}
          onClick={() => setOpen(true)}
          className="fixed left-0 top-1/3 z-50 bg-gradient-to-r from-sa-green to-sa-gold text-black font-bold px-4 py-3 rounded-r-2xl shadow-xl hover:scale-105 transition-transform flex items-center gap-2 text-sm cursor-pointer"
          aria-label="View World Cup info"
        >
          <span className="text-xl">{'\u{26BD}'}</span>
          <span className="hidden sm:inline">Bafana Bafana at the World Cup!</span>
          <span className="sm:hidden">WC 2026</span>
        </motion.button>
      )}

      {/* Modal pop-up */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white dark:bg-dark-card rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-sa-green via-sa-gold to-sa-green p-6 text-center relative">
                <button
                  onClick={() => { setOpen(false); setDismissed(true); }}
                  className="absolute top-3 right-3 bg-black/20 text-white p-1.5 rounded-full hover:bg-black/40 transition-colors cursor-pointer"
                  aria-label="Dismiss"
                >
                  <HiX size={18} />
                </button>
                <div className="text-4xl mb-2">{ZA}</div>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-1">
                  Bafana Bafana
                </h2>
                <p className="font-heading text-sm font-semibold text-white/90">
                  FIFA World Cup 2026 — Group A
                </p>
                <p className="text-xs text-white/70 mt-1">
                  USA / Canada / Mexico
                </p>
              </div>

              {/* Group opponents */}
              <div className="px-6 pt-6">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="text-center">
                    <span className="text-2xl">{ZA}</span>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">South Africa</p>
                  </div>
                  <span className="text-gray-400 text-xs">vs</span>
                  <div className="text-center">
                    <span className="text-2xl">{MX}</span>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">Mexico</p>
                  </div>
                  <span className="text-gray-400 text-xs">vs</span>
                  <div className="text-center">
                    <span className="text-2xl">{CZ}</span>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">Czechia</p>
                  </div>
                  <span className="text-gray-400 text-xs">vs</span>
                  <div className="text-center">
                    <span className="text-2xl">{KR}</span>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">Korea Republic</p>
                  </div>
                </div>
              </div>

              {/* Matches */}
              <div className="px-6 space-y-3 mb-6">
                {GROUP_MATCHES.map((match) => (
                  <div
                    key={match.label}
                    className={`rounded-2xl p-4 border ${
                      match.highlight
                        ? 'bg-sa-gold/10 dark:bg-sa-gold/20 border-sa-gold/30'
                        : 'bg-gray-50 dark:bg-dark-surface border-gray-100 dark:border-gray-800'
                    }`}
                  >
                    {match.highlight && (
                      <span className="inline-block bg-sa-gold text-black text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                        TOURNAMENT OPENER
                      </span>
                    )}
                    <p className="font-heading font-bold text-gray-900 dark:text-white text-sm">
                      {match.fixture}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {match.date} — {match.time}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                      {match.venue}
                    </p>
                  </div>
                ))}
              </div>

              {/* Watch location */}
              <div className="mx-6 mb-6 bg-gradient-to-r from-sa-green/10 to-sa-gold/10 dark:from-sa-green/20 dark:to-sa-gold/20 border border-sa-green/20 rounded-2xl p-5 text-center">
                <p className="text-2xl mb-2">{'\u{1F37B}'}</p>
                <p className="font-heading font-bold text-gray-900 dark:text-white text-lg mb-1">
                  Watch with us!
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  We'll be watching all Bafana Bafana games together at
                </p>
                <p className="font-heading font-bold text-sa-green dark:text-sa-gold text-lg">
                  O'Kelly's Irish Pub, Freiburg
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Join the WhatsApp group for exact times and meetup details!
                </p>
              </div>

              {/* Footer CTA */}
              <div className="px-6 pb-6 flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 font-semibold py-3 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-dark-bg transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="https://chat.whatsapp.com/FToaUJiXJr8LUzxdXMi2yw?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-sa-green hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm text-center transition-colors"
                >
                  Join WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
