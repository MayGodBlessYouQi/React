import React, { Component } from 'react';
// 表单页面怎么做拦截
import { Prompt } from 'react-router-dom'
import { Modal } from 'antd'
import './home.css'
// 表单页面怎么做拦截提示
// 
// 1、Prompt使用场景1：优化用户体验
//   在填写表单的页面里，假如用户满意填写完，或者没有提交，此时用户要离开的时候，我们需要提示用户；
// 如果用户已经操作完了该组件，那么用户离开后，我们就不要提示用户了；
export class Home extends Component {
  constructor() {
    super()
    this.state = {
      visible: false, // 开启弹窗的标识
      username: '',
      password: '',
      repassword: '',
      goPar: '',
      isok: true   //这个是控制Prompt是否弹出
    }
    this.isgo = false // 强制拦截
  }
  showModal = () => {
    // 开启弹窗
    this.setState({
      visible: true,
    });
  };
  // 用户点击确定跳转
  handleOk = () => {
    let { history } = this.props
    // 改变状态
    // history.replace('/member')
    history.replace("/home")
  };
  // 用户点击取消
  handleCancel = e => {
    console.log('您取消了操作！')
    this.setState({
      visible: false,
    });
  };
  // 赋值的方式
  handleChange = ({ target }) => {
    let { name, value } = target
    this.setState({
      [name]: value
    })
  }
  success = data => {
    Modal.warning({
      content: data
    });
  }
  // 递交方法
  onSubmit = () => {
    const { username, password, repassword } = this.state
    if (!username) {
      this.success('用户名不能为空!')
    } else if (!password) {
      this.success('密码不能为空！')
    } else if (password !== repassword) {
      this.success('两次密码不一致！')
    } else {
      console.log('登录成功')
      this.isgo = true
    }
  }
  render () {
    const { isok, username, password, repassword } = this.state
    return (
      <div>
        {/* 拦截器 */}
        <Prompt when={isok} message={(location) => {
          // 改变路由地址
          this.setState({
            goPar: location.pathname
          })
          // 当跳转到首页时允许
          if (location.pathname === '/home') {
            return true;
          }
          this.showModal()
          // 判断使用直接点击时就跳转
          return this.isgo;
        }}></Prompt>
        <Modal
          title="警告！"
          visible={this.state.visible}
          onOk={() => {
            this.isgo = true;
            this.handleOk()
          }}
          onCancel={this.handleCancel}
          okText='去登录'
          cancelText='取消'
        >
          <p>请您先登录！！！</p>
        </Modal>
        {/* 表单 */}
        <form action="">
          <label htmlFor="">用户名：</label>
          <input
            type="text"
            placeholder='用户名'
            name='username'
            value={username}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <label htmlFor="">密码：</label>
          <input
            type="password"
            placeholder='密码'
            name='password'
            value={password}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <label htmlFor="">确认密码：</label>
          <input
            type="password"
            placeholder='确认密码'
            name='repassword'
            value={repassword}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <input type="button" value='提交' onClick={this.onSubmit} />
        </form>
      </div>
    );
  }
}

export default Home;
