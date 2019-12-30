// 1. 先解构出去咱们要使用的创建redux仓库的方法
import {
  createStore
} from 'redux'
// 2. 引入reducer,咱们自己根据官方的固定语法写出来的数据库
import reducer from './reducer'
// 暴露出去
export default createStore(reducer)