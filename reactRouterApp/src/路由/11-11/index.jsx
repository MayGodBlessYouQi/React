import React, { Component } from 'react';
// 一个二级的动态路由：
// 不同的id值加载不同的小说内容
// 【重点】路由传参5种方式；导航里的to对象中serach、hash、state、动态路由、在route渲染属性中通过props传递给组件
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
// 子组件
const Book = props => {
  // 将动态路由中的参数结构出来
  const { params } = props.match;
  // 相当于请求数据过来
  const { book } = require('./04动态路由基础/data.json')
  // 用路由的参数查找数据里对应的信息
  const text = book.find((item) => item.id === params.id);

  let date = new Date();
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = date.getDate() + ' ';
  let h = date.getHours() + ':';
  let m = date.getMinutes() + ':';
  let s = date.getSeconds();
  console.log(Y + M + D + h + m + s);

  return <div dangerouslySetInnerHTML={{ __html: text.text }} />
}
export class Index extends Component {
  render () {
    return (
      <BrowserRouter>
        <NavLink to='/book/1'>斗破苍穹</NavLink>
        <NavLink to='/book/9'>斗罗大陆</NavLink>
        {/* 动态路由 */}
        <Route path='/book/:id' component={Book} />
      </BrowserRouter>
    );
  }
}

export default Index;
