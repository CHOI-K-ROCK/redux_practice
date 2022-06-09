export const PLUS_COUNTER = 'counter/PLUS_COUNTER';
export const MINUS_COUNTER = 'counter/MINUS_COUNTER';
export const CLEAR_COUNTER = 'counter/CLEAR_COUNTER';

export const plusCounter = () => {
  return {
    type: PLUS_COUNTER,
  };
};

export const minusCounter = () => {
  return {
    type: MINUS_COUNTER,
  };
};

export const clearCounter = () => {
  return {
    type: CLEAR_COUNTER,
  };
};

// counter 에 사용될 액션을 생성한다.

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case PLUS_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case MINUS_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    case CLEAR_COUNTER:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
}

export default counterReducer;
