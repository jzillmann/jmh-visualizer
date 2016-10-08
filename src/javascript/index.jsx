import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState.jsx';
import App from './components/App.jsx';
import { providedBenchmarks } from './providedBenchmarks.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/sidenavi.css';

function render(appState) {
    ReactDOM.render(<App appState={ appState } />, document.getElementById('main'));
}

const appState = new AppState({
    exampleBenchmarks: providedBenchmarks,
    renderFunction: render
})
appState.uploadBenchmarks([])
// appState.loadExamples()
