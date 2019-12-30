import {
  createStore
} from 'redux'

import reduce from './reduce/index'

export default createStore(reduce)