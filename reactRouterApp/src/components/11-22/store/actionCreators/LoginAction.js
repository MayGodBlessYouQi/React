import {
  LOGIN
} from '../actionTypes/LoginType'

// 登录的动作
const LoginAction = value => {
  return {
    type: LOGIN,
    value
  }
}

export {
  LoginAction
}