import React, { Component } from 'react';

export default class Benchmarks extends Component {

    static propTypes = {
        benchmarks: React.PropTypes.array.isRequired,
    };

    render() {
        console.debug(this.props.benchmarks)
        return (
            <div>
              <pre>{ JSON.stringify(this.props.benchmarks, null, "\t") }</pre>
            </div>
            );
    }
}

