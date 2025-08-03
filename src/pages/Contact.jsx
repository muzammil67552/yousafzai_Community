import React, { useState, useRef } from 'react';
import { IoCall } from 'react-icons/io5';
import {
  FaEnvelope,
  FaLocationDot,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa6';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { isRTL, t } = useLanguage();
  const form = useRef();

  const [formData, setFormData] = useState({
    title: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u7e0gfe',
        'template_jnk5uto',
        form.current,
        '-pJIPlZKuOnSog5Mt'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            isRTL ? 'آپ کا پیغام بھیج دیا گیا ہے!' : 'Your message has been sent!',
            { position: 'top-right' }
          );
          setFormData({ title: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          toast.error(
            isRTL ? 'پیغام بھیجنے میں خرابی ہوئی!' : 'Error sending message!',
            { position: 'top-right' }
          );
        }
      );
  };

  return (
    <div className={`antialiased bg-white pt-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <ToastContainer />

      <div className="flex flex-col w-full justify-center items-center p-5">
        <div className="flex flex-col sm:flex-row md:space-x-8 bg-gradient-to-l from-green-400 via-green-500 to-green-600 w-full max-w-6xl p-10 rounded-xl shadow-lg text-white">
          {/* Left Section */}
          <div className="flex flex-col justify-between space-y-8 md:w-1/2">
            <div>
              <h1 className="text-4xl md:text-3xl font-bold tracking-wide">
                {t('contactUs')}
              </h1>
              <p className="pt-4 text-lg md:text-2xl">
                {isRTL
                  ? 'مزید معلومات اور ہماری کمیونٹی سے جڑنے کے لیے رابطہ کریں'
                  : 'For more info and to connect with our community'}
              </p>
            </div>


            <div className="space-y-4">
              <div className="inline-flex space-x-3 items-center">
                <IoCall className="text-teal-100 text-2xl" />
                <span>+(03158517604)</span>
              </div>
              <div className="inline-flex space-x-3 items-center">
                <FaEnvelope className="text-teal-100 text-2xl" />
                <span>jansherkhan070@gmail.com</span>
              </div>
              <div className="inline-flex space-x-3 items-center">
                <FaLocationDot className="text-teal-100 text-2xl" />
                <span> Fareed Colony, Orangi Town Sec# 10 Karachi, Pakistan</span>
              </div>
            </div>

            <div className="flex space-x-6 mt-6 text-xl">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-500 cursor-pointer h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-600 cursor-pointer h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 cursor-pointer h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-600 cursor-pointer h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-xl shadow-xl md:p-8 p-4 text-gray-800 font-semibold md:w-1/2 mt-6 md:mt-0">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-6"
            >
              <div>
                <label className="text-sm">{t('name')}</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Your Name"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="text-sm">{t('email')}</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="text-sm">{t('message')}</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-l from-green-400 via-green-500 to-green-600 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {t('submit')}
              </button>
            </form>
          </div>
        </div>

        {/* ✅ NEW CONTACT DETAILS SECTION */}
        <div className="md:space-x-8 w-full max-w-6xl text-center justify-center mx-auto items-center md:mt-6 mt-10 rounded-xl">
          <div className="space-y-3 space-x-3 flex flex-col md:mx-0 mx-4">
            <div className="inline-flex space-x-3 items-center">
              <IoCall className="text-gray-700 text-2xl md:text-4xl" />
              <span className="md:text-2xl text-xl">+(03158517604)</span>
            </div>
            <div className="inline-flex space-x-3 items-center">
              <FaEnvelope className="text-gray-700 text-2xl md:text-4xl" />
              <span className="md:text-2xl text-xl">jansherkhan070@gmail.com</span>
            </div>
            <div className="inline-flex space-x-3 items-center">
              <FaLocationDot className="text-gray-700 text-2xl md:text-4xl" />
              <span className="md:text-2xl text-xl">
                Farid Colony, Orangi Town Sec# 10 Karachi, Pakista
              </span>
            </div>
          </div>
        </div>

        {/* ✅ Embedded Google Map */}
        <div className="w-full max-w-6xl mt-10 rounded-xl overflow-hidden shadow-lg p-5 py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.931576072679!2d66.97779197520259!3d24.93440077788115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36b28f53d4f8b%3A0xda43b6ca3d8fa634!2sERUM%20MEDICAL%20AND%20PRP%20CENTER!5e0!3m2!1sen!2s!4v1754045273971!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px] md:h-[450px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;





