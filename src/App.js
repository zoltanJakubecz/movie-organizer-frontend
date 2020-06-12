import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import './App.css';
import PageHeader from './components/page-header/PageHeader';
import { MovieProvider } from './contexts/MovieContext';
// import { PersonProvider } from './contexts/PersonContext';
// import PersonsContent from './components/PersonsContent';
import AppContent from './components/AppContent';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <Router>
      <div className="App">
        <UserProvider>
          {/* <PersonProvider> */}
          <MovieProvider>
            <PageHeader />
            <Route exact path={["/", "/movies"]} component={AppContent} />
            <Route exact path="/artists" render={() => (
              <div className="appContent">Not implemented yet.</div>
            )} />
          </MovieProvider>
          {/* </PersonProvider> */}
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
