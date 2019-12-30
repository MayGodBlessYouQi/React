// 提交
import {
  SUBMEIT
} from '../actionType/index'
import Axios from 'axios';
// 同步提交的动作
const submit = (value) => {
  return {
    type: SUBMEIT,
    value
  }
}
// 
export const submitAction = () => {
  // 普通的action动作返回的是一个对象,而我们的中间件
  return (dispatch, getState) => {
    // king、恶龙咆哮
    axios.get('/').then(res => {
      console.log(res.data)
    })
  }
}