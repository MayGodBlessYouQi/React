import React from 'react';

// 手写的路由配置
import { rouTers } from './router/index'
// 引入路由配置插件
import { renderRoutes } from 'react-router-config'
// 引入路由
import {
  BrowserRouter,
  NavLink
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          {/* 导航 */}
          <NavLink to='/home'>首页</NavLink>&nbsp;&nbsp;
        <NavLink to='/news'>新闻</NavLink>
        </main>
        {renderRoutes(rouTers)}
      </BrowserRouter>
    </Provider>
  );
}

export default Index;