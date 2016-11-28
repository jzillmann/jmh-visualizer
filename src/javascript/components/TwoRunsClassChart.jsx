import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ReferenceLine, Cell } from 'recharts';

import TwoRunsChartTooltip from './TwoRunsChartTooltip.jsx';
import { red, green, yellow, tooltipBackground } from '../functions/colors.jsx'

// Chart showing increase in % for the benchmarks of a class from 2 runs.
export default class TwoRunsClassChart extends Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        runNames: React.PropTypes.array.isRequired,
        methodMap: React.PropTypes.object.isRequired,
    };
    state = {
        animate: true,
        showJson1: false,
        showJson2: false
    }

    flipShowJson1() {
        this.setState({
            animate: false,
            showJson1: !this.state.showJson1,
            showJson2: false
        });

    }
    flipShowJson2() {
        this.setState({
            animate: false,
            showJson1: false,
            showJson2: !this.state.showJson2
        });

    }

    render() {
        let newBenchmarks = [];
        let removedBenchmarks = [];
        let maxMethodNameLength = 0;
        let benchmarkMode;
        const dataset = [...this.props.methodMap].map(([methodName, runArray] , i) => {
            maxMethodNameLength = Math.max(maxMethodNameLength, methodName.length);
            const firstRunBenchmark = runArray[0];
            const secondRunBenchmark = runArray[1];

            if (firstRunBenchmark === null) {
                newBenchmarks.push(methodName);
            } else if (secondRunBenchmark === null) {
                removedBenchmarks.push(methodName);
            } else {
                const scoreUnit = firstRunBenchmark.primaryMetric.scoreUnit;
                benchmarkMode = firstRunBenchmark.mode
                const score1stRun = Math.round(firstRunBenchmark.primaryMetric.score);
                const score2ndRun = Math.round(secondRunBenchmark.primaryMetric.score);
                const scoreError1stRun = Math.round(firstRunBenchmark.primaryMetric.scoreError);
                const scoreError2ndRun = Math.round(secondRunBenchmark.primaryMetric.scoreError);

                let scoreDiff = Math.round((score2ndRun - score1stRun) / score1stRun * 100);
                if (benchmarkMode !== "thrpt") {
                    // except for throughput decrease is an increase
                    scoreDiff = scoreDiff * -1;
                }

                return {
                    index: i,
                    name: methodName,
                    scoreDiff: scoreDiff,
                    scoreUnit: scoreUnit,
                    benchmarkMode: benchmarkMode,
                    score1stRun: score1stRun,
                    score2ndRun: score2ndRun,
                    scoreError1stRun: scoreError1stRun,
                    scoreError2ndRun: scoreError2ndRun
                }
            }
        }).filter((element) => element !== undefined);

        const chartHeight = 100 + dataset.length * 36;
        return (
            <div>
              <h3 id={ this.props.name }>{ this.props.name }</h3>
              <div style={ { fontFamily: 'sans-serif', fontSize: '0.75em' } }>
                <div style={ { textAlign: 'center' } }>
                  <b>{ benchmarkMode }</b>
                </div>
                <BarChart
                          layout="vertical"
                          width={ 900 }
                          height={ chartHeight }
                          data={ dataset }
                          margin={ { top: 20, right: 30, left: maxMethodNameLength * 5, bottom: 5 } }>
                  <Bar
                       dataKey="scoreDiff"
                       unit=" %"
                       isAnimationActive={ this.state.animate }
                       label={ { stroke: yellow, fontSize: 12 } }>
                    { dataset.map((entry, index) => {
                          const color = dataset[index].scoreDiff > 0 ? green : red;
                          return <Cell key={ index } fill={ color } stroke={ color } />
                      }) }
                  </Bar>
                  <ReferenceLine x={ 0 } stroke={ yellow } />
                  <XAxis type="number" domain={ [-100, 100] } />
                  <YAxis dataKey="name" type="category" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={ <TwoRunsChartTooltip runNames={ this.props.runNames } /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                  <Legend verticalAlign='top' payload={ [{ value: "Decrease in %", color: red, type: 'rect' }, { value: "Increase in %", color: green, type: 'rect' }] } height={ 30 } />
                </BarChart>
              </div>
              { removedBenchmarks.length > 0 &&
                <div>
                  <b>Removed benchmarks:</b>
                  { ' ' + removedBenchmarks.join(', ') }
                  <br/>
                  <br/>
                </div> }
              { newBenchmarks.length > 0 &&
                <div>
                  <b>New benchmarks:</b>
                  { ' ' + newBenchmarks.join(', ') }
                  <br/>
                  <br/>
                </div> }
              <Button bsSize="small" onClick={ ::this.flipShowJson1 } active={ this.state.showJson1 }>
                Show JSON 1
              </Button>
              <Button bsSize="small" onClick={ ::this.flipShowJson2 } active={ this.state.showJson2 }>
                Show JSON 2
              </Button>
              <Collapse in={ this.state.showJson1 }>
                <div>
                  <pre>{ JSON.stringify([...this.props.methodMap.values()].map((runArray) => runArray[0]), null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.flipShowJson1 }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
              <Collapse in={ this.state.showJson2 }>
                <div>
                  <pre>{ JSON.stringify([...this.props.methodMap.values()].map((runArray) => runArray[1]), null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.flipShowJson2 }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
            </div>
            );
    }
}
