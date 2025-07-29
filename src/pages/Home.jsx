import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiUsers, FiHeart, FiStar } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { isRTL, t } = useLanguage();

  const features = [
    {
      icon: FiUsers,
      title: isRTL ? 'مضبوط برادری' : 'Strong Community',
      description: isRTL ? 'ہزاروں کنبوں کا اتحاد' : 'Unity of thousands of families'
    },
    {
      icon: FiHeart,
      title: isRTL ? 'ثقافتی میراث' : 'Cultural Heritage',
      description: isRTL ? 'صدیوں پرانی روایات' : 'Centuries-old traditions'
    },
    {
      icon: FiStar,
      title: isRTL ? 'فخریہ تاریخ' : 'Proud History',
      description: isRTL ? 'بہادری اور عزت کی کہانیاں' : 'Stories of courage and honor'
    }
  ];

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pattern-hero bg-gradient-hero overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary-light rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full mb-8">
              <span className="text-secondary-foreground font-medium">
                {isRTL ? '🏛️ ثقافتی میراث کے محافظ' : '🏛️ Guardians of Cultural Heritage'}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-cultural text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-medium">
              {t('heroSubtitle')}
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/join-us"
                className="group px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold shadow-heritage hover:shadow-cultural transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center space-x-2"
              >
                <span>{t('joinUs')}</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center space-x-2"
              >
                <span>{t('contactUs')}</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Community Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-8">
              {t('aboutCommunity')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {t('communityDescription')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-cultural rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-cultural text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'جلدی رسائی' : 'Quick Access'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isRTL ? 'ہماری کمیونٹی کے اہم حصوں تک فوری رسائی' : 'Fast access to important sections of our community'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { key: 'history', path: '/history', icon: '📜' },
              { key: 'members', path: '/members', icon: '👥' },
              { key: 'gallery', path: '/gallery', icon: '🖼️' },
              { key: 'donations', path: '/donations', icon: '💰' }
            ].map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="group p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2">{t(item.key)}</h3>
                <div className="w-8 h-1 bg-gradient-cultural rounded-full mx-auto group-hover:w-12 transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;