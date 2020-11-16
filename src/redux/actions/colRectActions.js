import * as actionTypes from "../actionTypes/colRectActionTypes";

export const addColRect = (payload) => {
  return {
    type: actionTypes.COL_RECT_ADD,
    payload: {
      ...payload,
      id: {
        level: payload.parent.level + 1,
        count: payload.children.length,
      },
    },
  };
};

export const removeColRect = (payload) => {
  return {
    type: actionTypes.COL_RECT_REMOVE,
    payload,
  };
};
