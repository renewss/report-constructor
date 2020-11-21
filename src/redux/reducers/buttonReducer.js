import * as actionTypes from "../actionTypes/btnActionTypes";

export default function btnReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.BTN_ADD:
      return [...state, action.payload];

    case actionTypes.BTN_MOVE_START:
      return state.map((el) => {
        if (el.id === action.payload.id) return { ...el, isMoving: true };

        return el;
      });

    case actionTypes.BTN_MOVE_END:
      return state.map((el) => {
        if (el.id === action.payload.id)
          return {
            ...el,
            isMoving: false,
          };

        return el;
      });

    case actionTypes.BTN_DROP:
      return state.map((el) => {
        if (el.id === action.payload.id)
          return {
            ...el,
            parent: action.payload.parent,
            location: action.payload.location,
            isMoving: false,
          };

        return el;
      });

    default:
      return state;
  }
}
