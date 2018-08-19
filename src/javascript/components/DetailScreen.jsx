import React from 'react';
import { connect, actions } from 'store/store.js'

import SplitPane from 'components/lib/SplitPane.jsx'

import { ScaleButton } from 'components/Icons.jsx'
import BenchmarkSelection from 'models/BenchmarkSelection.js';
import BenchmarkBundle from 'models/BenchmarkBundle.js';
import DetailSideBar from 'components/DetailSideBar.jsx';
import DetailView from 'components/DetailView.jsx'

import BarChartView from 'components/single/BarChartView.jsx'
import DiffBarChartView from 'components/two/DiffBarChartView.jsx'
import LineChartView from 'components/multi/LineChartView.jsx'

import { parseClassNameFromFullName } from 'functions/parse.js';

/* eslint react/prop-types: 0 */
const DetailScreen = ({ detailedBenchmarkBundle, benchmarkSelection, chartConfig }) => {

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


    let error, chartGeneratorFunction;
    if (runNames.length == 1) {
        if (detailBundle.methodNames.length == 0) {
            error = `No benchmark results for run  ${runNames[0]}`;
        } else {
            chartGeneratorFunction = singleRunChartGenerator;
        }
    } else if (runNames.length == 2) {
        chartGeneratorFunction = twoRunsChartGenerator;
    } else {
        chartGeneratorFunction = multiRunChartGenerator;
    }

    let mainView;
    if (error) {
        mainView = (<div>{ error }</div>);
    } else {
        mainView = <DetailView
            runNames={ runNames }
            benchmarkBundle={ detailBundle }
            secondaryMetrics={ secondaryMetrics }
            chartConfig={ chartConfig }
            chartGeneratorFunction={ chartGeneratorFunction }
        />
    }
    let buttons = [];
    if (benchmarkSelection.runNames.length == 1 || benchmarkSelection.runNames.length > 2) {
        buttons = [
            <ScaleButton key='scaleButton' active={ chartConfig.logScale } action={ actions.logScale } />
        ];
    }

    return (
        <SplitPane left={ mainView } right={ <DetailSideBar
            benchmarkBundle={ detailBundle }
            benchmarkBundles={ benchmarkBundles }
            secondaryMetrics={ secondaryMetrics }
            buttons={ buttons }
        /> } />
    );
}

export default connect(({ detailedBenchmarkBundle, benchmarkRuns, runSelection, chartConfig }) => ({
    detailedBenchmarkBundle,
    benchmarkSelection: new BenchmarkSelection(benchmarkRuns, runSelection),
    chartConfig
}))(DetailScreen)


function singleRunChartGenerator(runNames, benchmarkBundle, metricsExtractor, chartConfig) {
    return <BarChartView benchmarkBundle={ benchmarkBundle } metricExtractor={ metricsExtractor } logScale={ chartConfig.logScale } />
}

function twoRunsChartGenerator(runNames, benchmarkBundle, metricsExtractor) {
    return <DiffBarChartView runNames={ runNames } benchmarkBundle={ benchmarkBundle } metricExtractor={ metricsExtractor } />
}

function multiRunChartGenerator(runNames, benchmarkBundle, metricsExtractor, chartConfig) {
    return <LineChartView runNames={ runNames } benchmarkBundle={ benchmarkBundle } metricExtractor={ metricsExtractor } logScale={ chartConfig.logScale } />;
}
