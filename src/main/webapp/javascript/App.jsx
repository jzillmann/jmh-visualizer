import React from 'react';
import MainNavi from './MainNavi.jsx';

class App extends React.Component {

    getInitialState() {
        return {
            rawReports: [],
            dataUploaded: false
        };
    }

    handleUserInput(rawReports) {
        this.setState({
            filterText: rawReports,
            dataUploaded: true
        });
    }

    render() {
        return (
            <div>
              <MainNavi/>
              <section style={ { padding: 20 } }>
                { this.props.children }
              </section>
            </div>
            );
    }
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default App;
