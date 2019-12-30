import React, { Component } from 'react';
// 使用react创建一个仓库
/**
 * 1.createStore:创建仓库
 */
import { createStore } from 'redux'
// 创建数据库：它是一个纯粹的函数
const reducer = (state = { name: '阿三', age: 27, job: '测试' }, action) => {
  return state
}
const store = createStore(reducer)
// console.log(store)
// 组件
export class Index extends Component {
  constructor() {
    super()
    this.state = store.getState();
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <h1>{this.state.name + ':' + this.state.age + ':' + this.state.job}</h1>
        <p>1. redux和react没有任何关系他们都是独立的</p>
        <p>2. redux是单项数据流</p>
        <p>3. 安装命令：cnpm i -S redux</p>
      </div>
    );
  }
}

export default Index;
