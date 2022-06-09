import { combineReducers } from '@reduxjs/toolkit';
import arrayReducer from './array';
import counterReducer from './counter';
import objectReducer from './object';
import textReducer from './text';

const rootReducer = combineReducers({
  arrayReducer,
  counterReducer,
  objectReducer,
  textReducer,
});

export default rootReducer;
