import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'store/store.js'
import AppState from 'models/AppState.js';
import BenchmarkRun from 'models/BenchmarkRun.js';
import { getUniqueNames } from 'functions/util.js'

import App from 'components/App.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/common.css';
import '../css/sidenavi.css';

function render(appState) {
    // DoingWorkSpinner.show(); //App.componentDidUpdate() will hide again
    setTimeout(() => {
        ReactDOM.render(
            <Provider>
                <App appState={ appState } />
            </Provider>
            , document.getElementById('main'));
    }, 0);
}


const appState = new AppState({
    renderFunction: render,
});


if (providedBenchmarks.length > 0) { // eslint-disable-line no-undef
    appState.initBenchmarkRuns(providedBenchmarks.map(runName => new BenchmarkRun({ // eslint-disable-line no-undef
        name: runName,
        benchmarks: providedBenchmarkStore[runName] // eslint-disable-line no-undef
    })));
} else {
    var example = getParameterByName('example');
    if (!example) {
        example = getExampleFromHash();
    }
    if (example === 'single') {
        appState.initBenchmarkRuns(appState.examples.singleRunExample);
    } else if (example === 'two') {
        appState.initBenchmarkRuns(appState.examples.twoRunsExample);
    } else if (example === 'multi') {
        appState.initBenchmarkRuns(appState.examples.multiRunExample);
    } else {
        const source = getParameterByName('source');
        if (source) {
            fetchFromUrls([source]);
        } else {
            const sources = getParameterByName('sources');
            if (sources) {
                fetchFromUrls(sources.split(','));
            } else {
                const gist = getParameterByName('gist');
                if (gist) {
                    fetchFromUrls([`https://gist.githubusercontent.com/raw/${gist}`]);
                } else {
                    const gists = getParameterByName('gists');
                    if (gists) {
                        fetchFromUrls(gists.split(',').map(gist => `https://gist.githubusercontent.com/raw/${gist}`));
                    } else {
                        appState.initBenchmarkRuns([]);
                    }
                }
            }
        }
    }
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function fetchFromUrls(urls) {
    const fetchedJsonByUrl = new Map();
    urls.forEach((url) => {
        fetch(url).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((json) => {
            fetchedJsonByUrl.set(url, json);
            if (fetchedJsonByUrl.size == urls.length) {
                const uniqueNames = getUniqueNames(urls);
                appState.initBenchmarkRuns(uniqueNames.map((name, i) => new BenchmarkRun({
                    name: name,
                    benchmarks: fetchedJsonByUrl.get(urls[i])
                })));
            }
        }).catch(function (error) {
            alert(`Could not fetch data from ${url}: ${error}`);
            appState.initBenchmarkRuns([]);
        });
    });

}

// backwards compatibility - Jan 2018
function getExampleFromHash() {
    const urlHash = window.location.hash;
    if (urlHash === '#singleRunExample') {
        return 'single';
    } else if (urlHash === '#twoRunsExample') {
        return 'two';
    } else if (urlHash === '#multiRunExample') {
        return 'multi';
    }
}