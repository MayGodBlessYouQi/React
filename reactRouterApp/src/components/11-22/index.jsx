import React from 'react';
import { BrowserRouter, NavLink, Route, Prompt, withRouter } from 'react-router-dom'
import Home from './component/home'
import News from './component/news'
import Login from './component/login'
// 拦截器组件
const Lanjie = withRouter(props => {
  const { user } = store.getState().loginReducer
  return <Prompt when={!user} message={(location, action) => {
    console.log(location)
    if (location.pathname === '/news') {
      alert('您还没有登录，您赶紧去登录吧！')
      props.history.replace('/login')
      return false;
    }
    // true允许跳转
    return true;
  }} />
})
// 主组件
const Index = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'>首页</NavLink>&nbsp;&nbsp;
        <NavLink to='/news'>新闻页</NavLink>&nbsp;&nbsp;
        <NavLink to='/login'>登录</NavLink>
      </nav>
      <Lanjie />
      <main>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/login' component={Login} />
      </main>
    </BrowserRouter>
  );
}

export default Index;
