import React, { Component } from 'react';

import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ErrorBar } from 'recharts';

import SingleRunChartTooltip from './SingleRunChartTooltip.jsx';
import { blue, red, green, lightBlack, tooltipBackground, barColors } from '../../functions/colors.js'

// Gathered report for one benchmark class
export default class BarChartView extends Component {

    static propTypes = {
        dataSet: React.PropTypes.object.isRequired,
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        return false;
    }

    render() {
        const {dataSet} = this.props;

        const chartHeight = 100 + dataSet.data.length * dataSet.barGroups.length * 36;
        const maxMethodNameLength = dataSet.data.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current), 32);

        const bars = dataSet.barGroups.map((barGroup, i) => {

            const BarLabel = (props) => {
                // if a benchmark class with params failed on a single method / single param, we will have a N/A x
                const text = props.x ? <text
                                             stroke={ blue }
                                             fontSize={ 11 }
                                             textAnchor={ props.textAnchor }
                                             fill="hsla(0, 100%, 100%, 0.8)"
                                             x={ props.x }
                                             y={ props.y - 7 }
                                             width={ props.width }
                                             height={ props.height }
                                             className="recharts-bar-label">
                                         { props[barGroup].toLocaleString() + ' ' + dataSet.scoreUnit }
                                       </text> : <text
                                                       stroke={ red }
                                                       fontSize={ 11 }
                                                       textAnchor={ props.textAnchor }
                                                       fill="hsla(0, 100%, 100%, 0.8)"
                                                       x={ maxMethodNameLength * 5 + 70 }
                                                       y={ props.y + 7 }
                                                       width={ 10 }
                                                       height={ props.height }
                                                       className="recharts-bar-label">
                                                   { "'" + barGroup + "': n/a" }
                                                 </text>;
                return (
                    text
                );
            };

            return <Bar
                        key={ barGroup }
                        dataKey={ barGroup }
                        stroke={ barColors[i] }
                        fill={ barColors[i] }
                        unit={ ` ${dataSet.scoreUnit}` }
                        isAnimationActive={ false }
                        label={ <BarLabel/> }>
                     <ErrorBar
                               dataKey={ barGroup + "ErrorBarInterval" }
                               width={ 4 }
                               strokeWidth={ 2 }
                               stroke={ lightBlack } />
                   </Bar>
        });

        return (
            <div>
              <BarChart
                        layout="vertical"
                        width={ 900 }
                        height={ chartHeight }
                        data={ dataSet.data }
                        margin={ { top: 20, right: 30, left: maxMethodNameLength * 5, bottom: 5 } }>
                <XAxis type="number" domain={ [0, dataSet.dataMax] } />
                <YAxis dataKey="name" type="category" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={ <SingleRunChartTooltip scoreUnit={ dataSet.scoreUnit } /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                <Legend verticalAlign='top' height={ 30 } />
                { bars }
              </BarChart>
            </div>
        );
    }
}
