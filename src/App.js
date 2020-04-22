import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './components/MovieList'
import 'antd/dist/antd.css';

import './App.css';
import { MovieProvider } from './contexts/MovieContext';
import PageHeader from './components/page-header/PageHeader';

function App() {
  return (
    <Router>
      <MovieProvider>
        <div className="App">
          <PageHeader />
          <Route path="/movies" component={MovieList} />
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
