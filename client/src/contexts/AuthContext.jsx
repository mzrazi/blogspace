import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

 useEffect(() => {
  const storedToken = localStorage.getItem('jwt_token');
  if (storedToken) {
    axios.get(`${baseUrl}/users/me`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        setUser(null);
        localStorage.removeItem('jwt_token');
      })
      .finally(() => {
        setAuthLoading(false); 
      });
  } else {
    setAuthLoading(false); 
  }
}, [baseUrl]);


  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password
      });

      const { token, user } = response.data;
     
      
      localStorage.setItem('jwt_token', token);
      setUser(user);
      return true;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, {
        name,
        email,
        password
      });

      const { token, user } = response.data;
      localStorage.setItem('jwt_token', token);
      setUser(user);
      return true;
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwt_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading ,authLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
