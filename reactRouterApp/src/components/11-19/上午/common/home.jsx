import React, { Component } from 'react';
// 这里引入story
import story from '../story/index'
export class Home extends Component {
  constructor() {
    super()
    this.state = story.getState()
    this.unSubscrib = story.subscribe(() => {
      this.setState(story.getState())
    })
  }
  componentWillUnmount () {
    // 取消订阅就是执行以下方法
    this.unSubscrib()
  }
  data = story.getState()
  //处理点击事件
  handleClick = () => {
    story.dispatch({
      type: 'setName',
      value: '阿强'
    })
  }
  render () {
    // 初始获取值
    const data = story.getState()
    return (
      <div onClick={this.handleClick} style={{ color: data.theme }}>
        {data.name}首页欢迎您！
      </div>
    );
  }
}

export default Home;
