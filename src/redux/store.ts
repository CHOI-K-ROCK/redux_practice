import {
  combineReducers,
  legacy_createStore as createStore,
} from '@reduxjs/toolkit';

import counterReducer from './counter/reducer';
import arrayReducer from './array/reducer';
import textReducer from './text/reducer';

const reducer = combineReducers({
  counterReducer,
  arrayReducer,
  textReducer,
});

const store = createStore(reducer);

console.log(store.getState());
export default store;
