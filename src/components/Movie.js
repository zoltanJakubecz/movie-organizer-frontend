import React from 'react'
import { Card, Collapse } from 'antd';
import { Columns} from 'react-flex-columns'
import Modal from './Modal';
import styled from 'styled-components';



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
  
  const Butt = styled.button`
  padding: 15px,
`

  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal()
  }

  const { Panel } = Collapse;

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
    
  const detailStyle = {
    width: '100%'
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
