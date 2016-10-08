import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import BenchmarkTooltip from './BenchmarkTooltip.jsx';

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
        const dataset = this.props.methodBenchmarks.map((element, i) => {
            const splitted = element.benchmark.split('.');
            const methodName = splitted[splitted.length - 1];
            const score = Math.round(element.primaryMetric.score);
            const scoreError = Math.round(element.primaryMetric.scoreError);
            const scoreErrorPart = Math.min(score, scoreError);
            const scorePart = score - scoreErrorPart;

            // console.debug(element.primaryMetric.score + " | " + element.primaryMetric.scoreError + ": " + errorScore + " | " + score);
            return {
                index: i,
                name: methodName,
                score: score,
                scoreError: scoreError,
                scorePart: scorePart,
                scoreErrorPart: scoreErrorPart,
                subScores: element.primaryMetric.rawData.reduce((previous, current) => previous.concat(current)),
            }
        })
        const benchmarkMode = this.props.methodBenchmarks[0].mode
        const scoreUnit = this.props.methodBenchmarks[0].primaryMetric.scoreUnit
        //TODO left pedding should depend on max label
        return (
            <div>
              <h3 id={ this.props.name }>{ this.props.name }</h3>
              <div style={ { fontFamily: 'sans-serif', fontSize: '0.75em' } }>
                <BarChart
                          layout="vertical"
                          width={ 700 }
                          height={ 300 }
                          data={ dataset }
                          margin={ { top: 20, right: 30, left: 120, bottom: 5 } }>
                  <Bar
                       dataKey="scoreErrorPart"
                       stackId="a"
                       stroke="#d84b55"
                       fill="#d84b55"
                       unit={ ` ${scoreUnit}` }
                       isAnimationActive={ false } />
                  <Bar
                       dataKey="scorePart"
                       stackId="a"
                       stroke="#337ab7"
                       fill="#337ab7"
                       unit={ ` ${scoreUnit}` }
                       label
                       isAnimationActive={ false } />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={ <BenchmarkTooltip /> } cursor={ { stroke: 'red', strokeWidth: 2 } } wrapperStyle={ { backgroundColor: '#efefef' } } />
                  <Legend verticalAlign='top' payload={ [{ value: `${benchmarkMode} ${scoreUnit}`, color: '#337ab7', type: 'rect' }] } height={ 30 } />
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
