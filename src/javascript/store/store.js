import createStore from 'react-waterfall'
import createHistory from 'history/createBrowserHistory'

import { getBenchmarksLoadFunctionFromExamples, processSourceParameters } from 'processParameters.js';
import Examples from 'models/Examples.js';
import { exampleRun1 } from 'exampleBenchmark1.js';
import { exampleRun2 } from 'exampleBenchmark2.js';
import { exampleRun3 } from 'exampleBenchmark3.js';
import BenchmarkRun from 'models/BenchmarkRun.js';
import ViewSelection from 'models/ViewSelection.js';
import { arraysAreIdentical } from 'functions/util.js';

const history = createHistory();

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

let benchmarkLoadFunction = null;
if (providedBenchmarks.length > 0) { // eslint-disable-line no-undef
    benchmarkLoadFunction = (initBenchmarksFunction) => initBenchmarksFunction(providedBenchmarks.map(runName => new BenchmarkRun({ // eslint-disable-line no-undef
        name: runName,
        benchmarks: providedBenchmarkStore[runName] // eslint-disable-line no-undef
    })));
} else {
    benchmarkLoadFunction = getBenchmarksLoadFunctionFromExamples(examples);
    if (!benchmarkLoadFunction) {
        benchmarkLoadFunction = processSourceParameters();
    }
}


//TODO progress indicatoes for examples as well !? Switch loading of on componentDidMout, e.g. in App ?
const config = {
    initialState: {
        initialLoading: benchmarkLoadFunction != null,
        loading: false,
        benchmarkRuns: [],
        viewSelection: new ViewSelection(),
        selectedMetric: 'Score',
        detailedBenchmarkBundle: null,
        activeCategory: 'Benchmarks'
    },
    actionsCreators: {
        uploadFiles: async (state, actions, files, trigger) => {
            if (!trigger) {
                await actions.uploadFiles(files, true)
            } else {
                return { loading: true }
            }

            try {
                const benchmarkRuns = await parseBenchmarks(files);
                //TODO modification of state, thats bad
                state.viewSelection.uploadedBenchmarks = true;
                state.viewSelection.initBenchmarkRuns(benchmarkRuns.length);
                return { loading: false, benchmarkRuns: benchmarkRuns };
            } catch (e) {
                return { loading: false };
            }
        },
        initBenchmarks: (state, actions, benchmarkRuns) => {
            console.log('init benchmarks...' + benchmarkRuns.length);

            state.viewSelection.initBenchmarkRuns(benchmarkRuns.length);
            return { initialLoading: false, loading: false, benchmarkRuns: benchmarkRuns };
        },
        loadSingleRunExampleFunction: (state, actions) => { actions.initBenchmarks(examples.singleRunExample); return { loading: false } },
        loadTwoRunsExampleFunction: (state, actions) => { actions.initBenchmarks(examples.twoRunsExample); return { loading: false } },
        loadMultiRunExampleFunction: (state, actions) => { actions.initBenchmarks(examples.multiRunExample); return { loading: false } },
        selectMetric: (state, actions, newSelectedMetric) => ({ selectedMetric: forward(state, newSelectedMetric) }),// eslint-disable-line no-unused-vars
        focusBundle: (state, actions, benchmarkBundleName) => {
            state.viewSelection.focusBundle(benchmarkBundleName);
            return {};
        },
        selectCategory: (state, actions, category) => {
            state.viewSelection.focusedBundles.clear();
            return { activeCategory: category }
        },
        detailBenchmarkBundle: (state, actions, benchmarkBundleKey) => {
            history.push('#details');
            //TODO uuh
            state.viewSelection.detailedBenchmarkBundle = benchmarkBundleKey;
            return { detailedBenchmarkBundle: benchmarkBundleKey };
        },
        undetailBenchmarkBundle: (state) => {
            //TODO uuh
            state.viewSelection.detailedBenchmarkBundle = null;
            return { detailedBenchmarkBundle: null };
        },
        // expects array of boolean with length of total JMH runs + the runView ('Summary', 'Compare')
        selectBenchmarkRuns: (state, action, runSelection, runView) => {
            if (state.viewSelection.runView != runView || !arraysAreIdentical(state.viewSelection.runSelection, runSelection)) {
                state.viewSelection.runSelection = runSelection;
                state.viewSelection.runView = runView;
            }
            return {};
        },
        goBack: () => {
            history.goBack();
            return {};
        }
    },
}


export const { Provider, connect, actions } = createStore(config);

history.listen((location, action) => {
    if (action === 'POP') {
        actions.undetailBenchmarkBundle();
    }
});

if (benchmarkLoadFunction) {
    setTimeout(() => benchmarkLoadFunction(actions.initBenchmarks), 0);
}

function forward(state, param) {
    console.log(state);
    console.log(param);

    return param;
}

// const fakeFetch = () =>
//   new Promise(resolve => setTimeout(() => resolve(movies), 1000))

function parseBenchmarks(files) {
    return new Promise((resolve, reject) => {

        const benchmarkRuns = [];
        files.forEach((file) => {
            const reader = new FileReader();
            const runName = file.name.replace('.json', '');
            reader.onload = function (evt) {
                try {
                    var parsedBenchmarks = JSON.parse(evt.target.result);
                    const benchmarkRun = new BenchmarkRun({
                        name: runName,
                        benchmarks: parsedBenchmarks
                    });
                    benchmarkRuns.push(benchmarkRun);
                    if (benchmarkRuns.length == files.length) {
                        benchmarkRuns.sort((a, b) => a.name.localeCompare(b.name));
                        resolve(benchmarkRuns);
                    }
                } catch (e) {
                    alert(e); //error in the above string(in this case,yes)!
                    reject(e);
                }
            };
            reader.readAsText(file);
        });
    });

}