import React from 'react'
import { Card } from 'antd';

export default function Movie(props) {

  const gridStyle = {
    width: '50%',
    textAlign: 'center',
    padding: '5px',
  };

  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card title={props.movie.title}>
        <Card.Grid style={gridStyle}>{props.movie.director}</Card.Grid>
        <Card.Grid style={gridStyle}>{props.movie.releaseDate}</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </div>
            {/* <h1>{props.movie.title}</h1> */}
    </div>
    )
}
