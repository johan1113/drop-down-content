import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './presentation/home';
import SelectedItem from './store/containers/SelectedItem';
import DropDownContent from './store/containers/DropDownContent';
import './App.scss';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <DropDownContent/>*/}
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/modal" component={SelectedItem} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
