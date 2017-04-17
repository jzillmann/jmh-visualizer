import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ErrorBar } from 'recharts';

import SingleRunChartTooltip from './SingleRunChartTooltip.jsx';
import { parseBenchmarkName } from '../functions/parse.jsx'
import { blue, green, yellow, lightBlack, tooltipBackground } from '../functions/colors.jsx'

// Gathered report for one benchmark class
export default class SingleRunClassChart extends Component {
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
        var dataMax = 0;
        const dataset = this.props.methodBenchmarks.map((element, i) => {
            const methodName = parseBenchmarkName(element);
            const score = Math.round(element.primaryMetric.score);
            const scoreConfidence = [Math.round(element.primaryMetric.scoreConfidence[0]), Math.round(element.primaryMetric.scoreConfidence[1])];
            const scoreError = Math.round(element.primaryMetric.scoreError);
            let errorBarInterval = 0
            if (!isNaN(scoreError)) {
                errorBarInterval = [score - scoreConfidence[0], scoreConfidence[1] - score];
            }
            dataMax = Math.max(dataMax, score);
            dataMax = Math.max(dataMax, scoreConfidence[1]);

            // console.debug(element.primaryMetric.score + " | " + element.primaryMetric.scoreError + ": " + errorScore + " | " + score);
            return {
                index: i,
                name: methodName,
                score: score,
                scoreConfidence: scoreConfidence,
                scoreError: scoreError,
                errorBarInterval: errorBarInterval,
                subScores: element.primaryMetric.rawData
            }
        })
        const benchmarkMode = this.props.methodBenchmarks[0].mode;
        const scoreUnit = this.props.methodBenchmarks[0].primaryMetric.scoreUnit;
        const chartHeight = 100 + dataset.length * 36;
        const maxMethodNameLength = dataset.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current));

        const BarLabel = (props) => {
            return (
                <text
                      stroke={ blue }
                      fontSize={ 11 }
                      textAnchor={ props.textAnchor }
                      fill="hsla(0, 100%, 100%, 0.8)"
                      x={ props.x }
                      y={ props.y - 7 }
                      width={ props.width }
                      height={ props.height }
                      className="recharts-bar-label">
                  { props.score.toLocaleString() + ' ' + scoreUnit }
                </text>
            );
        };
        return (
            <div>
              <h3 id={ this.props.name }>{ this.props.name }</h3>
              <div style={ { fontFamily: 'sans-serif', fontSize: '0.75em' } }>
                <BarChart
                          layout="vertical"
                          width={ 900 }
                          height={ chartHeight }
                          data={ dataset }
                          margin={ { top: 20, right: 30, left: maxMethodNameLength * 5, bottom: 5 } }>
                  <Bar
                       dataKey="score"
                       stroke={ blue }
                       fill={ blue }
                       unit={ ` ${scoreUnit}` }
                       isAnimationActive={ false }
                       label={ <BarLabel/> }>
                    <ErrorBar
                              dataKey="errorBarInterval"
                              width={ 4 }
                              strokeWidth={ 2 }
                              stroke={ yellow } />
                  </Bar>
                  <XAxis type="number" domain={ [0, dataMax] } />
                  <YAxis dataKey="name" type="category" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={ <SingleRunChartTooltip scoreUnit={ scoreUnit } /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                  <Legend verticalAlign='top' payload={ [{ value: `${benchmarkMode} ${scoreUnit}`, color: blue, type: 'rect' }] } height={ 30 } />
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
