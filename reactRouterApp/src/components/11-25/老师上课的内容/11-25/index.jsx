import React from "react";
// 使用react-redux: 它就是给redux做封装的一个装饰器
// Provider:托管redux仓库，是根容器。如果和路由一起使用，也必须是用Provider包裹路由的根容器
import { Provider } from "react-redux";
import Store from "./store";
import Child from "./child";

const Index = () => {
  return (
    <Provider store={Store}>
      <h4>今天学react-redux</h4>
      -S === --seve // 打包后上线的代码里会有我这个安装的依赖 -D === --seve-dev
      // 只在本地开发环境里使用，比如说sass-loader
      <p>cnpm i -S react-redux</p>
      <Child />
    </Provider>
  );
};

export default Index;
