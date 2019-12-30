import { SHOW, CLOSE, SUCCESS, ERROR, SUBMEIT } from "../actionTypes";
const initState = {
  isShow: false,
  loading: "正在请求……",
  userInfo: {}
};

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  // 业务
  switch (action.type) {
    case SUBMEIT:
      newState.userInfo = action.value;
      return newState;
    case ERROR:
      newState.loading = action.value || "失败！";
      return newState;
    case SUCCESS:
      newState.loading = action.value || "成功！";
      return newState;
    case CLOSE:
      newState.isShow = false;
      return newState;
    case SHOW:
      newState.isShow = true;
      return newState;
    default:
      return state;
  }
};
