import React, { Component } from 'react';
// 表单页面怎么做拦截
import { Prompt } from 'react-router-dom'
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
      username: '',
      password: '',
      repassword: '',
      isok: true   //这个是控制Prompt是否弹出
    }
  }
  // 赋值的方式
  handleChange = ({ target }) => {
    let { name, value } = target
    this.setState({
      [name]: value
    })
  }
  // 递交方法
  onSubmit = () => {
    const { username, password, repassword } = this.state
    if (!username) {
      alert('用户名不能为空!')
    } else if (!password) {
      alert('密码不能为空！')
    } else if (password !== repassword) {
      alert('两次密码不一致！')
    } else {
      console.log('假设提交接口了，成功了')
      this.setState({
        isok: false
      })
    }
  }
  render () {
    const { isok, username, password, repassword } = this.state
    return (
      <div>
        {/* 拦截器 */}
        <Prompt when={isok} message='亲你真的要离开吗？' />
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
