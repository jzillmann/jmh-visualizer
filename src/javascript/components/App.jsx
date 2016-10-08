import React from 'react';
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';
import BenchmarkList from './BenchmarkList.jsx';

export default class App extends React.Component {

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
    };

    render() {
        var mainView;
        if (this.props.appState.dataUploaded) {
            mainView = <BenchmarkList benchmarks={ this.props.appState.benchmarks } />
        } else {
            mainView = <FileDrop uploadBenchmarksFunction={ this.props.appState.uploadBenchmarks } loadExamplesFunction={ this.props.appState.loadExamples } />
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

