import React, { Component } from 'react';
// 这一次我们使用组件的组合，来分别引入redux
import Home from './common/home'
import About from './common/about'
export class Index extends Component {
  render () {
    return (
      <div style={{ fontSize: 40 }}>
        <Home />
        <About />
      </div>
    );
  }
}

export default Index;
