import {
  createStore,
  combineReducers
} from 'redux'
import HomeReducer from './reducers/HomeReducer'
import newsReducer from './reducers/newsReducer'
// combineReducers 合并多个reducer，这样的好处是每个页面都有对应的状态目录
const reducers = combineReducers({
  home: HomeReducer,
  newsReducer
})

export default createStore(reducers)