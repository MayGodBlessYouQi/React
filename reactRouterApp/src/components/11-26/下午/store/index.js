import {
  createStore,
  combineReducers
} from 'redux'

import Home from './reduces/home'
import news from './reduces/news'

export default createStore(
  combineReducers({
    HomeReducer: Home,
    NewsReducer: news
  })
)