import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import arrayReducer from '././modules/array';
import counterReducer from '././modules/counter';
import objectReducer from '././modules/object';
import textReducer from '././modules/text';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: {
    arrayReducer,
    counterReducer,
    objectReducer,
    textReducer,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
