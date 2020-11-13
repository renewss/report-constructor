import { combineReducers } from "redux";
import btnReducer from "./buttonReducer";

const allReducers = combineReducers({
  btns: btnReducer,
});

export default allReducers;
