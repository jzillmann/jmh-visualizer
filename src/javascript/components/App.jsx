import React from 'react';

import RunSelection from '../models/RunSelection.js'
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';

import RunView from './RunView.jsx'
import DetailView from './DetailView.jsx'

import SingleRunViewFactory from './single/SingleRunViewFactory.jsx'
import SingleDetailViewFactory from './single/SingleDetailViewFactory.jsx'

import TwoRunViewFactory from './two/TwoRunViewFactory.jsx'
import TwoDetailViewFactory from './two/TwoDetailViewFactory.jsx'

import { parseBenchmarkCollections } from '../functions/parse.js'

export default class App extends React.Component {

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
    };

    render() {
        const {appState} = this.props;
        const selectedBenchmarkRuns = appState.selectedBenchmarks();

        var mainView;
        if (selectedBenchmarkRuns.length == 0) {
            mainView = <FileDrop examples={ this.props.appState.examples } uploadBenchmarkRunsFunction={ this.props.appState.uploadBenchmarkRuns } />
        } else if (selectedBenchmarkRuns.length > 2) {
            alert("More then 2 runs not supported!");
        } else {
            if (providedBenchmarks.length == 0) { // eslint-disable-line no-undef
                window.onbeforeunload = function() {
                    return "You will loose the current benchmarks.";
                };
            }

            if (appState.selectedBenchmarkCollection) {
                if (selectedBenchmarkRuns.length == 1) {
                    const benchmarkRun = selectedBenchmarkRuns[0];
                    const runSelection = new RunSelection([benchmarkRun.name], [0]);
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const metricViewFactory = new SingleDetailViewFactory();
                    mainView = <DetailView
                                           benchmarkCollection={ appState.selectedBenchmarkCollection }
                                           benchmarkCollections={ benchmarkCollections }
                                           runSelection={ runSelection }
                                           goBackFunction={ appState.goBack }
                                           selectBenchmarkCollectionFunction={ appState.selectBenchmarkCollection }
                                           metricViewFactory={ metricViewFactory } />
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

            } else {
                if (selectedBenchmarkRuns.length == 1) {
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const benchmarkRun = selectedBenchmarkRuns[0];
                    const moreThenOneBenchmarkRun = appState.benchmarkRuns.length > 1;
                    const collectionViewFactory = new SingleRunViewFactory({
                        moreThenOneBenchmarkRun: moreThenOneBenchmarkRun,
                        unselectBenchmarkFunction: appState.unselectBenchmark,
                        selectBenchmarkCollectionFunction: appState.selectBenchmarkCollection
                    });
                    const runSelection = new RunSelection([benchmarkRun.name], [0]);
                    mainView = <RunView
                                        benchmarkCollections={ benchmarkCollections }
                                        runSelection={ runSelection }
                                        collectionViewFactory={ collectionViewFactory }
                                        selectedMetric={ appState.selectedMetric }
                                        selectMetricFunction={ appState.selectMetric } />
                } else if (selectedBenchmarkRuns.length == 2) {
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const collectionViewFactory = new TwoRunViewFactory({
                        benchmarkRuns: selectedBenchmarkRuns,
                        reorderFunction: appState.reorderBenchmarks,
                        selectFunction: appState.selectBenchmark,
                        selectBenchmarkCollectionFunction: appState.selectBenchmarkCollection
                    });
                    const runSelection = new RunSelection(selectedBenchmarkRuns.map(benchmarkRun => benchmarkRun.name), [0, 1]);
                    mainView = <RunView
                                        benchmarkCollections={ benchmarkCollections }
                                        runSelection={ runSelection }
                                        collectionViewFactory={ collectionViewFactory }
                                        selectedMetric={ appState.selectedMetric }
                                        selectMetricFunction={ appState.selectMetric } />
                }
            }
        }


        return (
            <div>
              <Container>
                { mainView }
              </Container>
            </div>
        );
    }
}

