import React, { useState, useContext } from 'react';
import { Card, Collapse } from 'antd';
import { Columns } from 'react-flex-columns'
import Modal from './Modal';
import { MovieContext } from '../contexts/MovieContext';

import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Button = styled.button`
  padding: 6px;
  background: #0072ed;
  color: white;
  width: 120px;
  border-radius: 10px;
  `
const Input = styled.input`
  width: 80%;
  border-radius: 10px;
`

const ModalHeader = styled.div`
  text-align: right;
`

const ModalFooter = styled.div`
  text-align: right;
`

const ModalBody = styled.div`
  height: 80%;
`

const CloseSpan = styled.span`
  cursor: pointer;
`

export default function Movie(props) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const { movies, actions } = useContext(MovieContext);
  const handleDeleteFromContext = actions.delete;

  const [title, setTitle] = useState(props.movie.title);
  const [categories, setCategories] = useState(props.movie.categories);
  const [director, setDirector] = useState(props.movie.director);
  const [release, setRelease] = useState(props.movie.releaseDate);
  const [imageURL, setImageURL] = useState(props.movie.imageURL)

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    console.log(categories);
    setTitle(values.Title);
    setDirector(values.Director);
    setRelease(values.release);
    if (values.newcategory !== "") {
      values.Categories.push(values.newcategory);
    }
    setCategories(values.Categories);
    modalRef.current.closeModal();
  };

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
  };

  const { Panel } = Collapse;

  const detailStyle = {
    width: '100%'
  }

  const handleShowDelete = () => {
    setIsDeleteActive(true);
  }

  const handleHideDelete = () => {
    setIsDeleteActive(false);
  }

  const handleDelete = () => {
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
                <Card.Grid hoverable={false} style={gridStyle}><Button onClick={openModal}>Edit</Button></Card.Grid>
                {<Card.Grid hoverable={false} style={gridStyle}>
                  {!isDeleteActive ?
                    <Button onClick={handleShowDelete}>Delete</Button> :
                    <span>Do you really want to delete? <Button onClick={handleHideDelete}>No</Button> <Button onClick={handleDelete}>Yes</Button></span>
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
        <ModalHeader>
          <CloseSpan onClick={() => modalRef.current.closeModal()}><strong>X</strong></CloseSpan>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label >Movie title: </label><br />
            <Input name="Title" defaultValue={title} ref={register} /><br /><br />
            <label >Director: </label><br />
            <Input name="Director" defaultValue={director} ref={register} /><br /><br />
            <label>Categories: </label><br />
            {categories.map((category, i) => (
              <React.Fragment key={i}>
                <input type="checkbox" name="Categories" defaultValue={category} defaultChecked={true} ref={register} />
                <label> {category}  </label>
              </React.Fragment>
            ))}
            <br />
            <Input name="newcategory" autoComplete="off" placeholder="New category" ref={register} /><br /><br />
            <label>Release year: </label><br />
            <Input name="release" type="number" defaultValue={release} ref={register({ min: 1900, max: 2020 })} /><br /><br />
            {errors.release && 'Year must be between 1900 and 2020'}
            <br />
            <br />
            <Button type="submit">Update</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => modalRef.current.closeModal()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
