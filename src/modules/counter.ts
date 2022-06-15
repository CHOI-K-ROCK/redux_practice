import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plusCounter(state) {
      state.count++;
    },
    minusCounter(state) {
      state.count--;
    },
    clearCounter(state) {
      state.count = 0;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
