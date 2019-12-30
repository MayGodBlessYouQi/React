import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
// applyMiddleware:增强器，在redux中专门用来安装中间件的
// 安装处理action异步请求的中间件：cnpm  i  -S  redux-thunk

// createStore:只能接收两个参数，第一个永远都是reducer，第二个参数，就是一些扩展和辅助类的；
export default createStore(reducer, applyMiddleware(thunk));
