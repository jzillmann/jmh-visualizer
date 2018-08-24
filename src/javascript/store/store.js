import createStore from 'react-waterfall'
import createHistory from 'history/createBrowserHistory'

import { addSettingsFromParameters, getBenchmarksLoadFunctionForDefinedExamples, getBenchmarksLoadFunctionForSourceExamples } from 'store/processParameters.js';
import Examples from 'models/Examples.js';
import { exampleRun1 } from 'exampleBenchmark1.js';
import { exampleRun2 } from 'exampleBenchmark2.js';
import { exampleRun3 } from 'exampleBenchmark3.js';
import BenchmarkRun from 'models/BenchmarkRun.js';

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

// Get default settings from settings.js and enrich with parameters
const settings = defaultSettings;// eslint-disable-line no-undef
addSettingsFromParameters(settings);

// Load benchmarks from defined source (provided || example || remote source)
let benchmarkLoadFunction = null;
if (providedBenchmarks.length > 0) { // eslint-disable-line no-undef
    benchmarkLoadFunction = (initBenchmarksFunction) => initBenchmarksFunction(providedBenchmarks.map(runName => new BenchmarkRun({ // eslint-disable-line no-undef
        name: runName,
        benchmarks: providedBenchmarkStore[runName] // eslint-disable-line no-undef
    })));
} else {
    benchmarkLoadFunction = getBenchmarksLoadFunctionForDefinedExamples(examples);
    if (!benchmarkLoadFunction) {
        benchmarkLoadFunction = getBenchmarksLoadFunctionForSourceExamples();
    }
}

// Setup store
const config = {
    initialState: {
        settings: settings,
        initialLoading: benchmarkLoadFunction != null,
        loading: false,
        benchmarkRuns: [],
        runSelection: [], // boolean[runs]
        runView: null, // null || Summary || Compare
        selectedMetric: 'Score',
        detailedBenchmarkBundle: null,
        activeCategory: 'Benchmarks',
        focusedBundles: new Set(),
        chartConfig: {
            sort: false,
            logScale: false
        }
    },
    actionsCreators: {
        uploadFiles: async (state, actions, files, trigger) => loadBenchmarksAsync(state, trigger, () => actions.uploadFiles(files, true), () => parseBenchmarks(files)),
        initBenchmarks: (state, actions, benchmarkRuns) => {
            return stateForBenchmarks(benchmarkRuns);
        },
        loadSingleRunExample: (state, actions, param, trigger) => loadBenchmarksAsync(state, trigger, () => actions.loadSingleRunExample(null, true), () => getExamples(examples.singleRunExample)),
        loadTwoRunsExample: (state, actions, param, trigger) => loadBenchmarksAsync(state, trigger, () => actions.loadTwoRunsExample(null, true), () => getExamples(examples.twoRunsExample)),
        loadMultiRunExample: (state, actions, param, trigger) => loadBenchmarksAsync(state, trigger, () => actions.loadMultiRunExample(null, true), () => getExamples(examples.multiRunExample)),
        selectMetric: (state, actions, newSelectedMetric) => ({ selectedMetric: newSelectedMetric }),
        focusBundle: (state, actions, benchmarkBundleName) => {
            const clonedFocusedBundles = new Set(state.focusedBundles)
            const alreadyFocused = clonedFocusedBundles.has(benchmarkBundleName);
            if (alreadyFocused) {
                clonedFocusedBundles.delete(benchmarkBundleName);
            } else {
                clonedFocusedBundles.add(benchmarkBundleName);
            }
            return { focusedBundles: clonedFocusedBundles };
        },
        selectCategory: (state, actions, category) => {
            return { activeCategory: category, focusedBundles: new Set() }
        },
        detailBenchmarkBundle: (state, actions, benchmarkBundleKey) => {
            history.push('#details');
            return { detailedBenchmarkBundle: benchmarkBundleKey };
        },
        undetailBenchmarkBundle: () => {
            return { detailedBenchmarkBundle: null };
        },
        // expects array of boolean with length of total JMH runs + the runView ('Summary', 'Compare')
        selectBenchmarkRuns: (state, action, runSelection, runView) => {
            return { runSelection: runSelection, runView: runView };
        },
        sort: (state) => {
            return { chartConfig: { ...state.chartConfig, sort: !state.chartConfig.sort } }
        },
        logScale: (state) => {
            return { chartConfig: { ...state.chartConfig, logScale: !state.chartConfig.logScale } }
        },
        goBack: () => {
            history.goBack();
            return {};
        }
    },
}

function stateForBenchmarks(benchmarkRuns) {
    const runView = benchmarkRuns.length > 1 ? 'Summary' : null;
    const runSelection = Array(benchmarkRuns.length).fill(true)
    return { initialLoading: false, loading: false, benchmarkRuns: benchmarkRuns, runSelection: runSelection, runView: runView };
}

async function loadBenchmarksAsync(state, trigger, triggerFunction, getBenchmarksFunction) {
    if (trigger) {
        return { loading: true }
    } else {
        await triggerFunction();
    }

    try {
        const benchmarkRuns = await getBenchmarksFunction();
        return stateForBenchmarks(benchmarkRuns);
    } catch (error) {
        return stateForBenchmarks([]);
    }
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

function getExamples(benchmarkRuns) {
    return new Promise((resolve) => setTimeout(() => resolve(benchmarkRuns), 0));
}

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
                        window.onbeforeunload = function () {
                            return "You will loose the current benchmarks.";
                        };
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
