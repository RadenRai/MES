import { createSlice } from '@reduxjs/toolkit';

// Data waktu baku produksi sementara
const dummyData = [
    {
        id: 1,
        namaProduk: "Produk A",
        detailProses: "Proses 1",
        waktu: 30,
        outputProses: 100,
        jumlahKebutuhanPerUnit: 1,
        waktuPerUnit: 0.3,
        keterangan: ""
    },
    // Tambahkan data lain sesuai kebutuhan
];

const waktuBakuProduksiSlice = createSlice({
    name: 'waktuBakuProduksi',
    initialState: {
        data: dummyData,
        isLoading: false,
        error: null
    },
    reducers: {
        updateWaktuBakuProduksi: (state, action) => {
            const { id, newData } = action.payload;
            const index = state.data.findIndex(item => item.id === id);
            if (index !== -1) {
                // Salin objek yang diperbarui ke dalam array baru
                state.data = [
                    ...state.data.slice(0, index),
                    { ...state.data[index], ...newData },
                    ...state.data.slice(index + 1)
                ];
            }
            // Kembalikan state yang baru setelah perubahan
            return state;
        },
        // Tambahkan penanganan error jika diperlukan
    }
});

export const { updateWaktuBakuProduksi } = waktuBakuProduksiSlice.actions;
export default waktuBakuProduksiSlice.reducer;
