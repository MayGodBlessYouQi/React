import React, { Component } from 'react';
import story from './story/index'
import Data from './data'
import { Input, Button } from 'antd'
export class Index extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    // 监听
    story.subscribe(() => {
      // 这里的强制更新时为了让子组件能够重新获取到story里的新状态
      this.forceUpdate()
    })
  }
  handleInput = ({ target }) => {
    let { name, value } = target
    this.setState({
      [name]: value
    })
  }
  handleBth = () => {
    story.dispatch({
      type: 'setInput',
      value: this.state.input
    })
  }
  render () {
    return (
      <div>
        {/* 123 */}
        <Input type="text" value={this.state.input} name="input" onChange={this.handleInput} />
        <Button onClick={this.handleBth}>按钮</Button>
        <Data />
      </div>
    );
  }
}

export default Index;
