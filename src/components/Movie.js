import React from 'react'
import { Card } from 'antd';

export default function Movie(props) {

  const gridStyle = {
    width: '60%',
    textAlign: 'left',
    padding: '5px',
    paddingLeft: '15%',
    fontSize: '0.8em',
  };

  const titleStyle = {
    width: '30%',
    textAlign: 'left',
    padding: '5px',
    fontSize: '1.5em',
    fontweight: '900',
  };
  
  const titleStyle1 = {
    width: '70%',
    textAlign: 'left',
    padding: '5px',
    fontSize: '1.5em',
    fontweight: '900',
  };
  
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card className="card">
          <Card.Grid hoverable={false} style={titleStyle}><strong>{props.movie.title}</strong></Card.Grid>
          <Card.Grid hoverable={false} style={titleStyle1}>
            <div>
              <img src={props.movie.imageURL} alt='Kukutyin' height='300' />
            </div>
            <div>
            <Card.Grid style={gridStyle}>Category: {props.movie.categories.join(", ")}</Card.Grid>
            <Card.Grid style={gridStyle}>Director: {props.movie.director}</Card.Grid>
            <Card.Grid style={gridStyle}>{props.movie.releaseDate}</Card.Grid>
            </div>
            
          </Card.Grid>
          
          
          
          
        </Card>
      </div>
            {/* <h1>{props.movie.title}</h1> */}
    </div>
    )
}
