import React, { useState } from 'react';
import { FiUser, FiDownload, FiCheck, FiArrowRight } from 'react-icons/fi';
import jsPDF from 'jspdf';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  const { isRTL, t } = useLanguage();
  const [formData] = useState({
    firstName: '',
    lastName: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('Daraz Khail Yousafzai Community', 20, 30);
    doc.text('Membership Application', 20, 45);

    let yPosition = 70;

    yPosition += 20;
    doc.text(`Application Date: ${new Date().toLocaleDateString()}`, 20, yPosition);
    yPosition += 30;
    doc.text('Applicant Signature: ________________________', 20, yPosition);
    yPosition += 20;
    doc.text('Date: ________________________', 20, yPosition);

    doc.save(`${formData.firstName}_${formData.lastName}_Membership_Application.pdf`);
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
                  : 'Your membership application has been successfully submitted. You can now download a PDF copy of your application.'}
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
<div className="text-center py-20">
  <a
    href="https://script.google.com/macros/s/AKfycbxJ7dr9ewheOEvsNETqKPZpfMHngA2sc6cVMI7kZghyXbJSMQnoleuZTHXyQnlnZtZXUA/exec"
    target="_blank"
    rel="noopener noreferrer"
    className="md:px-6 md:py-3 px-8 py-4 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-300 ease-in-out inline-flex items-center justify-center space-x-2"
  >
    <span>{t('Registration')}</span>
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </a>
</div>

    </div>
  );
};

export default JoinUs;
