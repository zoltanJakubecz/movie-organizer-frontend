import React from 'react';
import Button from 'antd/es/button';
import { PlusCircleOutlined } from '@ant-design/icons';

import './control-panel.css';

export default function ControlPanel() {
  return (
    <div className="controlPanel">
      <Button className="newButton" type="primary">
        <PlusCircleOutlined /> New
      </Button>
    </div>
  )
}
