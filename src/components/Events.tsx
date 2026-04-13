import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { FLAGSHIP_EVENTS, ADHOC_EVENTS, SOCIAL_LINKS } from '../utils/constants';
import { FaWhatsapp } from 'react-icons/fa';

export default function Events() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark-surface">
  <div id="events" className="relative -top-2 md:-top-8" />
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
            What's Happening
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From our legendary braais to Black Forest hikes — there's always something lekker going on.
          </p>
        </motion.div>

        {/* Flagship events */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {FLAGSHIP_EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative overflow-hidden rounded-3xl p-8 md:p-10 ${
                event.color === 'sa-gold'
                  ? 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-sa-gold/30'
                  : 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/40 dark:to-rose-950/30 border border-sa-red/30'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <span className="text-5xl md:text-6xl block mb-4">{event.icon}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {event.title}
              </h3>
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="inline-flex items-center gap-1.5">
                  <FaCalendarAlt className="text-sa-green" />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-sa-red" />
                  {event.location}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {event.description}
              </p>
              <button className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 ${
                event.color === 'sa-gold'
                  ? 'bg-sa-gold hover:bg-yellow-400 text-black'
                  : 'bg-sa-red hover:bg-red-600 text-white'
              }`}>
                Get Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Ad-hoc events */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
        >
          Regular Get-Togethers
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {ADHOC_EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-gray-50 dark:bg-dark-card rounded-2xl p-5 md:p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{event.icon}</span>
              <h4 className="font-heading font-semibold text-gray-900 dark:text-white text-sm md:text-base mb-1">
                {event.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Suggest event CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-sa-green/5 dark:bg-sa-green/10 rounded-2xl p-8 border border-sa-green/20"
        >
          <p className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Got an idea for an event?
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-5">
            Drop it in the WhatsApp group — we're always keen for something new!
          </p>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            <FaWhatsapp size={20} />
            Suggest an Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
