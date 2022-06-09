// 타입 작성

const ADD_ELEM = 'array/ADD_ELEM';
const REMOVE_ELEM = 'array/REMOVE_ELEM';
const CLEAR_ELEM = 'array/CLEAR_ELEM';

//action 함수 작성

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

// 초기 상태 지정

const initialState = {
  arr: ['기본데이터1', '기본테이터 2'],
};

// 리듀서 작성

const arrayReducer = (
  state = initialState,
  action: { type: string; payload: { value: string; idx: number } }
) => {
  switch (action.type) {
    case ADD_ELEM:
      return {
        ...state.arr,
        arr: [...state.arr, action.payload.value],
      };

    case REMOVE_ELEM:
      return {
        ...state.arr,
        arr: state.arr.filter((el, idx) => {
          return idx !== action.payload.idx;
        }),
      };

    case CLEAR_ELEM:
      return {
        ...state.arr,
        arr: [],
      };

    default:
      return state;
  }
};

export default arrayReducer;
