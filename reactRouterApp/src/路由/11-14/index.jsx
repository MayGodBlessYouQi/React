import React, { Component } from 'react';
import { BrowserRouter, NavLink, Redirect, Switch, Route } from 'react-router-dom'
import Home from './home'
export class Index extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <NavLink to='/home'>首页</NavLink>
          <NavLink to='/news'>新闻</NavLink>
          <Switch>
            线路：在Switch组件里使用Redirect重定向组件的时候，必须注意书写的顺序，如果Redirect写在了Switch内部的顶端，那么Redirect组件
            {/* <Redirect from='/123' to='/123' />
            <Redirect to='/home' /> */}
            <Route path='/home' component={Home} />
            <Route path='/news' component={() => <div>新闻</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;
