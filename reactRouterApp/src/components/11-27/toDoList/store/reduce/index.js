import {
  ADD_ITEM
} from '../actionType/index'
const init = {
  dome: [{
    id: 1,
    title: '今天吃了十个包子',
    checkbox: false
  }]
}

export default (state = init, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 添加一条
    case ADD_ITEM:
      let dome = newState.dome
      let id = 1
      if (dome.length) {
        id = dome[dome.length - 1].id + 1
      }
      dome.push({
        id,
        checkbox: false,
        title: action.value
      })
      // 重新赋值
      newState.dome = dome;
      // 返回新的状态
      return newState;

    default:
      return state;
  }
}