import React, { useState } from 'react';
import { FiHeart, FiUsers, FiBook, FiHome, FiCheck, FiCreditCard } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

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
      goal: 100000
    },
    {
      id: 'education',
      icon: FiBook,
      title: isRTL ? 'تعلیمی وظائف' : 'Educational Scholarships',
      description: isRTL ? 'ضرورت مند طلباء کے لیے وظائف' : 'Scholarships for needy students',
      raised: 45000,
      goal: 80000
    },
    {
      id: 'welfare',
      icon: FiUsers,
      title: isRTL ? 'سماجی بہبود' : 'Social Welfare',
      description: isRTL ? 'ضرورت مند خاندانوں کی مدد' : 'Support for needy families',
      raised: 32000,
      goal: 60000
    },
    {
      id: 'housing',
      icon: FiHome,
      title: isRTL ? 'رہائشی منصوبے' : 'Housing Projects',
      description: isRTL ? 'کم آمدن والے خاندانوں کے لیے گھر' : 'Homes for low-income families',
      raised: 20000,
      goal: 150000
    }
  ];

  const recentDonations = [
    { name: isRTL ? 'خان صاحب' : 'Khan Sahib', amount: 5000, cause: isRTL ? 'تعلیم' : 'Education', date: '2024-01-15' },
    { name: isRTL ? 'ملک صاحب' : 'Malik Sahib', amount: 10000, cause: isRTL ? 'عمومی' : 'General', date: '2024-01-12' },
    { name: isRTL ? 'سردار صاحب' : 'Sardar Sahib', amount: 3000, cause: isRTL ? 'بہبود' : 'Welfare', date: '2024-01-10' },
    { name: isRTL ? 'میر صاحب' : 'Mir Sahib', amount: 7500, cause: isRTL ? 'رہائش' : 'Housing', date: '2024-01-08' }
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
      alert(isRTL 
        ? `آپ کا ${amount} روپے کا عطیہ محفوظ کر لیا گیا ہے۔ شکریہ!`
        : `Your donation of Rs. ${amount} has been recorded. Thank you!`
      );
    } else {
      alert(isRTL ? 'براہ کرم رقم منتخب کریں' : 'Please select an amount');
    }
  };

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('supportCommunity')}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {t('donationPurpose')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Causes */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'عطیہ کے شعبے' : 'Donation Causes'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'وہ شعبے جہاں آپ کی مدد کی ضرورت ہے'
                : 'Areas where your support is needed'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map(cause => {
              const percentage = (cause.raised / cause.goal) * 100;
              return (
                <div
                  key={cause.id}
                  className={`group p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 ${
                    selectedCause === cause.id ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedCause(cause.id)}
                >
                  <div className="w-16 h-16 bg-gradient-cultural rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cause.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-cultural text-lg font-semibold text-primary mb-2 text-center">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {cause.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>{isRTL ? 'اکٹھا شدہ' : 'Raised'}</span>
                      <span>{isRTL ? 'ہدف' : 'Goal'}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-cultural h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-foreground mt-1">
                      <span>Rs. {cause.raised.toLocaleString()}</span>
                      <span>Rs. {cause.goal.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-sm font-semibold text-accent">
                      {percentage.toFixed(1)}% {isRTL ? 'مکمل' : 'Complete'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Donation Amount Selection */}
              <div className="bg-card rounded-2xl p-8 shadow-cultural">
                <h3 className="font-cultural text-2xl font-bold text-primary mb-6">
                  {isRTL ? 'عطیہ کی رقم' : 'Donation Amount'}
                </h3>
                
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {donationAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50 hover:bg-muted'
                      }`}
                    >
                      <div className="font-semibold">Rs. {amount.toLocaleString()}</div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {isRTL ? 'اپنی مرضی کی رقم' : 'Custom Amount (PKR)'}
                  </label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder={isRTL ? 'رقم داخل کریں' : 'Enter amount'}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-cultural text-primary-foreground rounded-lg font-semibold shadow-heritage hover:shadow-cultural transition-all duration-300 hover:-translate-y-1"
                >
                  <FiHeart className="w-5 h-5" />
                  <span>{t('donateNow')}</span>
                </button>

                <div className="mt-4 text-center text-sm text-muted-foreground">
                  {isRTL ? '🔒 محفوظ پیمنٹ' : '🔒 Secure Payment'}
                </div>
              </div>

              {/* Recent Donations */}
              <div className="bg-card rounded-2xl p-8 shadow-cultural">
                <h3 className="font-cultural text-2xl font-bold text-primary mb-6">
                  {isRTL ? 'حالیہ عطیات' : 'Recent Donations'}
                </h3>
                
                <div className="space-y-4">
                  {recentDonations.map((donation, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-cultural rounded-full flex items-center justify-center">
                          <FiHeart className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{donation.name}</div>
                          <div className="text-sm text-muted-foreground">{donation.cause}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">
                          Rs. {donation.amount.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(donation.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Raised */}
                <div className="mt-8 p-4 bg-gradient-heritage rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">
                      {isRTL ? 'کل اکٹھا شدہ رقم' : 'Total Amount Raised'}
                    </div>
                    <div className="font-cultural text-3xl font-bold text-primary">
                      Rs. 172,000
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isRTL ? 'اس مہینے' : 'This Month'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-4">
              {isRTL ? 'آپ کے عطیات کا اثر' : 'Impact of Your Donations'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL 
                ? 'دیکھیں کہ آپ کے عطیات کمیونٹی میں کیسے تبدیلی لا رہے ہیں'
                : 'See how your donations are making a difference in the community'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎓', number: '150+', label: isRTL ? 'وظائف یافتہ طلباء' : 'Students Scholarships' },
              { icon: '🏠', number: '25+', label: isRTL ? 'تعمیر شدہ گھر' : 'Houses Built' },
              { icon: '👨‍👩‍👧‍👦', number: '500+', label: isRTL ? 'مستفید خاندان' : 'Families Helped' },
              { icon: '💰', number: '2M+', label: isRTL ? 'کل عطیات' : 'Total Raised' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="font-cultural text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;