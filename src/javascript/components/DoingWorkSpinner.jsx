import React from 'react';

var Spinner = require('react-spinkit');

//Spinner shown when doing work. Can be statically accessed throw show() and hide() methods
class DoingWorkSpinner extends React.Component {

    static propTypes = {
        color: React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            showBusy: false,
        };
    }

    componentWillMount() {
        DoingWorkSpinner.instance = this
    }

    componentWillUnmount() {
        delete DoingWorkSpinner.instance
    }

    initElement = (el) => {
        this.element = el
    }

    show() {
        this.setState({
            showBusy: true,
        });
    }

    hide() {
        this.setState({
            showBusy: false,
        });
    }

    render() {
        const component = this.state.showBusy ? <Spinner
                                                         name='three-bounce'
                                                         color={ this.props.color }
                                                         fadeIn='none'
                                                         ref={ this.initElement } /> : '';
        return (
            <div>
              { component }
            </div>
        )
    }

}

export default {
    Component: DoingWorkSpinner,
    show() {
        if (DoingWorkSpinner.instance) {
            DoingWorkSpinner.instance.show()
        }
    },
    hide() {
        if (DoingWorkSpinner.instance) {
            DoingWorkSpinner.instance.hide()
        }
    },
}
