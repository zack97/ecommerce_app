import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log("Token from AsyncStorage:", token);
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      console.log("Token saved:", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Token removed");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error removing token:", error);
    }
  };

  const signUp = async (email, password) => {
    try {
      console.log("Signing up with email:", email);
      const response = await axios.post(
        "https://ecom-app-backend.vercel.app/api/auth/signup",
        { email, password }
      );
      const { token } = response.data;
      console.log("Signup response data:", response.data);
      await AsyncStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(
        "Signup error:",
        error.response ? error.response.data : error.message
      );
      throw new Error("Signup failed. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
