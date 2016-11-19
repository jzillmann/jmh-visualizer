import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar } from 'recharts';

import SingleRunChartTooltip from './SingleRunChartTooltip.jsx';
import { parseMethodName } from '../functions/parse.jsx'
import { blue, red, green, tooltipBackground } from '../functions/colors.jsx'

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
        const dataset = this.props.methodBenchmarks.map((element, i) => {
            const methodName = parseMethodName(element);
            const score = Math.round(element.primaryMetric.score);
            const scoreError = Math.round(element.primaryMetric.scoreError);
            const scoreErrorPart = isNaN(scoreError) ? 0 : Math.min(score, scoreError) / 2;
            const scorePart = score - scoreErrorPart;

            // console.debug(element.primaryMetric.score + " | " + element.primaryMetric.scoreError + ": " + errorScore + " | " + score);
            return {
                index: i,
                name: methodName,
                score: score,
                scoreError: scoreError,
                scorePart: scorePart,
                scoreErrorPart: scoreErrorPart,
                subScores: element.primaryMetric.rawData
            }
        })
        const benchmarkMode = this.props.methodBenchmarks[0].mode
        const scoreUnit = this.props.methodBenchmarks[0].primaryMetric.scoreUnit
        const chartHeight = 100 + dataset.length * 36
        const maxMethodNameLength = dataset.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current))
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
                       dataKey="scorePart"
                       stackId="a"
                       stroke={ blue }
                       fill={ blue }
                       unit={ ` ${scoreUnit}` }
                       isAnimationActive={ false } />
                  <Bar
                       dataKey="scoreErrorPart"
                       stackId="a"
                       stroke={ red }
                       fill={ red }
                       unit={ ` ${scoreUnit}` }
                       isAnimationActive={ false }
                       label={ { stroke: blue, fontSize: 12 } } />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={ <SingleRunChartTooltip /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
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
