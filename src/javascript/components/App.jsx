import React from 'react';
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';
import BenchmarkList from './BenchmarkList.jsx';

export default class App extends React.Component {

    static propTypes = {
        appControl: React.PropTypes.object.isRequired,
    };

    render() {
        console.debug('!!!!3:' + this.props.appControl.dataUploaded + '/' + this.props.appControl.benchmarks)
        var mainView;
        if (this.props.appControl.dataUploaded) {
            mainView = <BenchmarkList benchmarks={ this.props.appControl.benchmarks } />
        } else {
            mainView = <FileDrop uploadBenchmarks={ this.props.appControl.uploadBenchmarks } />
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

