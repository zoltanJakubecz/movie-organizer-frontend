import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ControlPanel from './control-panel/ControlPanel';
import PersonList from './person-list/PersonList';

import './app-content.css';
import PersonForm from './person-form/PersonForm';

export default function PersonsContent() {

  const movieFormState = useState(false);

  return (
    <div className="appContent">
      <ControlPanel controls={{ movieFormState }} />
      <PersonForm openState={movieFormState} />
      <Route path="/" component={PersonList} />
    </div>
  )
}
