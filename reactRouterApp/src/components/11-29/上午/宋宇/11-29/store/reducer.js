// 当我们使用路由和redux的时候，切记，在reducer里定义的数据名称一定不要和路由里的数据名称冲突
const initState = {
  home: {
    msg: "我是首页的数据"
  },
  news: {
    msg: "我是新闻的数据"
  }
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  // 业务
  switch (action.type) {
    case "SET_MSG_SY_001":
      newState.home.msg = action.value;
      return newState;
    default:
      return state;
  }
};
