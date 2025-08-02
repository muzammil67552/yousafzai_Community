import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const JoinUs = () => {
  const { isRTL, t } = useLanguage();

  // ✅ Updated working App Script Form URL
  const openForm = () => {
    window.open(
      'https://script.google.com/macros/s/AKfycbzcz9sFO1PuqW79oPCuSpo_k91p7EL0P6VRfXaPK36q_aRFepxZeB-_zl4O1bBZxWRynA/exec',
      '_blank'
    );
  };

  const membershipBenefits = [
    {
      icon: '🌐',
      title: isRTL ? 'عالمی نیٹ ورک' : 'Global Network',
      description: isRTL ? 'دنیا بھر کے اراکین سے رابطہ' : 'Connect with members worldwide',
    },
    {
      icon: '📚',
      title: isRTL ? 'تعلیمی مدد' : 'Educational Support',
      description: isRTL ? 'وظائف اور تعلیمی رہنمائی' : 'Scholarships and educational guidance',
    },
    {
      icon: '🎉',
      title: isRTL ? 'ثقافتی تقاریب' : 'Cultural Events',
      description: isRTL ? 'کمیونٹی کی تقاریب میں شرکت' : 'Participate in community events',
    },
    {
      icon: '💼',
      title: isRTL ? 'کاروباری مواقع' : 'Business Opportunities',
      description: isRTL ? 'تجارتی رابطے اور مواقع' : 'Business connections and opportunities',
    },
  ];

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('becomeAMember')}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {isRTL
                ? 'درز خیل یوسفزئی کمیونٹی میں شامل ہوں اور اپنی ثقافتی شناخت کو مضبوط بنائیں'
                : 'Join the Daraz Khail Yousafzai community and strengthen your cultural identity'}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('membershipBenefits')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL ? 'کمیونٹی کی رکنیت کے فوائد' : 'Benefits of community membership'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-cultural text-lg font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Button */}
      <div className="text-center py-20">
  <button
    onClick={openForm}
    className="
      px-8 py-4
      bg-gradient-to-br from-green-400 via-green-500 to-green-600 
      text-white 
      rounded-lg 
      shadow-lg 
      transition-all duration-300 ease-in-out 
      transform hover:scale-110
      hover:bg-white hover:text-green-600 hover:border hover:border-green-600
      inline-flex items-center justify-center space-x-2
    "
  >
    <span>{t('Registration')}</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </button>
</div>

    </div>
  );
};

export default JoinUs;
