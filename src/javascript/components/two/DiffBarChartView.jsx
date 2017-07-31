import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ReferenceLine, Cell } from 'recharts';

import TwoRunsChartTooltip from './TwoRunsChartTooltip.jsx';
import { red, green, yellow, tooltipBackground } from '../../functions/colors.js'

// Chart showing increase/decrease in % for the benchmarks of a class from 2 runs.
export default class DiffBarChartView extends Component {

    static propTypes = {
        dataSet: React.PropTypes.array.isRequired,
        runNames: React.PropTypes.array.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        //only update if order of runs has changed
        return this.props.runNames[0] !== nextProps.runNames[0] || this.props.metricExtractor !== nextProps.metricExtractor;
    }

    render() {
        const {runNames, dataSet} = this.props;
        const maxMethodNameLength = dataSet.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current), 32);
        const chartHeight = 100 + dataSet.length * 45;

        return (
            <div>
              <BarChart
                        layout="vertical"
                        width={ 900 }
                        height={ chartHeight }
                        data={ dataSet }
                        margin={ { top: 20, right: 30, left: maxMethodNameLength * 5, bottom: 5 } }>
                <Bar
                     dataKey="scoreDiff"
                     unit=" %"
                     isAnimationActive={ true }
                     animationDuration={ 900 }
                     label={ { stroke: yellow, fontSize: 12 } }>
                  { dataSet.map((entry, index) => {
                        const color = dataSet[index].scoreDiff > 0 ? green : red;
                        return <Cell key={ index } fill={ color } stroke={ color } />
                    }) }
                </Bar>
                <ReferenceLine x={ 0 } stroke={ yellow } />
                <XAxis type="number" domain={ [-100, 100] } />
                <YAxis dataKey="name" type="category" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip
                         content={ <TwoRunsChartTooltip runNames={ runNames } /> }
                         roundScores={ dataSet.roundScores }
                         cursor={ { stroke: green, strokeWidth: 2 } }
                         wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                <Legend verticalAlign='top' payload={ [{ value: "Decrease in %", color: red, type: 'rect' }, { value: "Increase in %", color: green, type: 'rect' }] } height={ 30 } />
              </BarChart>
            </div>
        );
    }
}
