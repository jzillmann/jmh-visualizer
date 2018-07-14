import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, Legend, Bar, ErrorBar } from 'recharts';

import BarLabel from 'components/single/BarLabel.jsx';
import SingleRunChartTooltip from 'components/single/SingleRunChartTooltip.jsx';
import { blue, green, lightBlack, tooltipBackground, barColors } from 'functions/colors.js'

// Gathered report for one benchmark class
export default class BarChartView extends React.Component {

    static propTypes = {
        dataSet: PropTypes.object.isRequired,
        dataMax: PropTypes.number
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        const dataSet1 = this.props.dataSet;
        const dataSet2 = nextProps.dataSet;
        return !(dataSet1.id === dataSet2.id && this.props.dataMax == nextProps.dataMax);
    }

    render() {
        const { dataSet, dataMax } = this.props;

        const domainMax = dataMax && dataMax > 0 ? Math.round(dataMax) : 'auto';
        const chartHeight = 100 + dataSet.data.length * dataSet.barGroups.length * 36;
        const maxMethodNameLength = dataSet.data.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current), 32);

        const singleBar = dataSet.barGroups.length == 1;
        const bars = dataSet.barGroups.map((barGroup, i) => {

            return <Bar
                key={ barGroup }
                dataKey={ barGroup }
                stroke={ singleBar ? blue : barColors[i] }
                fill={ singleBar ? blue : barColors[i] }
                unit={ ` ${dataSet.scoreUnit}` }
                isAnimationActive={ true }
                animationDuration={ 540 }
            >
                <LabelList dataKey={ barGroup + 'Label' } content={ BarLabel } />
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
                    <XAxis type="number" domain={ [0, domainMax] } />
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
