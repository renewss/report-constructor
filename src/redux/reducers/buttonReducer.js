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

    case actionTypes.BTN_MOVE_END: {
      return state.map((el) => {
        if (el.id === action.payload.id)
          return { ...el, isMoving: false, place: action.payload.place };

        return el;
      });
    }

    default:
      return state;
  }
}
