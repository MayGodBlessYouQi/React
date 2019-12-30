// 一个非路由组件：不是通过Route组件加载处理的就叫非路由组件
// 一个非路由组件如果想拥有路由的数据的化，需要使用withRouter方法
import React from "react";
import { withRouter } from "react-router-dom";
// 我还想要redux里的数据
import { connect } from "react-redux";

const OffRoute = props => {
  console.log(props);
  return <div>123123</div>;
};

// 这是正经的官方语法，即拥有了redux的数据又可以拥有路由的数据
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log(stateProps);
  console.log(dispatchProps);
  console.log(ownProps);
  return { ...stateProps, ...dispatchProps, ownProps };
};
export default connect(
  (state, ownProps) => {
    console.log(ownProps);
    return {};
  },
  (dispatchEvent, ownProps) => {
    console.log(ownProps);
    return {};
  },
  mergeProps
)(withRouter(OffRoute));
