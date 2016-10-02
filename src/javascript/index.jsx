import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { providedBenchmarks } from './providedBenchmarks.jsx';

//global state
const appControl = {
    dataUploaded: false,
    benchmarks: [],
    uploadBenchmarks: function(benchmarks) {
        this.dataUploaded = true;
        this.benchmarks = benchmarks;
        render(this)
    }
//TODO reset is just a page refresh
}

function render(appControl) {
    console.debug('!!!!1:' + appControl.dataUploaded)
    ReactDOM.render(<App appControl={ appControl } something={ appControl.dataUploaded } />, document.getElementById('main'));
}

console.debug(providedBenchmarks.length)
if (providedBenchmarks.length > 0) {
    appControl.uploadBenchmarks(providedBenchmarks)
}

render(appControl)
