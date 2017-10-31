import React from 'react';

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

import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';
import FileUploader from 'functions/FileUploader.js'

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
        const benchmarkSelection = appState.benchmarkSelection();
        const viewSelection = appState.viewSelection;

        let mainView;
        let sideBar;
        if (viewSelection.showUploadView()) {
            // Upload View
            const fileUploader = new FileUploader(appState.uploadBenchmarkRuns);
            mainView = <UploadMainView fileUploader={ fileUploader } />;
            sideBar = <UploadSideBar
                                     fileUploader={ fileUploader }
                                     loadSingleRunExampleFunction={ () => appState.initBenchmarkRuns(appState.examples.singleRunExample) }
                                     loadTwoRunsExampleFunction={ () => appState.initBenchmarkRuns(appState.examples.twoRunsExample) }
                                     loadMultiRunExampleFunction={ () => appState.initBenchmarkRuns(appState.examples.multiRunExample) } />;
        } else {
            if (viewSelection.shouldPreventPageReload()) {
                window.onbeforeunload = function() {
                    return "You will loose the current benchmarks.";
                };
            }
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
                                         goBackFunction={ appState.goBack }
                                         detailBenchmarkBundleFunction={ appState.detailBenchmarkBundle } />

            // Run View
            } else {
                const metricType = appState.selectedMetric;
                const metricExtractor = createMetricExtractor(appState.selectedMetric);
                const focusedBundles = viewSelection.focusedBundles;
                const runView = viewSelection.runView;
                const categories = appState.benchmarkCategories;
                const activeCategory = appState.activeCategory;

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
                                              detailBenchmarkBundleFunction={ appState.detailBenchmarkBundle } />
                } else if (benchmarkSelection.runNames.length == 2) {
                    if (runView === 'Summary') {
                        sideBarBenchmarks = [];
                        mainView = <TwoRunsSummaryView
                                                       runNames={ benchmarkSelection.runNames }
                                                       runIndex={ [0, 1] }
                                                       benchmarkBundles={ filteredBenchmarkBundles }
                                                       minDeviation={ 5 }
                                                       metricExtractor={ metricExtractor }
                                                       detailBenchmarkBundleFunction={ appState.detailBenchmarkBundle } />
                    } else {
                        mainView = <TwoRunsView
                                                runNames={ benchmarkSelection.runNames }
                                                benchmarkBundles={ filteredBenchmarkBundles }
                                                metricExtractor={ metricExtractor }
                                                detailBenchmarkBundleFunction={ appState.detailBenchmarkBundle } />
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
                                                       detailBenchmarkBundleFunction={ appState.detailBenchmarkBundle } />
                    } else {
                        mainView = <MultiRunView
                                                 runNames={ benchmarkSelection.runNames }
                                                 benchmarkBundles={ filteredBenchmarkBundles }
                                                 metricExtractor={ metricExtractor }
                                                 detailBenchmarkBundleFunction={ appState.detailBenchmarkBundle } />
                    }
                }
                sideBar = <RunSideBar
                                      benchmarkBundles={ sideBarBenchmarks }
                                      metrics={ metrics }
                                      metricExtractor={ metricExtractor }
                                      focusedBenchmarkBundles={ focusedBundles }
                                      categories={ categories }
                                      activeCategory={ activeCategory }
                                      selectMetricFunction={ appState.selectMetric }
                                      focusBenchmarkBundleFunction={ appState.focusBundle }
                                      detailBenchmarkBundleFunction={ appState.detailBenchmarkBundle }
                                      selectCategoryFunction={ appState.selectCategory } />
            }
        }

        return (
            <div>
              <MainNavi runs={ appState.benchmarkRuns } viewSelection={ viewSelection } selectRunsFunction={ appState.selectBenchmarkRuns } />
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


