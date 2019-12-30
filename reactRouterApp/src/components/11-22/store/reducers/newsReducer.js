const initState = {
  msg: '我是新闻',
  day: '星期五！！！'
}
export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'setMsg':
      newState.msg = action.value
      console.log(newState)
      return newState;

    default:
      return state;
  }
}