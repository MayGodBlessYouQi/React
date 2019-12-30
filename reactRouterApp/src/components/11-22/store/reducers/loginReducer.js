const initState = {
  user: ''
}
export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 当页面上发起一个登录成功的动作后，我们将用户信息存储
    case 'setMsg':
      newState.user = action.value
      console.log(newState)
      return newState;

    default:
      return state;
  }
}