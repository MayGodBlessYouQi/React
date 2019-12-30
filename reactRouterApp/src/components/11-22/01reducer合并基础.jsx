import React, { Component } from 'react';
import store from './store/index'
import { Subscriber } from 'rxjs';
export class Index extends Component {
  constructor() {
    super()
    this.state = {
      is: store.getState()
    }
    store.subscribe(() => {
      this.setState({
        is: store.getState()
      })
    })
  }
  setMsg = () => {
    store.dispatch({
      type: 'setMsg',
      value: '首页'.repeat(3)
    })
  }
  render () {
    console.log(this.state.is)
    return (
      <div>
        <h3>今天学习reducer合并</h3>
        <p>{this.state.is.home.msg}</p>
        <p>{this.state.is.home.day}</p>
        <button onClick={this.setMsg}>修改内容</button>
      </div>
    );
  }
}

export default Index;
