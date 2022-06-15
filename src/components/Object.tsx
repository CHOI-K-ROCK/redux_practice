import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { objectActions } from '../modules/object';

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

function Object(): JSX.Element {
  const state = useSelector(
    (state: { objectReducer: { obj: { title: string; content: string } } }) =>
      state
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <Container>
      <div className="title">Object</div>
      <div className="content_title">{state.objectReducer.obj.title}</div>
      <div className="content">{state.objectReducer.obj.content}</div>
      <div className="title_mod_wrapper">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => dispatch(objectActions.updateTitle(title))}>
          제목 업데이트
        </button>
      </div>
      <div className="content_mod_wrapper">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={() => dispatch(objectActions.updateContent(content))}>
          내용 업데이트
        </button>
      </div>
    </Container>
  );
}

export default Object;
