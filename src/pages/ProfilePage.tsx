import React, { useState } from 'react';
import { 
  User, 
  Trophy, 
  Users, 
  CreditCard, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  Edit3, 
  Upload, 
  Eye, 
  Calendar, 
  Star,
  Crown,
  Medal,
  Target,
  Camera,
  Save,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  Plus,
  Copy,
  QrCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';

const ProfilePage = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('tournaments');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  // Mock user data
  const userData = {
    username: 'ProGamer_ZA',
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+27 82 123 4567',
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
    rank: 'Diamond',
    stats: {
      tournamentsPlayed: 24,
      wins: 8,
      totalEarnings: 'R2,450'
    },
    gameIds: {
      codm: 'ProGamer_ZA_2024',
      fifa: 'AlexJ_FIFA',
      apex: 'ProGamer_Apex'
    }
  };

  // Mock tournaments data
  const tournaments = [
    {
      id: 1,
      name: 'Winter Championship 2024',
      game: 'Call of Duty Mobile',
      status: 'In Progress',
      role: 'Team Captain',
      date: '2024-12-15',
      paymentStatus: 'Paid',
      teamName: 'Thunder Squad'
    },
    {
      id: 2,
      name: 'FIFA Pro League',
      game: 'FIFA 24',
      status: 'Registered',
      role: 'Solo',
      date: '2025-02-01',
      paymentStatus: 'Pending',
      teamName: null
    },
    {
      id: 3,
      name: 'Apex Legends Masters',
      game: 'Apex Legends',
      status: 'Completed',
      role: 'Team Member',
      date: '2024-11-20',
      paymentStatus: 'Paid',
      teamName: 'Elite Legends',
      placement: '3rd Place'
    }
  ];

  // Mock team data
  const teams = [
    {
      id: 1,
      name: 'Thunder Squad',
      game: 'Call of Duty Mobile',
      role: 'Captain',
      members: [
        { username: 'ProGamer_ZA', id: 'You', isLeader: true },
        { username: 'SniperKing_SA', id: 'Member', isLeader: false },
        { username: 'RushMaster_CT', id: 'Member', isLeader: false },
        { username: 'TacticalAce_ZA', id: 'Member', isLeader: false }
      ],
      inviteCode: 'TS-2024-WINTER'
    }
  ];

  // Mock payments data
  const payments = [
    {
      id: 1,
      tournament: 'Winter Championship 2024',
      amount: 'R150',
      status: 'Paid',
      date: '2024-12-01',
      proofUploaded: true
    },
    {
      id: 2,
      tournament: 'FIFA Pro League',
      amount: 'R100',
      status: 'Pending',
      date: '2024-12-10',
      proofUploaded: false
    },
    {
      id: 3,
      tournament: 'Apex Legends Masters',
      amount: 'R120',
      status: 'Paid',
      date: '2024-11-15',
      proofUploaded: true
    }
  ];

  // Mock merch orders
  const merchOrders = [
    {
      id: 'GB-2024-001',
      item: 'GameBox Arena Jersey - Large',
      status: 'Delivered',
      date: '2024-11-25',
      amount: 'R499'
    },
    {
      id: 'GB-2024-002',
      item: 'Pro Gaming Hoodie - Medium',
      status: 'Processing',
      date: '2024-12-05',
      amount: 'R699'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
      case 'delivered':
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
      case 'processing':
      case 'in progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'registered':
        return 'bg-blue-100 text-blue-700';
      case 'rejected':
      case 'failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
      case 'delivered':
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
      case 'processing':
      case 'in progress':
        return <Clock className="w-4 h-4" />;
      case 'registered':
        return <Calendar className="w-4 h-4" />;
      case 'rejected':
      case 'failed':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const tabs = [
    { id: 'tournaments', label: 'My Tournaments', icon: Trophy },
    { id: 'teams', label: 'My Teams', icon: Users },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'merch', label: 'Merch Orders', icon: ShoppingBag },
    { id: 'profile', label: 'Edit Profile', icon: Settings }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode ? 'bg-dark-900 text-white' : 'bg-gray-50 text-dark-900'
    }`}>
      <Header />
      
      <motion.div 
        className="pt-24 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <motion.div 
            className={`rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden ${
              isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200'
            }`}
            variants={itemVariants}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-cyan to-primary-purple rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="relative">
                    <img 
                      src={userData.avatar} 
                      alt={userData.username}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-primary-blue"
                    />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-blue to-primary-purple p-2 rounded-xl">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">{userData.username}</h1>
                    <p className={`text-base sm:text-lg mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {userData.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-primary-blue to-primary-purple px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-semibold">{userData.rank}</span>
                      </div>
                      <Medal className="w-5 h-5 text-accent-cyan" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary-blue mb-1">
                      {userData.stats.tournamentsPlayed}
                    </div>
                    <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Tournaments
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary-purple mb-1">
                      {userData.stats.wins}
                    </div>
                    <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Wins
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-accent-cyan mb-1">
                      {userData.stats.totalEarnings}
                    </div>
                    <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Earnings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <div className={`rounded-2xl p-4 sm:p-6 ${
                isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200'
              }`}>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-medium'
                          : isDarkMode
                            ? 'text-gray-300 hover:bg-dark-700 hover:text-white'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary-blue'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </motion.button>
                  ))}
                </nav>

                {/* Logout Button */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-700">
                  <motion.button
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      isDarkMode
                        ? 'text-red-400 hover:bg-red-500/10'
                        : 'text-red-600 hover:bg-red-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div 
              className="lg:col-span-3"
              variants={itemVariants}
            >
              <div className={`rounded-2xl p-6 sm:p-8 ${
                isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200'
              }`}>
                <AnimatePresence mode="wait">
                  {/* Tournaments Tab */}
                  {activeTab === 'tournaments' && (
                    <motion.div
                      key="tournaments"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Trophy className="w-6 h-6 text-primary-blue" />
                        <h2 className="text-2xl font-bold">My Tournaments</h2>
                      </div>

                      <div className="space-y-4">
                        {tournaments.map((tournament) => (
                          <div 
                            key={tournament.id}
                            className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-soft ${
                              isDarkMode ? 'border-dark-600 hover:border-primary-blue/30' : 'border-gray-200 hover:border-primary-blue/30'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-lg font-semibold">{tournament.name}</h3>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tournament.status)}`}>
                                    {getStatusIcon(tournament.status)}
                                    <span className="ml-1">{tournament.status}</span>
                                  </span>
                                </div>
                                <div className={`space-y-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  <p><span className="font-medium">Game:</span> {tournament.game}</p>
                                  <p><span className="font-medium">Role:</span> {tournament.role}</p>
                                  <p><span className="font-medium">Date:</span> {new Date(tournament.date).toLocaleDateString()}</p>
                                  {tournament.teamName && (
                                    <p><span className="font-medium">Team:</span> {tournament.teamName}</p>
                                  )}
                                  {tournament.placement && (
                                    <p className="text-accent-cyan font-medium">🏆 {tournament.placement}</p>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row gap-2">
                                {tournament.paymentStatus === 'Pending' && (
                                  <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-4 py-2 rounded-lg text-white text-sm font-medium hover:shadow-medium transition-all duration-200">
                                    Upload Payment
                                  </button>
                                )}
                                <button className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                                  isDarkMode 
                                    ? 'border-dark-600 text-gray-300 hover:border-primary-blue hover:text-primary-blue'
                                    : 'border-gray-300 text-gray-700 hover:border-primary-blue hover:text-primary-blue'
                                }`}>
                                  <Eye className="w-4 h-4 inline mr-1" />
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Teams Tab */}
                  {activeTab === 'teams' && (
                    <motion.div
                      key="teams"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Users className="w-6 h-6 text-primary-blue" />
                        <h2 className="text-2xl font-bold">My Teams</h2>
                      </div>

                      <div className="space-y-6">
                        {teams.map((team) => (
                          <div 
                            key={team.id}
                            className={`p-6 rounded-xl border ${
                              isDarkMode ? 'border-dark-600' : 'border-gray-200'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-1">{team.name}</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {team.game} • {team.role}
                                </p>
                              </div>
                              {team.role === 'Captain' && (
                                <Crown className="w-6 h-6 text-accent-cyan" />
                              )}
                            </div>

                            <div className="mb-4">
                              <h4 className="font-medium mb-3">Team Members</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {team.members.map((member, index) => (
                                  <div 
                                    key={index}
                                    className={`flex items-center gap-3 p-3 rounded-lg ${
                                      isDarkMode ? 'bg-dark-700' : 'bg-gray-50'
                                    }`}
                                  >
                                    <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center">
                                      <User className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-sm">{member.username}</p>
                                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {member.isLeader ? 'Captain' : 'Member'}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {team.role === 'Captain' && (
                              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-dark-700' : 'bg-gray-50'}`}>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium text-sm mb-1">Team Invite Code</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Share this code with new members
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <code className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded text-sm font-mono">
                                      {team.inviteCode}
                                    </code>
                                    <button className="p-2 hover:bg-primary-blue/10 rounded-lg transition-colors">
                                      <Copy className="w-4 h-4 text-primary-blue" />
                                    </button>
                                    <button className="p-2 hover:bg-primary-blue/10 rounded-lg transition-colors">
                                      <QrCode className="w-4 h-4 text-primary-blue" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        <button className={`w-full p-6 rounded-xl border-2 border-dashed transition-all duration-200 hover:border-primary-blue hover:bg-primary-blue/5 ${
                          isDarkMode ? 'border-dark-600' : 'border-gray-300'
                        }`}>
                          <Plus className="w-8 h-8 text-primary-blue mx-auto mb-2" />
                          <p className="text-primary-blue font-medium">Create New Team</p>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Payments Tab */}
                  {activeTab === 'payments' && (
                    <motion.div
                      key="payments"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <CreditCard className="w-6 h-6 text-primary-blue" />
                        <h2 className="text-2xl font-bold">Payment History</h2>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className={`border-b ${isDarkMode ? 'border-dark-600' : 'border-gray-200'}`}>
                              <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Tournament
                              </th>
                              <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Amount
                              </th>
                              <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Status
                              </th>
                              <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Date
                              </th>
                              <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {payments.map((payment) => (
                              <tr 
                                key={payment.id}
                                className={`border-b ${isDarkMode ? 'border-dark-700' : 'border-gray-100'}`}
                              >
                                <td className="py-4 px-4">
                                  <p className="font-medium">{payment.tournament}</p>
                                </td>
                                <td className="py-4 px-4">
                                  <p className="font-semibold text-primary-blue">{payment.amount}</p>
                                </td>
                                <td className="py-4 px-4">
                                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                                    {getStatusIcon(payment.status)}
                                    {payment.status}
                                  </span>
                                </td>
                                <td className="py-4 px-4">
                                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {new Date(payment.date).toLocaleDateString()}
                                  </p>
                                </td>
                                <td className="py-4 px-4">
                                  {payment.status === 'Pending' ? (
                                    <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-3 py-1 rounded-lg text-white text-xs font-medium hover:shadow-medium transition-all duration-200">
                                      <Upload className="w-3 h-3 inline mr-1" />
                                      Upload Proof
                                    </button>
                                  ) : (
                                    <button className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-200 ${
                                      isDarkMode 
                                        ? 'border-dark-600 text-gray-400 hover:border-primary-blue hover:text-primary-blue'
                                        : 'border-gray-300 text-gray-600 hover:border-primary-blue hover:text-primary-blue'
                                    }`}>
                                      <Eye className="w-3 h-3 inline mr-1" />
                                      View
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {/* Merch Orders Tab */}
                  {activeTab === 'merch' && (
                    <motion.div
                      key="merch"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <ShoppingBag className="w-6 h-6 text-primary-blue" />
                        <h2 className="text-2xl font-bold">Merchandise Orders</h2>
                      </div>

                      <div className="space-y-4">
                        {merchOrders.map((order) => (
                          <div 
                            key={order.id}
                            className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-soft ${
                              isDarkMode ? 'border-dark-600 hover:border-primary-blue/30' : 'border-gray-200 hover:border-primary-blue/30'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-lg font-semibold">{order.item}</h3>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                    {getStatusIcon(order.status)}
                                    <span className="ml-1">{order.status}</span>
                                  </span>
                                </div>
                                <div className={`space-y-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  <p><span className="font-medium">Order ID:</span> {order.id}</p>
                                  <p><span className="font-medium">Date:</span> {new Date(order.date).toLocaleDateString()}</p>
                                  <p><span className="font-medium">Amount:</span> <span className="text-primary-blue font-semibold">{order.amount}</span></p>
                                </div>
                              </div>
                              
                              <div className="flex gap-2">
                                <button className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                                  isDarkMode 
                                    ? 'border-dark-600 text-gray-300 hover:border-primary-blue hover:text-primary-blue'
                                    : 'border-gray-300 text-gray-700 hover:border-primary-blue hover:text-primary-blue'
                                }`}>
                                  View Receipt
                                </button>
                                {order.status === 'Delivered' && (
                                  <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-4 py-2 rounded-lg text-white text-sm font-medium hover:shadow-medium transition-all duration-200">
                                    Reorder
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Profile Edit Tab */}
                  {activeTab === 'profile' && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Settings className="w-6 h-6 text-primary-blue" />
                        <h2 className="text-2xl font-bold">Edit Profile</h2>
                      </div>

                      <div className="space-y-8">
                        {/* Avatar Section */}
                        <div className="text-center">
                          <div className="relative inline-block">
                            <img 
                              src={userData.avatar} 
                              alt={userData.username}
                              className="w-24 h-24 rounded-2xl object-cover border-4 border-primary-blue"
                            />
                            <button className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-blue to-primary-purple p-2 rounded-xl hover:shadow-medium transition-all duration-200">
                              <Camera className="w-4 h-4 text-white" />
                            </button>
                          </div>
                          <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Click to change avatar
                          </p>
                        </div>

                        {/* Profile Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Gamer Tag
                            </label>
                            <input 
                              type="text" 
                              defaultValue={userData.username}
                              className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                isDarkMode 
                                  ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                  : 'bg-white border-gray-300 focus:border-primary-blue'
                              } focus:ring-2 focus:ring-primary-blue/20`}
                            />
                          </div>

                          <div>
                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Full Name
                            </label>
                            <input 
                              type="text" 
                              defaultValue={userData.name}
                              className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                isDarkMode 
                                  ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                  : 'bg-white border-gray-300 focus:border-primary-blue'
                              } focus:ring-2 focus:ring-primary-blue/20`}
                            />
                          </div>

                          <div>
                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Email
                            </label>
                            <input 
                              type="email" 
                              defaultValue={userData.email}
                              className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                isDarkMode 
                                  ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                  : 'bg-white border-gray-300 focus:border-primary-blue'
                              } focus:ring-2 focus:ring-primary-blue/20`}
                            />
                          </div>

                          <div>
                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Phone (WhatsApp)
                            </label>
                            <input 
                              type="tel" 
                              defaultValue={userData.phone}
                              className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                isDarkMode 
                                  ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                  : 'bg-white border-gray-300 focus:border-primary-blue'
                              } focus:ring-2 focus:ring-primary-blue/20`}
                            />
                          </div>
                        </div>

                        {/* Game IDs Section */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Game IDs</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Call of Duty Mobile ID
                              </label>
                              <input 
                                type="text" 
                                defaultValue={userData.gameIds.codm}
                                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                  isDarkMode 
                                    ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                    : 'bg-white border-gray-300 focus:border-primary-blue'
                                } focus:ring-2 focus:ring-primary-blue/20`}
                              />
                            </div>

                            <div>
                              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                FIFA PSN/Xbox ID
                              </label>
                              <input 
                                type="text" 
                                defaultValue={userData.gameIds.fifa}
                                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                  isDarkMode 
                                    ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                    : 'bg-white border-gray-300 focus:border-primary-blue'
                                } focus:ring-2 focus:ring-primary-blue/20`}
                              />
                            </div>

                            <div>
                              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Apex Legends ID
                              </label>
                              <input 
                                type="text" 
                                defaultValue={userData.gameIds.apex}
                                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                  isDarkMode 
                                    ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                    : 'bg-white border-gray-300 focus:border-primary-blue'
                                } focus:ring-2 focus:ring-primary-blue/20`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Password Change Section */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Current Password
                              </label>
                              <input 
                                type="password" 
                                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                  isDarkMode 
                                    ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                    : 'bg-white border-gray-300 focus:border-primary-blue'
                                } focus:ring-2 focus:ring-primary-blue/20`}
                              />
                            </div>

                            <div>
                              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                New Password
                              </label>
                              <input 
                                type="password" 
                                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                                  isDarkMode 
                                    ? 'bg-dark-700 border-dark-600 text-white focus:border-primary-blue'
                                    : 'bg-white border-gray-300 focus:border-primary-blue'
                                } focus:ring-2 focus:ring-primary-blue/20`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-between items-center pt-6">
                          <button 
                            onClick={() => setShowDeleteWarning(!showDeleteWarning)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                              isDarkMode
                                ? 'text-red-400 hover:bg-red-500/10'
                                : 'text-red-600 hover:bg-red-50'
                            }`}
                          >
                            <AlertTriangle className="w-4 h-4 inline mr-1" />
                            Delete Account
                          </button>

                          <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-6 py-3 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-200 flex items-center gap-2">
                            <Save className="w-4 h-4" />
                            Save Changes
                          </button>
                        </div>

                        {/* Delete Account Warning */}
                        <AnimatePresence>
                          {showDeleteWarning && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`p-4 rounded-lg border-2 border-red-200 ${
                                isDarkMode ? 'bg-red-500/10' : 'bg-red-50'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-red-700 mb-2">Delete Account</h4>
                                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-red-300' : 'text-red-600'}`}>
                                    This action cannot be undone. This will permanently delete your account, 
                                    tournament history, and remove you from all teams.
                                  </p>
                                  <div className="flex gap-3">
                                    <button 
                                      onClick={() => setShowDeleteWarning(false)}
                                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                                        isDarkMode 
                                          ? 'border-dark-600 text-gray-300 hover:border-gray-500'
                                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                      }`}
                                    >
                                      Cancel
                                    </button>
                                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-200">
                                      Yes, Delete Account
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ProfilePage;