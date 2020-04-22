import React from 'react'
import Button from 'antd/es/button';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function NewMovieButton() {

  return (
    <Button className="newButton" type="primary">
      <PlusCircleOutlined /> New
    </Button>
  )
}
