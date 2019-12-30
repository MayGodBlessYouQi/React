import React from 'react';
// 引入登录框
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
// 引入Axios
import Axios from 'axios'
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // 前端验证成功后提交
      if (!err) {
        Axios.post('http://localhost:8080/login', values).then(res => {
          console.log(res.data)
          if (res.data.code === 1) {
            // 提示成功
            this.success()
            // 存全局
            sessionStorage.setItem('user', 1)
            // 跳转页面
            this.props.history.replace('/vip')
          }
        })
      }
    });
  };
  // 成功提示
  success = () => {
    Modal.success({
      content: '登录成功！',
    });
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入账号!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="账号"
              autoComplete='off'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
              autoComplete='off'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm