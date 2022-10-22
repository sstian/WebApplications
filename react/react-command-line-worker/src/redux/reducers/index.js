import { combineReducers } from "redux";

import rowDataReducer from "./rowData";
import commandLineReducer from "./commandLine";

export default combineReducers({
  rowData: rowDataReducer,
  commandLine: commandLineReducer
});