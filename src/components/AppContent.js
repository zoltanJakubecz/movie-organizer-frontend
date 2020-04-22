import React from 'react';
import { Route } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import MovieList from './MovieList';

import './app-content.css';
import MovieForm from './MovieForm';
import { VisibilitySwitcher } from '../contexts/VisibilityContext';

export default function AppContent() {
  return (
    <div className="appContent">
      <VisibilitySwitcher trigger>
        <ControlPanel />
        <MovieForm />
      </VisibilitySwitcher>
      <Route path="/" component={MovieList} />
    </div>
  )
}
