import React, { Component } from 'react';
/**
 * 后端：
 * 1、搭建后台登录接口post请求
 * 2、热门小说接口、免费小说接口、vip小说接口
 * ##################################
 * 前端：
 * 1、一级导航：热门小说、免费小说、vip小说
 * 2、二级导航是根据一级导航获取的小说目录
 * 3、三级路由：是根据二级小说目录的id动态获取的
 * 逻辑：
 * 热门小说和免费小说都可以无登录阅读，vip小说必须验证是否登录，如果没有登录则需要提示并且跳到登录页
 */
import Axios from 'axios'
import { BrowserRouter, NavLink, Route, Prompt } from 'react-router-dom'
// 热门小说
import Hot from './components/hot/hot'
// 免费小说
import Public from './components/public/public'
// vip小说
import Vip from './components/vip/vip'
// 引入导航
import { Menu } from 'antd';
// 登录的表单
import Login from './components/login/login'
// 引入样式
import './css/index.css'
export class Index extends Component {
  constructor() {
    super()
    this.state = {
      current: sessionStorage.getItem('current') || 'hot',
    };
  }
  // 导航选择
  handleClick = e => {
    this.setState({
      current: e.key,
    });
    // 将框架状态存到本地
    sessionStorage.setItem('current', e.key);
  };
  // 网页加载完成声明周期钩子
  componentDidMount () {
    Axios.post('http://localhost:8080/login',
      { user: '梁永琪', password: 123456 })
      .then(req => {
        // console.log(req)
      })
  }
  render () {
    return (
      <BrowserRouter>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="hot">
            <NavLink to='/hot'>热门小说</NavLink>
          </Menu.Item>
          <Menu.Item key="public">
            <NavLink to='/public'>免费小说</NavLink>
          </Menu.Item>
          <Menu.Item key="vip">
            <NavLink to='/vip'>vip小说</NavLink>
          </Menu.Item>
        </Menu>
        {/* 拦截器--2.权限控制 */}
        <Route children={props => {

          return <Prompt message={location => {
            // location表示进入下一个路由的信息对象
            if (location.pathname === '/vip') {
              // 从全局里获取用户的信息,登录信息
              const user = window.sessionStorage.getItem('user')
              if (user) {
                return true;
              } else {
                alert('您没有登录，不能查看vip内容');
                props.history.replace('/login')
                return false;
              }
            }
          }} />

        }} />
        {/* 线路 */}
        <main>
          <Route path='/hot' component={Hot} />
          <Route path='/public' component={Public} />
          <Route path='/vip' component={Vip} />
          <Route path='/login' component={Login} />
        </main>
      </BrowserRouter >
    );
  }
}

export default Index;
