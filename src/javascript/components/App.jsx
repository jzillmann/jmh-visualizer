import React from 'react';
import Container from './Container.jsx';
import FileDrop from './FileDrop.jsx';
import About from './About.jsx';

export default class App extends React.Component {

    static propTypes = {
        appControl: React.PropTypes.object.isRequired,
    };

    render() {
        console.debug('!!!!3:' + this.props.appControl.dataUploaded)
        var mainView;
        if (this.props.appControl.dataUploaded) {
            mainView = <About />
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

