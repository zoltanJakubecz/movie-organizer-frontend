import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext();


export const MovieProvider = props => {
  const [data, setData] = useState({
    totalMovieCount: 0,
    page: 1,
    movies: [],
  });

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/api/movies/?page=1");
      setData(Object.assign(res.data, { page: 1 }));
    }
    getData();
  }, []);

  const loadPage = async function (page) {
    const res = await axios.get("http://localhost:8080/api/movies/?page=" + page);
    setData(Object.assign(res.data, { page }));
  }

  const add = async function (movie) {
    const res = await axios.post("http://localhost:8080/api/movies", movie);
    setData(Object.assign({ ...data }, {
      totalMovieCount: data.totalMovieCount + 1,
      movies: [res.data, ...(data.movies.slice(0, 4))]
    }))
  }

  const update = async function (id, movie) {
    await axios.put("http://localhost:8080/api/movies/" + id, movie);
  }

  const attachCategory = function (movieId, category) {
    axios.post(`http://localhost:8080/api/movies/${movieId}/categories`, category, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }

  const detachCategory = function (movieId, categoryId) {
    axios.delete(`http://localhost:8080/api/movies/${movieId}/categories/${categoryId}`);
  }

  async function handleDeleteFromContext(id) {
    await axios.delete("http://localhost:8080/api/movies/?id=" + id);
    await loadPage(data.page);
  }

  return (
    <MovieContext.Provider value={{
      total: data.totalMovieCount,
      page: data.page,
      movies: data.movies,
      actions: {
        loadPage,
        add,
        update,
        delete: handleDeleteFromContext,
        categories: {
          detachFromMovie: detachCategory,
          attachToMovie: attachCategory
        }
      }
    }}>
      {props.children}
    </MovieContext.Provider>
  )
}