import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const rules = [{ whitespace: true }];

export default function CharacterInputs(props) {

  return (
    <Form.List name="characters">
      {(fields, { add, remove }) => {
        /**
         * `fields` internal fill with `name`, `key`, `fieldKey` props.
         * You can extends this into sub field to support multiple dynamic fields.
         */
        return (
          <div>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? props.layout.withLabel : props.layout.noLabel)}
                label={index === 0 ? 'Characters' : ''}
                key={field.key}
              >
                <Form.Item
                  name={[field.name, "character"]}
                  fieldKey={[field.fieldKey, "character"]}
                  rules={rules}
                  noStyle
                >
                  <Input
                    placeholder="new character"
                    style={{ width: '40%', marginRight: '5%' }}
                  />
                </Form.Item>
                <Form.Item
                  name={[field.name, "actor"]}
                  fieldKey={[field.fieldKey, "actor"]}
                  rules={rules}
                  noStyle
                >
                  <Input disabled placeholder="actor" style={{ width: '40%' }} />
                </Form.Item>
                {fields.length > 0 &&
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    style={{ margin: '0 8px' }}
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              </Form.Item>
            ))}
            <Form.Item {...props.layout.noLabel}>
              <Button
                type="dashed"
                onClick={() => {
                  add();
                }}
                style={{ width: "60%" }}
              >
                <PlusOutlined /> Add character
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};