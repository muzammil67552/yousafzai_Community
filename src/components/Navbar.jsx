import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, isRTL, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { key: 'home', path: '/' },
    { key: 'history', path: '/history' },
    { key: 'members', path: '/members' },
    { key: 'joinUs', path: '/join-us' },
    { key: 'gallery', path: '/gallery' },
    { key: 'donations', path: '/donations' },
    { key: 'support', path: '/support' },
    { key: 'contactUs', path: '/contact' },

  ];

  const isActiveLink = (path) => location.pathname === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-l from-green-400 via-green-500 to-green-600 backdrop-blur-md border-b border-border shadow-lg ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-gradient-to-tr from-sky-900 via-sky-700 to-sky-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">DK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-2xl text-white group-hover:text-yellow-200 transition-colors duration-300">
                {language === 'en' ? 'Daraz Khail' : 'درز خیل'}
              </h1>
              <p className="text-sm text-sky-100">
                {language === 'en' ? 'Yousafzai Community' : 'یوسفزئی برادری'}
              </p>
            </div>
          </Link>

          {/* ✅ Desktop Nav */}
          <div className="hidden lg:flex md:flex  flex-1 justify-center items-center space-x-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  isActiveLink(link.path)
                    ? 'bg-white text-black shadow-md'
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Lang Toggle + Burger */}
          <div className="flex items-center space-x-4 border border-black/30 pl-4 rounded-full">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 shadow hover:shadow-lg"
              title={language === 'en' ? 'Switch to Urdu' : 'Switch to English'}
            >
              <FiGlobe className="w-4 h-4" />
              <span className="font-medium text-sm">
                {language === 'en' ? 'اردو' : 'EN'}
              </span>
            </button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-gradient-to-l from-green-400 via-green-500 to-green-600 border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full px-4 py-3 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 ${
                    isActiveLink(link.path)
                      ? 'bg-white text-sky-900 shadow-md'
                      : 'text-white hover:bg-white/10 hover:text-yellow-100'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
