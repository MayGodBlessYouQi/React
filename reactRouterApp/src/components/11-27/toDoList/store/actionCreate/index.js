// 添加一条
import {
  ADD_ITEM
} from '../actionType/index'

export const addItem = value => ({
  type: ADD_ITEM,
  value
})