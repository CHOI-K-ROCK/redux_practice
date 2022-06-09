import { UPDATE_CONTENT, UPDATE_TITLE, CLEAR_OBJECT } from '../types/object';

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
