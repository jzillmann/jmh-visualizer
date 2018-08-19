import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, Legend, Bar, ErrorBar } from 'recharts';

import { createDataSetFromBenchmarks } from 'components/single/BarDataSet.js'
import BarLabel from 'components/single/BarLabel.jsx';
import SingleRunChartTooltip from 'components/single/SingleRunChartTooltip.jsx';
import { blue, green, lightBlack, tooltipBackground, barColors } from 'functions/colors.js'

// Gathered report for one benchmark class
export default class BarChartView extends React.Component {

    static propTypes = {
        benchmarkBundle: PropTypes.object.isRequired,
        metricExtractor: PropTypes.object.isRequired,
        dataMax: PropTypes.number,
        logScale: PropTypes.bool.isRequired
    };

    render() {
        const { benchmarkBundle, metricExtractor, dataMax, logScale } = this.props;

        const dataSet = createDataSetFromBenchmarks(benchmarkBundle, metricExtractor);
        const domainMax = dataMax && dataMax > 0 ? Math.round(dataMax) : 'auto';

        let scale, domainMin, chartMarginRight;
        if (logScale) {
            scale = 'log';
            domainMin = dataMax && dataMax > 0 ? 0.1 : 'auto';
            chartMarginRight = 90;
        } else {
            scale = 'linear';
            domainMin = 0;
            chartMarginRight = 45;
        }

        const { paramNames } = dataSet;
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
            <div>
                <ResponsiveContainer width='100%' height={ chartHeight } >
                    <BarChart
                        layout="vertical"
                        height={ chartHeight }
                        data={ dataSet.data }
                        margin={ { top: 20, right: chartMarginRight, left: maxMethodNameLength * 4, bottom: 5 } }>
                        <XAxis type="number" domain={ [domainMin, domainMax] } scale={ scale } allowDataOverflow />
                        <YAxis dataKey="name" type="category" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip content={ <SingleRunChartTooltip
                            scoreUnit={ dataSet.scoreUnit }
                            roundScores={ dataSet.roundScores } /> }
                            cursor={ { stroke: green, strokeWidth: 2 } }
                            wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } }
                            paramNames={ paramNames }
                        />
                        <Legend />
                        { bars }
                    </BarChart>
                </ResponsiveContainer>
                { paramNames.length > 0 &&
                    <div><div><b>Parameter Names:</b> { paramNames.join(':') }</div><br /></div>
                }
            </div>
        );
    }
}
