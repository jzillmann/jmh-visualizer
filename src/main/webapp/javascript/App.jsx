import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';
import About from './About.jsx';

class App extends React.Component {

    getInitialState() {
        return {
            rawReports: [],
            dataUploaded: false
        };
    }

    handleUserInput(rawReports) {
        this.setState({
            filterText: rawReports,
            dataUploaded: true
        });
    }

    render() {
        return (
            <div>
              <Router history={ hashHistory }>
                <Route path="/" component={ Container }>
                  <IndexRoute component={ FileDrop } />
                  <Route path="/" component={ FileDrop } />
                  <Route path="/about" component={ About } />
                </Route>
              </Router>
            </div>
            );
    }
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default App;
