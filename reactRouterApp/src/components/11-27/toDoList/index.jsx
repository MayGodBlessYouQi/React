import React from 'react';
// 引入头部
import Head from './component/head'
// 正在进行中
import Pending from './component/pending'
// 已经完成
import End from './component/end'

import store from './store/index'

import { Provider } from 'react-redux'
const Index = () => {
  return (
    <Provider store={store}>
      {/* 头部 */}
      <Head />
      {/* 正在进行中 */}
      <Pending />
      {/* 已经完成 */}
      <End />
    </Provider>
  );
}

export default Index;
