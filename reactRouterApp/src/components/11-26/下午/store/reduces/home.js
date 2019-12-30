import {
  SET_NAME
} from '../actionTypes/home'
const initState = {
  content: '我是首页'
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case SET_NAME:
      newState.content = action.value
      return newState;

    default:
      return state;
  }
}