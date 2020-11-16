import * as actionTypes from "../actionTypes/colRectActionTypes";

export default function rectReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.COL_RECT_ADD:
      return !!Object.keys(state).length
        ? traverser(state, action.payload)
        : action.payload;

    case actionTypes.COL_RECT_REMOVE:
      break;

    default:
      return state;
  }
}

function traverser(state, payload) {
  console.log("Traverser");
  if (state.id.level === payload.parent.level) {
    state.children.push(payload);
  } else if (!!state.children.length) {
    state.children = state.children.map((el) => {
      return traverser(el, payload);
    });
  }

  return state;
}
