import { SUBMEIT, SHOW, CLOSE, SUCCESS, ERROR } from "../actionTypes";
import axios from "axios";
// 同步提交的动作
const submit = value => {
  return {
    type: SUBMEIT,
    value
  };
};

const showAction = () => ({
  type: SHOW
});

const successAction = () => ({
  type: SUCCESS,
  value: "恭喜你！登陆成功！"
});

const errorAction = () => {
  return {
    type: ERROR,
    value: "很抱歉，登陆失败！"
  };
};

const closeAction = () => {
  return {
    type: CLOSE
  };
};
// 异步处理提交
export const submitAction = uerdata => {
  // console.log("拿到的入参：", uerdata);
  // 普通的action动作返回的是一个对象，而我们的中间件异步请求返回的是函数
  return (dispatch, getState) => {
    // ajax请求；请求成功之后再用dispatch去操作store
    // 1. 发起一个让loading显示的动作
    dispatch(showAction());
    axios
      .get("/")
      .then(res => {
        if (res.data) {
          // 显示成功
          dispatch(successAction());
          // 将接口的用户信息存入到store
          dispatch(submit(uerdata));
        } else {
          // 显示失败的
          dispatch(errorAction());
        }
      })
      .finally(() => {
        // 关闭掉loading
        setTimeout(() => {
          dispatch(closeAction());
        }, 4000);
      });
  };
};
