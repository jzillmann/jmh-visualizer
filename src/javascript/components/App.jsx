import React from 'react';

import RunSelection from 'models/RunSelection.js'
import MainNavi from 'components/MainNavi.jsx';
import SplitPane from 'components/lib/SplitPane.jsx'

import UploadMainView from 'components/UploadMainView.jsx';
import UploadSideBar from 'components/UploadSideBar.jsx';

import RunSideBar from 'components/RunSideBar.jsx';
import DetailSideBar from 'components/DetailSideBar.jsx';

import SingleRunView from 'components/single/SingleRunView.jsx';
import SingleDetailView from 'components/single/SingleDetailView.jsx';

import TwoRunsView from 'components/two/TwoRunsView.jsx';
import TwoDetailView from 'components/two/TwoDetailView.jsx';

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'

import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';
import FileUploader from 'functions/FileUploader.js'
import { parseBenchmarkBundles } from 'functions/parse.js'

export default class App extends React.Component {

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
    };

    componentDidUpdate() {
        // spinner will be shown on react.render(..), see entry.jsx
        DoingWorkSpinner.hide();
    }

    render() {
        const {appState} = this.props;
        const selectedBenchmarkRuns = appState.selectedBenchmarks();

        let mainView;
        let sideBar;
        if (selectedBenchmarkRuns.length == 0) {
            const fileUploader = new FileUploader(appState.uploadBenchmarkRuns);
            mainView = <UploadMainView fileUploader={ fileUploader } />;
            sideBar = <UploadSideBar fileUploader={ fileUploader } loadSingleRunExampleFunction={ () => appState.initBenchmarkRuns(appState.examples.singleRunExample) } loadTwoRunExampleFunction={ () => appState.initBenchmarkRuns(appState.examples.twoRunsExample) } />;
        } else if (selectedBenchmarkRuns.length > 2) {
            alert("More then 2 runs not supported!");
        } else {
            if (appState.uploadedBenchmarks) {
                window.onbeforeunload = function() {
                    return "You will loose the current benchmarks.";
                };
            }

            let runSelection;
            if (selectedBenchmarkRuns.length == 1) {
                runSelection = new RunSelection([selectedBenchmarkRuns[0].name], [0]);
            } else if (selectedBenchmarkRuns.length == 2) {
                runSelection = new RunSelection(selectedBenchmarkRuns.map(benchmarkRun => benchmarkRun.name), [0, 1]);
            }

            // Details View
            if (appState.selectedBenchmarkBundle) {
                const benchmarkBundles = parseBenchmarkBundles(selectedBenchmarkRuns);
                const benchmarkBundle = appState.selectedBenchmarkBundle;
                const secondaryMetrics = Array.from(benchmarkBundle.benchmarks(runSelection).reduce((aggregate, benchmark) => {
                    Object.keys(benchmark.secondaryMetrics).forEach(metricKey => aggregate.add(metricKey));
                    return aggregate;
                }, new Set()));
                if (selectedBenchmarkRuns.length == 1) {
                    const benchmarkRun = selectedBenchmarkRuns[0];
                    const runSelection = new RunSelection([benchmarkRun.name], [0]);
                    mainView = <SingleDetailView benchmarkBundle={ appState.selectedBenchmarkBundle } runSelection={ runSelection } secondaryMetrics={ secondaryMetrics } />
                } else if (selectedBenchmarkRuns.length == 2) {
                    const runSelection = new RunSelection(selectedBenchmarkRuns.map(benchmarkRun => benchmarkRun.name), [0, 1]);
                    mainView = <TwoDetailView benchmarkBundle={ appState.selectedBenchmarkBundle } runSelection={ runSelection } secondaryMetrics={ secondaryMetrics } />
                }
                sideBar = <DetailSideBar
                                         benchmarkBundle={ appState.selectedBenchmarkBundle }
                                         benchmarkBundles={ benchmarkBundles }
                                         secondaryMetrics={ secondaryMetrics }
                                         goBackFunction={ appState.goBack }
                                         selectBenchmarkBundleFunction={ appState.selectBenchmarkBundle } />

            // Run View
            } else {
                const metricType = appState.selectedMetric;
                const benchmarkBundles = parseBenchmarkBundles(selectedBenchmarkRuns);
                const metricExtractor = createMetricExtractor(appState.selectedMetric);
                const focusedBundles = appState.focusedBundles;

                let filteredBenchmarkBundles = metricType === 'Score' ? benchmarkBundles : benchmarkBundles.filter(benchmarkBundle => benchmarkBundle.benchmarks(runSelection).find(benchmark => metricExtractor.hasMetric(benchmark)));
                const sideBarBenchmarks = filteredBenchmarkBundles;
                if (focusedBundles.size > 0) {
                    filteredBenchmarkBundles = filteredBenchmarkBundles.filter(benchmarkBundle => focusedBundles.has(benchmarkBundle.key));
                }
                const metricsSet = new Set(['Score']);
                filteredBenchmarkBundles.forEach(benchmarkBundle => benchmarkBundle.benchmarks(runSelection).forEach(benchmark => {
                    Object.keys(benchmark.secondaryMetrics).forEach(metricKey => metricsSet.add(metricKey));
                }));
                const metrics = Array.from(metricsSet);

                if (selectedBenchmarkRuns.length == 1) {
                    mainView = <SingleRunView
                                              benchmarkBundles={ filteredBenchmarkBundles }
                                              focusedBundles={ appState.focusedBundles }
                                              runSelection={ runSelection }
                                              metricExtractor={ metricExtractor }
                                              selectBenchmarkBundleFunction={ appState.selectBenchmarkBundle } />
                } else if (selectedBenchmarkRuns.length == 2) {
                    mainView = <TwoRunsView
                                            benchmarkBundles={ filteredBenchmarkBundles }
                                            runSelection={ runSelection }
                                            metricExtractor={ metricExtractor }
                                            selectBenchmarkBundleFunction={ appState.selectBenchmarkBundle } />
                }
                sideBar = <RunSideBar
                                      benchmarkBundles={ sideBarBenchmarks }
                                      metrics={ metrics }
                                      metricExtractor={ metricExtractor }
                                      selectMetricFunction={ appState.selectMetric }
                                      focusedBenchmarkBundles={ appState.focusedBundles }
                                      focusBenchmarkBundleFunction={ appState.focusBundle }
                                      selectBenchmarkBundleFunction={ appState.selectBenchmarkBundle } />
            }
        }

        return (
            <div>
              <MainNavi runs={ appState.benchmarkRuns } runSelection={ appState.benchmarkRunSelection } selectRunsFunction={ appState.selectBenchmarkRuns } />
              <div style={ { paddingBottom: 20 + 'px' } }>
                <SplitPane left={ mainView } right={ sideBar } />
              </div>
            </div>
        );
    }

}

function createMetricExtractor(metricType) {
    return metricType === 'Score' ? new PrimaryMetricExtractor() : new SecondaryMetricExtractor(metricType);
}


