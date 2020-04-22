import React, { useContext } from 'react';
import { VisibilityContext } from '../contexts/VisibilityContext';

export default function MovieForm() {

  const { visible } = useContext(VisibilityContext);

  const style = {
    display: visible ? "block" : "none"
  }

  return (
    <div id="movie-form" className="content-box" style={style}>
      Movie Form
    </div>
  )
}
