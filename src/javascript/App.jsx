import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';
import About from './About.jsx';

export default class App extends React.Component {

    static propTypes = {
        initialCount: React.PropTypes.number,
        ups: React.PropTypes.bool
    };

    static defaultProps = {
        initialCount: 3,
        ups: false
    };

    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount,
            dataUploaded: props.ups
        // rawReports: []
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    // handleUserInput(rawReports) {
    handleUserInput() {
        this.setState({
            dataUploaded: true,
            count: 23
        // rawReports: rawReports
        });
    }

    render() {
        console.log('___' + this.state.count)
        return (
            <div>
              /
              { this.state.count },
              { this.state.abc }___=
              { 666 }
              { true + '' }_+_+_=-=_+
              <Router history={ hashHistory }>
                <Route path="/" component={ Container }>
                  <IndexRoute xyz={ this.state.dataUploaded } onFileUpload={ this.handleUserInput } component={ FileDrop } />
                  <Route
                         xyz={ 23 }
                         onFileUpload={ this.handleUserInput }
                         path="/"
                         component={ FileDrop } />
                  <Route path="/about" component={ About } />
                </Route>
              </Router>
            </div>
            );
    }
}

