import React, { useState, useContext } from 'react';
import { Card, Collapse } from 'antd';
import Button from 'antd/es/button';
import { PersonContext } from '../../../contexts/PersonContext';
import ModalForm from './ModalForm';

import './person-card.css';

export default function PersonCard(props) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const { actions } = useContext(PersonContext);
//   const handleDeleteFromContext = actions.delete;

  const {
    id: mId,
    name: mName,
    comment: mComment,
    playedIn: mPlayedIn,
    creatorOf: mCreatorOf
  } = props.person;

  const [name, setName] = useState(mName);
  const [comment, setComment] = useState(mComment);
  const [playedIn, setPlayedIn] = useState(mPlayedIn);
  const [creatorOf, setCreatorOf] = useState(mCreatorOf);
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);    
    setName(values.name);
    setComment(values.comment);


//     actions.update(props.movie.id, {
//       title: values.title,
//       categories:categories,
//       director: values.director,
//       plot: values.plot,
//       releaseDate: values.release,
//       imageURL: values.imageURL
//     });

    setVisible(false);
  };


  const { Panel } = Collapse;

  const handleShowDelete = () => {
    setIsDeleteActive(true);
  }

  const handleHideDelete = () => {
    setIsDeleteActive(false);
  }

  const handleDelete = () => {
    // handleDeleteFromContext(mId);
  }

  return (

    <React.Fragment>

      <Card className="movie-card">
        <div className="movie-card-header">
          <div className="movie-card-title">{name}</div>
          

          <div><Button type="dashed" onClick={ () => { setVisible(true); } }>Edit</Button></div>
          
          <ModalForm
            visible={visible}
            onCreate={onCreate}
            // movie={{ id: mId, plot: mPlot, imageURL: mImageURL }}
            states={{
              name: [name, setName],
              comment: [comment, setComment],
              playedIn: [playedIn, setPlayedIn],
              creatorOf: [creatorOf, setCreatorOf],
            }}
            // update={actions.update}
            onCancel={() => {
            setVisible(false); 
            }}
          />

          <div>
            {!isDeleteActive ?
              <Button danger type="dashed" onClick={handleShowDelete}>Delete</Button> :
              <span>
                <Button onClick={handleHideDelete}>No</Button>
                <Button onClick={handleDelete}>Yes</Button> Are you sure?
              </span>
            }
          </div>
          <div className="movie-card-comment">
                    <div>Comment: {comment}</div>
                </div>
        </div>

        <div className="movie-card-details">
          <Collapse style={{ width: '100%' }}>
            <Panel header={"Details of " + name}>
              <dl>
                <dt>Played in:</dt>
                {playedIn.map((film) => {
                  return <dd key={film} className="movie-card-details-plot"> - {film}</dd>
                })}
  
                <dt>Creator of:</dt>          
                {creatorOf.map((film) => {
                  return <dd key={film}> - {film}</dd>
                })}
              </dl>        
            </Panel>
          </Collapse>
        </div>
      </Card>
    </React.Fragment>
  )
}