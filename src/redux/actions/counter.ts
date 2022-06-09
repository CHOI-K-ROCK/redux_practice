import { PLUS_COUNTER, MINUS_COUNTER, CLEAR_COUNTER } from '../types/counter';

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
