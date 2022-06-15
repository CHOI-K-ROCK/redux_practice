import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arr: ['기본데이터1', '기본테이터 2'],
};

const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addElem(state, action) {
      console.log(action);
      state.arr = [...state.arr, action.payload];
    },
    removeElem(state, action) {
      state.arr = state.arr.filter((el, idx) => {
        return idx !== action.payload;
      });
    },
    clearElem(state) {
      state.arr = [];
    },
  },
});

export const arrayActions = arraySlice.actions;
export default arraySlice.reducer;
