import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer/";

// 1.安装处理action动作里面的异步请求的中间件---redux-thunk
import thunk from "redux-thunk";
// 2.使用什么安装：applyMiddleware(thunk)
const _thunk = applyMiddleware(thunk);
// 3.安装调试工具和我们的中间件
// 安装调试工具的
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// compose:它是用来包装多个applyMiddleware增强器的
// applyMiddleware：它是用来安装中间件
export default createStore(reducer, composeEnhancers(_thunk));
