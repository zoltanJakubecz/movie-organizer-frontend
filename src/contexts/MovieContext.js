import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext();


export const MovieProvider = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/api/movies/?page=1");
      console.log(res);
      setMovies(res.data);
    }
    getData();
  }, []);

  const add = async function (movie) {
    await axios.post("http://localhost:8080/api/movies", movie);
    const newMovies = [movie, ...movies.slice(0, 4)];
    setMovies(newMovies);
  }

  function handleDeleteFromContext(id) {
    let elementsToKeep = [];
    for (let movie of movies) {
      if (movie.id != id) {
        elementsToKeep.push(movie);
      }
    }
    setMovies(elementsToKeep);
    axios.delete("http://localhost:8080/api/movies/?id=" + id);
  }

  return (
    <MovieContext.Provider value={{
      movies,
      actions: {
        add,
        delete: handleDeleteFromContext
      }
    }}>
      {props.children}
    </MovieContext.Provider>
  )
}