import React, { Component } from 'react';
// 引入仓库
import story from './story/index'
export class Index extends Component {
  constructor() {
    super()
    this.state = story.getState();
  }
  render () {
    return (
      <div style={{ fontSize: 40 }}>
        <pre>
          <p>1. 创建一个redux仓库，创建一个redux.js文件</p>
          <p>2. 在redux.js文件中使用createStory方法接收reducer</p>
          <p>3. 在组件内引入redux.js文件，并使用getState方法获取仓库里的数据</p>
          喜欢你
          就像风走了八百里
          不问归期！！！
        </pre>
        <h2 style={{ color: this.state.theme }}>{`名称：${this.state.name}`}</h2>
      </div>
    );
  }
}

export default Index;
