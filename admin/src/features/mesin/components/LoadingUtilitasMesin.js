import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const loadingUtilitasMesinSlice = createSlice({
  name: 'loadingUtilitasMesin',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingUtilitasMesinSlice.actions;

export default loadingUtilitasMesinSlice.reducer;
