import React, { useState, useContext } from 'react';
import { Card, Collapse } from 'antd';
import Button from 'antd/es/button';
import { MovieContext } from '../../contexts/MovieContext';
import EditorModal from './EditorModal';

import './movie-card.css';

export default function MovieCard(props) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const { actions } = useContext(MovieContext);
  const handleDeleteFromContext = actions.delete;

  const {
    id: mId,
    title: mTitle,
    categories: mCategories,
    director: mDirector,
    releaseDate: mReleaseDate,
    imageURL: mImageURL,
    plot: mPlot
  } = props.movie;

  const [title, setTitle] = useState(mTitle);
  const [categories, setCategories] = useState(mCategories);
  const [director, setDirector] = useState(mDirector);
  const [release, setRelease] = useState(mReleaseDate);
  const [imageURL, setImageURL] = useState(mImageURL)

  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal()
  };

  const { Panel } = Collapse;

  const handleShowDelete = () => {
    setIsDeleteActive(true);
  }

  const handleHideDelete = () => {
    setIsDeleteActive(false);
  }

  const handleDelete = () => {
    console.log("wat")
    handleDeleteFromContext(mId);
  }

  return (

    <React.Fragment>

      <Card className="movie-card">
        <div className="movie-card-header">
          <div className="movie-card-title">{title} ({release})</div>
          <div><Button type="dashed" onClick={openModal}>Edit</Button></div>
          <div>
            {!isDeleteActive ?
              <Button type="dashed" onClick={handleShowDelete}>Delete</Button> :
              <span>
                <Button onClick={handleHideDelete}>No</Button>
                <Button onClick={handleDelete}>Yes</Button> Are you sure?
              </span>
            }
          </div>
        </div>

        <div className="movie-card-details">
          <Collapse style={{ width: '100%' }}>
            <Panel header={"Details of " + title}>
              <div className="movie-card-details-header">
                <img src={imageURL} alt='Kukutyin' height='300' />
                <div className="movie-card-details-header-info">
                  <div>Categories: {categories ? categories.join(", ") : ""}</div>
                  <div>Director: {director}</div>
                </div>
              </div>
              <div className="movie-card-details-plot">{mPlot}</div>
            </Panel>
          </Collapse>
        </div>

      </Card>

      <EditorModal
        modalRef={modalRef}
        movie={{ id: mId, plot: mPlot, imageURL: mImageURL }}
        states={{
          title: [title, setTitle],
          categories: [categories, setCategories],
          director: [director, setDirector],
          release: [release, setRelease],
          imageURL: [imageURL, setImageURL]
        }}
        update={actions.update}
      />
    </React.Fragment>
  )
}