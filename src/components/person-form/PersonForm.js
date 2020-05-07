import React, { useContext } from 'react';
import Form from 'antd/es/form/Form';
import { Button, Input } from 'antd';
import ActorInputs from './ActorInputs';
import DirectorInputs from './DirectorInputs';

import './person-form.css';
import { MovieContext } from '../../contexts/MovieContext';

export default function PersonForm(props) {

  const [isOpen, setIsOpen] = props.openState;
  const { actions } = useContext(MovieContext);
  const [form] = Form.useForm();

  const layout = {
    withLabel: {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 }
      }
    },
    noLabel: {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 19, offset: 5 }
      }
    }
  }

  const onFinish = async function (values) {
    try {
      const movie = Object.assign(values, {
        releaseDate: parseInt(values.releaseDate)
      });
    //   actions.add(movie);
    } catch (error) {
    }
    form.resetFields();
    setIsOpen(false);
  }

  return isOpen && (
    <div id="movie-form-div" className="content-box">

      <h1 style={{ margin: "0 0 1rem 3rem" }}>Expand your heros!</h1>

      <Form form={form} id="movie-form" name="dynamic_form_item" {...layout.withLabel} onFinish={onFinish}>

        <Form.Item label="Name" name="title" rules={[{ required: true }]} validateTrigger={['onBlur']}>
          <Input placeholder="hero's name" />
        </Form.Item>


        <Form.Item label="Comment" name="commment">
          <Input.TextArea placeholder="Enter your comment here" />
        </Form.Item>


        <ActorInputs layout={layout} />

        <DirectorInputs layout={layout} />

        <Form.Item {...layout.noLabel}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>

      </Form>

    </div>
  )
}
