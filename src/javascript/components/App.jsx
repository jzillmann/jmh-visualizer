import React from 'react';

import { connect } from 'store/store.js'
import StateSelector from 'store/StateSelector.js';

import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';
import MainNavi from 'components/MainNavi.jsx';
import SplitPane from 'components/lib/SplitPane.jsx'

import UploadMainView from 'components/UploadMainView.jsx';
import UploadSideBar from 'components/UploadSideBar.jsx';

import RunSideBar from 'components/RunSideBar.jsx';
import DetailSideBar from 'components/DetailSideBar.jsx';

import SingleRunView from 'components/single/SingleRunView.jsx';
import SingleDetailView from 'components/single/SingleDetailView.jsx';

import TwoRunsView from 'components/two/TwoRunsView.jsx';
import TwoRunsSummaryView from 'components/two/TwoRunsSummaryView.jsx';
import TwoDetailView from 'components/two/TwoDetailView.jsx';

import MultiRunView from 'components/multi/MultiRunView.jsx';
import MultiRunDetailView from 'components/multi/MultiRunDetailView.jsx';

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'

import Test from 'components/Test.jsx';
import Test2 from 'components/Test2.jsx';

/* eslint react/prop-types: 0 */
// export default class App extends React.Component {
class App extends React.Component {

    componentDidUpdate() {
        // spinner will be shown on react.render(..), see entry.jsx
        // DoingWorkSpinner.hide();
    }

    render() {
        const { initialLoading, benchmarkRuns, viewSelection, selectedMetric, stateSelector } = this.props;

        console.log("App...");
        console.log(benchmarkRuns);

        const benchmarkSelection = stateSelector.benchmarkSelection();

        let mainView;
        let sideBar;
        if (initialLoading) {
            return (<div style={ { position: 'fixed', top: '50%', left: '50%' } }><DoingWorkSpinner /></div>);
        } else if (viewSelection.showUploadView()) {
            // Upload View
            mainView = <UploadMainView />;
            sideBar = <UploadSideBar />;
        } else {
            const benchmarkBundles = benchmarkSelection.benchmarkBundles;

            // Details View
            if (viewSelection.showDetailedView()) {
                const detailBundle = benchmarkSelection.benchmarkBundles.find(bundle => bundle.key === viewSelection.detailedBenchmarkBundle);
                const secondaryMetrics = Array.from(detailBundle.allBenchmarks().reduce((aggregate, benchmark) => {
                    Object.keys(benchmark.secondaryMetrics).forEach(metricKey => aggregate.add(metricKey));
                    return aggregate;
                }, new Set()));
                if (benchmarkSelection.runNames.length == 1) {
                    mainView = <SingleDetailView runName={ benchmarkSelection.runNames[0] } benchmarkBundle={ detailBundle } secondaryMetrics={ secondaryMetrics } />
                } else if (benchmarkSelection.runNames.length == 2) {
                    mainView = <TwoDetailView runNames={ benchmarkSelection.runNames } benchmarkBundle={ detailBundle } secondaryMetrics={ secondaryMetrics } />
                } else {
                    mainView = <MultiRunDetailView runNames={ benchmarkSelection.runNames } benchmarkBundle={ detailBundle } secondaryMetrics={ secondaryMetrics } />
                }
                sideBar = <DetailSideBar
                    benchmarkBundle={ detailBundle }
                    benchmarkBundles={ benchmarkBundles }
                    secondaryMetrics={ secondaryMetrics }
                />

                // Run View
            } else {
                const metricType = selectedMetric;
                const metricExtractor = createMetricExtractor(selectedMetric);
                const focusedBundles = viewSelection.focusedBundles;
                const runView = viewSelection.runView;
                const categories = ['Benchmarks'];
                const activeCategory = 'Benchmarks';

                let filteredBenchmarkBundles = metricType === 'Score' ? benchmarkBundles : benchmarkBundles.filter(benchmarkBundle => benchmarkBundle.allBenchmarks().find(benchmark => metricExtractor.hasMetric(benchmark)));
                let sideBarBenchmarks = filteredBenchmarkBundles;
                if (viewSelection.shouldFilterFocusedBenchmarks()) {
                    filteredBenchmarkBundles = filteredBenchmarkBundles.filter(benchmarkBundle => focusedBundles.has(benchmarkBundle.key));
                }
                const metricsSet = new Set(['Score']);
                filteredBenchmarkBundles.forEach(benchmarkBundle => benchmarkBundle.allBenchmarks().forEach(benchmark => {
                    Object.keys(benchmark.secondaryMetrics).forEach(metricKey => metricsSet.add(metricKey));
                }));
                const metrics = Array.from(metricsSet);


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
                sideBar = <RunSideBar
                    benchmarkBundles={ sideBarBenchmarks }
                    metrics={ metrics }
                    metricExtractor={ metricExtractor }
                    focusedBenchmarkBundles={ focusedBundles }
                    categories={ categories }
                    activeCategory={ activeCategory }
                />
            }
        }

        return (
            <div>
                <MainNavi />
                <div style={ { paddingBottom: 20 + 'px' } }>
                    <SplitPane left={ mainView } right={ sideBar } />
                </div>
                <div>
                    <Test />
                    <Test2 />
                </div>
            </div>
        );
    }

}

// export default connect((appState2) => ({ appState2 }))(App)
//TODO don't change on any state change!!
export default connect(state => ({
    initialLoading: state.initialLoading,
    benchmarkRuns: state.benchmarkRuns,
    viewSelection: state.viewSelection,
    selectedMetric: state.selectedMetric,
    stateSelector: new StateSelector(state),
}))(App)

function createMetricExtractor(metricType) {
    return metricType === 'Score' ? new PrimaryMetricExtractor() : new SecondaryMetricExtractor(metricType);
}


