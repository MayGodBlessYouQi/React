import {
  SET_NAME_TYPE
} from '../actionTypes/index'
const initState = {
  data: {
    name: "react-redux",
    msg: "今天开始学习react-redux"
  }
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SET_NAME_TYPE:
      newState.data.name = action.value;
      return newState;
    default:
      return state;
  }
};