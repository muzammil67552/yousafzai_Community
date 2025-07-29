import React, { useState } from 'react';
import { FiSearch, FiPlus, FiMinus, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Support = () => {
  const { isRTL, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: isRTL ? 'کمیونٹی میں کیسے شامل ہوں؟' : 'How can I join the community?',
      answer: isRTL 
        ? 'آپ ہماری ویب سائٹ پر "شامل ہوں" کے صفحے پر جا کر رجسٹریشن فارم بھر سکتے ہیں۔ آپ کو اپنی بنیادی معلومات اور رابطے کی تفصیلات فراہم کرنی ہوں گی۔'
        : 'You can join by visiting our "Join Us" page and filling out the registration form. You\'ll need to provide your basic information and contact details.'
    },
    {
      id: 2,
      question: isRTL ? 'رکنیت کے کیا فوائد ہیں؟' : 'What are the benefits of membership?',
      answer: isRTL 
        ? 'رکنیت کے فوائد میں کمیونٹی نیٹ ورک تک رسائی، ثقافتی تقاریب میں شرکت، کاروباری مواقع، تعلیمی مدد، اور خاندانی تاریخ کا ریکارڈ شامل ہے۔'
        : 'Membership benefits include access to community network, participation in cultural events, business opportunities, educational support, and family history documentation.'
    },
    {
      id: 3,
      question: isRTL ? 'کیا رکنیت کی کوئی فیس ہے؟' : 'Is there a membership fee?',
      answer: isRTL 
        ? 'بنیادی رکنیت مفت ہے۔ تاہم، کچھ خصوصی سہولات اور تقاریب کے لیے اختیاری فیس ہو سکتی ہے۔'
        : 'Basic membership is free. However, there may be optional fees for certain special services and events.'
    },
    {
      id: 4,
      question: isRTL ? 'کمیونٹی کی تقاریب کب ہوتی ہیں؟' : 'When do community events take place?',
      answer: isRTL 
        ? 'ہم سال بھر مختلف تقاریب منعقد کرتے ہیں۔ بڑی تقاریب عام طور پر اسلامی تہواروں اور ثقافتی مناسبتوں پر ہوتی ہیں۔'
        : 'We organize various events throughout the year. Major events usually take place during Islamic festivals and cultural occasions.'
    },
    {
      id: 5,
      question: isRTL ? 'اپنی خاندانی تاریخ کیسے حاصل کروں؟' : 'How can I access my family history?',
      answer: isRTL 
        ? 'رجسٹرڈ ممبرز ہمارے آرکائیوز تک رسائی حاصل کر سکتے ہیں۔ آپ ہم سے رابطہ کرکے اپنے خاندانی ریکارڈ کی درخواست کر سکتے ہیں۔'
        : 'Registered members can access our archives. You can contact us to request your family records.'
    },
    {
      id: 6,
      question: isRTL ? 'کیا میں بیرون ملک سے بھی شامل ہو سکتا ہوں؟' : 'Can I join from overseas?',
      answer: isRTL 
        ? 'جی ہاں، ہماری کمیونٹی عالمگیر ہے۔ دنیا بھر کے درز خیل یوسفزئی خاندان کے لوگ شامل ہو سکتے ہیں۔'
        : 'Yes, our community is global. People from Daraz Khail Yousafzai families worldwide can join.'
    },
    {
      id: 7,
      question: isRTL ? 'عطیات کیسے دیں؟' : 'How can I make donations?',
      answer: isRTL 
        ? 'آپ ہماری ویب سائٹ کے "عطیات" صفحے پر جا کر آن لائن عطیہ دے سکتے ہیں یا بینک ٹرانسفر کے ذریعے رقم بھیج سکتے ہیں۔'
        : 'You can make donations through our website\'s "Donations" page online or through bank transfer.'
    },
    {
      id: 8,
      question: isRTL ? 'کمیونٹی کا رابطہ نمبر کیا ہے؟' : 'What is the community contact number?',
      answer: isRTL 
        ? 'آپ ہم سے +92 XXX XXX XXXX پر رابطہ کر سکتے ہیں یا info@darazkhail.com پر ای میل بھیج سکتے ہیں۔'
        : 'You can reach us at +92 XXX XXX XXXX or email us at info@darazkhail.com.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const supportChannels = [
    {
      icon: FiMail,
      title: isRTL ? 'ای میل سپورٹ' : 'Email Support',
      description: isRTL ? '24 گھنٹے کے اندر جواب' : 'Response within 24 hours',
      contact: 'support@darazkhail.com',
      color: 'bg-blue-500'
    },
    {
      icon: FiPhone,
      title: isRTL ? 'فون سپورٹ' : 'Phone Support',
      description: isRTL ? 'فوری مدد کے لیے کال کریں' : 'Call for immediate assistance',
      contact: '+92 XXX XXX XXXX',
      color: 'bg-green-500'
    },
    {
      icon: FiMessageCircle,
      title: isRTL ? 'واٹس ایپ' : 'WhatsApp',
      description: isRTL ? 'فوری پیغام کے لیے' : 'For quick messaging',
      contact: '+92 XXX XXX XXXX',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('helpCenter')}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {t('howCanWeHelp')}
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'ہم سے رابطہ کریں' : 'Contact Us'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'متعدد طریقوں سے ہم سے رابطہ کر سکتے ہیں'
                : 'Multiple ways to get in touch with us'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-cultural text-xl font-semibold text-primary mb-2">
                  {channel.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {channel.description}
                </p>
                <a
                  href={channel.icon === FiMail ? `mailto:${channel.contact}` : `tel:${channel.contact}`}
                  className="inline-block px-6 py-2 bg-muted hover:bg-secondary text-foreground hover:text-secondary-foreground rounded-lg font-medium transition-all duration-300"
                >
                  {channel.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('frequentlyAsked')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {isRTL 
                  ? 'عام طور پر پوچھے جانے والے سوالات کے جوابات'
                  : 'Answers to commonly asked questions'
                }
              </p>

              {/* Search Box */}
              <div className="relative max-w-md mx-auto">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={isRTL ? 'سوال تلاش کریں...' : 'Search questions...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300 rounded-xl"
                  >
                    <h3 className="font-cultural text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {expandedFAQ === faq.id ? (
                        <FiMinus className="w-5 h-5 text-primary" />
                      ) : (
                        <FiPlus className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-cultural text-xl font-semibold text-primary mb-2">
                  {isRTL ? 'کوئی نتیجہ نہیں ملا' : 'No Results Found'}
                </h3>
                <p className="text-muted-foreground">
                  {isRTL 
                    ? 'مختلف کلیدی الفاظ استعمال کرکے دوبارہ تلاش کریں'
                    : 'Try searching with different keywords'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'مفید وسائل' : 'Helpful Resources'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'اضافی معلومات اور رہنمائی کے لیے'
                : 'Additional information and guidance'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📖',
                title: isRTL ? 'رکنیت کی رہنمائی' : 'Membership Guide',
                description: isRTL ? 'تفصیلی رکنیت کی معلومات' : 'Detailed membership information'
              },
              {
                icon: '🎯',
                title: isRTL ? 'کمیونٹی اہداف' : 'Community Goals',
                description: isRTL ? 'ہمارے مقاصد اور اہداف' : 'Our mission and objectives'
              },
              {
                icon: '📋',
                title: isRTL ? 'ضوابط اور قوانین' : 'Rules & Regulations',
                description: isRTL ? 'کمیونٹی کے اصول' : 'Community guidelines'
              },
              {
                icon: '💡',
                title: isRTL ? 'تجاویز' : 'Suggestions',
                description: isRTL ? 'بہتری کی تجاویز دیں' : 'Share improvement ideas'
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 text-center cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="font-cultural text-lg font-semibold text-primary mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-cultural">
              <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-6">
                {isRTL ? 'مزید مدد چاہیے؟' : 'Need More Help?'}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {isRTL 
                  ? 'اگر آپ کو اپنے سوال کا جواب نہیں ملا تو براہ کرم ہم سے رابطہ کریں'
                  : 'If you couldn\'t find the answer to your question, please contact us'
                }
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-cultural text-primary-foreground rounded-lg font-semibold shadow-heritage hover:shadow-cultural transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                {t('contactUs')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;