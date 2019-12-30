import React from 'react';
// 引入路由
import { BrowserRouter, Route } from 'react-router-dom'
// 引入header
import Header from './header'
const Index = (props) => {
  // 小技巧，使用实例化对象产生路由信息
  // console.log(new BrowserRouter())
  const click = () => {
    const path = new BrowserRouter().history.location.pathname
    if (path === '/news') alert('你好')
  }
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/home' component={props => <div>我是首页</div>}></Route>
        <Route path='/news' component={props => <div>我是新闻页</div>}></Route>
        <button onClick={click}>获取路由信息</button>
      </main>
    </BrowserRouter>
  );
}

export default Index;
