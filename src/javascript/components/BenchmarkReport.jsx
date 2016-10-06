import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import Popover from 'react-bootstrap/lib/Popover'
import { Chart, Bars, Transform, Layer, Ticks } from 'rumble-charts'



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
        const series2 = [{
            name: 'read01ColumnOverAndOver',
            data: [1, 2, 3]
        }, {
            name: 'read02ColumnOverAndOver',
            data: [5, 7, 11]
        }, {
            name: 'James',
            data: [13, 17, 19]
        }];
        const series = this.props.methodBenchmarks.map((element) => {
            const splitted = element.benchmark.split('.');
            const methodName = splitted[splitted.length - 1];
            return {
                name: methodName,
                data: [element.primaryMetric.score]
            }
        })
        console.debug(series);

        return (
            <div>
              <h3 id={ this.props.name }>{ this.props.name }</h3>
              <div style={ { fontFamily: 'sans-serif', fontSize: '0.75em' } }>
                <Chart
                       width={ 500 }
                       height={ 250 }
                       series={ series }
                       minY={ 0 }>
                  <Layer width='80%' height='90%' position='top center'>
                    <Ticks
                           axis='x'
                           label={ ({index, props}) => props.series[index].name }
                           labelStyle={ { textAnchor: 'middle', dominantBaseline: 'text-before-edge', fill: 'lightgray' } }
                           labelAttributes={ { y: 3 } } />
                  </Layer>
                  <Bars
                        colors='category10'
                        innerPadding='1.5%'
                        groupPadding='3%'
                        barAttributes={ { onMouseMove: e => e.target.style.fillOpacity = 1, onMouseLeave: e => e.target.style.fillOpacity = 0.8 } }
                        barStyle={ { fillOpacity: 0.8, transition: 'all 250ms' } } />
                </Chart>
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
