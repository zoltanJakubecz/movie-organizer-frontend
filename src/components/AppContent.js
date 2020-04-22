import React from 'react';
import { Route } from 'react-router-dom';
import ControlPanel from './ControlPanel';
import MovieList from './MovieList';

export default function AppContent() {
  return (
    <div style={{ width: "90vw", margin: "auto" }}>
      <ControlPanel />
      <Route path="/" component={MovieList} />
    </div>
  )
}
