import React from 'react';
import { connect } from 'store/store.js'

import SplitPane from 'components/lib/SplitPane.jsx'

import BenchmarkSelection from 'models/BenchmarkSelection.js';
import RunSideBar from 'components/RunSideBar.jsx';
import SingleRunView from 'components/single/SingleRunView.jsx';
import TwoRunsView from 'components/two/TwoRunsView.jsx';
import TwoRunsSummaryView from 'components/two/TwoRunsSummaryView.jsx';
import MultiRunView from 'components/multi/MultiRunView.jsx';

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'


/* eslint react/prop-types: 0 */
const RunScreen = ({ benchmarkSelection, runView, selectedMetric, focusedBundles }) => {

    const benchmarkRuns = benchmarkSelection.benchmarkRuns;
    const benchmarkBundles = benchmarkSelection.benchmarkBundles;
    const runSelection = benchmarkSelection.runSelection;

    const metricType = selectedMetric;
    const metricExtractor = createMetricExtractor(selectedMetric);
    const categories = ['Benchmarks'];
    const activeCategory = 'Benchmarks';

    let filteredBenchmarkBundles = metricType === 'Score' ? benchmarkBundles : benchmarkBundles.filter(benchmarkBundle => benchmarkBundle.allBenchmarks().find(benchmark => metricExtractor.hasMetric(benchmark)));
    let sideBarBenchmarks = filteredBenchmarkBundles;
    if (shouldFilterFocusedBenchmarks(benchmarkRuns, focusedBundles, runView, runSelection)) {
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
        if (runView === 'Summary') {
            sideBarBenchmarks = [];
            mainView = <TwoRunsSummaryView
                runNames={ benchmarkSelection.runNames }
                runIndex={ [0, 1] }
                benchmarkBundles={ filteredBenchmarkBundles }
                minDeviation={ 5 }
                metricExtractor={ metricExtractor }
            />
        } else {
            mainView = <TwoRunsView
                runNames={ benchmarkSelection.runNames }
                benchmarkBundles={ filteredBenchmarkBundles }
                metricExtractor={ metricExtractor }
            />
        }
    } else {
        if (runView === 'Summary') {
            sideBarBenchmarks = [];
            const firstBenchmark = benchmarkSelection.runNames.length - 2;
            const secondBenchmark = benchmarkSelection.runNames.length - 1;
            mainView = <TwoRunsSummaryView
                runNames={ benchmarkSelection.runNames }
                runIndex={ [firstBenchmark, secondBenchmark] }
                benchmarkBundles={ filteredBenchmarkBundles }
                minDeviation={ 5 }
                metricExtractor={ metricExtractor }
            />
        } else {
            mainView = <MultiRunView
                runNames={ benchmarkSelection.runNames }
                benchmarkBundles={ filteredBenchmarkBundles }
                metricExtractor={ metricExtractor }
            />
        }
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

export default connect(({ benchmarkRuns, runSelection, runView, selectedMetric, focusedBundles }) => ({
    benchmarkSelection: new BenchmarkSelection(benchmarkRuns, runSelection),
    runView,
    selectedMetric,
    focusedBundles
}))(RunScreen)

function createMetricExtractor(metricType) {
    return metricType === 'Score' ? new PrimaryMetricExtractor() : new SecondaryMetricExtractor(metricType);
}

function showSummaryView(benchmarkRuns, runView, runSelection) {
    if (benchmarkRuns.length < 2) {
        return false;
    }
    if (runView !== 'Summary') {
        return false;
    }
    for (var runSelected of runSelection) {
        if (!runSelected) {
            return false;
        }
    }
    return true;
}

function shouldFilterFocusedBenchmarks(benchmarkRuns, focusedBundles, runView, runSelection) {
    return focusedBundles.size > 0 && !showSummaryView(benchmarkRuns, runView, runSelection);
}