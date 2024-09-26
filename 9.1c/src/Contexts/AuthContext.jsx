// src/Contexts/AuthContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../Utils/Firebase'; // Adjust the path to your Firebase config

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ currentUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
