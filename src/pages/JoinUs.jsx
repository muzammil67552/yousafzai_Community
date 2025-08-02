
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
     <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-100 flex items-center justify-center px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Welcome</h1>
        <p className="text-gray-600 mb-8">Click below to register using our form.</p>
        <button
          onClick={openForm}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
        >
          Register Now
        </button>
      </div>
    </div>


    </div>
  );
};

export default JoinUs;
