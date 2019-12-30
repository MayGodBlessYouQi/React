import { SEVE_LIST } from "../actionType";
const initState = {
  list: []
};

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  // 业务
  switch (action.type) {
    case SEVE_LIST:
      newState.list = action.list;
      return newState;
    default:
      return state;
  }
};
