import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '../features/common/headerSlice';
import modalSlice from '../features/common/modalSlice';
import rightDrawerSlice from '../features/common/rightDrawerSlice';
import leadsSlice from '../features/leads/leadSlice';
import waktuBakuProduksiSlice from '../features/leads/produksi/waktuBakuProduksiSlice'; // Pastikan path sudah benar

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadsSlice,
  waktuBakuProduksi: waktuBakuProduksiSlice,
};

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
