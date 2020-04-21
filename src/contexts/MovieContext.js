import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext();


export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    // {
    //   "id": 1,
    //   "title": "Alien",
    //   "director": "Ridley Scott",
    //   "releaseDate": 1979
    // },
    // {
    //   "id": 2,
    //   "title": "Harry Potter",
    //   "director": "David Yates",
    //   "releaseDate": 1979
    // },
    // {
    //   "id": 3,
    //   "title": "Back to the Future",
    //   "director": "Robert Zemekis",
    //   "releaseDate": 1979
    // },
  ]);

  

  useEffect(() => {
    async function getData(){
    const res = await axios.get("http://localhost:8080/api/movies/1");
    console.log(res);
    setMovies(res.data);
    }
    getData();
  },[]);

  
  // useEffect(() => {
  //   const movieUrl = "http://localhost:8080/api/movies/1/";
  //   axios.get(movieUrl)
  //     .then(res => {setMovies(res.data)});
  // }, [])

  // console.log(movies);

  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  )
}