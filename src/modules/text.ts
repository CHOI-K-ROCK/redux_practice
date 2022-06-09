export const UPDATE_TEXT = 'text/UPDATE_TEXT';
export const CLEAR_TEXT = 'text/CLEAR_TEXT';

export const updateText = (value: string) => {
  return {
    type: UPDATE_TEXT,
    payload: { value },
  };
};

export const clearText = () => {
  return {
    type: CLEAR_TEXT,
  };
};

const initialState = {
  content: '',
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
