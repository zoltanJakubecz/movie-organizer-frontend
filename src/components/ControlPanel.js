import React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function ControlPanel() {
  return (
    <div style={{
      padding: "1rem",
      border: "var(--primary-bg-color) solid 1px",
      marginBottom: "1rem"
    }}>
      <Button type="primary">
        <PlusCircleOutlined /> New
      </Button>
    </div>
  )
}
