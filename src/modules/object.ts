import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  obj: {
    title: '기본제목',
    content: '기본본문',
  },
};

const objectSlice = createSlice({
  name: 'object',
  initialState,
  reducers: {
    updateTitle(state, action) {
      state.obj.title = action.payload;
    },
    updateContent(state, action) {
      state.obj.content = action.payload;
    },
    clearObject(state) {
      state.obj.title = '';
      state.obj.content = '';
    },
  },
});

export const objectActions = objectSlice.actions;
export default objectSlice.reducer;
