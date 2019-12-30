import React from "react";
// 咱们手写的路由配置
import { rouTers } from "./router";
// 引入路由
import { BrowserRouter, NavLink } from "react-router-dom";
// 引入路由配置插件
import { renderRoutes } from "react-router-config";
// 引入仓库
import { Provider } from "react-redux";
import store from "./store";
// 引入非路由组件
import OffRoute from "./component/offRoute";

const Index = () => {
  return (
    // 永远都是Provider包裹一切
    <Provider store={store}>
      <BrowserRouter>
        {/* 导航 */}
        <NavLink to="/home">首页</NavLink>&nbsp;&nbsp;
        <NavLink to="/news">新闻页</NavLink>
        <main>
          <OffRoute age="小王" />
          {/* 渲染线路的 */}
          {renderRoutes(rouTers)}
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default Index;
