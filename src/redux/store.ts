import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
const store = createStore(counterReducer);

export default store;
