import React, { useState, useEffect, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { UserContext } from '../../contexts/UserContext';


const LoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.
  
  
  const { username, login, logout } = useContext(UserContext);
  
  useEffect(() => {
    forceUpdate({});
  }, [username]);

  const onFinish = async (values) => {

    login(values.username, values.password);
  };


  const signout = async () => {
    logout();
    form.resetFields();
  }


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
              <Form form={form} name="horizontal_login" layout="inline">
                <Form.Item>
                  <span style={{"paddingRight" : "2em"}}>Logged in as {username}</span> 
                  <Button onClick={signout}>Logout</Button>
                </Form.Item>
              </Form>
                
                
            )
        }
};

export default LoginForm;

// ReactDOM.render(<LoginForm />, mountNode);
