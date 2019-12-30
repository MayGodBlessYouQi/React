import {
  createStore,
  applyMiddleware
} from 'redux'
import thund from 'react-redux'
// applyMiddleware:增强器，在redux中专门用来安装中间件的
// 安装 cnpm i -S redux-thund
// createStore:只能接受两个参数，第一个永远都是reducer，第二个参数，就是一些扩展和辅助类的
import reducer from './reducers/index'

export default createStore(reducer, applyMiddleware(thund))