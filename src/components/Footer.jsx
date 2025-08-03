import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { isRTL, t } = useLanguage();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'history', path: '/history' },
    { key: 'members', path: '/members' },
    { key: 'gallery', path: '/gallery' },
    { key: 'support', path: '/support' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', color: 'hover:text-blue-500' },
    { icon: FaTwitter, href: '#', color: 'hover:text-sky-500' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
  ];

  return (
    <footer className={`bg-gradient-to-b from-[#f0f4f8] to-[#dbe2ef] border-t border-border shadow-inner ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4CAF4F] to-[#2F855A] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">DK</span>
              </div>
              <div>
                <h3 className="font-cultural text-xl font-bold text-primary">Daraz Khail Yousafzai</h3>
                <p className="text-sm text-muted-foreground">Community</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              {t('communityDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cultural text-xl font-semibold text-primary mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block hover:translate-x-2"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-cultural text-xl font-semibold text-primary mb-4">
              {t('contactInfo')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <FaPhone className="w-5 h-5 text-primary" />
                <span>+92 3158517604</span>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <FaEnvelope className="w-5 h-5 text-primary" />
                <span>jansherkhan070@gmail.com</span>
              </div>
              <div className="flex items-start space-x-4 text-muted-foreground">
                <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h4 className="font-cultural text-xl font-semibold text-primary mb-4">
              {t('followUs')}
            </h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transform hover:scale-110 hover:shadow-xl transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="bg-white bg-opacity-90 backdrop-blur-md p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-sm text-muted-foreground mb-2 font-medium">
                {isRTL ? 'جڑے رہیے' : 'Stay Connected'}
              </p>
              <p className="text-sm text-foreground">
                {isRTL
                  ? 'اپ ڈیٹس اور ثقافتی تقریبات کے لیے ہماری کمیونٹی کا حصہ بنیں'
                  : 'Join our community for updates and cultural events'}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t('copyright')} 
            <br/>
            develope by {'Muhammad Muzammil'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
