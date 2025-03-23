import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Clock, Shield, Sun, Moon, Star, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function HomePage() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-slate-800 shadow-slate-700/20' : 'bg-white shadow-gray-100'} shadow-lg fixed w-full z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className={`text-2xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                Sub<span className="text-indigo-600">Scribe</span>
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/about" className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About Us</Link>
              <Link to="/contact" className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact Us</Link>
              <Link to="/login" className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Login</Link>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-700 text-yellow-400' : 'bg-gray-100 text-gray-500'} hover:bg-opacity-80 transition-colors`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className={`relative ${isDarkMode ? 'bg-slate-900' : 'bg-white'} overflow-hidden`}>
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 xl:pb-32">
              <div className={`relative ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                      <h1 className={`text-4xl tracking-tight font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
                        <span className="block">Manage Your</span>
                        <span className="block">Subscriptions</span>
                        <span className="block text-indigo-600">Effortlessly</span>
                      </h1>
                      <p className={`mt-3 text-base ${isDarkMode ? 'text-slate-300' : 'text-gray-500'} sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}>
                        Track, manage, and optimize your business subscriptions in one place. Get insights into your spending and make informed decisions.
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <Link
                            to="/demo"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                          >
                            Request a Demo
                          </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link
                            to="/login"
                            className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${
                              isDarkMode 
                                ? 'text-white bg-slate-700 hover:bg-slate-600' 
                                : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'
                            } md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out`}
                          >
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:w-1/2">
                      <div className="relative mx-auto w-full max-w-md lg:max-w-2xl group">
                        <div className={`rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02] ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
                          <div className="relative">
                            <img
                              className="w-full h-full object-cover"
                              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                              alt="Subscription Analytics Dashboard"
                            />
                            <div className={`absolute inset-0 ${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-100'} mix-blend-multiply opacity-20`}></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-indigo-500/20"></div>
                          </div>
                          <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300 group-hover:border-indigo-500/50"></div>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>

        {/* Company Marquee Section */}
        <div className={`py-12 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} overflow-hidden`}>
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="relative">
              <div className="flex space-x-8 animate-marquee">
                <div className="flex items-center justify-center min-w-[160px] opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Microsoft</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`}>Adobe</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Salesforce</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-2xl font-extrabold ${isDarkMode ? 'text-slate-100' : 'text-gray-800'}`}>IBM</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-bold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Oracle</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Amazon</span>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center justify-center min-w-[160px] opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Microsoft</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`}>Adobe</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Salesforce</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-2xl font-extrabold ${isDarkMode ? 'text-slate-100' : 'text-gray-800'}`}>IBM</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-bold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Oracle</span>
                </div>
                <div className="flex items-center justify-center min-w-[160px] opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xl font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Amazon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'} relative overflow-hidden`}>
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                Features
              </h2>
              <p className={`mt-6 text-4xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl`}>
                Everything you need to manage subscriptions
              </p>
              <p className={`mt-4 max-w-2xl mx-auto text-xl ${isDarkMode ? 'text-slate-300' : 'text-gray-500'}`}>
                Powerful tools to streamline your subscription management workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {/* Analytics Feature */}
              <div className={`relative group ${isDarkMode ? 'bg-slate-700/50' : 'bg-white'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-500/20`}>
                <div className="absolute -top-6 left-6">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Detailed Analytics</h3>
                  <p className={`mt-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-500'} leading-relaxed`}>
                    Get comprehensive insights into your subscription spending with interactive dashboards, custom reports, and trend analysis tools.
                  </p>
                  <div className="mt-6">
                    <Link to="/analytics" className="inline-flex items-center text-indigo-500 hover:text-indigo-600">
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Renewal Tracking Feature */}
              <div className={`relative group ${isDarkMode ? 'bg-slate-700/50' : 'bg-white'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-500/20`}>
                <div className="absolute -top-6 left-6">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Renewal Tracking</h3>
                  <p className={`mt-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-500'} leading-relaxed`}>
                    Never miss a renewal with smart notifications, automated tracking, and customizable alert systems for all your subscriptions.
                  </p>
                  <div className="mt-6">
                    <Link to="/renewals" className="inline-flex items-center text-indigo-500 hover:text-indigo-600">
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Security Feature */}
              <div className={`relative group ${isDarkMode ? 'bg-slate-700/50' : 'bg-white'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-500/20`}>
                <div className="absolute -top-6 left-6">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Secure Management</h3>
                  <p className={`mt-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-500'} leading-relaxed`}>
                    Enterprise-grade security with end-to-end encryption, multi-factor authentication, and regular security audits to protect your data.
                  </p>
                  <div className="mt-6">
                    <Link to="/security" className="inline-flex items-center text-indigo-500 hover:text-indigo-600">
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} relative overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-indigo-500/5 to-transparent"></div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Hear it from <span className="text-indigo-600">our customers</span>
              </h2>
              <p className={`mt-4 text-xl ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                Join thousands of satisfied customers who transformed their subscription management
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg border border-indigo-500/10`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-6">
                  <TrendingUp className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>98%</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Cost Optimization</p>
              </div>
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg border border-indigo-500/10`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-6">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>10k+</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Active Users</p>
              </div>
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg border border-indigo-500/10`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-6">
                  <Star className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>4.9/5</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Customer Rating</p>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-indigo-500/10`}>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150"
                    alt="Sarah Chen"
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <div className="ml-4">
                    <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sarah Chen</h4>
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>CTO at TechFlow</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                  "SubScribe has revolutionized how we manage our SaaS subscriptions. The analytics and automation features have saved us countless hours and significantly reduced our costs."
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>45% cost reduction</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-indigo-500/10`}>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
                    alt="Marcus Thompson"
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div className="ml-4">
                    <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Marcus Thompson</h4>
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>CFO at GrowthWave</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                  "The insights we've gained through SubScribe's analytics have been invaluable. We've optimized our subscription stack and improved our ROI significantly."
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>3x ROI in 3 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300"
              >
                Start Your Free Trial
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link to="/about" className={`${isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-gray-400 hover:text-gray-500'}`}>
                About Us
              </Link>
              <Link to="/privacy" className={`${isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-gray-400 hover:text-gray-500'}`}>
                Privacy Policy
              </Link>
              <a href="mailto:contact@subscribe.com" className={`${isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-gray-400 hover:text-gray-500'}`}>
                Contact
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className={`text-center text-base ${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>
                &copy; 2024 SubScribe. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;