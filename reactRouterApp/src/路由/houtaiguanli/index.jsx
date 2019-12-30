import React, { Component } from 'react';
// 引入antd框架
import { Layout, Menu, Icon } from 'antd';
// 引入面包屑
import Mia from './comin/mianbaoxie'
// 引入可编辑栏
import Tab from './comin/tablebox'
const { Header, Content, Footer, Sider } = Layout;
export class Index extends Component {
  render () {
    return (
      <Layout>
        {/* 侧边栏 */}
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* 头部 */}
          <Header style={{ background: '#fff', padding: '10px 0 0 20px' }} >
            {/* 面包屑 */}
            <Mia />
          </Header>
          {/* 内容 */}
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* 可编辑表格 */}
              <Tab />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>梁永琪的个人网页</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
