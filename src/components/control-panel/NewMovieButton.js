import React from 'react';
import Button from 'antd/es/button';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function NewMovieButton(props) {

  const [movieFormOpen, setMovieFormOpen] = props.movieFormState;

  const onClick = function () {
    setMovieFormOpen(!movieFormOpen);
  }

  return (
    <Button
      className="newButton"
      type="primary"
      onClick={onClick}
      style={{ width: "9rem", marginBottom: "1rem" }}
    >
      {movieFormOpen ? "Change of heart" : (<><PlusCircleOutlined /> New</>)}
    </Button>
  )
}
