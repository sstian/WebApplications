import { createStore, applyMiddleware } from "redux";
// 借助中间件 redux-thunk，支持异步action
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));