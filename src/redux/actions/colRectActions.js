import * as actionTypes from "../actionTypes/colRectActionTypes";

export const addColRect = (payload) => {
  return {
    type: actionTypes.COL_RECT_ADD,
    payload,
  };
};

export const removeColRect = (payload) => {
  return {
    type: actionTypes.COL_RECT_REMOVE,
    payload,
  };
};
