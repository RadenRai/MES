// user/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Sesuaikan dengan URL endpoint backend Anda
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const forgotPassword = async (email) => {
    try {
      const response = await api.post('/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const resetPassword = async (email, password, confirmPassword) => {
    try {
      const response = await api.post('/reset-password', { email, password, confirmPassword });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
