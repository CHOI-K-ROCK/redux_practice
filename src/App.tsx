import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  plusCounter,
  minusCounter,
  clearCounter,
} from './redux/counter/actions';

function App() {
  const state = useSelector((state: { count: number }) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div className="App">
      <div className="count">{state.count}</div>
      <div className="buttons">
        <button onClick={() => dispatch(plusCounter())}>더하기</button>
        <button onClick={() => dispatch(minusCounter())}>빼기</button>
        <button onClick={() => dispatch(clearCounter())}>초기화</button>
      </div>
    </div>
  );
}

export default App;
