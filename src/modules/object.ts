export const UPDATE_TITLE = 'object/UPDATE_TITLE';
export const UPDATE_CONTENT = 'object/UPDATE_CONTENT';
export const CLEAR_OBJECT = 'object/CLEAR_OBJECT';

export const updateTitle = (title: string) => {
  return {
    type: UPDATE_TITLE,
    payload: {
      title,
    },
  };
};

export const updateContent = (content: string) => {
  return {
    type: UPDATE_CONTENT,
    payload: {
      content,
    },
  };
};

export const clearObject = () => {
  return {
    type: CLEAR_OBJECT,
  };
};

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
