import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addElem, removeElem } from '../redux/array/actions';

const Container = styled.section`
  display: grid;
  place-items: center;

  position: relative;
  padding: 20px;
  padding-top: 40px;

  border: 1px solid #000;

  .title {
    padding: 10px;
    background-color: #fff;

    position: absolute;
    top: -18px;
  }
  .input_wrapper {
    margin-top: 20px;
  }

  .arr_el {
    display: flex;

    button {
      margin-left: 5px;
    }
  }
`;

function Array(): JSX.Element {
  const state = useSelector(
    (state: { arrayReducer: { arr: string[] } }) => state
  );
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>('');

  const addHandler = () => {
    dispatch(addElem(inputValue));
    setInputValue('');
  };

  return (
    <Container>
      <div className="title">Array</div>
      <div className="arrays">
        {state.arrayReducer.arr.map((el, idx) => {
          return (
            <div key={idx} className="arr_el">
              <div>{el}</div>
              <button onClick={() => dispatch(removeElem(idx))}>삭제</button>
            </div>
          );
        })}
        <div className="input_wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addHandler}>추가</button>
        </div>
      </div>
    </Container>
  );
}

export default Array;
