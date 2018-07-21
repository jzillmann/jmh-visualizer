import React from 'react';
import { connect } from 'store/store.js'

import SplitPane from 'components/lib/SplitPane.jsx'

import BenchmarkSelection from 'models/BenchmarkSelection.js';
import BenchmarkBundle from 'models/BenchmarkBundle.js';
import DetailSideBar from 'components/DetailSideBar.jsx';
import SingleDetailView from 'components/single/SingleDetailView.jsx';
import TwoDetailView from 'components/two/TwoDetailView.jsx';
import MultiRunDetailView from 'components/multi/MultiRunDetailView.jsx';
import { parseClassNameFromFullName } from 'functions/parse.js';

/* eslint react/prop-types: 0 */
const DetailScreen = ({ detailedBenchmarkBundle, benchmarkSelection }) => {

    const benchmarkBundles = benchmarkSelection.benchmarkBundles;
    const runNames = benchmarkSelection.runNames;

    const detailBundle = benchmarkBundles.find(bundle => bundle.key === detailedBenchmarkBundle) || new BenchmarkBundle({
        key: detailedBenchmarkBundle,
        name: parseClassNameFromFullName(detailedBenchmarkBundle),
        methodNames: [],
        benchmarkMethods: []
    });
    const secondaryMetrics = Array.from(detailBundle.allBenchmarks().reduce((aggregate, benchmark) => {
        Object.keys(benchmark.secondaryMetrics).forEach(metricKey => aggregate.add(metricKey));
        return aggregate;
    }, new Set()));

    let mainView;
    if (runNames.length == 1) {
        mainView = <SingleDetailView runName={ runNames[0] } benchmarkBundle={ detailBundle } secondaryMetrics={ secondaryMetrics } />
    } else if (runNames.length == 2) {
        mainView = <TwoDetailView runNames={ runNames } benchmarkBundle={ detailBundle } secondaryMetrics={ secondaryMetrics } />
    } else {
        mainView = <MultiRunDetailView runNames={ runNames } benchmarkBundle={ detailBundle } secondaryMetrics={ secondaryMetrics } />
    }

    return (
        <SplitPane left={ mainView } right={ <DetailSideBar
            benchmarkBundle={ detailBundle }
            benchmarkBundles={ benchmarkBundles }
            secondaryMetrics={ secondaryMetrics }
        /> } />
    );
}

export default connect(({ detailedBenchmarkBundle, benchmarkRuns, runSelection }) => ({
    detailedBenchmarkBundle,
    benchmarkSelection: new BenchmarkSelection(benchmarkRuns, runSelection)
}))(DetailScreen)

