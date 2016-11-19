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
        var mainView;
        if (this.props.appState.benchmarkRuns.length == 0) {
            mainView = <FileDrop uploadBenchmarkRunsFunction={ this.props.appState.uploadBenchmarkRuns } examples={ this.props.appState.examples } />
        } else if (this.props.appState.benchmarkRuns.length == 1) {
            mainView = <SingleRunView benchmarkRun={ this.props.appState.benchmarkRuns[0] } />
        } else if (this.props.appState.benchmarkRuns.length == 2) {
            mainView = <TwoRunsView benchmarkRuns={ this.props.appState.benchmarkRuns } />
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

