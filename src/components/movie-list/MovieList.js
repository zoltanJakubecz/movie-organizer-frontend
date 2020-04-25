import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from './movie-card/MovieCard';

export default function MovieList() {
    const { movies } = useContext(MovieContext);

    return (
        <div id="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}


