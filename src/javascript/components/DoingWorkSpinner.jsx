import React from 'react';

var Spinner = require('react-spinkit');

//Spinner shown when doing work. Can be statically accessed throw show() and hide() methods
class DoingWorkSpinner extends React.Component {

    static propTypes = {
        color: React.PropTypes.string.isRequired
    };


    componentWillMount() {
        DoingWorkSpinner.instance = this
    }

    componentWillUnmount() {
        delete DoingWorkSpinner.instance
    }

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        return false;
    }

    show() {
        this.spinnerDiv.style.display = 'block'
    }

    hide() {
        this.spinnerDiv.style.display = 'none'
    }

    render() {
        return (
            <div style={ { display: 'none' } } ref={ (input) => {
                                             this.spinnerDiv = input;
                                         } }>
              <Spinner
                       id='spinner'
                       style={ { display: 'block' } }
                       name='three-bounce'
                       color={ this.props.color }
                       fadeIn='none' />
            </div>
        )
    }

}

export default {
    Component: DoingWorkSpinner,
    show() {
        if (DoingWorkSpinner.instance) {
            DoingWorkSpinner.instance.show();
        }
    },
    hide() {
        if (DoingWorkSpinner.instance) {
            // setTimeout(function() {
            DoingWorkSpinner.instance.hide();
            // }, 90);

        }
    },
}
