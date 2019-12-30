import React, { Component } from 'react';
// 这里引入story
import story from '../story/index'
export class Home extends Component {
  constructor() {
    super()
    // 1.初始的获取数据
    this.state = story.getState()
    // 4。订阅
    this.unSubscribe = story.subscribe(() => {
      this.setState(story.getState())
    })
  }
  // 清除订阅
  componentWillUnmount () {
    this.unSubscribe()
  }
  // 订阅
  data = story.getState();
  render () {
    const { theme, name } = this.state;
    return (
      <div style={{ background: theme }}>
        {name}关于
      </div>
    );
  }
}

export default Home;
