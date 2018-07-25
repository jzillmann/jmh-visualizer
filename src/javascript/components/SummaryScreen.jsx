import React from 'react';
import { connect } from 'store/store.js'

import SplitPane from 'components/lib/SplitPane.jsx'

import BenchmarkSelection from 'models/BenchmarkSelection.js';
import RunSideBar from 'components/RunSideBar.jsx';
import SummaryView from 'components/summary/SummaryView.jsx';

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'


/* eslint react/prop-types: 0 */
const SummaryScreen = ({ benchmarkSelection, selectedMetric }) => {

    const benchmarkBundles = benchmarkSelection.benchmarkBundles;
    const metricType = selectedMetric;
    const metricExtractor = createMetricExtractor(selectedMetric);
    const categories = ['Benchmarks'];
    const activeCategory = 'Benchmarks';

    let filteredBenchmarkBundles = metricType === 'Score' ? benchmarkBundles : benchmarkBundles.filter(benchmarkBundle => benchmarkBundle.allBenchmarks().find(benchmark => metricExtractor.hasMetric(benchmark)));
    const metricsSet = new Set(['Score']);
    filteredBenchmarkBundles.forEach(benchmarkBundle => benchmarkBundle.allBenchmarks().forEach(benchmark => {
        Object.keys(benchmark.secondaryMetrics).forEach(metricKey => metricsSet.add(metricKey));
    }));
    const metrics = Array.from(metricsSet);

    let runIndices = [benchmarkSelection.runNames.length - 2, benchmarkSelection.runNames.length - 1];
    let runNames = runIndices.map(i => benchmarkSelection.runNames[i]);

    return (
        <SplitPane
            left={
                <SummaryView
                    runIndex={ runIndices }
                    runNames={ runNames }
                    minDeviation={ 5 }
                    benchmarkBundles={ filteredBenchmarkBundles }
                    metricExtractor={ metricExtractor }
                />
            }
            right={
                <RunSideBar
                    benchmarkBundles={ [] }
                    metrics={ metrics }
                    metricExtractor={ metricExtractor }
                    focusedBenchmarkBundles={ new Set() }
                    categories={ categories }
                    activeCategory={ activeCategory }
                />
            }
        />
    );
}

export default connect(({ benchmarkRuns, runSelection, selectedMetric }) => ({
    benchmarkSelection: new BenchmarkSelection(benchmarkRuns, runSelection),
    selectedMetric,
}))(SummaryScreen)

function createMetricExtractor(metricType) {
    return metricType === 'Score' ? new PrimaryMetricExtractor() : new SecondaryMetricExtractor(metricType);
}
