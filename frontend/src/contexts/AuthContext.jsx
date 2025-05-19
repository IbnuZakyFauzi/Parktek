import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check localStorage for user on initial load
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    console.log('AuthContext initializing, checking storage:', { hasUser: !!storedUser, hasToken: !!token });
    
    if (storedUser && token) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);
  
  const login = (userData) => {
    console.log('AuthContext: Setting current user:', userData);
    setCurrentUser(userData);
  };
  
  const logout = () => {
    console.log('AuthContext: Logging out user');
    setCurrentUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };
  
  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser
  };
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;