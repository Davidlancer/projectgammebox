import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Gamepad2, Mail, Lock, User, ChevronLeft, Github, Twitter, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { validateForm, commonRules, ValidationErrors } from '../utils/validation';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  
  const { login, register } = useAuth();
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from location state
  const from = location.state?.from || '/profile';

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    gamerTag: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    primaryGame: ''
  });

  const games = [
    'Select your primary game',
    'Call of Duty Mobile',
    'FIFA 24',
    'Apex Legends',
    'Fortnite',
    'League of Legends',
    'Valorant',
    'Counter-Strike',
    'Dota 2',
    'Overwatch',
  ];

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Validate form
    const validationErrors = validateForm(loginData, {
      email: commonRules.email,
      password: { required: true }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      await login(loginData.email, loginData.password);
      showSuccess('Welcome back!', 'You have successfully logged in.');
      navigate(from, { replace: true });
    } catch (error) {
      showError('Login Failed', error instanceof Error ? error.message : 'Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Validate form
    const validationErrors = validateForm(registerData, {
      gamerTag: commonRules.gamerTag,
      name: commonRules.name,
      email: commonRules.email,
      password: commonRules.password,
      confirmPassword: {
        required: true,
        custom: (value) => value !== registerData.password ? 'Passwords do not match' : null
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      await register(registerData);
      showSuccess('Welcome to GameBox Arena!', 'Your account has been created successfully.');
      navigate(from, { replace: true });
    } catch (error) {
      showError('Registration Failed', error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string, formType: 'login' | 'register') => {
    if (formType === 'login') {
      setLoginData(prev => ({ ...prev, [field]: value }));
    } else {
      setRegisterData(prev => ({ ...prev, [field]: value }));
    }

    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white text-dark-900 font-sans">
      <SEOHead 
        title={activeTab === 'login' ? 'Login' : 'Register'}
        description={activeTab === 'login' ? 'Login to your GameBox Arena account' : 'Create your GameBox Arena account'}
      />
      <Header />
      
      <div className="flex min-h-screen pt-16">
        {/* Left Side - Visual Content */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary-blue to-primary-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-dark-900 opacity-20 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
            <motion.div 
              className="mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-strong">
                <Gamepad2 className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {activeTab === 'login' ? 'Welcome Back!' : 'Join The Arena'}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {activeTab === 'login' 
                ? 'Log in to access your tournaments, track your stats, and connect with the community.'
                : 'Create your account to participate in tournaments, track your progress, and join our gaming community.'}
            </motion.p>
            
            <div className="mt-12 grid grid-cols-2 gap-6 w-full max-w-md">
              {[
                { title: 'Compete', desc: 'Join tournaments across multiple game titles', delay: 0.2 },
                { title: 'Connect', desc: 'Build your network with fellow gamers', delay: 0.4 },
                { title: 'Win', desc: 'Earn rewards and recognition', delay: 0.6 },
                { title: 'Grow', desc: 'Improve your skills with each match', delay: 0.8 }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                >
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
          <motion.div 
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
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
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex mb-8 border-b border-gray-200">
              {['login', 'register'].map((tab) => (
                <button 
                  key={tab}
                  className={`pb-4 px-4 text-lg font-medium transition-colors ${
                    activeTab === tab 
                      ? 'text-primary-blue border-b-2 border-primary-blue' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'login' ? 'Login' : 'Register'}
                </button>
              ))}
            </div>
            
            {/* Login Form */}
            {activeTab === 'login' && (
              <motion.form 
                className="space-y-6"
                onSubmit={handleLoginSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email or Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="email"
                      value={loginData.email}
                      onChange={(e) => handleInputChange('email', e.target.value, 'login')}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email or username"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={loginData.password}
                      onChange={(e) => handleInputChange('password', e.target.value, 'login')}
                      className={`block w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
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
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-purple text-white py-3 px-4 rounded-lg font-semibold hover:shadow-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Logging in...' : 'Login & Enter Arena'}
                </button>
              </motion.form>
            )}
            
            {/* Register Form */}
            {activeTab === 'register' && (
              <motion.form 
                className="space-y-6"
                onSubmit={handleRegisterSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  <label htmlFor="gamer-tag" className="block text-sm font-medium text-gray-700">
                    Gamer Tag
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="gamer-tag"
                      value={registerData.gamerTag}
                      onChange={(e) => handleInputChange('gamerTag', e.target.value, 'register')}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 ${
                        errors.gamerTag ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Choose your gamer tag"
                    />
                  </div>
                  {errors.gamerTag && (
                    <p className="text-red-500 text-sm">{errors.gamerTag}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={registerData.name}
                    onChange={(e) => handleInputChange('name', e.target.value, 'register')}
                    className={`block w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="register-email"
                      value={registerData.email}
                      onChange={(e) => handleInputChange('email', e.target.value, 'register')}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="register-password"
                      value={registerData.password}
                      onChange={(e) => handleInputChange('password', e.target.value, 'register')}
                      className={`block w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirm-password"
                      value={registerData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value, 'register')}
                      className={`block w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200 ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="primary-game" className="block text-sm font-medium text-gray-700">
                    Primary Game (Optional)
                  </label>
                  <select
                    id="primary-game"
                    value={registerData.primaryGame}
                    onChange={(e) => handleInputChange('primaryGame', e.target.value, 'register')}
                    className="block w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                  >
                    {games.map((game, index) => (
                      <option key={index} value={index === 0 ? '' : game}>
                        {game}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-purple text-white py-3 px-4 rounded-lg font-semibold hover:shadow-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creating Account...' : 'Register & Join GameBox'}
                </button>
              </motion.form>
            )}
            
            <div className="mt-8 text-center text-sm text-gray-600">
              By joining, you agree to our{' '}
              <a href="#" className="text-primary-blue hover:text-primary-purple font-medium">
                Rules
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-blue hover:text-primary-purple font-medium">
                Terms of Participation
              </a>
              .
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AuthPage;