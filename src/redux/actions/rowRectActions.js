import * as actionTypes from "../actionTypes/rowRectActionTypes";

export const addRowRect = (payload) => {
  return {
    type: actionTypes.ROW_RECT_ADD,
    payload: {
      ...payload,
      id: {
        level: payload.parent.level + 1,
        count: payload.children.length,
      },
    },
  };
};

export const removeRowRect = (payload) => {
  return {
    type: actionTypes.ROW_RECT_REMOVE,
    payload,
  };
};
