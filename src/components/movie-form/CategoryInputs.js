import React from 'react';
import Form from 'antd/es/form/Form';
import { Input, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

export default function CategoryInputs(props) {
  return (
    <Form.List name="categories" id="category-input-list">

      {(fields, { add, remove }) => {

        return (
          <div>
            {fields.map((field, index) => (

              <Form.Item
                {...(index === 0 ? props.layout.withLabel : props.layout.noLabel)}
                label={index === 0 ? 'Categories' : ''}
                required={false}
                key={field.key}
              >

                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[{ whitespace: true }]}
                  noStyle
                >
                  <Input placeholder="new category" style={{ width: '60%' }} />
                </Form.Item>

                {fields.length > 0 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    style={{ margin: '0 8px' }}
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                ) : null}

              </Form.Item>
            ))}

            <Form.Item {...props.layout.noLabel}>

              <Button
                type="dashed"
                onClick={() => {
                  add();
                }}
                style={{ width: '60%' }}
              >
                <PlusOutlined /> Add category
              </Button>

            </Form.Item>

          </div>
        );
      }}

    </Form.List>
  )
}
