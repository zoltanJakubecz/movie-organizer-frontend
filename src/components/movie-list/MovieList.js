import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from './movie-card/MovieCard';
import { UserContext } from '../../contexts/UserContext';
import LoginPromptPanel from '../LoginPromptPanel';

export default function MovieList() {
    const { movies } = useContext(MovieContext);
    const { username } = useContext(UserContext);

    return !!username ? (
        <div id="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    ) : (
            <LoginPromptPanel
                title="Please log in to see all the movies!"
                subtitle="Don't have an account? Click Register!"
            />
        )
}


