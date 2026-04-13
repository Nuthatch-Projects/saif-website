import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../utils/constants';

const platforms = [
  {
    name: 'WhatsApp Group',
    icon: FaWhatsapp,
    description: 'The heartbeat of our community. Get event updates, share tips, and stay connected.',
    buttonText: 'Join WhatsApp',
    link: SOCIAL_LINKS.whatsapp,
    colors: 'from-[#25D366]/10 to-[#128C7E]/10 dark:from-[#25D366]/20 dark:to-[#128C7E]/20 border-[#25D366]/30',
    iconColor: 'text-[#25D366]',
    buttonColor: 'bg-[#25D366] hover:bg-[#1fbd5a] text-white',
  },
  {
    name: 'Facebook Group',
    icon: FaFacebookF,
    description: 'Photos, discussions, and community updates. Join the conversation!',
    buttonText: 'Join Facebook Group',
    link: SOCIAL_LINKS.facebook,
    colors: 'from-[#1877F2]/10 to-[#0C5DC7]/10 dark:from-[#1877F2]/20 dark:to-[#0C5DC7]/20 border-[#1877F2]/30',
    iconColor: 'text-[#1877F2]',
    buttonColor: 'bg-[#1877F2] hover:bg-[#0C5DC7] text-white',
  },
  {
    name: 'Instagram Page',
    icon: FaInstagram,
    description: 'Our visual story — braais, hikes, and everything in between.',
    buttonText: 'Follow on Instagram',
    link: SOCIAL_LINKS.instagram,
    colors: 'from-purple-500/10 via-pink-500/10 to-orange-500/10 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-orange-500/20 border-pink-500/30',
    iconColor: 'text-pink-500',
    buttonColor: 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white',
  },
];

export default function CommunityHub() {
  return (
    <section
  id="community"
  className="scroll-mt-15 md:scroll-mt-25 py-20 md:py-28 bg-white dark:bg-dark-surface"
>
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
            Get Connected
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our community platforms and never miss a braai, hike, or jol again.
            It takes 10 seconds — just pick your platform!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative bg-gradient-to-br ${platform.colors} border rounded-3xl p-8 md:p-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${platform.iconColor} bg-white dark:bg-dark-card shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                <platform.icon size={32} />
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {platform.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {platform.description}
              </p>

              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${platform.buttonColor} font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-md w-full justify-center text-lg`}
              >
                <platform.icon size={22} />
                {platform.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
