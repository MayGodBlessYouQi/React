import React from 'react'
import Home from '../component/home'
import news from '../component/news'
// 路由配置
export const rouTers = [{
  path: '/',
  exact: true,
  component: () => Home
}, {
  path: '/home',
  exact: true,
  component: () => Home
}, {
  path: '/news',
  exact: true,
  component: () => news
}]