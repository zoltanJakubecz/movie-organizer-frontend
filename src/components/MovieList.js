import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import Movie from './Movie';

export default function MovieList() {
    const { movies } = useContext(MovieContext);

    return (
        <div style={{
            margin: "auto",
            padding: "1rem",
            border: "var(--primary-bg-color) solid 1px",
        }}>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}


