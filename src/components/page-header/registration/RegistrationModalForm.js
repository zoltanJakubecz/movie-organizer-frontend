import React, { useState } from 'react';
import { Form, Modal, Input, notification } from 'antd';

const ModalForm = ({ visible, onSubmit, onCancel, setUsername }) => {

  const [form] = Form.useForm();
  const [usernameValidation, setUsernameValidation] = useState({
    checked: false,
    valid: false
  });

  return (
    <Modal
      visible={visible}
      title="Register account"
      okText="Register"
      cancelText="Cancel"
      onCancel={() => { onCancel(form); }}
      onOk={() => {
        form
          .validateFields()
          .then(async values => {
            const username = await onSubmit(values);
            setUsernameValidation({
              checked: true,
              valid: !!username
            })
            if (!!username) {
              onCancel(form);
              notification.success({
                message: "Success",
                description: `You have just registered as ${values.username}!`,
                top: 64
              })
              setUsername(values.username);
            }
          })
      }}
    >

      <Form
        form={form}
        layout="vertical"
        name="registration-form"
        hideRequiredMark
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: 'Please enter a valid username',
            },
          ]}
          {...(usernameValidation.checked && !usernameValidation.valid ? {
            validateStatus: "error",
            help: "Username already exists!"
          } : {})}
        >
          <Input placeholder="username" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter a password',
            },
          ]}
        >
          <Input type="password" placeholder="password" />
        </Form.Item>

        <Form.Item
          name="password-confirmation"
          label="Confirm password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: 'Please confirm password'
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The two passwords you entered do not match!");
              }
            })
          ]}
        >
          <Input type="password" placeholder="confirm password" />
        </Form.Item>
      </Form>

    </Modal>
  )
}

export default ModalForm;