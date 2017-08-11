import React from 'react';
import ReactDOM from 'react-dom';

import AppState from './models/AppState.js';
import BenchmarkRun from './models/BenchmarkRun.js';
import Examples from './models/Examples.js';
import { exampleRun1 } from './exampleBenchmark1.js';
import { exampleRun2 } from './exampleBenchmark2.js';

import DoingWorkSpinner from './components/DoingWorkSpinner.jsx';
import App from './components/App.jsx';

import createHistory from 'history/createBrowserHistory'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/sidenavi.css';

function render(appState) {
    DoingWorkSpinner.show(); //App.componentDidUpdate() will hide again
    setTimeout(() => {
        ReactDOM.render(<App appState={ appState } />, document.getElementById('main'));
    }, 0);
}

const examples = new Examples({
    run1: new BenchmarkRun({
        name: 'run1',
        benchmarks: exampleRun1
    }),
    run2: new BenchmarkRun({
        name: 'run2',
        benchmarks: exampleRun2
    })
});

const history = createHistory();
const appState = new AppState({
    renderFunction: render,
    examples: examples,
}, history);

if (providedBenchmarks.length > 0) { // eslint-disable-line no-undef
    appState.initBenchmarkRuns(providedBenchmarks.map(runName => new BenchmarkRun({ // eslint-disable-line no-undef
        name: runName,
        benchmarks: providedBenchmarkStore[runName] // eslint-disable-line no-undef
    })));
} else {
    appState.initBenchmarkRuns([]);
}

// appState.initBenchmarkRuns(examples.singleRunExample)
