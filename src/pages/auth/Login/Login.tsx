import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../api/axiosClient.ts';
import { Button, Card, Form, Input } from 'antd';
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const navigate = useNavigate();

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
      const { token } = response.data;
      localStorage.setItem('token', token);
      toast.success('Login successful');
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (error: any) {
      if (error.response && error.response.data) {
        const message = error.response.data.message;
        toast.error(message);
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        backgroundColor: '#2f4d41',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        paddingTop: '100px',
      }}
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
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button color="default" variant="solid" htmlType="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
