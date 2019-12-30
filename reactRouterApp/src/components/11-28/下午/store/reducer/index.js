import {
  SEVE_LIST
} from '../actionType/index'

const init = {
  list: []
}

export default (state = init, action) => {
  console.log('action的值为：', action)
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case SEVE_LIST:

      return newState;

    default:
      return state;
  }
}