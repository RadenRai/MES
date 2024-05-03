import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLeads = createAsyncThunk(
  'leads/fetchLeads',
  async () => {
    const response = await axios.get('http://localhost:8000/api/leads');
    return response.data;
  }
);  

export const deleteLead = createAsyncThunk(
  'leads/deleteLead',
  async (leadId) => {
    await axios.delete(`http://localhost:8000/api/leads/${leadId}`);
    return leadId;
  }
);

export const addNewLead = createAsyncThunk(
  'leads/addNewLead',
  async (leadData) => {
    try {
      // Kirim data lead baru ke server
      const response = await axios.post('http://localhost:8000/api/leads', leadData);
      // Response dari server
      return response.data;
    } catch (error) {
      // Tangani kesalahan jika gagal menambahkan lead baru
      throw error;
    }
  }
);

// Membuat asynchronous thunk untuk mendapatkan data leads dari server
export const getLeadsContent = createAsyncThunk(
  'leads/getLeadsContent',
  async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/leads');
      return response.data; // Mengembalikan data yang diterima dari panggilan API
    } catch (error) {
      throw error; // Melemparkan error jika ada kesalahan saat melakukan pemanggilan API
    }
  }
);

const leadSlice = createSlice({
  name: 'leads',
  initialState: {
    leads: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Tambahan reducers jika diperlukan
    addLead(state, action) {
      state.leads.push(action.payload);
    },
    removed(state, action) {
      state.leads.filter()
    }
  },
  extraReducers: {
    [fetchLeads.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchLeads.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.leads = action.payload;
    },
    [fetchLeads.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteLead.pending]: (state) => {
      // Handle pending state if needed
    },
    [deleteLead.fulfilled]: (state, action) => {
      state.leads = state.leads.filter(lead => lead.id !== action.payload);
    },
    [deleteLead.rejected]: (state, action) => {
      // Handle error state if needed
    },
  },
});

export const selectAllLeads = (state) => state.leads.leads;

export default leadSlice.reducer;
