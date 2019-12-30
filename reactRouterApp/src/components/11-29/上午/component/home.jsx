import React from 'react';
import { NavLink } from 'react-router-dom'
const Home = props => {
  const { match } = props
  console.log(props)
  return (
    <div>
      <h1>我是首页</h1>
      <NavLink to={`${match.patch}/left`}>左侧</NavLink>
      {/* 二级嵌套的路由配置，需要再次使用路由渲染函数，它是相当于vue路由里的 */}
    </div>
  );
}

export default Home;
