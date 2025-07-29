import React from 'react';
import { FiStar } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { isRTL, t } = useLanguage();

  const testimonials = [
    {
      name: isRTL ? 'خان صاحب' : 'Khan Sahib',
      role: isRTL ? 'کمیونٹی ایلڈر' : 'Community Elder',
      text: isRTL ? 'یہ کمیونٹی ہماری ثقافت کو آگے بڑھانے میں اہم کردار ادا کر رہی ہے۔' : 'This community plays a vital role in advancing our culture.',
      rating: 5
    },
    {
      name: isRTL ? 'ملک صاحب' : 'Malik Sahib',
      role: isRTL ? 'بزنس لیڈر' : 'Business Leader',
      text: isRTL ? 'نوجوانوں کے لیے بہترین پلیٹ فارم ہے۔' : 'Excellent platform for young people.',
      rating: 5
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('communityVoices')}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-cultural">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-cultural text-lg font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;