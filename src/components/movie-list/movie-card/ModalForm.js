import React from 'react';
import { Modal, Form, Input } from 'antd';

export const ModalForm = ({ visible, onCreate, onCancel, movie, states }) => {
  const [form] = Form.useForm();
  const [title, setTitle] = states.title;
  const [director, setDirector] = states.director;
  const [release, setRelease] = states.release;
  const [imageURL, setImageURL] = states.imageURL;
  const [plot, setPlot] = states.plot;
    return (
      <Modal
        visible={visible}
        title="Edit your movie"
        okText="Update"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              setTitle(values.title);
              setDirector(values.director);
              setRelease(values.release);
              setImageURL(values.imageURL);
              setPlot(values.plot);
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
            title: title,
            director: director,
            release: release,
            imageURL: imageURL,
            plot: plot
          }}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
            <Input  />
          </Form.Item>

          <Form.Item name="director" label="Director">
            <Input  />
          </Form.Item>

          <Form.Item name="release" label="Release">
            <Input  />
          </Form.Item>

          <Form.Item name="plot" label="Plot">
            <Input />
          </Form.Item>

          <Form.Item name="imageURL" label="Image URL">
            <Input  />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  export default ModalForm;