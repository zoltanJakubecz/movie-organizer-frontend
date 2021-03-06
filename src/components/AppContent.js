import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ControlPanel from './control-panel/ControlPanel';
import MovieList from './movie-list/MovieList';

import './app-content.css';
import MovieForm from './movie-form/MovieForm';

export default function AppContent() {

  const movieFormState = useState(false);

  return (
    <div className="appContent">
      <ControlPanel controls={{ movieFormState }} />
      <MovieForm openState={movieFormState} />
      <Route path="/" component={MovieList} />
    </div>
  )
}
