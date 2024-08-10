// context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuth();
  }, []);

  const signIn = async (token) => {
    await AsyncStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const signUp = async (email, password) => {
    try {
      // Replace with your backend URL
      const response = await axios.post(
        "https://ecom-app-backend-95nz.onrender.com/api/auth/signup",
        { email, password }
      );
      const { token } = response.data.auth;
      await AsyncStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Signup error:", error);
      throw new Error("Signup failed. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
