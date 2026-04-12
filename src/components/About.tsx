import { motion } from 'framer-motion';
import { COMMUNITY_VALUES } from '../utils/constants';

const colorMap: Record<string, string> = {
  'sa-red': 'border-sa-red bg-sa-red/10 dark:bg-sa-red/20',
  'sa-green': 'border-sa-green bg-sa-green/10 dark:bg-sa-green/20',
  'sa-gold': 'border-sa-gold bg-sa-gold/10 dark:bg-sa-gold/20',
  'sa-blue': 'border-sa-blue bg-sa-blue/10 dark:bg-sa-blue/20',
  'forest': 'border-forest bg-forest/10 dark:bg-forest/20',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-warm-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section divider */}
        <div className="flag-gradient-smooth h-1 w-24 mx-auto rounded-full mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            SAiF is a community of South Africans who have made Freiburg and the Black Forest
            their home. Whether you've been here for decades or just arrived, you're one of us.
            We're bound by the spirit of <strong className="text-sa-green">Ubuntu</strong> —
            the belief that{' '}
            <em className="font-accent text-2xl text-sa-green">"I am because we are."</em>
          </p>
        </motion.div>

        {/* Value cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {COMMUNITY_VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={item}
              className={`group p-6 md:p-8 rounded-2xl border-l-4 ${
                colorMap[value.color] || ''
              } bg-white dark:bg-dark-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <span className="text-4xl md:text-5xl block mb-4 group-hover:scale-110 transition-transform">
                {value.emoji}
              </span>
              <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Ubuntu quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto text-center p-8 md:p-12 bg-white dark:bg-dark-card rounded-3xl shadow-lg"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-sa-green rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">"</span>
          </div>
          <p className="font-accent text-2xl md:text-3xl text-sa-green dark:text-sa-gold leading-relaxed mb-4">
            "Umuntu ngumuntu ngabantu"
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            A person is a person through other people — the essence of Ubuntu,
            and the heart of our community.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
