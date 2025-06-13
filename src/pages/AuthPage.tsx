import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Mail, Lock, User, ChevronLeft, Github, Twitter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'

  // Sample list of games for the dropdown
  const games = [
    'Select your primary game',
    'Fortnite',
    'Call of Duty',
    'League of Legends',
    'Valorant',
    'Apex Legends',
    'Counter-Strike',
    'Dota 2',
    'Overwatch',
  ];

  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans">
      <Header />
      
      <div className="flex min-h-screen pt-16">
        {/* Left Side - Visual Content */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary-blue to-primary-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-dark-900 opacity-20 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
            <div className="animate-float mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-strong">
                <Gamepad2 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
              {activeTab === 'login' ? 'Welcome Back!' : 'Join The Arena'}
            </h1>
            <p className="text-lg md:text-xl text-center max-w-md animate-slide-up">
              {activeTab === 'login' 
                ? 'Log in to access your tournaments, track your stats, and connect with the community.'
                : 'Create your account to participate in tournaments, track your progress, and join our gaming community.'}
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="font-bold text-xl mb-2">Compete</h3>
                <p className="text-white/80">Join tournaments across multiple game titles</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="font-bold text-xl mb-2">Connect</h3>
                <p className="text-white/80">Build your network with fellow gamers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="font-bold text-xl mb-2">Win</h3>
                <p className="text-white/80">Earn rewards and recognition</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="font-bold text-xl mb-2">Grow</h3>
                <p className="text-white/80">Improve your skills with each match</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center text-gray-600 hover:text-primary-blue transition-colors">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Homepage
              </Link>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-primary-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-blue transition-colors">
                  {/* <Discord className="w-5 h-5" /> */}
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-blue transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex mb-8 border-b border-gray-200">
              <button 
                className={`pb-4 px-4 text-lg font-medium ${activeTab === 'login' ? 'text-primary-blue border-b-2 border-primary-blue' : 'text-gray-500'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button 
                className={`pb-4 px-4 text-lg font-medium ${activeTab === 'register' ? 'text-primary-blue border-b-2 border-primary-blue' : 'text-gray-500'}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>
            
            {/* Login Form */}
            {activeTab === 'login' && (
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="email"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                      placeholder="Enter your email or username"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <a href="#" className="text-sm font-medium text-primary-blue hover:text-primary-purple transition-colors">
                    Forgot Password?
                  </a>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-purple text-white py-3 px-4 rounded-lg font-semibold hover:shadow-medium transition-all duration-200"
                >
                  Login & Enter Arena
                </button>
                
                <div className="relative flex items-center justify-center mt-8 mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative px-4 bg-white text-sm text-gray-500">
                    Or continue with
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue opacity-50 cursor-not-allowed"
                    disabled
                  >
                    {/* <Discord className="h-5 w-5 mr-2" /> */}
                    Discord
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                </div>
              </form>
            )}
            
            {/* Register Form */}
            {activeTab === 'register' && (
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="gamer-tag" className="block text-sm font-medium text-gray-700">Gamer Tag</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="gamer-tag"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                      placeholder="Choose your gamer tag"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="register-email"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="register-password"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                      placeholder="Create a password"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="confirm-password"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="primary-game" className="block text-sm font-medium text-gray-700">Primary Game (Optional)</label>
                  <select
                    id="primary-game"
                    className="block w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                  >
                    {games.map((game, index) => (
                      <option key={index} value={index === 0 ? '' : game}>{game}</option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-purple text-white py-3 px-4 rounded-lg font-semibold hover:shadow-medium transition-all duration-200"
                >
                  Register & Join GameBox
                </button>
                
                <div className="relative flex items-center justify-center mt-8 mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative px-4 bg-white text-sm text-gray-500">
                    Or continue with
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue opacity-50 cursor-not-allowed"
                    disabled
                  >
                    {/* <Discord className="h-5 w-5 mr-2" /> */}
                    Discord
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-8 text-center text-sm text-gray-600">
              By joining, you agree to our <a href="#" className="text-primary-blue hover:text-primary-purple font-medium">Rules</a> and <a href="#" className="text-primary-blue hover:text-primary-purple font-medium">Terms of Participation</a>.
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AuthPage;