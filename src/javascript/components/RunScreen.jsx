import React from 'react';
import { connect, actions } from 'store/store.js'

import SplitPane from 'components/lib/SplitPane.jsx'
import { SortButton, ScaleButton } from 'components/Icons.jsx'

import BenchmarkSelection from 'models/BenchmarkSelection.js';
import RunSideBar from 'components/RunSideBar.jsx';
import SingleRunView from 'components/single/SingleRunView.jsx';
import TwoRunsView from 'components/two/TwoRunsView.jsx';
import MultiRunView from 'components/multi/MultiRunView.jsx';

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'


/* eslint react/prop-types: 0 */
const RunScreen = ({ benchmarkSelection, selectedMetric, focusedBundles, chartConfig }) => {

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
            chartConfig={ chartConfig }
        />
    } else if (benchmarkSelection.runNames.length == 2) {
        mainView = <TwoRunsView
            runNames={ benchmarkSelection.runNames }
            benchmarkBundles={ filteredBenchmarkBundles }
            metricExtractor={ metricExtractor }
            chartConfig={ chartConfig }
        />
    } else {
        mainView = <MultiRunView
            runNames={ benchmarkSelection.runNames }
            benchmarkBundles={ filteredBenchmarkBundles }
            metricExtractor={ metricExtractor }
            chartConfig={ chartConfig }
        />
    }

    let buttons = [];
    if (benchmarkSelection.runNames.length == 1) {
        buttons.push(<SortButton key='sortButton' active={ chartConfig.sort } action={ actions.sort } />);
        buttons.push(<span key='sep1'> | </span>);
        buttons.push(<ScaleButton key='scaleButton' active={ chartConfig.logScale } action={ actions.logScale } />);
    } else if (benchmarkSelection.runNames.length == 2) {
        buttons.push(<SortButton key='sortButton' active={ chartConfig.sort } action={ actions.sort } />);
    } else {
        buttons.push(<ScaleButton key='scaleButton' active={ chartConfig.logScale } action={ actions.logScale } />);
    }

    return (
        <SplitPane left={ mainView } right={ <RunSideBar
            benchmarkBundles={ sideBarBenchmarks }
            metrics={ metrics }
            metricExtractor={ metricExtractor }
            buttons={ buttons }
            focusedBenchmarkBundles={ focusedBundles }
            categories={ categories }
            activeCategory={ activeCategory }
        /> }
        />
    );
}

export default connect(({ benchmarkRuns, runSelection, selectedMetric, focusedBundles, chartConfig }) => ({
    benchmarkSelection: new BenchmarkSelection(benchmarkRuns, runSelection),
    selectedMetric,
    focusedBundles,
    chartConfig
}))(RunScreen)

function createMetricExtractor(metricType) {
    return metricType === 'Score' ? new PrimaryMetricExtractor() : new SecondaryMetricExtractor(metricType);
}
