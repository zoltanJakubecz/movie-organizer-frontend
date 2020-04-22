import React, { useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import Movie from './Movie';

export default function MovieList() {
    const  movies = useContext(MovieContext);
    
    console.log(movies);
    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}


