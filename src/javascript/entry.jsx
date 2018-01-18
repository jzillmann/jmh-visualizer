import React from 'react';
import ReactDOM from 'react-dom';

import AppState from 'models/AppState.js';
import BenchmarkRun from 'models/BenchmarkRun.js';
import Examples from 'models/Examples.js';
import { exampleRun1 } from 'exampleBenchmark1.js';
import { exampleRun2 } from 'exampleBenchmark2.js';
import { exampleRun3 } from 'exampleBenchmark3.js';

import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';
import App from 'components/App.jsx';

import createHistory from 'history/createBrowserHistory'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/common.css';
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
    }),
    run3: new BenchmarkRun({
        name: 'run3',
        benchmarks: exampleRun3
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
    const urlHash = window.location.hash;
    if (urlHash === '#singleRunExample') {
        appState.initBenchmarkRuns(appState.examples.singleRunExample);
    } else if (urlHash === '#twoRunsExample') {
        appState.initBenchmarkRuns(appState.examples.twoRunsExample);
    } else if (urlHash === '#multiRunExample') {
        appState.initBenchmarkRuns(appState.examples.multiRunExample);
    } else {
        const source = getParameterByName('source');
        if (source) {
            fetchFromUrl(source);
        } else {
            appState.initBenchmarkRuns([]);
        }
    }
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function fetchFromUrl(url) {
    fetch(url).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then((json) => {
        const benchmarkRun = new BenchmarkRun({
            name: url,
            benchmarks: json
        });
        appState.initBenchmarkRuns([benchmarkRun]);
    }).catch(function(error) {
        alert(`Could not fetch data from ${url}: ${error}`);
        appState.initBenchmarkRuns([]);
    });
}
