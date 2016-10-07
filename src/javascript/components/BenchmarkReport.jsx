import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import Popover from 'react-bootstrap/lib/Popover'

import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme, VictoryLabel, VictoryTooltip, VictoryAxis, VictoryContainer } from 'victory';



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
                data: [Math.round(element.primaryMetric.score)],
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

        return (
            <div>
              <h3 id={ this.props.name }>{ this.props.name }</h3>
              <div style={ { fontFamily: 'sans-serif', fontSize: '0.75em' } }>
                <VictoryChart
                              height={ 200 }
                              domainPadding={ { x: 36 } }
                              padding={ { top: 0, bottom: 27, left: 27, right: 27 } }
                              containerComponent={ <VictoryContainer title={ this.props.name } /> }>
                  <VictoryGroup
                                horizontal
                                domain={ { x: [0, maxScore] } }
                                offset={ 27 }
                                style={ { data: { width: 16 }, labels: { fontSize: 7 } } }
                                colorScale={ "qualitative" }>
                    { series.reverse().map((element) => <VictoryBar key={ element.index } data={ [{ x: 1, y: element.data, label: element.name }] } />
                      ) }
                  </VictoryGroup>
                  <VictoryAxis label={ benchmarkMode + ': ' + scoreUnit } style={ { axis: { stroke: "#756f6a" }, tickLabels: { fontSize: 10, padding: 0 }, axisLabel: { fontSize: 16, padding: 25 } } } />
                </VictoryChart>
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
