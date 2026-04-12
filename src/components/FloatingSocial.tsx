import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiChat, HiX } from 'react-icons/hi';
import { SOCIAL_LINKS } from '../utils/constants';

const socials = [
  { icon: FaInstagram, link: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'bg-gradient-to-r from-purple-600 to-pink-500' },
  { icon: FaFacebookF, link: SOCIAL_LINKS.facebook, label: 'Facebook', color: 'bg-[#1877F2]' },
  { icon: FaWhatsapp, link: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: 'bg-[#25D366]' },
];

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && socials.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.3, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.3, y: 20 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            className={`${social.color} text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group`}
            aria-label={social.label}
          >
            <social.icon size={22} />
            <span className="text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 whitespace-nowrap">
              {social.label}
            </span>
          </motion.a>
        ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className={`p-4 rounded-full shadow-xl transition-all duration-300 ${
          open
            ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800'
            : 'bg-sa-gold text-black hover:bg-yellow-400'
        }`}
        aria-label="Toggle social links"
      >
        {open ? <HiX size={24} /> : <HiChat size={24} />}
      </motion.button>
    </div>
  );
}
