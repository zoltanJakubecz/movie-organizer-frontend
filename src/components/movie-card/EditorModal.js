import React from 'react'
import Modal from '../Modal';
import { useForm } from 'react-hook-form';

export default function EditorModal(props) {

  const { modalRef, movie, states, update } = props;
  const [title, setTitle] = states.title;
  const [categories, setCategories] = states.categories;
  const [director, setDirector] = states.director;
  const [release, setRelease] = states.release;
  const [imageURL, setImageURL] = states.imageURL;

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    setTitle(values.Title);
    setDirector(values.Director);
    setRelease(values.release);

    let categoryList;
    if (!values.categories && values.newcategory !== "") {
      categoryList = [values.newcategory];
    } else if (values.categories) {
      categoryList = typeof values.categories === "string" ? [values.categories] : values.categories;
      if (values.newcategory !== "") {
        categoryList.push(values.newcategory);
      }
    }
    setCategories(categoryList);

    update(movie.id, {
      title: values.Title,
      categories: categoryList,
      director: values.Director,
      plot: movie.plot,
      releaseDate: values.release,
      imageURL: movie.imageURL
    });
    modalRef.current.closeModal();
  };

  return (
    <Modal id="editor-modal" ref={modalRef}>

      <div className="modal-header">
        <span className="close-span" onClick={() => modalRef.current.closeModal()}><strong>X</strong></span>
      </div>

      <div className="modal-body">
        <form onSubmit={handleSubmit(onSubmit)}>

          <label >Movie title: </label><br />
          <input name="Title" defaultValue={title} ref={register} /><br /><br />

          <label >Director: </label><br />
          <input name="Director" defaultValue={director} ref={register} /><br /><br />

          <label>Categories: </label><br />
          {categories && categories.map((category, i) => (
            <React.Fragment key={i}>
              <input type="checkbox" name="categories" defaultValue={category} defaultChecked={true} ref={register} />
              <label> {category}  </label>
            </React.Fragment>
          ))}
          <br />

          <input name="newcategory" autoComplete="off" placeholder="New category" ref={register} /><br /><br />
          <label>Release year: </label><br />
          <input name="release" type="number" defaultValue={release} ref={register({ min: 1900, max: 2020 })} /><br /><br />

          {errors.release && 'Year must be between 1900 and 2020'}
          <br />
          <br />

          <button type="submit">Update</button>
        </form>
      </div>

      <div className="modal-footer">
        <button onClick={() => modalRef.current.closeModal()}>Cancel</button>
      </div>

    </Modal>
  )
}
