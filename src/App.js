import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './components/MovieList'

import './App.css';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <Router>
      <MovieProvider>
        <div className="App">
          <Route path="/movies" component={MovieList} />
        </div>
      </MovieProvider>
    </Router>
    
  );
}

export default App;
