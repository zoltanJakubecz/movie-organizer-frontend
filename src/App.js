import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import './App.css';
import PageHeader from './components/page-header/PageHeader';
import { MovieProvider } from './contexts/MovieContext';
import AppContent from './components/AppContent';
import PersonsContent from './components/PersonsContent';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <MovieProvider>
          <Route exact path="/" component={AppContent} />
          <Route exact path="/movies" component={AppContent} />
          <Route exact path="/artists" component={PersonsContent} />
        </MovieProvider>
      </div>
    </Router>
  );
}

export default App;
