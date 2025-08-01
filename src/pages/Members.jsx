import React from 'react';
import { FiUsers, FiMapPin, FiAward, FiTrendingUp } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Members = () => {
  const { isRTL, t } = useLanguage();

  const stats = [
    {
      icon: FiUsers,
      number: '2,500+',
      label: isRTL ? 'رجسٹرڈ اراکین' : 'Registered Members'
    },
    {
      icon: FiMapPin,
      number: '25+',
      label: isRTL ? 'ممالک' : 'Countries'
    },
    {
      icon: FiAward,
      number: '150+',
      label: isRTL ? 'خاندانی گروپس' : 'Family Groups'
    },
    {
      icon: FiTrendingUp,
      number: '95%',
      label: isRTL ? 'فعال اراکین' : 'Active Members'
    }
  ];

  const membershipBenefits = [
    {
      title: isRTL ? 'کمیونٹی نیٹ ورک' : 'Community Network',
      description: isRTL ? 'دنیا بھر کے اراکین سے رابطہ' : 'Connect with members worldwide',
      icon: '🌐'
    },
    {
      title: isRTL ? 'ثقافتی تقاریب' : 'Cultural Events',
      description: isRTL ? 'روایتی تہواروں میں شرکت' : 'Participate in traditional celebrations',
      icon: '🎉'
    },
    {
      title: isRTL ? 'کاروباری مواقع' : 'Business Opportunities',
      description: isRTL ? 'تجارتی رابطے اور مواقع' : 'Business connections and opportunities',
      icon: '💼'
    },
    {
      title: isRTL ? 'تعلیمی مدد' : 'Educational Support',
      description: isRTL ? 'تعلیمی وظائف اور رہنمائی' : 'Scholarships and guidance',
      icon: '📚'
    },
    {
      title: isRTL ? 'سماجی خدمات' : 'Social Services',
      description: isRTL ? 'کمیونٹی کی بہتری کے منصوبے' : 'Community welfare projects',
      icon: '🤝'
    },
    {
      title: isRTL ? 'تاریخی محفوظات' : 'Historical Archives',
      description: isRTL ? 'خاندانی تاریخ کا ریکارڈ' : 'Family history documentation',
      icon: '📜'
    }
  ];

  const familyGroups = [
    { name: isRTL ? 'کھان خیل' : 'Khan Khel', members: 245, location: isRTL ? 'پشاور' : 'Peshawar' },
    { name: isRTL ? 'ملک خیل' : 'Malik Khel', members: 198, location: isRTL ? 'اسلام آباد' : 'Islamabad' },
    { name: isRTL ? 'سردار خیل' : 'Sardar Khel', members: 176, location: isRTL ? 'کراچی' : 'Karachi' },
    { name: isRTL ? 'میر خیل' : 'Mir Khel', members: 134, location: isRTL ? 'لاہور' : 'Lahore' },
    { name: isRTL ? 'نور خیل' : 'Noor Khel', members: 89, location: isRTL ? 'کوئٹہ' : 'Quetta' },
    { name: isRTL ? 'احمد خیل' : 'Ahmad Khel', members: 67, location: isRTL ? 'فیصل آباد' : 'Faisalabad' }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('registeredMembers')}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {isRTL 
                ? 'ہماری عالمی کمیونٹی کے اراکین اور خاندانی گروپس'
                : 'Members and family groups of our global community'}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative text-center p-6 bg-card rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-md text-2xl transition-transform duration-500 group-hover:scale-110">
                  <stat.icon className="w-8 h-8" />
                </div>

                <div className="font-cultural text-3xl font-bold text-primary mb-2 relative z-10">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium relative z-10">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Groups Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('familyGroups')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'مختلف شہروں میں منظم خاندانی گروپس'
                : 'Organized family groups across different cities'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyGroups.map((group, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="font-cultural text-xl font-semibold text-primary">
                    {group.name}
                  </h3>
                  <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{isRTL ? 'اراکین:' : 'Members:'}</span>
                    <span className="font-semibold text-foreground">{group.members}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{isRTL ? 'مقام:' : 'Location:'}</span>
                    <span className="font-semibold text-foreground">{group.location}</span>
                  </div>
                </div>
                <div className="mt-4 w-full bg-muted rounded-full h-2 relative z-10">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ width: `${Math.min((group.members / 250) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('membershipBenefits')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'کمیونٹی کی رکنیت کے فوائد اور مراعات'
                : 'Benefits and privileges of community membership'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="text-4xl mb-4 relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="font-cultural text-xl font-semibold text-primary mb-3 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-cultural">
              <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-6">
                {isRTL ? 'ہماری کمیونٹی میں شامل ہوں' : 'Join Our Community'}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {isRTL 
                  ? 'اپنی ثقافتی شناخت کو برقرار رکھیں اور عالمی کمیونٹی کا حصہ بنیں'
                  : 'Preserve your cultural identity and become part of our global community'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join-us"
                  className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  {t('becomeAMember')}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-muted text-foreground border border-border rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  {t('contactUs')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
