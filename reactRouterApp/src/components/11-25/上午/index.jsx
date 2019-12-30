import React from 'react';
// 使用react-redux：它就是给redux做封装的一个装饰器
// Provider：托管redux仓库，是根容器，如果和路由一起使用也必须是用Provider包裹路由的根容器
import { Provider } from 'react-redux'
import  store from './store/index'
import Child from './child.jsx'
const Index = () => {
  return (
    <Provider store={store}>
      <h4>今天学习react-redux</h4>
      -S === --seve //打包后上线的代码
      -D === --seve-dev //只能在本地使用，不在线上使用
      <Child/>
    </Provider>
  );
}

export default Index;
