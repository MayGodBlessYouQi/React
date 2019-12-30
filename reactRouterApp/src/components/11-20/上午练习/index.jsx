import React, { Component } from 'react';
import { Button } from 'antd'
import story from './story/index'
// 引入样式
import './story/a.scss'
export class Index extends Component {
  constructor() {
    super()
    this.unSubscribe = story.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount () {
    this.unSubscribe()
  }
  // 加
  push = data => {
    story.dispatch({
      type: 'set$',
      value: data ? story.getState().$ + 1 : story.getState().$ - 1
    })
  }
  render () {
    return (
      <div className='home'>
        {story.getState().$}
        <Button onClick={() => this.push(true)}>+</Button>
        <Button onClick={() => this.push(false)}>-</Button>
      </div>
    );
  }
}

export default Index;
