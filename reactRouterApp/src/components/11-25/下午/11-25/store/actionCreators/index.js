// 修改名称的动作
import {
  SET_NAME_TYPE
} from '../actionCreators/index'

export const setNameAction = value => ({
  type: SET_NAME_TYPE,
  value
})