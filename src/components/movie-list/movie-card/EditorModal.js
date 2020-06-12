import React from 'react'
import Modal from './Modal';
import {
  Input,
  Form,
  Button,
} from 'antd';

import './editor-modal.css';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

export default function EditorModal(props) {

  const { modalRef, movie, states, update } = props;
  const [title, setTitle] = states.title;
  const [categories, setCategories] = states.categories;
  const [director, setDirector] = states.director;
  const [release, setRelease] = states.release;
  const [imageURL, setImageURL] = states.imageURL;
  const [plot, setPlot] = states.plot;


  const onFinish = values => {
    setTitle(values.title);
    if (values.newCategory) {
      values.categories.push(values.newCategory);
    }
    setCategories(values.categories);
    setDirector(values.director);
    setRelease(values.release);
    setImageURL(values.imageURL);
    setPlot(values.plot);

    update(movie.id, {
      title: values.title,
      categories: values.categories,
      director: values.director,
      plot: values.plot,
      releaseDate: values.release,
      imageURL: values.imageURL
    });
    modalRef.current.closeModal();
  };

  return (
    <Modal id="editor-modal" ref={modalRef}>

      <div className="modal-header">
        <span className="close-span" onClick={() => modalRef.current.closeModal()}><strong>&times;</strong></span>
      </div>

      <div className="modal-body">
        <h1>Edit your movie</h1>
        <Form {...layout} onFinish={onFinish} initialValues={{
          title: title,
          director: director,
          release: release,
          categories: categories,
          imageURL: imageURL,
          plot: plot
        }} >

          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item name="director" label="Director">
            <Input />
          </Form.Item>

          <Form.Item name="release" label="Release">
            <Input />
          </Form.Item>

          <Form.Item name="plot" label="Plot">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="imageURL" label="Image URL">
            <Input />
          </Form.Item>



          <div className="modal-footer">
            <Button className="update-button" type="primary" htmlType="submit">Update</Button>

            <Button type="dashed" onClick={() => modalRef.current.closeModal()}>Cancel</Button>
          </div>
        </Form>
      </div>

    </Modal>
  )
}
