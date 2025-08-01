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
    <div className={`min-h-screen mt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pattern-hero bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-300 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-2 bg-white/10 border border-white/30 backdrop-blur-sm rounded-full mb-8 shadow-lg">
              <span className="text-white font-medium">
                {isRTL ? '🏛️ ثقافتی میراث کے محافظ' : '🏛️ Guardians of Cultural Heritage'}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {t('heroTitle')}
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-medium">
              {t('heroSubtitle')}
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>

            {/* CTA Buttons */}
            <div className="flex  gap-4 justify-center items-center md:p-10 p-6 ">
              <Link
                to="/join-us"
                className="  @apply md:px-6 md:py-3 px-4 py-2 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-300 ease-in-out px-4 py-4 space-x-2 group inline-flex items-center justify-center px-8 py-4 "
              >
                <span>{t('joinUs')}</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 " />
              </Link>

              <Link
                to="/contact"
                className="@apply md:px-6 md:py-3 px-4 py-2 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-300 ease-in-out px-4 py-4 space-x-2 group inline-flex items-center justify-center px-8 py-4  "
              >
                <span>{t('contactUs')}</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              {t('aboutCommunity')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {t('communityDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-green-200 via-green-300 to-green-400 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-md">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-br from-green-100 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {isRTL ? 'جلدی رسائی' : 'Quick Access'}
            </h2>
            <p className="text-lg text-gray-600">
              {isRTL
                ? 'ہماری کمیونٹی کے اہم حصوں تک فوری رسائی'
                : 'Fast access to important sections of our community'}
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-green-200 via-green-300 to-green-400 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t(item.key)}</h3>
                <div className="w-8 h-1 bg-white/50 rounded-full mx-auto group-hover:w-12 transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
