const initState = {
  name: 'react-redux',
  msg: '今天开始学习react-redux'
}

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'setNameAction':
      newState.name = action.value;
      return newState;
    default:
      return state;
  }
}