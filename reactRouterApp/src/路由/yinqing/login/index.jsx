import React, { Component } from "react";
import { Form, Icon, Input, Button, Modal } from "antd";
import Axios from "axios";
import "./index.css";
import { NavLink } from "react-router-dom";
class index extends Component {
  // 失败弹框
  error = (item, data) => {
    Modal.error({
      title: item,
      content: data
    });
  };
  // 成功弹框
  success = data => {
    Modal.success({
      content: data
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 写登录判断
        const Axioss = Axios.create({
          baseURL: "http://liangyongqi.top:3003"
        });

        // 登录的api请求
        const setApi = () => {
          return Axioss.post("/login", values);
        };
        // 处理返回的函数
        setApi().then(err => {
          if (err.data.code === 1) {
            // 弹出登录成功
            this.success("登录成功");
            // 登录成功跳转到主页
            window.sessionStorage.setItem("user", values.username);
            this.props.history.replace("/");
          } else {
            // 弹出错误
            if (err.data.code === 0) {
              this.error(err.data.msg);
              this.props.form.setFieldsValue({
                password: window.sessionStorage.getItem(" ") || ""
              });
            } else {
              console.log(err.data)
              if (err.data.code === 1.5) {
                this.error('您没有账号');
                return;
              }
              this.error(err.data.msg);
            }
          }
        });
      }
    });
  };
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <img src={require('../../../../../yinqing/liangyongqi/img/188.png')} alt="123" />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "请输入用户名!" }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item className="reg-wrap">
            <a href="https://aq.yuewen.com/welcome/validateuser" className="active">忘记密码</a>
            <a href="https://passport.yuewen.com/mobile/reg.html?appid=43&areaid=2&target=top&ticket=1&popup=0&auto=1&autotime=30&ajaxdm=yuewen&header=1&returnUrl=https%3A%2F%2Fm.xs8.cn%2FloginSuccess%3FjumpUrl%3Dhttps%253A%252F%252Fm.xs8.cn%252Fuser" className="active">用户注册</a>
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
              shape="round"
            >
              登录
          </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const Wrapped = Form.create({ name: "normal_login" })(index);
export default Wrapped;