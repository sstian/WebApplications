// 汇总所有的 reducers
import { combineReducers } from "redux";

// 1. 一般形式：combineReducers({ <state>: <reducer function> })
import countReducer from "./count";
import persontReducer from "./person";

export default combineReducers({
  count: countReducer,
  persons: persontReducer
});

// 2. 对象简写形式：
// import count from "./count";
// import persons from "./person";

// export default combineReducers({
//   count,
//   persons
// });