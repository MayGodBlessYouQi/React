import {
  createStore,
  applyMiddleware
} from 'redux'

import thunk from 'react-redux'
import reduce from './reducer/index'


export default createStore(reduce, applyMiddleware(thunk))