import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { server } from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${server}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => setUser(response.data))
      .catch(() => setUser(null));
    }
  }, []);

  const register = async (username, email, password) => {
    try {
      const response = await axios.post(`${server}/api/auth/register`, { username, email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${server}/api/auth/login`, { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('Invalid credentials. Please try again.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
