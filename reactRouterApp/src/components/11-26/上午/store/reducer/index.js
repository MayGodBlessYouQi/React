import {
  PUSHITEM
} from '../actionTypes/index'
const initState = {
  list: [{
      id: 1,
      label: '苹果'
    },
    {
      id: 2,
      label: '猪肉'
    }, {
      id: 3,
      label: '西瓜'
    }, {
      id: 4,
      label: '香蕉'
    }
  ]
}

export default (state = initState, action) => {
  // 克隆
  let newState = JSON.parse(JSON.stringify(state))
  // 业务
  switch (action.type) {
    // 业务1：添加一条新数据
    case PUSHITEM:
      if (action.value) {
        const label = action.value;
        console.log(newState.list[newState.list.length - 1])
        if (!newState.list[newState.list.length - 1]) {
          newState.list.push({
            id: 1,
            label
          })
        } else {
          const id = newState.list[newState.list.length - 1].id + 1;
          newState.list.push({
            id,
            label
          })
        }
      }
      console.log(newState)
      return newState;
    case 'deleteinput':
      newState.list.splice(newState.list.length - 1, 1);
      console.log(newState)
      return newState;
    default:
      return state;
  }
}