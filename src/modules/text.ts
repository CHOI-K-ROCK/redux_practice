import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    updateText(state, action) {
      state.content = action.payload;
    },
    clearText: (state) => {
      state.content = '';
    },
  },
});

export const textActions = textSlice.actions;
export default textSlice.reducer;
