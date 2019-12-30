// 这个文件才是动作action集合,给咱们组件里dispatch用的
// 当我们需要快速了解整个项目中操作redux的部分时，来这个文件看
import {
  setHomeName
} from '../actionType/index'
// 修改首页名称的---动作(action)
const setHomeNameAction = value => {
  console.log(setHomeName)
  // 这个函数时给dispatch用的,那么这个函数必须返回一个action对象
  return {
    type: setHomeName,
    value
  }
}
export {
  setHomeNameAction
}