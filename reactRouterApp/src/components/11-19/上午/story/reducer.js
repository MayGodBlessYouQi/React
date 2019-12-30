// 定义一个默认的数据
const defaultState = {
  name: '宋宇',
  theme: 'red'
}

// state:状态，只读,action:动作
export default (state = defaultState, action) => {
  // 3. 当组件派发了动作，这里的action就是组件派发过来的对象
  console.log(action)
  switch (action.type) {
    case 'setName':
      // state是只读的，也就是只能读取，不能修改
      alert(`您要修改的是名称：${action.value}`)
      // 深拷贝
      //[*]虽然reducer里的state不能直接修改,但是,只要我们返回出去的值是新的,那么redux在底层就会帮我们合并掉state的新的state
      let newState = JSON.parse(JSON.stringify(state))
      newState.name = action.value;
      console.log(newState)
      return newState;
    default:
      return state;
  }
}