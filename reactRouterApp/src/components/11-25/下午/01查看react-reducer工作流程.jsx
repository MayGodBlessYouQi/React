import React from 'react';
import { connect, Provider } from 'react-redux'
import store from './11-25/store/index'
import { Button } from 'antd'

const mapDispatchToProps = dispatch => {
  return {
    setNameAction () {
      dispatch({
        type: 'setNameAction',
        value: '我是新的值'
      })
    }
  }
}

// 子组件1
const Child1 = connect(null, mapDispatchToProps)(props => {
  console.log('我是第一个组件')
  return (
    <div>
      组件一
      <Button>修改名称</Button>
    </div>
  );
})

// 子组件2
const Child2 = connect(reducer => reducer.data)(props => {
  console.log('我是第二个组件')
  return (
    <div>
      组件二
      {props.name}
    </div>
  );
})

// 父组件
export default () => {
  return <Provider store={store}>
    <Child1 />
    <Child2 />
  </Provider>
};
