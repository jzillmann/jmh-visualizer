import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App.jsx';
import FileDrop from './FileDrop.jsx';
import About from './About.jsx';

ReactDOM.render(
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ FileDrop } />
        <Route path="/" component={ FileDrop } />
        <Route path="/about" component={ About } />
      </Route>
    </Router>
    , document.getElementById('main'));
