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
<div className="text-center bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md mx-auto mt-10 mb-20">
  <h1 className="text-3xl font-bold text-green-700 mb-4">خوش آمدید</h1>
  <p className="text-gray-700 mb-8 text-lg">
    نیچے دیے گئے بٹن پر کلک کریں اور فارم کے ذریعے رجسٹریشن کریں۔
  </p>

  <button
    onClick={openForm}
    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-white hover:to-white hover:text-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:scale-105 inline-block"
  >
    ابھی رجسٹر کریں
  </button>

  <p className="text-gray-700 mb-8 text-lg mt-10">یا</p>

  {/* ✅ Working download link */}
  <a
    href="/form.jpg"
    download="DarazKhailYousafzai_Form.jpg"
    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-white hover:to-white hover:text-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:scale-105 inline-block"
  >
    فارم ڈاؤن لوڈ کریں
  </a>
</div>



    </div>
  );
};

export default JoinUs;
