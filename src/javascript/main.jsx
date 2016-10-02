import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

//global state
const appControl = {
    dataUploaded: false,
    benchmarkJsons: [],
    uploadBenchmarks: function(benchmarkJsons) {
        this.dataUploaded = true;
        this.benchmarkJsons = benchmarkJsons;
        render(this)
    }
//TODO reset is just a page refresh
}

function render(appControl) {
    console.debug('!!!!1:' + appControl.dataUploaded)
    ReactDOM.render(<App appControl={ appControl } something={ appControl.dataUploaded } />, document.getElementById('main'));
}

render(appControl)
