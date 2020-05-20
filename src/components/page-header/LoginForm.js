import React, { useState, useEffect, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { UserContext } from '../../contexts/UserContext';


const LoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const { username, login, logout } = useContext(UserContext);


 
  const onFinish = async (values) => {

    login(values.username, values.password);
    // console.log('Finish:', values);
  };


  const signout = async () => {
    logout();
  }

  // console.log(username);

  if(!username){
  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
      <Form.Item>
          <Button>Register</Button>
      </Form.Item>
    </Form>
  );
        } else {
            return (
              <Form>
                <Form.Item>
                  Logged in as {username} 
                  <Button onClick={signout}>Logout</Button>
                </Form.Item>
              </Form>
                
                
            )
        }
};

export default LoginForm;

// ReactDOM.render(<LoginForm />, mountNode);
