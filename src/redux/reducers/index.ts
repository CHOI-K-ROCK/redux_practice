import { combineReducers } from '@reduxjs/toolkit';
import arrayReducer from './array';
import counterReducer from './counter';
import objectReducer from './object';
import textReducer from './text';

const reducers = combineReducers({
  counterReducer,
  arrayReducer,
  textReducer,
  objectReducer,
});

export default reducers;
