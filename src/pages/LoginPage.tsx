import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { isDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission
  };

  return (
    <div className={`min-h-screen w-full relative ${isDarkMode ? 'bg-[#1a1f2d]' : 'bg-gray-50'} flex items-stretch`}>
      {/* Left Section */}
      <div className="w-1/2 relative overflow-hidden hidden lg:block">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80')",
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
              Welcome Back
              <br />
              <span className="text-5xl">
                Access your
                <br />
                <span className="text-blue-500">subscription dashboard</span>
                <br />
                in seconds
              </span>
            </h1>
            <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Log in to manage your subscriptions, view analytics, and optimize your costs
            </p>
          </div>
          <div className="space-y-4">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Trusted by leading companies worldwide
            </p>
            <div className="flex space-x-6">
              {['Microsoft', 'Adobe', 'IBM', 'Oracle'].map((company, index) => (
                <span 
                  key={index}
                  className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  } opacity-75 hover:opacity-100 transition-opacity`}
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Sign in to your account
            </h2>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Access your subscription management dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              <input
                type="email"
                required
                className={`mt-1 block w-full rounded-lg ${
                  isDarkMode 
                    ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className={`block w-full rounded-lg ${
                    isDarkMode 
                      ? 'bg-[#252b3b] border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } border px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your password"
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className={`ml-2 block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-500 hover:text-blue-400"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${isDarkMode ? 'bg-[#1a1f2d] text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {['Google', 'GitHub', 'LinkedIn'].map((provider) => (
                <button
                  key={provider}
                  type="button"
                  className={`flex items-center justify-center px-4 py-2 border ${
                    isDarkMode 
                      ? 'border-gray-700 bg-[#252b3b] text-gray-300 hover:bg-[#2a3141]' 
                      : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  } rounded-lg text-sm font-medium`}
                >
                  {provider}
                </button>
              ))}
            </div>

            <div className="text-center">
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:text-blue-400 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;