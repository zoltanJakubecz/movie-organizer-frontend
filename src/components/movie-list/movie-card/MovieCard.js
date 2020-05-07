import React, { useState, useContext } from 'react';
import { Card, Collapse } from 'antd';
import Button from 'antd/es/button';
import { MovieContext } from '../../../contexts/MovieContext';
import Tags from './Tags'
import ModalForm from './ModalForm';

import './movie-card.css';

export default function MovieCard(props) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const { actions } = useContext(MovieContext);
  const handleDeleteFromContext = actions.delete;

  const {
    id: mId,
    title: mTitle,
    categories: mCategories,
    characterActorMovieMaps: characterMaps,
    director: mDirector,
    releaseDate: mReleaseDate,
    imageURL: mImageURL,
    plot: mPlot
  } = props.movie;

  const [title, setTitle] = useState(mTitle);
  const [categories, setCategories] = useState(mCategories);
  const [director, setDirector] = useState(mDirector);
  const [release, setRelease] = useState(mReleaseDate);
  const [imageURL, setImageURL] = useState(mImageURL);
  const [plot, setPlot] = useState(mPlot);
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);


    console.log(categories);
    setTitle(values.title);
    setDirector(values.director);
    setRelease(values.release);
    setImageURL(values.imageURL);
    setPlot(values.plot);

    actions.update(props.movie.id, {
      title: values.title,
      categories: categories,
      director: values.director,
      plot: values.plot,
      releaseDate: values.release,
      imageURL: values.imageURL
    });

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
    handleDeleteFromContext(mId);
  }

  return (

    <React.Fragment>

      <Card className="movie-card">
        <div className="movie-card-header">
          <div className="movie-card-title">{title} ({release})</div>

          <div><Button type="dashed" onClick={() => { setVisible(true); }}>Edit</Button></div>

          <ModalForm
            visible={visible}
            onCreate={onCreate}
            // movie={{ id: mId, plot: mPlot, imageURL: mImageURL }}
            states={{
              title: [title, setTitle],
              categories: [categories, setCategories],
              director: [director, setDirector],
              release: [release, setRelease],
              imageURL: [imageURL, setImageURL],
              plot: [plot, setPlot]
            }}
            update={actions.update}
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

          <div className="tags">
            <Tags
              movieId={mId}
              actions={actions.categories}
              categories={categories}
              setCategories={setCategories}
            />
          </div>

        </div>

        <div className="movie-card-details">
          <Collapse style={{ width: '100%' }}>
            <Panel header={"Details of " + title}>
              <div className="movie-card-details-header">
                <img src={imageURL} alt='Kukutyin' height='300' />
                <div className="movie-card-details-header-info">
                  {director && <div>Director: {director}</div>}
                  {characterMaps.length > 0 && (
                    <div>
                      <div>Characters:</div>
                      <ul>
                        {characterMaps.map(({ movieCharacter: character, actor }) => (
                          <li key={character.id}>{character.name}{actor && (" - played by " + actor.name)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="movie-card-details-plot">{plot}</div>
            </Panel>
          </Collapse>
        </div>

      </Card>

    </React.Fragment>
  )
}