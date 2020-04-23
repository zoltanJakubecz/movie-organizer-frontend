import React, { useState, useContext } from 'react';
import { Card, Collapse } from 'antd';
import { Columns} from 'react-flex-columns'
import Modal from './Modal';
import styled from 'styled-components';
import MovieList from './MovieList';
import { MovieContext } from '../contexts/MovieContext';




export default function Movie(props) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const {movies, actions} = useContext(MovieContext);
  const handleDeleteFromContext = actions.delete;

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
  
  const Butt = styled.button`
  padding: 15px,
`

  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal()
  }

  const { Panel } = Collapse;
    
  const detailStyle = {
    width: '100%'
  }
  
  const handleShowDelete = ()=>{
    setIsDeleteActive(true);
  }

  const handleHideDelete = () =>{
    setIsDeleteActive(false);
  }

  const handleDelete = () =>{
    handleDeleteFromContext(props.movie.id);
  }

  return (
    
    <div>
      <div className="site-card-border-less-wrapper">
      <Card className="card">
        <Columns>       
              <Card.Grid hoverable={true} style={titleStyle}><strong>{props.movie.title}</strong></Card.Grid>
              <Card.Grid hoverable={false} style={titleStyle1}>
                <div>
                  <img src={props.movie.imageURL} alt='Kukutyin' height='300' />
                </div>
                <div>
                <Card.Grid hoverable={false} style={gridStyle}>Category: {props.movie.categories.join(", ")}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>Director: {props.movie.director}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>{props.movie.releaseDate}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}><Butt onClick={openModal}>Edit</Butt></Card.Grid>
                {<Card.Grid hoverable={false} style={gridStyle}>
                {!isDeleteActive ? 
                  <Butt onClick={handleShowDelete}>Delete</Butt> : 
                  <span>Do you really want to delete? <Butt onClick={handleHideDelete}>No</Butt> <Butt onClick={handleDelete}>Yes</Butt></span> 
                  }
                </Card.Grid>}
                </div>            
            </Card.Grid>
          </Columns>            
          <Columns>
              <Collapse style={detailStyle}>
                <Panel header={"Details of " + props.movie.title}>
                  <p>{props.movie.plot}</p>
                </Panel>
              </Collapse>  
            </Columns>         
          </Card>
      </div>

      <Modal ref={modalRef}>
        <form>
          <label >Movie title: </label><br />
          <input type="text" placeholder={props.movie.title} /><br /><br />
          <label>Categories: </label><br />
          <input type="text" placeholder={props.movie.categories.join(", ")} /><br /><br />
          <label>Release year: </label><br />
          <input type="text" placeholder={props.movie.releaseDate} /><br /><br />
          <input type="submit" />
        </form>
        
        
        <button onClick={() => modalRef.current.closeModal()}>Close</button>
      </Modal>     {/* <h1>{props.movie.title}</h1> */}
    </div>
    )
}
