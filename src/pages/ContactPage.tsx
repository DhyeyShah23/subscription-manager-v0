import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  Headphones,
  Building2,
  Globe2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ContactPage() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-purple-600/80 to-blue-900/90 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions about SubScribe? We're here to help you optimize your subscription management.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="w-8 h-8 text-white" />,
              title: "Chat With Us",
              description: "Get instant answers from our team",
              action: "Start Chat",
              gradient: "from-blue-500 to-indigo-600"
            },
            {
              icon: <Mail className="w-8 h-8 text-white" />,
              title: "Email Support",
              description: "We'll respond within 24 hours",
              action: "Send Email",
              gradient: "from-purple-500 to-pink-600"
            },
            {
              icon: <Phone className="w-8 h-8 text-white" />,
              title: "Call Us",
              description: "Mon-Fri from 9am to 6pm",
              action: "Call Now",
              gradient: "from-indigo-500 to-blue-600"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 group`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.description}
              </p>
              <button className={`inline-flex items-center text-sm font-medium ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
                {item.action}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Us a Message
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-600 text-white' 
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-600 text-white' 
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-600 text-white' 
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-600 text-white' 
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </span>
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div>
            <div className="mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Offices
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </div>

            <div className="space-y-8">
              {[
                {
                  city: "San Francisco",
                  address: "100 Market Street, Suite 300, San Francisco, CA 94105",
                  phone: "+1 (415) 555-0123",
                  email: "sf@subscribe.com",
                  hours: "9:00 AM - 6:00 PM PST"
                },
                {
                  city: "London",
                  address: "123 Business Avenue, Floor 4, London, EC4A 2BB",
                  phone: "+44 20 7123 4567",
                  email: "london@subscribe.com",
                  hours: "9:00 AM - 6:00 PM GMT"
                },
                {
                  city: "Singapore",
                  address: "50 Raffles Place, #30-00 Singapore Land Tower",
                  phone: "+65 6789 0123",
                  email: "singapore@subscribe.com",
                  hours: "9:00 AM - 6:00 PM SGT"
                }
              ].map((office, index) => (
                <div 
                  key={index}
                  className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Building2 className={`w-6 h-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {office.city}
                      </h3>
                      <div className="space-y-2">
                        <p className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                          {office.address}
                        </p>
                        <p className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <Phone className="w-5 h-5 mr-2" />
                          {office.phone}
                        </p>
                        <p className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <Mail className="w-5 h-5 mr-2" />
                          {office.email}
                        </p>
                        <p className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <Clock className="w-5 h-5 mr-2" />
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Support */}
            <div className={`mt-8 p-6 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Globe2 className={`w-8 h-8 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Global Support
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Our support team is available 24/7 across multiple time zones to ensure you always have assistance when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;