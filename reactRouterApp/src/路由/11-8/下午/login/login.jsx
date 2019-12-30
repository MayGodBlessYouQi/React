import React, { Component } from 'react';
// 引入antd的登录组件
import { Form, Icon, Input, Button, Checkbox,Row, Col } from 'antd';
class Login extends Component {
	// 递交代码
	handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
		// 如果err不为true则说明通过了前端的验证进行提交
      if (!err) {
		const data = JSON.stringify(values)
		window.sessionStorage.setItem('user',data)
		// 数据存到全局之后，控制路由跳转
		// history.push是向历史记录插入一条地址信息
		// history.replace 是替换掉当前历史记录中的地址信息
		this.props.history.replace('/',values)
      }
    });
  };
  render() {
	const { getFieldDecorator } = this.props.form;
	return (
		<Row>
      <Col span={12} offset={6}>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
			  autoComplete='off'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
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
          <Button type="primary" htmlType="submit" block className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
      </Col>
    </Row>
	);
  }
}
// 高阶组件，创建一个表单实例
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
// 暴露出去的就是表单
export default WrappedNormalLoginForm