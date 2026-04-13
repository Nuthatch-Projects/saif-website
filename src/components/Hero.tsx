import { motion } from 'framer-motion';
import tableMountain from '../assets/images/table-mountain.avif';
import freiburg from '../assets/images/freiburg.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Split background */}
      <div className="absolute inset-0 flex">
        {/* South Africa side — Table Mountain */}
        <div className="w-1/2 relative">
          <img
            src={tableMountain}
            alt="Table Mountain, Cape Town"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Black Forest side — Freiburg */}
        <div className="w-1/2 relative">
          <img
            src={freiburg}
            alt="Freiburg im Breisgau"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Center blend overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-accent text-2xl md:text-3xl text-sa-gold mb-4"
        >
          Welkom by SAiF
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6"
        >
          South Africans in Freiburg — Connect, Meet, and Feel
          <br />
          at{' '}
          <span className="text-gradient-sa bg-clip-text" style={{
            background: 'linear-gradient(90deg, #007749, #FFB81C, #DE3831)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Home
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join our community for braais, events, and everything lekker in the Black Forest
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#community"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sa-gold hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
          >
            Join 50+ South Africans in Freiburg
          </a>
          <a
            href="#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm border border-white/20 transition-all hover:scale-105"
          >
            Upcoming Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}
