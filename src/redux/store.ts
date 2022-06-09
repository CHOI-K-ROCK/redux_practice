import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const store = createStore(reducers);

console.log(store.getState());
export default store;
