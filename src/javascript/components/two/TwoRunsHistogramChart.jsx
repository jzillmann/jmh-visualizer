import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, ReferenceLine } from 'recharts';

import { getMetricType } from 'models/MetricType.js'
import { flatten } from 'functions/util.js'
import { shouldRound, round } from 'functions/util.js'
import { blue, green, yellow, tooltipBackground } from 'functions/colors.js'

// Shows a histogram as bar-charts with change bars from -100% to +100%
export default class TwoRunsHistogramChart extends React.Component {

    static propTypes = {
        benchmarkBundles: PropTypes.array.isRequired,
        metricExtractor: PropTypes.object.isRequired,
    };

    render() {
        const {benchmarkBundles, metricExtractor} = this.props;

        const benchmarkDiffs = flatten(benchmarkBundles.map(benchmarkBundle => benchmarkBundle.benchmarkMethods.map((benchmarkMethod, i) => {
            const shouldRoundScores = shouldRound(benchmarkBundle.benchmarkMethods, metricExtractor);
            let benchmarkKey = benchmarkBundle.key + '#' + benchmarkMethod.name;
            if (benchmarkMethod.params) {
                benchmarkKey += ' [' + benchmarkMethod.params.map(param => param[0] + '=' + param[1]).join(':') + ']';
            }

            const firstRunBenchmark = benchmarkMethod.benchmarks[0];
            const secondRunBenchmark = benchmarkMethod.benchmarks[1];

            if (firstRunBenchmark && secondRunBenchmark && metricExtractor.hasMetric(firstRunBenchmark) && metricExtractor.hasMetric(secondRunBenchmark)) {
                const metricType = getMetricType(metricExtractor.extractType(firstRunBenchmark));
                const score1stRun = round(metricExtractor.extractScore(firstRunBenchmark), shouldRoundScores);
                const score2ndRun = round(metricExtractor.extractScore(secondRunBenchmark), shouldRoundScores);

                let scoreDiff;
                if (metricType && metricType.increaseIsGood) {
                    // i.e. for throughput decrease is an increase, its worse basically
                    scoreDiff = round((score2ndRun - score1stRun) / score1stRun * 100, shouldRoundScores);
                } else {
                    scoreDiff = round((score1stRun - score2ndRun) / score2ndRun * 100, shouldRoundScores);
                }

                return {
                    index: i,
                    key: benchmarkKey,
                    scoreDiff: scoreDiff,
                }
            }
        }).filter((element) => element !== undefined)));

        const percentFrequencies = {};
        benchmarkDiffs.forEach(obj => {
            const percentChange = Math.ceil(obj.scoreDiff / 10);
            if (percentFrequencies[percentChange]) {
                percentFrequencies[percentChange].count++;
                percentFrequencies[percentChange].benchmarks.push(obj.key);
            } else {
                percentFrequencies[percentChange] = {
                    count: 1,
                    benchmarks: [obj.key]
                };
            }
        });
        // console.debug(percentFrequencies);

        const data = [];
        for (let i = -100; i <= 100; i += 10) {
            if (i == 0) {
                data.push({
                    scoreDiff: i,
                    count: 0,
                    benchmarks: []
                });
            } else {
                const freq = percentFrequencies[i / 10];
                data.push({
                    scoreDiff: i > 0 ? i - 5 : i + 5,
                    count: freq ? freq.count : 0,
                    benchmarks: freq ? freq.benchmarks : []
                });
            }
        }

        const chartHeight = 108;

        const tickFormatter = (value) => {
            if (value == -100 || value == 100 || percentFrequencies[value / 10]) {
                return value + '%';
            }
            return null;
        };

        return (
            <div>
              <ResponsiveContainer width='100%' height={ chartHeight }>
                <BarChart height={ chartHeight } data={ data } margin={ { top: 20, right: 45, left: 25, bottom: 5 } }>
                  <XAxis
                         domain={ [-100, 100] }
                         dataKey="scoreDiff"
                         type="number"
                         tick={ { transform: 'translate(0, 5)' } }
                         ticks={ [-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }
                         tickFormatter={ tickFormatter } />
                  <YAxis />
                  <ReferenceLine x={ 0 } stroke={ yellow } label={ `(${percentFrequencies[0].count})` } />
                  <Tooltip content={ <ChartTooltip /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                  <Bar
                       dataKey="count"
                       unit=" %"
                       isAnimationActive={ true }
                       animationDuration={ 900 }
                       fill={ blue }
                       label={ <BarLabel/> }>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
        )
    }
}

function BarLabel(props) {
    const {payload, textAnchor, x, y, width, height} = props; // eslint-disable-line react/prop-types

    if (payload.count > 0) {
        return (
            <text
                  textAnchor={ textAnchor }
                  fill={ yellow }
                  x={ x }
                  y={ y }
                  width={ width }
                  height={ height }
                  className="recharts-bar-label">
              { payload.count }
            </text>
        );
    } else {
        return <text></text>;
    }
}

BarLabel.PropTypes = {
    payload: PropTypes.array.isRequired,
}


class ChartTooltip extends React.Component {

    static propTypes = {
        label: PropTypes.any,
        payload: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.any,
            payload: PropTypes.any,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            unit: PropTypes.any,
        })),
    };

    render() {
        const {payload} = this.props;
        if (payload.length == 0) {
            return null;
        }
        const benchmarks = payload[0].payload.benchmarks;
        const benchmarksComponents = benchmarks.map(benchmark => <div key={ benchmark }>
                                                                   { benchmark }
                                                                 </div>);

        return (
            <div>
              <div style={ { textAlign: 'center' } }>
                <h5 style={ { color: payload[0].color } }><u>{ payload[0].name }</u></h5>
              </div>
              <div style={ { textAlign: 'center' } }>
                { benchmarksComponents }
              </div>
            </div>
        );
    }
}

