import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'

import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar } from 'recharts';

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
        const series = this.props.methodBenchmarks.map((element, i) => {
            const splitted = element.benchmark.split('.');
            const methodName = splitted[splitted.length - 1];
            return {
                index: i,
                name: methodName,
                data: Math.round(element.primaryMetric.score),
                empty: ''
            }
        })
        const maxScore = series.map(elem => elem.data).reduce((previous, current) => Math.max(previous, current)
        );
        const benchmarkMode = this.props.methodBenchmarks[0].mode
        const scoreUnit = this.props.methodBenchmarks[0].primaryMetric.scoreUnit
        console.debug(maxScore)
        console.debug(series);
        // series.pop()

        //TODO left pedding should depend on max label

        return (
            <div>
              <h3 id={ this.props.name }>{ this.props.name }</h3>
              <div style={ { fontFamily: 'sans-serif', fontSize: '0.75em' } }>
                <BarChart
                          layout="vertical"
                          width={ 700 }
                          height={ 300 }
                          data={ series }
                          margin={ { top: 20, right: 30, left: 120, bottom: 5 } }>
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip/>
                  <Legend verticalAlign='top' payload={ [{ value: `${benchmarkMode} ${scoreUnit}`, color: '#337ab7', type: 'rect' }] } height={ 30 } />
                  <Bar
                       dataKey="data"
                       stroke="#337ab7"
                       fill="#337ab7"
                       unit={ ` ${scoreUnit}` }
                       label
                       isAnimationActive={ false } />
                </BarChart>
              </div>
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
