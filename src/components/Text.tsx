import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateText } from '../redux/text/actions';
import styled from 'styled-components';

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
`;

function Text(): JSX.Element {
  const state = useSelector(
    (state: { textReducer: { content: string } }) => state
  );
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="title">Text</div>
      <p>{state.textReducer.content}</p>
      <div className="inputWrapper">
        <input type="text" />
        <button onClick={() => dispatch(updateText('some'))}>업데이트</button>
      </div>
    </Container>
  );
}

export default Text;
