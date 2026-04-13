import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS } from '../utils/constants';
import saifLogo from '../assets/images/saif-logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={saifLogo}
                alt="SAiF — South Africans in Freiburg"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              South Africans in Freiburg — a proudly South African community
              thriving in the heart of the Black Forest.
            </p>
            <div className="flex items-center gap-1 text-lg">
              <span role="img" aria-label="South African flag">&#x1F1FF;&#x1F1E6;</span>
              <span className="text-gray-600 mx-1">&hearts;</span>
              <span role="img" aria-label="German flag">&#x1F1E9;&#x1F1EA;</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-sa-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all"
                aria-label="Join our WhatsApp group"
              >
                <FaWhatsapp size={22} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-all"
                aria-label="Join our Facebook group"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-pink-500/20 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 text-pink-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </div>
            <p className="text-sm">
              Questions?{' '}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sa-gold hover:underline"
              >
                Reach out on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flag-gradient h-[2px] rounded-full mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} SAiF — South Africans in Freiburg
          </p>
          <p className="text-center md:text-right">
            Made with &#x2764;&#xFE0F; and braai smoke in Freiburg
          </p>
        </div>
      </div>
    </footer>
  );
}
