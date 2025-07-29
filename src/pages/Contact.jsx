import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { isRTL, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isRTL ? 'آپ کا پیغام بھیج دیا گیا ہے!' : 'Your message has been sent!');
  };

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('contactUs')}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-cultural">
              <h2 className="font-cultural text-2xl font-bold text-primary mb-6">
                {isRTL ? 'پیغام بھیجیں' : 'Send Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-cultural text-primary-foreground rounded-lg font-semibold shadow-heritage hover:shadow-cultural transition-all duration-300"
                >
                  <FiSend className="w-5 h-5" />
                  <span>{t('submit')}</span>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-cultural rounded-lg flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{t('email')}</h3>
                    <p className="text-muted-foreground">info@darazkhail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-cultural rounded-lg flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{t('phone')}</h3>
                    <p className="text-muted-foreground">+92 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-cultural rounded-lg flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{t('address')}</h3>
                    <p className="text-muted-foreground">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;