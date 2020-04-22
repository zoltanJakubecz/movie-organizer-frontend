import React, { useContext } from 'react'
import Button from 'antd/es/button';
import { PlusCircleOutlined } from '@ant-design/icons';
import { VisibilityContext } from '../contexts/VisibilityContext';

export default function NewMovieButton() {

  const { visible, setVisible } = useContext(VisibilityContext);

  const toggleVisibility = function () {
    setVisible(!visible);
  }

  return (
    <Button
      className="newButton"
      type="primary"
      onClick={toggleVisibility}
      style={{ width: "9rem" }}
    >
      {visible ?
        "Change of heart" :
        (<><PlusCircleOutlined /> New</>)}
    </Button>
  )
}
