import React from 'react';


import './control-panel.css';
import NewMovieButton from './NewMovieButton';

export default function ControlPanel() {

  return (
    <div className="controlPanel">
      <NewMovieButton />
    </div>
  )
}