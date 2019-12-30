/*
作为子组件，需要使用连接器，获取父级组件托管的store的值
*/
import React from "react";
import { connect } from "react-redux";

const Child = props => {
  console.log(props);
  return (
    <div>
      <h2>我是子组件</h2>
      <hr />
      今天要学的是：{props.name}、{props.msg}
      <hr />
      <input type="text" />
      <button onClick={props.setNameAction}>修改名称</button>
    </div>
  );
};
// 1.给connect方法的第一个参数：映射reducer里的状态到组件的属性上
const mapStateToProps = reducer => {
  // 必须要有返回值
  // const name = reducer.data.name + 123;
  // return { ...reducer.data, name };
  // 返回出来的对象，都会被合并到props里，因为date自身是一个对象，所有它里面的属性都会被合并到props对象里；
  return reducer.data;
};

// 2.给connect方法的第二个参数：映射派发动作到组件的属性上
const mapDispatchToProps = dispatch => {
  // 必须返回的是一个对象，这样它才能合并到porps里
  return {
    setNameAction () {
      // 派发动作
      const action = {
        type: "setNameAction",
        value: "123456"
      };
      dispatch(action);
    },
    setMsgAction () {
      console.log("设置信息的");
    }
  };
};

// 使用连接器暴露出去我们的子组件
export default connect(mapStateToProps, mapDispatchToProps)(Child);
