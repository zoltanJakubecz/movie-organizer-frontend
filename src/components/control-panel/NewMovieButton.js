import React, { useContext } from 'react';
import Button from 'antd/es/button';
import { PlusCircleOutlined } from '@ant-design/icons';
import { UserContext } from '../../contexts/UserContext';

export default function NewMovieButton(props) {

  const [movieFormOpen, setMovieFormOpen] = props.movieFormState;
  const {username} = useContext(UserContext)

  const onClick = function () {
    setMovieFormOpen(!movieFormOpen);
  }

  return (
    <Button
      disabled={!username}
      className="newButton"
      type="primary"
      onClick={onClick}
      style={{ width: "9rem", marginBottom: "1rem" }}
    >
      {movieFormOpen ? "Change of heart" : (<><PlusCircleOutlined /> New</>)}
    </Button>
  )
}
