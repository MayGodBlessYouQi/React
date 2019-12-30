import React from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";

const Home = props => {
  const { match, msg } = props;
  // console.log(props);
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={props.setMsg}>修改首页内容</button>
      <nav>
        <NavLink to={`${match.path}/left`}>左侧</NavLink>
        <NavLink to={`${match.path}/right`}>右侧</NavLink>
      </nav>
      {/* 二级嵌套的路由配置，需要再次使用路由渲染函数，它就相当于vue路由的里route-viwe组件 */}
      {renderRoutes(props.route.routes)}
    </div>
  );
};

const mapStateToProps = state => state.home;
const mapDispatchToProps = dispatch => {
  return {
    setMsg() {
      // action
      const action = {
        type: "SET_MSG_SY_001",
        value: "我就是首页"
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
