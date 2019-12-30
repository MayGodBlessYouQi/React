import {
  PUSHITEM
} from '../actionTypes/index'

const SHUIGUOS = value => ({
  type: PUSHITEM,
  value
})

const DELETEINPUT = value => ({
  type: 'deleteinput',
  value
})
export {
  SHUIGUOS,
  DELETEINPUT
}