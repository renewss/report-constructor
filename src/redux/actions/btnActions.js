import * as actionTypes from "../actionTypes/btnActionTypes";

export const addBtn = (payload) => {
  return {
    type: actionTypes.BTN_ADD,
    payload,
  };
};

export const moveBtnStart = (payload) => {
  return {
    type: actionTypes.BTN_MOVE_START,
    payload,
  };
};

export const moveBtnEnd = (payload) => {
  return {
    type: actionTypes.BTN_MOVE_END,
    payload,
  };
};
