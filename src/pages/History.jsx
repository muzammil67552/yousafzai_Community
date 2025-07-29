import React from 'react';
import { FiClock, FiMapPin, FiUsers } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const History = () => {
  const { isRTL, t } = useLanguage();

  const timelineEvents = [
    {
      period: isRTL ? 'قدیم دور (۱۰۰۰-۱۵۰۰ء)' : 'Ancient Era (1000-1500 CE)',
      title: isRTL ? 'یوسفزئی قبیلے کا قیام' : 'Foundation of Yousafzai Tribe',
      description: isRTL ? 'یوسف نامی بزرگ سے یوسفزئی قبیلے کا آغاز اور پشتون قبائل میں شناخت' : 'The beginning of Yousafzai tribe from the elder Yousuf and establishment among Pashtun tribes',
      icon: FiMapPin
    },
    {
      period: isRTL ? 'وسطی دور (۱۵۰۰-۱۸۰۰ء)' : 'Medieval Period (1500-1800 CE)',
      title: isRTL ? 'درز خیل شاخ کا اظہار' : 'Emergence of Daraz Khail Branch',
      description: isRTL ? 'درز نامی بہادر سردار سے درز خیل کی الگ شناخت اور علاقائی اثر و رسوخ' : 'Distinct identity of Daraz Khail from the brave leader Daraz and regional influence',
      icon: FiUsers
    },
    {
      period: isRTL ? 'جدید دور (۱۸۰۰-موجودہ)' : 'Modern Era (1800-Present)',
      title: isRTL ? 'کمیونٹی کی تنظیم' : 'Community Organization',
      description: isRTL ? 'جدید تعلیم، ٹیکنالوجی اور منظم کمیونٹی کے ذریعے ترقی' : 'Progress through modern education, technology and organized community',
      icon: FiClock
    }
  ];

  const culturalAspects = [
    {
      title: isRTL ? 'پشتونولی' : 'Pashtunwali',
      description: isRTL ? 'عزت، مہمان نوازی اور انصاف کے اصول' : 'Principles of honor, hospitality and justice'
    },
    {
      title: isRTL ? 'قبائلی نظام' : 'Tribal System',
      description: isRTL ? 'روایتی قیادت اور اجتماعی فیصلے' : 'Traditional leadership and collective decisions'
    },
    {
      title: isRTL ? 'زبان و ثقافت' : 'Language & Culture',
      description: isRTL ? 'پشتو زبان اور ثقافتی روایات کا تحفظ' : 'Preservation of Pashto language and cultural traditions'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('historicalTimeline')}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {isRTL 
                ? 'درز خیل یوسفزئی قبیلے کی عظیم تاریخ اور ثقافتی میراث کا سفر'
                : 'Journey through the great history and cultural heritage of Daraz Khail Yousafzai tribe'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cultural"></div>

              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start space-x-8 pb-16 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-cultural rounded-full flex items-center justify-center shadow-heritage z-10">
                      <event.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-elegant hover:shadow-cultural transition-all duration-300">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm font-medium rounded-full">
                        {event.period}
                      </span>
                    </div>
                    <h3 className="font-cultural text-xl font-bold text-primary mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'ثقافتی ورثہ' : 'Cultural Heritage'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'وہ اقدار اور روایات جو ہماری شناخت بناتی ہیں'
                : 'The values and traditions that shape our identity'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalAspects.map((aspect, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-cultural text-xl font-semibold text-primary mb-3 text-center">
                  {aspect.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {aspect.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-cultural">
              <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                {isRTL ? 'تاریخی اہمیت' : 'Historical Significance'}
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  {isRTL 
                    ? 'درز خیل یوسفزئی قبیلہ پشتون قوم کی ایک عظیم شاخ ہے جس کی جڑیں صدیوں پرانی ہیں۔ یہ قبیلہ ہمیشہ سے اپنی بہادری، دیانتداری اور مہمان نوازی کے لیے مشہور رہا ہے۔'
                    : 'The Daraz Khail Yousafzai tribe is a great branch of the Pashtun nation with roots spanning centuries. This tribe has always been renowned for its bravery, honesty, and hospitality.'
                  }
                </p>
                
                <p className="text-lg leading-relaxed">
                  {isRTL 
                    ? 'آج کے دور میں، ہم اپنی قدیم روایات کو برقرار رکھتے ہوئے جدید تعلیم اور ترقی کے راستے پر گامزن ہیں۔ ہماری کمیونٹی دنیا بھر میں پھیلی ہوئی ہے لیکن ہمارے دل ہمیشہ اپنی جڑوں سے جڑے رہتے ہیں۔'
                    : 'In today\'s era, we are progressing on the path of modern education and development while maintaining our ancient traditions. Our community is spread across the world, but our hearts always remain connected to our roots.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;