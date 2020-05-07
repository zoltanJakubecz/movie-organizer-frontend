import React from 'react';
import { Modal, Form, Input } from 'antd';

export const ModalForm = ({ visible, onCreate, onCancel, states }) => {
  const [form] = Form.useForm();
  const [name, setName] = states.name;
  const [comment, setComment] = states.comment;
  console.log(states);
    return (
      <Modal
        visible={visible}
        title="Edit your hero"
        okText="Update"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              setName(values.name);
              
              form.resetFields();
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            name: name,
            comment: comment
          }}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input  />
          </Form.Item>

          

          <Form.Item name="comment" label="Comment">
            <Input  />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  export default ModalForm;