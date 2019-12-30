import {
  setHomeName
} from '../actionType/index'
const defaultState = {
  home: {
    name: '北工商',
    yer: '20年'
  },
  about: {
    title: '走进北工商',
    content: '欢迎您！'
  }
}
// 纯函数;没有第三方依赖，没有异步事件，没有定时器和看接口请求，没有额外的数据 state是一个只读状态  action动作
export default (state = defaultState, action) => {
  // 默认就克隆好状态
  let newState = JSON.parse(JSON.stringify(state));
  // 通过动作类型处理新状态
  switch (action.type) {
    case setHomeName:
      //真正的处理逻辑 -- 修改首页的name值
      newState.home.name = action.value
      return newState

    default:
      break;
  }
}