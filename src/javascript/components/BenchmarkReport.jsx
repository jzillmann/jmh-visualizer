import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'

// Gathered report for one benchmark class
export default class BenchmarkReport extends Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        methodBenchmarks: React.PropTypes.array.isRequired,
    };
    state = {
        showJson: false
    }

    flipShowJson() {
        this.setState({
            showJson: !this.state.showJson
        });
    }

    render() {
        return (
            <div>
              <h3>{ this.props.name }</h3>
              <Button bsSize="small" onClick={ ::this.flipShowJson }>
                Show JSON
              </Button>
              <Collapse in={ this.state.showJson }>
                <div>
                  <pre>{ JSON.stringify(this.props.methodBenchmarks, null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.flipShowJson }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
            </div>
            );
    }
}
