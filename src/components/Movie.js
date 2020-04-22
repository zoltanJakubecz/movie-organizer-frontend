import React, {useState} from 'react'
import { Card } from 'antd';
import Modal from './Modal';
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

  const [title, setTitle] = useState(props.movie.title);
  const [categories, setCategories] = useState(props.movie.categories);
  const [director, setDirector] = useState(props.movie.director);
  const [release, setRelease] = useState(props.movie.releaseDate);

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
    setTitle(values.title);
    setDirector(values.director);
    setRelease(values.release);
    setCategories(values.Categories);
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

  

  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card className="card">
          <Card.Grid hoverable={true} style={titleStyle}><strong>{title}</strong></Card.Grid>
          <Card.Grid hoverable={false} style={titleStyle1}>
            <div>
              <img src={props.movie.imageURL} alt='Kukutyin' height='300' />
            </div>
            <div>
            <Card.Grid hoverable={false} style={gridStyle}>Category: {categories.join(", ")}</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>Director: {director}</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>{release}</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}><Button onClick={openModal}>Edit</Button></Card.Grid>
            </div>            
          </Card.Grid>          
        </Card>
      </div>

      <Modal ref={modalRef}>
        <ModalHeader>
          <CloseSpan onClick={() => modalRef.current.closeModal()}><strong>X</strong></CloseSpan>
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div>
    
          {categories.map((category, i) => (
          <>
            <input label={category} type="checkbox" name="Categories" defaultValue={category} defaultChecked={true} ref={register} key={i} />
            <label>{category}</label>
          </>
          ))}

        </div>


          <label >Movie title: </label><br />
          <Input name="title" defaultValue={title} ref={register} /><br /><br />
          <label >Director: </label><br />
          <Input name="director" defaultValue={director} ref={register} /><br /><br />
          <label>Categories: </label><br />
          <Input name="categories" defaultValue={categories.join(", ")} ref={register} /><br /><br />
          <label>Release year: </label><br />
          <Input name="release" type="number" defaultValue={release} ref={register({ min: 1900, max: 2020 })} /><br /><br />
          {errors.release && 'Year must be between 1900 and 2020'}
          <br />
          <br />
          <ModalFooter>
            <Button type="submit" >Update</Button>
          </ModalFooter>
          
        </form>
      </Modal>    
    </div>
    )
}
