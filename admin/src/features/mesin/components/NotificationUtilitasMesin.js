import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

const notificationUtilitasMesinSlice = createSlice({
  name: 'notificationUtilitasMesin',
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    clearMessage(state) {
      state.message = '';
    },
  },
});

export const { setMessage, clearMessage } = notificationUtilitasMesinSlice.actions;

export default notificationUtilitasMesinSlice.reducer;
