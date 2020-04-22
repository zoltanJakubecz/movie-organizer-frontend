import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import './App.css';
import PageHeader from './components/page-header/PageHeader';
import { MovieProvider } from './contexts/MovieContext';
import AppContent from './components/AppContent';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <MovieProvider>
          <Route path="/" component={AppContent} />
        </MovieProvider>
      </div>
    </Router>
  );
}

export default App;
