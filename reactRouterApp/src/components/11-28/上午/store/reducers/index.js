const init = {
  loading: '正在请求....',
  isShow: false
}

export default (state = init, action) => {
  switch (action.type) {
    case 'loadingState':

      break;

    default:
      return state;
  }
}