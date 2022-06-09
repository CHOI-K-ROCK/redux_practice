import { UPDATE_TEXT, CLEAR_TEXT } from '../types/text';

export const updateText = (value: string) => {
  return {
    type: UPDATE_TEXT,
    payload: { value },
  };
};

export const clearText = () => {
  return {
    type: CLEAR_TEXT,
  };
};
