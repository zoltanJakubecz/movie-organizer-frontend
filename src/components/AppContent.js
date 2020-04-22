import React from 'react';
import { Route } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import MovieList from './MovieList';

import './app-content.css';

export default function AppContent() {
  return (
    <div className="appContent">
      <ControlPanel />
      <Route path="/" component={MovieList} />
    </div>
  )
}
