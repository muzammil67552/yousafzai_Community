import React, { useState } from 'react';
import { FiHeart, FiUsers, FiBook, FiHome, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Donations = () => {
  const { isRTL, t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('general');

  const donationAmounts = [100, 500, 1000, 2500, 5000, 10000];

  const causes = [
    {
      id: 'general',
      icon: FiHeart,
      title: isRTL ? 'عمومی کمیونٹی فنڈ' : 'General Community Fund',
      description: isRTL ? 'کمیونٹی کی مجموعی بہتری کے لیے' : 'For overall community development',
      raised: 75000,
      goal: 100000,
    },
    {
      id: 'education',
      icon: FiBook,
      title: isRTL ? 'تعلیمی وظائف' : 'Educational Scholarships',
      description: isRTL ? 'ضرورت مند طلباء کے لیے وظائف' : 'Scholarships for needy students',
      raised: 45000,
      goal: 80000,
    },
    {
      id: 'welfare',
      icon: FiUsers,
      title: isRTL ? 'سماجی بہبود' : 'Social Welfare',
      description: isRTL ? 'ضرورت مند خاندانوں کی مدد' : 'Support for needy families',
      raised: 32000,
      goal: 60000,
    },
    {
      id: 'housing',
      icon: FiHome,
      title: isRTL ? 'رہائشی منصوبے' : 'Housing Projects',
      description: isRTL ? 'کم آمدن والے خاندانوں کے لیے گھر' : 'Homes for low-income families',
      raised: 20000,
      goal: 150000,
    },
  ];

  const recentDonations = [
    { name: isRTL ? 'خان صاحب' : 'Khan Sahib', amount: 5000, cause: isRTL ? 'تعلیم' : 'Education', date: '2024-01-15' },
    { name: isRTL ? 'ملک صاحب' : 'Malik Sahib', amount: 10000, cause: isRTL ? 'عمومی' : 'General', date: '2024-01-12' },
    { name: isRTL ? 'سردار صاحب' : 'Sardar Sahib', amount: 3000, cause: isRTL ? 'بہبود' : 'Welfare', date: '2024-01-10' },
    { name: isRTL ? 'میر صاحب' : 'Mir Sahib', amount: 7500, cause: isRTL ? 'رہائش' : 'Housing', date: '2024-01-08' },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (amount) {
      alert(
        isRTL
          ? `آپ کا ${amount} روپے کا عطیہ محفوظ کر لیا گیا ہے۔ شکریہ!`
          : `Your donation of Rs. ${amount} has been recorded. Thank you!`
      );
    } else {
      alert(isRTL ? 'براہ کرم رقم منتخب کریں' : 'Please select an amount');
    }
  };

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t('supportCommunity')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">{t('donationPurpose')}</p>
        </div>
      </section>

      {/* Causes */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'عطیہ کے شعبے' : 'Donation Causes'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL ? 'وہ شعبے جہاں آپ کی مدد کی ضرورت ہے' : 'Areas where your support is needed'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause) => {
              const percentage = (cause.raised / cause.goal) * 100;
              return (
                <div
                  key={cause.id}
                  className={`group p-6 bg-card rounded-xl border-2 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    selectedCause === cause.id ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedCause(cause.id)}
                >
                  <div className="w-16 h-16 bg-gradient-cultural rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cause.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-cultural text-lg font-semibold text-primary mb-2 text-center">{cause.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center">{cause.description}</p>
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{isRTL ? 'اکٹھا شدہ' : 'Raised'}</span>
                      <span>{isRTL ? 'ہدف' : 'Goal'}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-cultural h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-foreground mt-1">
                      <span>Rs. {cause.raised.toLocaleString()}</span>
                      <span>Rs. {cause.goal.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-center text-sm font-semibold text-accent">
                    {percentage.toFixed(1)}% {isRTL ? 'مکمل' : 'Complete'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
            {isRTL ? 'آپ کے عطیات کا اثر' : 'Impact of Your Donations'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 p-5">
            {isRTL ? 'دیکھیں کہ آپ کے عطیات کمیونٹی میں کیسے تبدیلی لا رہے ہیں' : 'See how your donations make a difference'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {[
              { icon: '🎓', number: '150+', label: isRTL ? 'وظائف یافتہ طلباء' : 'Students Scholarships' },
              { icon: '🏠', number: '25+', label: isRTL ? 'تعمیر شدہ گھر' : 'Houses Built' },
              { icon: '👨‍👩‍👧‍👦', number: '500+', label: isRTL ? 'مستفید خاندان' : 'Families Helped' },
              { icon: '💰', number: '2M+', label: isRTL ? 'کل عطیات' : 'Total Raised' },
            ].map((stat, i) => (
              <div
                key={i}
                className="group text-center p-6 bg-card rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="font-cultural text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/contact"
              className="md:px-6 md:py-3 px-4 py-3 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-300 ease-in-out inline-flex items-center justify-center space-x-2"
            >
              <span>{t('Donate Now')}</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
