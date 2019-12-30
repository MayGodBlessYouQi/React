import React from 'react';
// 引入路由Redirect:从定向组件
import { BrowserRouter, NavLink, Route, Redirect } from 'react-router-dom'
const Index = () => {
  return (
    <BrowserRouter>
      {/* 导航 */}
      <nav>
        <NavLink activeStyle={{ color: 'red' }} to='/home'>首页</NavLink>
        <NavLink activeStyle={{ color: 'red' }} to='/news'>新闻</NavLink>
      </nav>
      {/* 线路 */}
      <main>
        {/* 重定向 */}
        <Redirect to={{
          pathname: '/home',
          search: '?name=xiaoming&age=20',
          state: { name: '梁永琪', age: '20' }
        }} />
        <Route path='/home' component={props => {
          console.log(props.location)
          return <div>我是首页</div>
        }} />
        <Route path='/news' component={() => <div>我是新闻</div>} />
      </main>
    </BrowserRouter>
  );
}

export default Index;
