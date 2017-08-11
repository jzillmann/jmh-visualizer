import React from 'react';

import RunSelection from '../models/RunSelection.js'
import MainNavi from './MainNavi.jsx';
import SplitPane from './SplitPane.jsx'

import UploadMainView from './UploadMainView.jsx';
import UploadSideBar from './UploadSideBar.jsx';

import RunSideBar from './RunSideBar.jsx';

import SingleRunView from './single/SingleRunView.jsx';
import SingleDetailView from './single/SingleDetailView.jsx';
import SingleDetailSideBar from './single/SingleDetailSideBar.jsx';

import TwoRunsView from './two/TwoRunsView.jsx';

import BackIcon from 'react-icons/lib/md/keyboard-backspace'
import EyeIcon from 'react-icons/lib/fa/eye'

import DetailView from './DetailView.jsx'


import PrimaryMetricExtractor from '../models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from '../models/extractor/SecondaryMetricExtractor.js'

import TwoDetailViewFactory from './two/TwoDetailViewFactory.jsx'


import DoingWorkSpinner from './DoingWorkSpinner.jsx';
import FileUploader from '../functions/FileUploader.js'
import { parseBenchmarkCollections } from '../functions/parse.js'

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

        var elements = [<div key="keyA">
                          a++
                        </div>,
            <div key="divB">
              b++
            </div>];
        var upperControls = null;
        upperControls = <div>
                          <a onClick={ appState.goBack }>
                            <BackIcon/> Back..</a>
                          <br/>
                        </div>
        var categories = ['Summary', 'Benchmarks'];
        var activeCategory = 'Benchmarks';
        var selectCategoryFunction = (category) => alert(category);
        var elementIds = elements.map(element => element.key);
        var elementNames = ['A', 'B'];
        var linkControlsCreators = [];


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
            if (appState.selectedBenchmarkCollection) {
                const benchmarkCollection = appState.selectedBenchmarkCollection;
                const secondaryMetrics = Array.from(benchmarkCollection.benchmarks(runSelection).reduce((aggregate, benchmark) => {
                    Object.keys(benchmark.secondaryMetrics).forEach(metricKey => aggregate.add(metricKey));
                    return aggregate;
                }, new Set()));
                if (selectedBenchmarkRuns.length == 1) {
                    const benchmarkRun = selectedBenchmarkRuns[0];
                    const runSelection = new RunSelection([benchmarkRun.name], [0]);
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    mainView = <SingleDetailView benchmarkBundle={ appState.selectedBenchmarkCollection } runSelection={ runSelection } secondaryMetrics={ secondaryMetrics } />
                    sideBar = <SingleDetailSideBar
                                                   container={ this }
                                                   benchmarkCollection={ appState.selectedBenchmarkCollection }
                                                   benchmarkCollections={ benchmarkCollections }
                                                   secondaryMetrics={ secondaryMetrics }
                                                   goBackFunction={ appState.goBack }
                                                   selectBenchmarkBundleFunction={ appState.selectBenchmarkCollection } />
                } else if (selectedBenchmarkRuns.length == 2) {
                    const runSelection = new RunSelection(selectedBenchmarkRuns.map(benchmarkRun => benchmarkRun.name), [0, 1]);
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const metricViewFactory = new TwoDetailViewFactory();
                    mainView = <DetailView
                                           benchmarkCollection={ appState.selectedBenchmarkCollection }
                                           benchmarkCollections={ benchmarkCollections }
                                           runSelection={ runSelection }
                                           goBackFunction={ appState.goBack }
                                           selectBenchmarkCollectionFunction={ appState.selectBenchmarkCollection }
                                           metricViewFactory={ metricViewFactory } />
                }

            // Run View
            } else {
                const metricType = appState.selectedMetric;
                const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                const metricExtractor = createMetricExtractor(appState.selectedMetric);
                const focusedCollections = appState.focusedCollections;

                let filteredBenchmarkCollections = metricType === 'Score' ? benchmarkCollections : benchmarkCollections.filter(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).find(benchmark => metricExtractor.hasMetric(benchmark)));
                const sideBarBenchmarks = filteredBenchmarkCollections;
                if (focusedCollections.size > 0) {
                    filteredBenchmarkCollections = filteredBenchmarkCollections.filter(benchmarkCollection => focusedCollections.has(benchmarkCollection.key));
                }
                const metricsSet = new Set(['Score']);
                filteredBenchmarkCollections.forEach(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).forEach(benchmark => {
                    Object.keys(benchmark.secondaryMetrics).forEach(metricKey => metricsSet.add(metricKey));
                }));
                const metrics = Array.from(metricsSet);

                linkControlsCreators.push((elementId) => <span key={ `focus-${elementId}` } onClick={ appState.focusCollection.bind(null, elementId) } className={ appState.focusedCollections.has(elementId) ? ' focused' : '' + ' clickable' }><sup><EyeIcon /></sup>{ ' ' }</span>);
                // linkControls.push(<span onClick={ this.showDetails.bind(this, benchmarkCollection) } className="clickable"><sup><DetailsIcon /></sup>{ ' ' }</span>);

                if (selectedBenchmarkRuns.length == 1) {
                    mainView = <SingleRunView
                                              benchmarkCollections={ filteredBenchmarkCollections }
                                              focusedCollections={ appState.focusedCollections }
                                              runSelection={ runSelection }
                                              metricExtractor={ metricExtractor }
                                              selectBenchmarkSetFunction={ appState.selectBenchmarkCollection } />
                } else if (selectedBenchmarkRuns.length == 2) {
                    mainView = <TwoRunsView
                                            benchmarkCollections={ filteredBenchmarkCollections }
                                            runSelection={ runSelection }
                                            metricExtractor={ metricExtractor }
                                            selectBenchmarkSetFunction={ appState.selectBenchmarkCollection } />
                }
                sideBar = <RunSideBar
                                      container={ this }
                                      benchmarkCollections={ sideBarBenchmarks }
                                      metrics={ metrics }
                                      metricExtractor={ metricExtractor }
                                      selectMetricFunction={ appState.selectMetric }
                                      focusedBenchmarkBundles={ appState.focusedCollections }
                                      focusBenchmarkBundleFunction={ appState.focusCollection }
                                      selectBenchmarkBundleFunction={ appState.selectBenchmarkCollection } />
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


