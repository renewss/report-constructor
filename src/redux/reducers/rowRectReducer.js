import * as actionTypes from "../actionTypes/rowRectActionTypes";

export default function rectReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ROW_RECT_ADD:
      return !!Object.keys(state).length
        ? traverser(state, action.payload)
        : action.payload;

    case actionTypes.ROW_RECT_REMOVE:
      break;

    default:
      return state;
  }
}

function traverser(state, payload) {
  if (
    state.id.level === payload.parent.level &&
    state.id.count === payload.parent.count
  ) {
    state.children.push(payload);
  } else if (!!state.children.length) {
    state.children = state.children.map((el) => {
      return traverser(el, payload);
    });
  }

  return state;
}
