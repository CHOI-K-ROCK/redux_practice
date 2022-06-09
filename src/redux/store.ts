import {
  combineReducers,
  legacy_createStore as createStore,
} from '@reduxjs/toolkit';

import counterReducer from './counter/reducer';
import arrayReducer from './array/reducer';
import textReducer from './text/reducer';
import objectReducer from './object/reducer';

const reducer = combineReducers({
  counterReducer,
  arrayReducer,
  textReducer,
  objectReducer,
});

const store = createStore(reducer);

console.log(store.getState());
export default store;
