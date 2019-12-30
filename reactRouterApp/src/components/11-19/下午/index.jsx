import React, { Component } from 'react';
// 
import Home from '../上午/common/home'
import About from '../上午/common/about'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
export class Index extends Component {
  render () {
    return (
      <BrowserRouter>
        <NavLink to='/'>首页</NavLink>&nbsp;&nbsp;
        <NavLink to='/about'>关于</NavLink>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </BrowserRouter>
    );
  }
}

export default Index;
