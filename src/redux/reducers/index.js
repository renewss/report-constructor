import { combineReducers } from "redux";
import btnReducer from "./buttonReducer";
import colRectReducer from "./colRectReducer";
import rowRectReducer from "./rowRectReducer";

const allReducers = combineReducers({
  btns: btnReducer,
  colRects: colRectReducer,
  rowRects: rowRectReducer,
});

export default allReducers;
