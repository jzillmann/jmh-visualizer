import React from 'react';

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ErrorBar } from 'recharts';

import SingleRunChartTooltip from 'components/single/SingleRunChartTooltip.jsx';
import { formatNumber } from 'functions/util.js'
import { blue, red, green, lightBlack, tooltipBackground, barColors } from 'functions/colors.js'

// Gathered report for one benchmark class
export default class BarChartView extends React.Component {

    static propTypes = {
        dataSet: React.PropTypes.object.isRequired,
        dataMax: React.PropTypes.number
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        const dataSet1 = this.props.dataSet;
        const dataSet2 = nextProps.dataSet;
        return !(dataSet1.id === dataSet2.id && this.props.dataMax == nextProps.dataMax);
    }

    render() {
        const {dataSet, dataMax} = this.props;

        const xMaximum = Math.round(dataMax && dataMax > 0 ? dataMax : dataSet.dataMax);
        const chartHeight = 100 + dataSet.data.length * dataSet.barGroups.length * 36;
        const maxMethodNameLength = dataSet.data.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current), 32);

        const singleBar = dataSet.barGroups.length == 1;
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
                                         { formatNumber(props[barGroup], dataSet.roundScores) + ' ' + dataSet.scoreUnit }
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
                        stroke={ singleBar ? blue : barColors[i] }
                        fill={ singleBar ? blue : barColors[i] }
                        unit={ ` ${dataSet.scoreUnit}` }
                        isAnimationActive={ true }
                        animationDuration={ 540 }
                        label={ <BarLabel/> }>
                     <ErrorBar
                               dataKey={ barGroup + "ErrorBarInterval" }
                               width={ 4 }
                               strokeWidth={ 2 }
                               stroke={ lightBlack } />
                   </Bar>
        });

        return (
            <ResponsiveContainer width='100%' height={ chartHeight }>
              <BarChart
                        layout="vertical"
                        width={ 900 }
                        height={ chartHeight }
                        data={ dataSet.data }
                        margin={ { top: 20, right: 45, left: maxMethodNameLength * 4, bottom: 5 } }>
                <XAxis type="number" domain={ [0, xMaximum] } />
                <YAxis dataKey="name" type="category" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={ <SingleRunChartTooltip scoreUnit={ dataSet.scoreUnit } roundScores={ dataSet.roundScores } /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                <Legend verticalAlign='top' height={ 30 } />
                { bars }
              </BarChart>
            </ResponsiveContainer>
        );
    }
}
