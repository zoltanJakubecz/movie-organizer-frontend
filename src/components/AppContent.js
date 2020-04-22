import React from 'react';
import { Route } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import MovieList from './MovieList';

import './app-content.css';
import MovieForm from './MovieForm';

export default function AppContent() {
  return (
    <div className="appContent">
      <ControlPanel />
      <MovieForm />
      <Route path="/" component={MovieList} />
    </div>
  )
}
