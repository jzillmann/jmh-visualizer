import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState.jsx';
import App from './components/App.jsx';
import { providedBenchmarks } from './providedBenchmarks.jsx';
import 'bootstrap/dist/css/bootstrap.css';

function render(appState) {
    console.debug('!!!!1:' + appState.dataUploaded)
    ReactDOM.render(<App appControl={ appState } />, document.getElementById('main'));
}

const appState = new AppState({
    renderFunction: render
})
console.debug(providedBenchmarks.length)
appState.uploadBenchmarks(providedBenchmarks)
//appState.uploadBenchmarks([])
