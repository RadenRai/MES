import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fungsi async untuk mendapatkan konten utilitas mesin dari backend
const fetchUtilitasMesinContent = async () => {
    // Contoh implementasi: mengembalikan data mesin dari sumber data lokal
    return [
        { id: 1, name: 'Machine 1', status: 'Running' },
        { id: 2, name: 'Machine 2', status: 'Stopped' },
        { id: 3, name: 'Machine 3', status: 'Running' },
    ];
};

// Membuat thunk asinkron untuk fetching data mesin
export const getUtilitasMesinContent = createAsyncThunk(
    'utilitasMesin/fetchContent',
    async () => {
        const response = await fetchUtilitasMesinContent();
        return response;
    }
);

// Membuat slice utilitas mesin
const utilitasMesinSlice = createSlice({
    name: 'utilitasMesin',
    initialState: {
        machines: [], // Array untuk menyimpan data mesin
        status: 'idle', // Status awal slice
        error: null // Error jika terjadi kesalahan saat fetching data
    },
    reducers: {
        // Reducer untuk menghapus mesin berdasarkan indeks
        deleteMachine: (state, action) => {
            state.machines.splice(action.payload, 1);
        }
    },
    extraReducers: {
        // Menangani pembaruan status saat fetching data berhasil
        [getUtilitasMesinContent.pending]: (state) => {
            state.status = 'loading';
        },
        [getUtilitasMesinContent.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.machines = action.payload; // Mengisi array machines dengan data dari backend
        },
        // Menangani pembaruan status saat fetching data gagal
        [getUtilitasMesinContent.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

// Ekspor action creators dan reducer
export const { deleteMachine } = utilitasMesinSlice.actions;
export default utilitasMesinSlice.reducer;
