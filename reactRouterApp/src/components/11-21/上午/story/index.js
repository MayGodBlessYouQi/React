// story按组织拆分结构
// actionCreators 它是dispatch的动作集合
// actionTypes 它是action中type的集合，给reducers和actionCreatos用
// reducers 它是状态名单的集合
// index.js 它是最终的仓库
import {
  createStore
} from 'redux'

import reducer from './reducers'

export default createStore(reducer);