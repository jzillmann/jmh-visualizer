import React from 'react';

import RunSelection from '../models/RunSelection.js'
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';
import RunView from './RunView.jsx'
import SingleRunViewFactory from './single/SingleRunViewFactory.jsx'
import TwoRunViewFactory from './two/TwoRunViewFactory.jsx'

import { parseBenchmarkCollections } from '../functions/parse.js'

export default class App extends React.Component {

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
    };

    render() {
        const selectedBenchmarkRuns = this.props.appState.selectedBenchmarks();

        var mainView;
        if (selectedBenchmarkRuns.length == 0) {
            mainView = <FileDrop examples={ this.props.appState.examples } uploadBenchmarkRunsFunction={ this.props.appState.uploadBenchmarkRuns } />
        } else if (selectedBenchmarkRuns.length == 1) {
            const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
            const benchmarkRun = selectedBenchmarkRuns[0];
            const moreThenOneBenchmarkRun = this.props.appState.benchmarkRuns.length > 1;
            const collectionViewFactory = new SingleRunViewFactory({
                moreThenOneBenchmarkRun: moreThenOneBenchmarkRun,
                unselectBenchmarkFunction: this.props.appState.unselectBenchmark
            });
            const runSelection = new RunSelection([benchmarkRun.name], [0]);
            mainView = <RunView benchmarkCollections={ benchmarkCollections } runSelection={ runSelection } collectionViewFactory={ collectionViewFactory } />
        } else if (selectedBenchmarkRuns.length == 2) {
            const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
            const collectionViewFactory = new TwoRunViewFactory({
                benchmarkRuns: selectedBenchmarkRuns,
                reorderFunction: this.props.appState.reorderBenchmarks,
                selectFunction: this.props.appState.selectBenchmark
            });
            const runSelection = new RunSelection(selectedBenchmarkRuns.map(benchmarkRun => benchmarkRun.name), [0, 1]);
            mainView = <RunView benchmarkCollections={ benchmarkCollections } runSelection={ runSelection } collectionViewFactory={ collectionViewFactory } />
        } else {
            alert("More then 2 runs not supported!");
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

