import React from 'react'
import { renderRoutes } from 'react-router-config'

// 路由配置
export const rouTers = [
  // {} === <Route component/>
  {
  // 根容器
  component: props => <div>我是首页{renderRoutes(props.route.routes)}</div>,
  // 子路由集合
  routes: [
    { path:'/',component:() => <div>我是首页</div> }
  ]
}
]