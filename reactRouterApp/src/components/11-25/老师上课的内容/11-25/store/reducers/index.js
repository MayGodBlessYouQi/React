const initState = {
  data: {
    name: "react-redux",
    msg: "今天开始学习react-redux"
  }
};

export default (state = initState, action) => {
  // console.log(action);
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "setNameAction":
      newState.data.name = action.value;
      return newState;
    default:
      return state;
  }
};
