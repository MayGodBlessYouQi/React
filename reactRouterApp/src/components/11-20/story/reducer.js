const defaultState = {
  input: '默认的内容'
}

// 纯函数式的reducer
export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'setInput':
      let newState = JSON.parse(JSON.stringify(state))
      newState.input = action.value;
      return newState;
    default:
      return state;
  }
}