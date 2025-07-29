import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation content for both languages
const translations = {
  en: {
    // Navigation
    home: 'Home',
    history: 'History',
    members: 'Members',
    joinUs: 'Join Us',
    gallery: 'Gallery',
    donations: 'Donations',
    support: 'Support',
    contactUs: 'Contact Us',
    testimonials: 'Testimonials',
    
    // Hero Section
    heroTitle: 'Pride of Daraz Khail Yousafzai',
    heroSubtitle: 'Honoring Our Heritage, Building Our Future',
    heroDescription: 'United by tradition, strengthened by community. Join the proud lineage of Daraz Khail Yousafzai tribe and preserve our rich cultural heritage for generations to come.',
    
    // Common
    readMore: 'Read More',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    submit: 'Submit',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    address: 'Address',
    
    // Footer
    followUs: 'Follow Us',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    copyright: '© 2024 Daraz Khail Yousafzai Community. All rights reserved.',
    
    // Pages Content
    aboutCommunity: 'About Our Community',
    communityDescription: 'The Daraz Khail Yousafzai community represents centuries of proud heritage, unwavering traditions, and strong family bonds that have shaped our identity.',
    
    // History Page
    historicalTimeline: 'Historical Timeline',
    ancientOrigins: 'Ancient Origins',
    tribalLegacy: 'Tribal Legacy',
    modernEra: 'Modern Era',
    
    // Members Page
    registeredMembers: 'Registered Members',
    familyGroups: 'Family Groups',
    membershipBenefits: 'Membership Benefits',
    
    // Join Us Page
    becomeAMember: 'Become a Member',
    membershipForm: 'Membership Application',
    firstName: 'First Name',
    lastName: 'Last Name',
    fatherName: 'Father\'s Name',
    dateOfBirth: 'Date of Birth',
    cnic: 'CNIC/ID Number',
    province: 'Province/State',
    city: 'City',
    postalCode: 'Postal Code',
    occupation: 'Occupation',
    downloadPdf: 'Download PDF',
    
    // Gallery Page
    culturalMoments: 'Cultural Moments',
    traditionalEvents: 'Traditional Events',
    communityGatherings: 'Community Gatherings',
    
    // Donations Page
    supportCommunity: 'Support Our Community',
    donationPurpose: 'Help us preserve our culture and support community initiatives',
    donateNow: 'Donate Now',
    
    // Support Page
    helpCenter: 'Help Center',
    frequentlyAsked: 'Frequently Asked Questions',
    howCanWeHelp: 'How Can We Help You?',
    
    // Testimonials Page
    communityVoices: 'Community Voices',
    elderWisdom: 'Words from Our Elders',
    memberFeedback: 'Member Feedback'
  },
  ur: {
    // Navigation - Urdu
    home: 'گھر',
    history: 'تاریخ',
    members: 'اراکین',
    joinUs: 'شامل ہوں',
    gallery: 'تصاویر',
    donations: 'عطیات',
    support: 'مدد',
    contactUs: 'رابطہ',
    testimonials: 'تاثرات',
    
    // Hero Section - Urdu
    heroTitle: 'درز خیل یوسفزئی کا فخر',
    heroSubtitle: 'اپنی میراث کا احترام، اپنے مستقبل کی تعمیر',
    heroDescription: 'روایات سے متحد، برادری سے مضبوط۔ درز خیل یوسفزئی قبیلے کی فخریہ نسل میں شامل ہوں اور آنے والی نسلوں کے لیے اپنی بھرپور ثقافتی میراث کو محفوظ رکھیں۔',
    
    // Common - Urdu
    readMore: 'مزید پڑھیں',
    learnMore: 'مزید جانیں',
    getStarted: 'شروع کریں',
    submit: 'جمع کریں',
    name: 'نام',
    email: 'ای میل',
    phone: 'فون',
    message: 'پیغام',
    address: 'پتہ',
    
    // Footer - Urdu
    followUs: 'ہمیں فالو کریں',
    quickLinks: 'فوری لنکس',
    contactInfo: 'رابطے کی معلومات',
    copyright: '© ۲۰۲۴ درز خیل یوسفزئی برادری۔ تمام حقوق محفوظ ہیں۔',
    
    // Pages Content - Urdu
    aboutCommunity: 'ہماری برادری کے بارے میں',
    communityDescription: 'درز خیل یوسفزئی برادری صدیوں کی فخریہ میراث، اٹل روایات، اور مضبوط خاندانی بندھنوں کی نمائندگی کرتی ہے جنہوں نے ہماری شناخت کو تشکیل دیا ہے۔',
    
    // History Page - Urdu
    historicalTimeline: 'تاریخی ٹائم لائن',
    ancientOrigins: 'قدیم اصل',
    tribalLegacy: 'قبائلی ورثہ',
    modernEra: 'جدید دور',
    
    // Members Page - Urdu
    registeredMembers: 'رجسٹرڈ اراکین',
    familyGroups: 'خاندانی گروپس',
    membershipBenefits: 'رکنیت کے فوائد',
    
    // Join Us Page - Urdu
    becomeAMember: 'رکن بنیں',
    membershipForm: 'رکنیت کی درخواست',
    firstName: 'پہلا نام',
    lastName: 'آخری نام',
    fatherName: 'والد کا نام',
    dateOfBirth: 'تاریخ پیدائش',
    cnic: 'شناختی کارڈ نمبر',
    province: 'صوبہ',
    city: 'شہر',
    postalCode: 'پوسٹل کوڈ',
    occupation: 'پیشہ',
    downloadPdf: 'پی ڈی ایف ڈاؤن لوڈ کریں',
    
    // Gallery Page - Urdu
    culturalMoments: 'ثقافتی لمحات',
    traditionalEvents: 'روایتی تقریبات',
    communityGatherings: 'برادری کے اجتماعات',
    
    // Donations Page - Urdu
    supportCommunity: 'ہماری برادری کی حمایت کریں',
    donationPurpose: 'ہماری ثقافت کو محفوظ رکھنے اور برادری کے اقدامات میں مدد کریں',
    donateNow: 'اب عطیہ کریں',
    
    // Support Page - Urdu
    helpCenter: 'مدد مرکز',
    frequentlyAsked: 'اکثر پوچھے جانے والے سوالات',
    howCanWeHelp: 'ہم آپ کی کیسے مدد کر سکتے ہیں؟',
    
    // Testimonials Page - Urdu
    communityVoices: 'برادری کی آوازیں',
    elderWisdom: 'ہمارے بزرگوں کے الفاظ',
    memberFeedback: 'اراکین کے تاثرات'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ur' : 'en';
    setLanguage(newLanguage);
    setIsRTL(newLanguage === 'ur');
    
    // Update document direction
    document.documentElement.dir = newLanguage === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.className = newLanguage === 'ur' ? 'rtl' : 'ltr';
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};