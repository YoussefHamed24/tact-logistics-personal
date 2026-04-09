import React, { createContext, useContext } from 'react';

// This site is fully public — no authentication needed.
// AuthContext is kept as a stub so existing imports don't break.
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  appPublicSettings: null,
  logout: () => {},
  navigateToLogin: () => {},
  checkAppState: async () => {},
});

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={{
    user: null,
    isAuthenticated: false,
    isLoadingAuth: false,
    isLoadingPublicSettings: false,
    authError: null,
    appPublicSettings: null,
    logout: () => {},
    navigateToLogin: () => {},
    checkAppState: async () => {},
  }}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => useContext(AuthContext);
