import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  rank: string;
  stats: {
    tournamentsPlayed: number;
    wins: number;
    totalEarnings: string;
  };
  gameIds: {
    codm: string;
    fifa: string;
    apex: string;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token on app load
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('userData');
        
        if (token && userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data
      const mockUser: User = {
        id: '1',
        username: 'ProGamer_ZA',
        name: 'Alex Johnson',
        email: email,
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

      const token = 'mock-jwt-token';
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newUser: User = {
        id: Date.now().toString(),
        username: userData.gamerTag,
        name: userData.name || userData.gamerTag,
        email: userData.email,
        phone: userData.phone || '',
        avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
        rank: 'Bronze',
        stats: {
          tournamentsPlayed: 0,
          wins: 0,
          totalEarnings: 'R0'
        },
        gameIds: {
          codm: '',
          fifa: '',
          apex: ''
        }
      };

      const token = 'mock-jwt-token';
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUser(null);
  };

  const updateProfile = async (userData: Partial<User>) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedUser = { ...user, ...userData };
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      throw new Error('Profile update failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};