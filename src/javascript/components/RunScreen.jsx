import React from 'react';
import { connect } from 'store/store.js'

import SplitPane from 'components/lib/SplitPane.jsx'

import BenchmarkSelection from 'models/BenchmarkSelection.js';
import RunSideBar from 'components/RunSideBar.jsx';
import SingleRunView from 'components/single/SingleRunView.jsx';
import TwoRunsView from 'components/two/TwoRunsView.jsx';
import MultiRunView from 'components/multi/MultiRunView.jsx';

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'


/* eslint react/prop-types: 0 */
const RunScreen = ({ benchmarkSelection, selectedMetric, focusedBundles }) => {

    const benchmarkBundles = benchmarkSelection.benchmarkBundles;
    const metricType = selectedMetric;
    const metricExtractor = createMetricExtractor(selectedMetric);
    const categories = ['Benchmarks'];
    const activeCategory = 'Benchmarks';

    let filteredBenchmarkBundles = metricType === 'Score' ? benchmarkBundles : benchmarkBundles.filter(benchmarkBundle => benchmarkBundle.allBenchmarks().find(benchmark => metricExtractor.hasMetric(benchmark)));
    let sideBarBenchmarks = filteredBenchmarkBundles;
    if (focusedBundles.size > 0) {
        filteredBenchmarkBundles = filteredBenchmarkBundles.filter(benchmarkBundle => focusedBundles.has(benchmarkBundle.key));
    }
    const metricsSet = new Set(['Score']);
    filteredBenchmarkBundles.forEach(benchmarkBundle => benchmarkBundle.allBenchmarks().forEach(benchmark => {
        Object.keys(benchmark.secondaryMetrics).forEach(metricKey => metricsSet.add(metricKey));
    }));
    const metrics = Array.from(metricsSet);

    let mainView;
    if (benchmarkSelection.runNames.length == 1) {
        mainView = <SingleRunView
            runName={ benchmarkSelection.runNames[0] }
            benchmarkBundles={ filteredBenchmarkBundles }
            focusedBundles={ focusedBundles }
            metricExtractor={ metricExtractor }
        />
    } else if (benchmarkSelection.runNames.length == 2) {
        mainView = <TwoRunsView
            runNames={ benchmarkSelection.runNames }
            benchmarkBundles={ filteredBenchmarkBundles }
            metricExtractor={ metricExtractor }
        />
    } else {
        mainView = <MultiRunView
            runNames={ benchmarkSelection.runNames }
            benchmarkBundles={ filteredBenchmarkBundles }
            metricExtractor={ metricExtractor }
        />
    }

    return (
        <SplitPane left={ mainView } right={ <RunSideBar
            benchmarkBundles={ sideBarBenchmarks }
            metrics={ metrics }
            metricExtractor={ metricExtractor }
            focusedBenchmarkBundles={ focusedBundles }
            categories={ categories }
            activeCategory={ activeCategory }
        /> }
        />
    );
}

export default connect(({ benchmarkRuns, runSelection, selectedMetric, focusedBundles }) => ({
    benchmarkSelection: new BenchmarkSelection(benchmarkRuns, runSelection),
    selectedMetric,
    focusedBundles
}))(RunScreen)

function createMetricExtractor(metricType) {
    return metricType === 'Score' ? new PrimaryMetricExtractor() : new SecondaryMetricExtractor(metricType);
}
