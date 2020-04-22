import React from 'react'
import { Card, Button } from 'antd';
import Modal from './Modal';


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
  
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal()
  }

  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card className="card">
          <Card.Grid hoverable={true} style={titleStyle}><strong>{props.movie.title}</strong></Card.Grid>
          <Card.Grid hoverable={false} style={titleStyle1}>
            <div>
              <img src={props.movie.imageURL} alt='Kukutyin' height='300' />
            </div>
            <div>
            <Card.Grid hoverable={false} style={gridStyle}>Category: {props.movie.categories.join(", ")}</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>Director: {props.movie.director}</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>{props.movie.releaseDate}</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}><Button onClick={openModal}>Edit</Button></Card.Grid>
            </div>            
          </Card.Grid>          
        </Card>
      </div>

      <Modal ref={modalRef}>
        <h1><strong>{props.movie.title}</strong></h1>
        <form>
        <label for="title">Movie title: </label>
          <input type="text" id="title" placeholder={props.movie.title} />
          <button type="submit">Submit</button>
        </form>
        
        
        <Button onClick={() => modalRef.current.closeModal()}>Close</Button>
      </Modal>     {/* <h1>{props.movie.title}</h1> */}
    </div>
    )
}
