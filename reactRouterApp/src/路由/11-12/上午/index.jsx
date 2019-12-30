import React from 'react';
// 引入路由
import { BrowserRouter, NavLink, Route, Prompt } from 'react-router-dom'
// 1.Prompt的执行，以及参数
import Home from './component/home'
const Index = () => {
  return (
    <BrowserRouter>
      {/* 导航 */}
      <nav style={{ fontSize: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
        <NavLink to='/home'>首页</NavLink>
        <NavLink to={{
          pathname: '/member',
          state: { name: '阿涵', $: 1 }
        }}>会员</NavLink>
        <NavLink to='/news'>新闻页</NavLink>
      </nav>
      {/* 线路 */}
      <main>
        {/* 拦截器1、基础的使用认识 */}
        {/* <Prompt when={true} message='您真的要离开这个页面吗' /> */}
        {/* 拦截器2、去往下一个路由的拦截 */}
        {/* Prompt的message接收一个函数，该函数用来做进入下一个路由的拦截方法；该函数两个参数，第一个是location，是指的下一个路由的信息，action是本次路由动作的类型，比如push等 */}
        {/* <Prompt when={true} message={(location, action) => {
          if (location.pathname === '/member') {
            return false;
          }
        }}></Prompt> */}
        <Route path='/home' component={Home} />
        <Route path='/member' component={() => (<div>我是会员</div>)} />
        <Route path='/news' component={() => (<div>我是新闻</div>)} />
      </main>
    </BrowserRouter>
  );
}

export default Index;
