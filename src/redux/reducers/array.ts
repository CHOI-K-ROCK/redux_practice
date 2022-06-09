import { ADD_ELEM, REMOVE_ELEM, CLEAR_ELEM } from '../types/array';

const initialState = {
  arr: ['기본데이터1', '기본테이터 2'],
};

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
