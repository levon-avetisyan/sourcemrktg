import React from 'react';
import axiosClient from '../../../../api/axiosClient';
import { Form, Input, Button, Card } from 'antd';

const Login: React.FC = () => {
  const onFinish = async (values: any) => {
    try {
      const response = await axiosClient.post(
        '/auth/login',
        {
          username: values.username,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Card title="Login" style={{ width: 300 }}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
