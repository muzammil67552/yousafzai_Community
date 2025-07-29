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
    { key: 'testimonials', path: '/testimonials' }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-elegant ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-cultural rounded-lg flex items-center justify-center shadow-heritage">
              <span className="text-primary-foreground font-bold text-lg">DK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-cultural text-xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
                {language === 'en' ? 'Daraz Khail' : 'درز خیل'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Yousafzai Community' : 'یوسفزئی برادری'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-muted hover:text-primary ${
                  isActiveLink(link.path)
                    ? 'bg-primary text-primary-foreground shadow-cultural'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted hover:bg-secondary transition-all duration-300 hover:shadow-heritage"
              title={language === 'en' ? 'Switch to Urdu' : 'Switch to English'}
            >
              <FiGlobe className="w-4 h-4" />
              <span className="font-medium text-sm">
                {language === 'en' ? 'اردو' : 'EN'}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg bg-muted hover:bg-secondary transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-cultural">
            <div className="px-4 py-4 space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActiveLink(link.path)
                      ? 'bg-primary text-primary-foreground shadow-cultural'
                      : 'text-foreground hover:bg-muted hover:text-primary'
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