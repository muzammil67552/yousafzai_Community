import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiDownload, FiCheck } from 'react-icons/fi';
import jsPDF from 'jspdf';
import { useLanguage } from '../contexts/LanguageContext';

const JoinUs = () => {
  const { isRTL, t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    cnic: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    occupation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.text('Daraz Khail Yousafzai Community', 20, 30);
    doc.text('Membership Application', 20, 45);
    
    // Add member details
    doc.setFontSize(12);
    let yPosition = 70;
    
    const fields = [
      ['Full Name:', `${formData.firstName} ${formData.lastName}`],
      ['Father\'s Name:', formData.fatherName],
      ['Email:', formData.email],
      ['Phone:', formData.phone],
      ['Date of Birth:', formData.dateOfBirth],
      ['CNIC:', formData.cnic],
      ['Address:', formData.address],
      ['City:', formData.city],
      ['Province:', formData.province],
      ['Postal Code:', formData.postalCode],
      ['Occupation:', formData.occupation]
    ];

    fields.forEach(([label, value]) => {
      if (value) {
        doc.text(`${label} ${value}`, 20, yPosition);
        yPosition += 10;
      }
    });

    // Add date and signature lines
    yPosition += 20;
    doc.text(`Application Date: ${new Date().toLocaleDateString()}`, 20, yPosition);
    yPosition += 30;
    doc.text('Applicant Signature: ________________________', 20, yPosition);
    yPosition += 20;
    doc.text('Date: ________________________', 20, yPosition);

    // Save the PDF
    doc.save(`${formData.firstName}_${formData.lastName}_Membership_Application.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'fatherName', 'email', 'phone', 'cnic'];
    const hasAllRequired = requiredFields.every(field => formData[field].trim() !== '');
    
    if (hasAllRequired) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Membership application submitted:', formData);
    } else {
      alert(isRTL ? 'براہ کرم تمام ضروری فیلڈز پُر کریں' : 'Please fill in all required fields');
    }
  };

  const membershipBenefits = [
    {
      icon: '🌐',
      title: isRTL ? 'عالمی نیٹ ورک' : 'Global Network',
      description: isRTL ? 'دنیا بھر کے اراکین سے رابطہ' : 'Connect with members worldwide'
    },
    {
      icon: '📚',
      title: isRTL ? 'تعلیمی مدد' : 'Educational Support',
      description: isRTL ? 'وظائف اور تعلیمی رہنمائی' : 'Scholarships and educational guidance'
    },
    {
      icon: '🎉',
      title: isRTL ? 'ثقافتی تقاریب' : 'Cultural Events',
      description: isRTL ? 'کمیونٹی کی تقاریب میں شرکت' : 'Participate in community events'
    },
    {
      icon: '💼',
      title: isRTL ? 'کاروباری مواقع' : 'Business Opportunities',
      description: isRTL ? 'تجارتی رابطے اور مواقع' : 'Business connections and opportunities'
    }
  ];

  if (isSubmitted) {
    return (
      <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-cultural">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="w-10 h-10 text-accent-foreground" />
              </div>
              <h1 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-6">
                {isRTL ? 'درخواست جمع ہو گئی!' : 'Application Submitted!'}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {isRTL 
                  ? 'آپ کی رکنیت کی درخواست کامیابی سے جمع ہو گئی ہے۔ اب آپ اپنی درخواست کی PDF کاپی ڈاؤن لوڈ کر سکتے ہیں۔'
                  : 'Your membership application has been successfully submitted. You can now download a PDF copy of your application.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={generatePDF}
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-cultural text-primary-foreground rounded-lg font-semibold shadow-heritage hover:shadow-cultural transition-all duration-300 hover:-translate-y-1"
                >
                  <FiDownload className="w-5 h-5" />
                  <span>{t('downloadPdf')}</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 bg-muted text-foreground border border-border rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:-translate-y-1"
                >
                  {isRTL ? 'نئی درخواست' : 'New Application'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                : 'Join the Daraz Khail Yousafzai community and strengthen your cultural identity'
              }
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
              {isRTL 
                ? 'کمیونٹی کی رکنیت کے فوائد'
                : 'Benefits of community membership'
              }
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
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-cultural">
              <h2 className="font-cultural text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                {t('membershipForm')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('firstName')} *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('lastName')} *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('fatherName')} *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        name="fatherName"
                        required
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('email')} *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('phone')} *
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('dateOfBirth')}
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('cnic')} *
                    </label>
                    <input
                      type="text"
                      name="cnic"
                      required
                      value={formData.cnic}
                      onChange={handleInputChange}
                      placeholder="XXXXX-XXXXXXX-X"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('occupation')}
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-6">
                  <h3 className="font-cultural text-xl font-semibold text-primary">
                    {isRTL ? 'پتہ کی تفصیلات' : 'Address Details'}
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('address')}
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3 top-3 text-muted-foreground" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('city')}
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('province')}
                      </label>
                      <input
                        type="text"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('postalCode')}
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-gradient-cultural text-primary-foreground rounded-lg font-semibold shadow-heritage hover:shadow-cultural transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    {t('submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;