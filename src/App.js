import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './presentation/home';
import './App.scss';

function App() {
  return (
      <Router>
        <div className="App"> 
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
