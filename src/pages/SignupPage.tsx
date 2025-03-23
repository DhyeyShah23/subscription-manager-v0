import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen w-full relative ${isDarkMode ? 'bg-[#1a1f2d]' : 'bg-gray-50'} flex items-stretch`}>
      {/* Left Section */}
      <div className="w-1/2 relative overflow-hidden hidden lg:block">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80')",
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-[#1a1f2d]/90 to-[#1a1f2d]/50'
              : 'from-white/90 to-white/50'
          }`}></div>
        </div>
        <div className="relative h-full flex flex-col justify-between p-12">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-blue-500">Sub</span>
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Scribe</span>
          </Link>
          <div className="space-y-6">
            <h1 className={`text-4xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Start Your Journey
              <br />
              <span className="text-5xl">
                Transform your
                <br />
                <span className="text-blue-500">subscription management</span>
                <br />
                today
              </span>
            </h1>
            <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of businesses optimizing their subscriptions and reducing costs
            </p>
          </div>
          <div></div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Create new account
            </h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:border-blue-500`}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:border-blue-500`}
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Company Name"
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="GST Number"
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Contact Number"
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  isDarkMode 
                    ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:border-blue-500`}
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-lg border transition-colors pr-10 ${
                  isDarkMode 
                    ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:border-blue-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
                }`}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className={`w-full px-4 py-3 rounded-lg border transition-colors pr-10 ${
                  isDarkMode 
                    ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:border-blue-500`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
                }`}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Account
            </button>

            <div className="text-center">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Already a Member?{' '}
                <Link to="/login" className="text-blue-500 hover:text-blue-400 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;