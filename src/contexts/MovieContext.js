import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import {UserContext} from './UserContext';


export const MovieContext = createContext();

const requestConfig = {
  withCredentials: true, headers: {
    "Access-Control-Allow-Credentials": "true"
  },
}

export const MovieProvider = props => {
  const [data, setData] = useState({
    totalMovieCount: 0,
    page: 1,
    movies: [],
  });

  const  {username} = useContext(UserContext);


  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/api/movies/?page=1", requestConfig)
      if (res !== undefined) {
        setData(Object.assign(res.data, { page: 1 }));
      }
    }
    if(username){
      getData();
    } else {
      setData({
        totalMovieCount: 0,
        page: 1,
        movies: [],
      }

      )
    }
    getData();
  }, [username]);

  const loadPage = async function (page) {
    const res = await axios.get("http://localhost:8080/api/movies/?page=" + page, requestConfig);
    setData(Object.assign(res.data, { page }));
  }

  const add = async function (movie) {
    const res = await axios.post("http://localhost:8080/api/movies", movie, requestConfig);
    setData(Object.assign({ ...data }, {
      totalMovieCount: data.totalMovieCount + 1,
      movies: [res.data, ...(data.movies.slice(0, 4))]
    }))
  }

  const update = async function (id, movie) {
    await axios.put("http://localhost:8080/api/movies/" + id, movie, requestConfig);
  }

  const attachCategory = async function (movieId, category) {
    return await axios.post(`http://localhost:8080/api/movies/${movieId}/categories`, category, Object.assign({
      headers: {
        'Content-Type': 'text/plain'
      }
    }, requestConfig));
  }

  const detachCategory = function (movieId, categoryId) {
    axios.delete(`http://localhost:8080/api/movies/${movieId}/categories/${categoryId}`, requestConfig);
  }

  async function handleDeleteFromContext(id) {
    await axios.delete("http://localhost:8080/api/movies/" + id, requestConfig);
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