import React, { Component } from 'react';
// Switch和Redireact一个配合使用
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'
export class Index extends Component {
  render () {
    return (
      <BrowserRouter>
        {/* 导航 */}
        <NavLink to='/home'>首页</NavLink>&nbsp;&nbsp;
        <NavLink to='/news'>新闻</NavLink>
        {/* 线路：Switch:匹配规则是从上而下匹配，只要找到匹配项就立即渲染，剩下的Route将不再进行匹配,在Switch里依然存在贪婪模式，即找到一个之后剩下的依然不再匹配了 */}
        {/* 在Switch里对包含类型的基础线路上一定要加exact精确匹配，不然则只会永远显示基础线路里的文件 */}
        <Switch>
          <Route path='/home' component={() => <div>我是首页</div>} />
          <Route path='/news' component={() => <div>我是新闻</div>} />
          <Route path='/' component={() => <div>我是首页</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Index;
