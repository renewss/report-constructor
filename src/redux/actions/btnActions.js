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
    payload: {
      ...payload,
      isMoving: true,
    },
  };
};

export const moveBtnEnd = (payload) => {
  return {
    type: actionTypes.BTN_MOVE_END,
    payload: {
      ...payload,
      isMoving: false,
    },
  };
};

export const dropBtn = (payload) => {
  return {
    type: actionTypes.BTN_DROP,
    payload: {
      ...payload,
    },
  };
};
