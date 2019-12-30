import React, { Component } from 'react';
// 引入框架
import { Layout } from 'antd';
// 引入样式
import './index.css'
// 引入轮播图
import Swiper from './swiper/swiper'
// 引入nav
import Nav from './nav/nav'
const { Header, Footer, Content } = Layout;
export class Index extends Component {
  render () {
    return (
      <div>
        <Layout>
          {/* 头部 */}
          <Header>
            <img src={require('./logo/pic_001.png')} alt="logo" />
          </Header>
          {/* 内容 */}
          <Content>
            {/* 走马灯 */}
            <Swiper />
            {/* 栅格系统 */}
            <Nav />
          </Content>
          {/* 底部 */}
          <Footer>

          </Footer>
        </Layout>

      </div>
    );
  }
}

export default Index;
