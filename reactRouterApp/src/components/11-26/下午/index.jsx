import React from 'react';
// 引入仓库
import store from './store/index'
import { Provider } from 'react-redux'
// 引入首页和新闻页面
import Home from './home'
import News from './news'
const Index = () => {
  return (
    <Provider store={store}>
      {/* 首页 */}
      <Home />
      {/* 新闻 */}
      <News />
    </Provider>
  );
}

export default Index;
