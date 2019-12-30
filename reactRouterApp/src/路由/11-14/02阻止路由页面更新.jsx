import React, { Component } from 'react';
// 子组件
const Child = props => {
  console.log(props)
  return <div>我是组件</div>
}
// 使用shouldComponentUpdata阻止路由更新页面
export class Home extends Component {
  shouldComponentUpdate (newProps, newState) {
    console.log(newProps.location)
    newProps.location.key = '123'
    // 如果相等说明路由的数据没有更新，所以我阻止页面更新
    if (JSON.stringify(newProps) === JSON.stringify(this.props)) {
      return false;
    } else {
      return true;
    }
  }
  render () {
    return (
      <div>
        <h1>
          我是首页
        </h1>
        <Child {...this.props} />
      </div>
    );
  }
}

export default Home;
