import React from 'react';
// 引入路由
import { BrowserRouter } from 'react-router-dom'
// 引入我的所有东西
import Indexs from './yangqing/index'
const Index = () => {
  return (
    <BrowserRouter>
      {/* 这样做是为了把非路由组件强行变成路由组件 */}
      <Indexs />
    </BrowserRouter>
  );
}

export default Index;
