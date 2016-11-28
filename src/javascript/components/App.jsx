import React from 'react';
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';
import SingleRunView from './SingleRunView.jsx';
import TwoRunsView from './TwoRunsView.jsx';

export default class App extends React.Component {

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
    };

    render() {
        const benchmarkRuns = this.props.appState.selectedBenchmarks();
        const filteredBenchmarks = benchmarkRuns.length < this.props.appState.benchmarkRuns.length;

        var mainView;
        if (benchmarkRuns.length == 0) {
            mainView = <FileDrop examples={ this.props.appState.examples } uploadBenchmarkRunsFunction={ this.props.appState.uploadBenchmarkRuns } />
        } else if (benchmarkRuns.length == 1) {
            mainView = <SingleRunView benchmarkRun={ benchmarkRuns[0] } filteredBenchmarks={ filteredBenchmarks } unselectBenchmarkFunction={ this.props.appState.unselectBenchmark } />
        } else if (benchmarkRuns.length == 2) {
            mainView = <TwoRunsView benchmarkRuns={ benchmarkRuns } reorderFunction={ this.props.appState.reorderBenchmarks } selectFunction={ this.props.appState.selectBenchmark } />
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

