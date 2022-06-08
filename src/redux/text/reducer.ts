import { UPDATE_TEXT, CLEAR_TEXT } from './types';

const initialState = {
  content: '기본상태',
};

const textReducer = (
  state = initialState,
  action: { type: string; payload: { value: string } }
) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        content: action.payload.value,
      };

    case CLEAR_TEXT:
      return {
        ...state,
        content: '',
      };

    default:
      return state;
  }
};

export default textReducer;
