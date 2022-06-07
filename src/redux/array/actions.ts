import { ADD_ELEM, REMOVE_ELEM, CLEAR_ELEM } from './types';

export const addElem = (value: string) => {
  return {
    type: ADD_ELEM,
    payload: {
      value,
    },
  };
};

export const removeElem = (idx: number) => {
  return {
    type: REMOVE_ELEM,
    payload: {
      idx,
    },
  };
};

export const clearElem = () => {
  return {
    type: CLEAR_ELEM,
  };
};

// action 은 type 을 리턴한다.
// reducer 는 여기서 받은 type을 기반으로 로직을 실행한다.
