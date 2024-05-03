// api.js

import axios from 'axios';

const baseURL = 'http://localhost:8000/api'; // Ganti dengan URL API Laravel Anda

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const leadApi = {
  // Mendapatkan semua leads
  getAllLeads: async () => {
    try {
      const response = await axiosInstance.get('/leads');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Menambahkan lead baru
  addLead: async (leadData) => {
    try {
      const response = await axiosInstance.post('/leads', leadData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Mendapatkan detail lead berdasarkan ID
  getLeadById: async (leadId) => {
    try {
      const response = await axiosInstance.get(`/leads/${leadId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Memperbarui lead berdasarkan ID
  updateLead: async (leadId, leadData) => {
    try {
      const response = await axiosInstance.put(`/leads/${leadId}`, leadData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Menghapus lead berdasarkan ID
  deleteLead: async (leadId) => {
    try {
      const response = await axiosInstance.delete(`/leads/${leadId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};
