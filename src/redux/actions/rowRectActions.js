import * as actionTypes from "../actionTypes/rowRectActionTypes";

export const addRowRect = (payload) => {
  return {
    type: actionTypes.ROW_RECT_ADD,
    payload,
  };
};

export const removeRowRect = (payload) => {
  return {
    type: actionTypes.ROW_RECT_REMOVE,
    payload,
  };
};
