import React, { Component } from 'react';
import HeadBar from '../../components/HeadBar';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passwor: ''
    }
  }

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 24 },
    };
    const tailLayout = {
      wrapperCol: { span: 24 },
    };

    const LoginForm = () => {
      const onFinish = values => {
        console.log('Success:', values);
        this.props.history.push('/home');
      }


      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      return (
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="登录名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          {/* 
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登 录
            </Button>
          </Form.Item>
        </Form>
      );
    };
    return (
      <div className="login-wraper" >
        <HeadBar></HeadBar>
        <div className="login-field">
          <LoginForm></LoginForm>
          <div className="contact">
            <p className="contact-tag">联系我们</p>
            <div className="contact-detail">
              <p>电话：123445</p>
              <p>邮箱：123445</p>
              <p>地址：123445</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}