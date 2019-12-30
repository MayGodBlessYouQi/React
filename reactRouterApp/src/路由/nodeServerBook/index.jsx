import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import Book from './book'
export class Index extends Component {
  // 渲染
  render () {
    return (
      <BrowserRouter>
        <nav>
          <NavLink to='/book/1'>流氓天尊</NavLink>&nbsp;&nbsp;
          <NavLink to='/book/2'>斗破苍穹</NavLink>
        </nav>
        <main>
          <Route path='/book/:id' component={Book} />
        </main>
      </BrowserRouter>
    );
  }
}

export default Index;
