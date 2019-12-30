import React, { Component, Suspense } from 'react';
// 懒加载
const Child = React.lazy(() => import('./child.jsx'));

export class Hobby extends Component {
  constructor() {
    super()
    this.state = {
      // 单选框的值
      isChild: false
    }
  }
  btn = () => {
    this.setState({
      isChild: true
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.btn}>
          点击加载组件
        </button>
        {
          this.state.isChild ? <Suspense fallback={<div>我是加载动画。。。。</div>}>
            <Child />
          </Suspense> : <div></div>
        }

      </div>
    );
  }
}

export default Hobby;