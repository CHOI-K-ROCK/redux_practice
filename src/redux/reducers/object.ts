import { UPDATE_CONTENT, UPDATE_TITLE, CLEAR_OBJECT } from '../types/object';

const initialState = {
  obj: {
    title: '기본제목',
    content: '기본본문',
  },
};

const objectReducer = (
  state = initialState,
  action: { type: string; payload: { title: string; content: string } }
) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return Object.assign({}, state.obj, {
        obj: {
          ...state.obj,
          title: action.payload.title,
        },
      });

    case UPDATE_CONTENT:
      return Object.assign({}, state.obj, {
        obj: {
          ...state.obj,
          content: action.payload.content,
        },
      });

    case CLEAR_OBJECT:
      return Object.assign({}, state.obj, {
        obj: {
          title: '',
          content: '',
        },
      });

    default:
      return state;
  }
};

export default objectReducer;
