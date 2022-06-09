import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { plusCounter, minusCounter, clearCounter } from '../modules/counter';

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border: 1px solid #000;

  .title {
    background-color: #fff;
    position: absolute;
    padding: 10px;
    top: -18px;
  }

  .count {
    margin: 10px 0 20px;
  }

  .buttons {
    button {
      margin-left: 10px;
    }

    button:first-child {
      margin-left: 0px;
    }
  }
`;

function Counter(): JSX.Element {
  const state = useSelector(
    (state: { counterReducer: { count: number } }) => state
    // 사용할 상태의 타입을 지정해준다.
  );
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="title">Counter</div>
      <div className="count">{state.counterReducer.count}</div>
      <div className="buttons">
        <button onClick={() => dispatch(plusCounter())}>더하기</button>
        <button onClick={() => dispatch(minusCounter())}>빼기</button>
        <button onClick={() => dispatch(clearCounter())}>초기화</button>
      </div>
    </Container>
  );
}

export default Counter;
