import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const Aurora = () => {
  return (
    <App />
  );
};

ReactDOM.render(<Aurora />, document.getElementById('root'));
