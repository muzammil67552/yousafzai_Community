import React, { useState } from 'react';
import { FiImage, FiCalendar, FiUsers, FiEye } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { isRTL, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: isRTL ? 'تمام' : 'All' },
    { id: 'cultural', name: isRTL ? 'ثقافتی' : 'Cultural' },
    { id: 'events', name: isRTL ? 'تقاریب' : 'Events' },
    { id: 'gatherings', name: isRTL ? 'اجتماعات' : 'Gatherings' },
    { id: 'traditional', name: isRTL ? 'روایتی' : 'Traditional' }
  ];

  // Sample gallery data - in a real app, this would come from a backend
  const galleryItems = [
    {
      id: 1,
      title: isRTL ? 'سالانہ ثقافتی میلہ' : 'Annual Cultural Festival',
      description: isRTL ? 'کمیونٹی کا سالانہ ثقافتی پروگرام' : 'Community\'s annual cultural program',
      category: 'cultural',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&crop=center',
      participants: 150
    },
    {
      id: 2,
      title: isRTL ? 'بزرگوں کی مجلس' : 'Elders Council Meeting',
      description: isRTL ? 'کمیونٹی کے بزرگوں کا اہم اجلاس' : 'Important meeting of community elders',
      category: 'gatherings',
      date: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&crop=center',
      participants: 45
    },
    {
      id: 3,
      title: isRTL ? 'روایتی شادی کی تقریب' : 'Traditional Wedding Ceremony',
      description: isRTL ? 'پشتون روایات کے مطابق شادی' : 'Wedding according to Pashtun traditions',
      category: 'traditional',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center',
      participants: 300
    },
    {
      id: 4,
      title: isRTL ? 'نوجوانوں کا کھیل میدان' : 'Youth Sports Event',
      description: isRTL ? 'کمیونٹی کے نوجوانوں کے کھیل' : 'Community youth sports activities',
      category: 'events',
      date: '2023-12-05',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center',
      participants: 80
    },
    {
      id: 5,
      title: isRTL ? 'تعلیمی کانفرنس' : 'Educational Conference',
      description: isRTL ? 'تعلیم کی اہمیت پر کانفرنس' : 'Conference on importance of education',
      category: 'events',
      date: '2023-11-15',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop&crop=center',
      participants: 120
    },
    {
      id: 6,
      title: isRTL ? 'ثقافتی رقص کی شام' : 'Cultural Dance Evening',
      description: isRTL ? 'روایتی اتن کی پرفارمنس' : 'Traditional Attan performance',
      category: 'cultural',
      date: '2023-10-25',
      image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&h=400&fit=crop&crop=center',
      participants: 200
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero pattern-cultural">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cultural text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t('culturalMoments')}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {isRTL 
                ? 'ہماری کمیونٹی کے خوبصورت لمحات اور یادگار واقعات'
                : 'Beautiful moments and memorable events of our community'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-cultural'
                    : 'bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground hover:shadow-heritage'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(item)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/80 text-primary-foreground text-sm font-medium rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center">
                      <FiEye className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-cultural text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiUsers className="w-4 h-4" />
                      <span>{item.participants}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiImage, number: '500+', label: isRTL ? 'تصاویر' : 'Photos' },
              { icon: FiCalendar, number: '50+', label: isRTL ? 'تقاریب' : 'Events' },
              { icon: FiUsers, number: '2000+', label: isRTL ? 'شرکاء' : 'Participants' },
              { icon: '🏆', number: '25+', label: isRTL ? 'سال' : 'Years' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-card rounded-xl shadow-elegant hover:shadow-cultural transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-cultural rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {typeof stat.icon === 'string' ? (
                    <span className="text-2xl">{stat.icon}</span>
                  ) : (
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  )}
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full bg-card rounded-xl overflow-hidden shadow-cultural">
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h2 className="font-cultural text-2xl font-bold text-primary mb-3">
                {selectedImage.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {selectedImage.description}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiUsers className="w-4 h-4" />
                    <span>{selectedImage.participants} {isRTL ? 'شرکاء' : 'participants'}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {categories.find(cat => cat.id === selectedImage.category)?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;