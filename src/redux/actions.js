import * as actionTypes from "./actionTypes";

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

//

// export const addColRect = (payload) => {
//   return {
//     type: actionTypes.COL_RECT_ADD,
//     payload,
//   };
// };

// export const removeColRect = (payload) => {
//   return {
//     type: actionTypes.COL_RECT_REMOVE,
//     payload,
//   };
// };

// export const addRowRect = (payload) => {
//   return {
//     type: actionTypes.ROW_RECT_ADD,
//     payload,
//   };
// };

// export const removeRowRect = (payload) => {
//   return {
//     type: actionTypes.ROW_RECT_REMOVE,
//     payload,
//   };
// };
