import {
  SET_MSG
} from '../actionTypes/HomeType.js'

// 修改内容
const setMagAction = value => {
  return {
    type: SET_MSG,
    value
  }
}

export {
  setMagAction
}