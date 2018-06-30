import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ReferenceLine, Cell } from 'recharts';

import TwoRunsChartTooltip from 'components/two/TwoRunsChartTooltip.jsx';
import { red, green, yellow, tooltipBackground } from 'functions/colors.js'

// Chart showing increase/decrease in % for the benchmarks of a class from 2 runs.
export default class DiffBarChartView extends React.Component {

    static propTypes = {
        dataSet: PropTypes.object.isRequired,
        runNames: PropTypes.array.isRequired,
        metricExtractor: PropTypes.object.isRequired,
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        //only update if order of runs has changed
        return this.props.runNames[0] !== nextProps.runNames[0] || this.props.metricExtractor.metricKey !== nextProps.metricExtractor.metricKey;
    }

    render() {
        const {runNames, dataSet} = this.props;
        const maxMethodNameLength = dataSet.data.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current), 32);
        const chartHeight = 100 + dataSet.data.length * 45;
        return (
            <ResponsiveContainer width='100%' height={ chartHeight }>
              <BarChart
                        layout="vertical"
                        width={ 900 }
                        height={ chartHeight }
                        data={ dataSet.data }
                        margin={ { top: 20, right: 30, left: maxMethodNameLength * 5, bottom: 5 } }>
                <Bar
                     dataKey="scoreDiff"
                     unit=" %"
                     isAnimationActive={ true }
                     animationDuration={ 900 }
                     label={ { stroke: yellow, fontSize: 12 } }>
                  { dataSet.data.map((entry, index) => {
                        const color = dataSet.data[index].scoreDiff > 0 ? green : red;
                        return <Cell key={ index } fill={ color } stroke={ color } />
                    }) }
                </Bar>
                <ReferenceLine x={ 0 } stroke={ yellow } />
                <XAxis type="number" domain={ [-100, 100] } />
                <YAxis dataKey="name" type="category" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={ <TwoRunsChartTooltip runNames={ runNames } roundScores={ dataSet.roundScores } /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                <Legend verticalAlign='top' payload={ [{ value: "Decrease in %", color: red, type: 'rect' }, { value: "Increase in %", color: green, type: 'rect' }] } height={ 30 } />
              </BarChart>
            </ResponsiveContainer>
        );
    }
}
