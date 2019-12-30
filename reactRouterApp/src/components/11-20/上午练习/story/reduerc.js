const newState = {
  $: 100
}

export default (state = newState, action) => {
  switch (action.type) {
    case 'set$':
      let newState = JSON.parse(JSON.stringify(state))
      newState.$ = action.value;
      return newState;
    default:
      return state;
  }
}