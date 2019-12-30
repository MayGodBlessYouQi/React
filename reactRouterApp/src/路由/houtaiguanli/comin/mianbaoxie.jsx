// 面包屑导航 --- 公共的
import React from 'react';
import { Breadcrumb } from 'antd';
export default props => {
  return <Breadcrumb>
    <Breadcrumb.Item>首页</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">新闻</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">热点</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>前端大事件</Breadcrumb.Item>
  </Breadcrumb>
}