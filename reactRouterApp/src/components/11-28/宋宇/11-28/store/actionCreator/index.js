import { SEVE_LIST } from "../actionType";
import { searchApi } from "../../api";
import { message } from "antd";
// 1.同步的--动作对象
const seveList = list => {
  return {
    type: SEVE_LIST,
    list
  };
};

// 2.异步的--动作方法
export const seveListAction = serach => {
  // 在这里我们去请求接口，需要返回的是一个函数而不是对象
  return (dispatch, getState) => {
    // 这里才是正在的接口请求的地方
    message.loading("正在请求中……", 0);
    searchApi(serach).then(
      res => {
        // 当成功之后，先把loading提示框干掉
        message.destroy();
        // 当接口处理完成之后，最终再使用dispatch去操作咱们的store
        dispatch(seveList(res.s));
        message.success("搜索成功！", 1.5);
      },
      err => {
        message.error("搜索失败！");
      }
    );
  };
};
