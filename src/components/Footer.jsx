import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { isRTL, t } = useLanguage();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'history', path: '/history' },
    { key: 'members', path: '/members' },
    { key: 'gallery', path: '/gallery' },
    { key: 'support', path: '/support' }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', color: 'hover:text-blue-500' },
    { icon: FaTwitter, href: '#', color: 'hover:text-sky-500' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-500' }
  ];

  return (
    <footer className={`bg-gradient-heritage border-t border-border ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-cultural rounded-lg flex items-center justify-center shadow-heritage">
                <span className="text-primary-foreground font-bold text-xl">DK</span>
              </div>
              <div>
                <h3 className="font-cultural text-lg font-bold text-primary">
                  Daraz Khail Yousafzai
                </h3>
                <p className="text-sm text-muted-foreground">Community</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('communityDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cultural text-lg font-semibold text-primary">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-cultural text-lg font-semibold text-primary">{t('contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <FaPhone className="w-4 h-4 text-primary" />
                <span>+92 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <FaEnvelope className="w-4 h-4 text-primary" />
                <span>info@darazkhail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <FaMapMarkerAlt className="w-4 h-4 text-primary mt-1" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-cultural text-lg font-semibold text-primary">{t('followUs')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-heritage hover:-translate-y-1 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="bg-card p-4 rounded-lg shadow-elegant">
              <p className="text-sm text-muted-foreground mb-2">Stay Connected</p>
              <p className="text-sm text-foreground">
                Join our community for updates and cultural events
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;