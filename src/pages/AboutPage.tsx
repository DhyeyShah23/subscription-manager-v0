import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, BarChart3, Globe2, Award, Brain, Rocket, Target, Sparkles, DollarSign } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function AboutPage() {
  const { isDarkMode } = useTheme();
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Innovative Hero Section with Animated Background */}
      <div className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-purple-600/80 to-blue-900/90 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Technology"
            className="w-full h-full object-cover"
          />
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Revolutionizing SaaS Management</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              The Future of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Digital Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              We're not just managing subscriptions – we're transforming how businesses 
              interact with SaaS through AI-powered insights and revolutionary automation.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute right-0 top-1/4 transform translate-x-1/2">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"></div>
        </div>
        <div className="absolute left-0 bottom-1/4 transform -translate-x-1/2">
          <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-3xl"></div>
        </div>
      </div>

      {/* Innovative Stats Section */}
      <div ref={statsRef} className="relative -mt-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isDarkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-xl rounded-3xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300`}>
            <div className="text-center transform transition-all duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2 counter">25%</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Average Cost Savings</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2 counter">5K+</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Active Businesses</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 mb-4">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2 counter">20+</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Countries Served</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-pink-600 mb-2 counter">98%</div>
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Client Retention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Pioneering the Future
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: "Quantum-Safe Security",
                description: "Future-proof encryption that's resistant to quantum computing threats",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: <Brain className="w-8 h-8 text-white" />,
                title: "AI-Powered Insights",
                description: "Advanced machine learning algorithms that predict and optimize your subscriptions",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                icon: <Zap className="w-8 h-8 text-white" />,
                title: "Real-Time Optimization",
                description: "Instant adjustments and recommendations based on usage patterns",
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
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-3xl overflow-hidden relative ${isDarkMode ? 'bg-slate-800' : 'bg-white'} shadow-xl`}>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 mix-blend-multiply"></div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Technology Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join the revolution in subscription management and experience the power of AI-driven optimization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Schedule Demo
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started
                  <Zap className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;