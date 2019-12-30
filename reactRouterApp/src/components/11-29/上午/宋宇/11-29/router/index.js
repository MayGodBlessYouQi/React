import React from "react";
import Home from "../component/home";
import News from "../component/news";
import { Redirect } from "react-router-dom";
// 路由配置
export const rouTers = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    component: Home,
    routes: [
      { path: "/home/:id", component: () => <div>我是首页的左侧内容</div> }
    ]
  },
  {
    path: "/news",
    component: News
  }
];
