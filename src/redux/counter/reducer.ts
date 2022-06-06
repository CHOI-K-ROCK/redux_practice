import { Reducer, Action } from '@reduxjs/toolkit';
import { PLUS_COUNTER, MINUS_COUNTER, CLEAR_COUNTER } from './types';

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
