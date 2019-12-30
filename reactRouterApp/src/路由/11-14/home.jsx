import React, { Component } from 'react';
// 子组件
class Child extends React.PureComponent {
  render () {
    console.log('123')
    return <div>更新</div>
  }
}
// 使用shouldComponentUpdata阻止路由更新页面
export class Home extends Component {
  render () {
    return (
      <div>
        <h1>
          我是首页
        </h1>
        <Child />
      </div>
    );
  }
}

export default Home;
