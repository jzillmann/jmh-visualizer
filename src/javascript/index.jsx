import React from 'react';
import ReactDOM from 'react-dom';
import Examples from './models/Examples.jsx';
import BenchmarkRun from './models/BenchmarkRun.jsx';
import AppState from './models/AppState.jsx';
import App from './components/App.jsx';
import { exampleRun1 } from './exampleBenchmark1.jsx';
import { exampleRun2 } from './exampleBenchmark2.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/sidenavi.css';

function render(appState) {
    ReactDOM.render(<App appState={ appState } />, document.getElementById('main'));
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

const appState = new AppState({
    renderFunction: render,
    examples: examples,
});

if (providedBenchmarks.length > 0) { // eslint-disable-line no-undef
    appState.uploadBenchmarkRuns(providedBenchmarks.map(runName => new BenchmarkRun({ // eslint-disable-line no-undef
        name: runName,
        benchmarks: providedBenchmarkStore[runName] // eslint-disable-line no-undef
    })));
} else {
    appState.uploadBenchmarkRuns([]);
}

// appState.uploadBenchmarkRuns(examples.singleRunExample)
