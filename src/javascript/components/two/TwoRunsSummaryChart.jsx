import React from 'react';

import { Tooltip, Cell, PieChart, Pie, Text, Legend } from 'recharts';

import { getMetricType } from 'models/MetricType.js'
import { flatten } from 'functions/util.js'
import { shouldRound, round } from 'functions/util.js'
import { blue, green, yellow, tooltipBackground, blues, greens, reds } from 'functions/colors.js'

// A Pie chart giving a quick overview on number of increases/decrease from run1 vs run2
export default class TwoRunsSummaryChart extends React.Component {

    static propTypes = {
        benchmarkBundles: React.PropTypes.array.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
    };

    render() {
        const {benchmarkBundles, metricExtractor} = this.props;

        const ignoreLevel = 5;
        const buckets = [
            {
                name: `> ${ignoreLevel}% improvement`,
                color: greens[2],
                min: ignoreLevel,
                max: ignoreLevel + 10
            },
            {
                name: `> ${ignoreLevel+10}% improvement`,
                color: greens[1],
                min: ignoreLevel + 10,
                max: ignoreLevel + 20
            },
            {
                name: `> ${ignoreLevel+20}% improvement`,
                color: greens[0],
                min: ignoreLevel + 20
            },
            {
                name: `> ${ignoreLevel}% decline`,
                color: reds[2],
                min: -(ignoreLevel),
                max: -(ignoreLevel + 10)
            },
            {
                name: `> ${ignoreLevel+10}% decline`,
                color: reds[1],
                min: -(ignoreLevel + 10),
                max: -(ignoreLevel + 20)
            },
            {
                name: `> ${ignoreLevel+20}% decline`,
                color: reds[0],
                min: -(ignoreLevel + 20)
            },
        ];

        const getBucketId = (number => {
            return buckets.findIndex(function(bucket) {
                if (bucket.min < 0) {
                    return number < bucket.min && (!bucket.max || number > bucket.max);
                } else {
                    return number > bucket.min && (!bucket.max || number < bucket.max);
                }
            })
        });

        const benchmarkDiffs = flatten(benchmarkBundles.map(benchmarkBundle => benchmarkBundle.benchmarkMethods.map(benchmarkMethod => {
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
                    key: benchmarkKey,
                    scoreDiff: scoreDiff,
                    bucketId: getBucketId(scoreDiff)
                }
            }
        }).filter((element) => element !== undefined)));


        const innerUnchangedBucket = {
            name: `Unchanged (<${ignoreLevel}%)`,
            type: 'inner',
            count: 0

        };
        const innerChangedBucket = {
            name: `Changed (>${ignoreLevel}%)`,
            type: 'inner',
            count: 0
        };
        const bucketContentsObject = {};
        benchmarkDiffs.forEach(benchmarkDiff => {
            const bucketId = benchmarkDiff.bucketId;
            if (bucketId == -1) {
                innerUnchangedBucket.count++;
            } else {
                innerChangedBucket.count++;
                if (!bucketContentsObject[bucketId]) {
                    bucketContentsObject[bucketId] = {
                        name: buckets[bucketId].name,
                        color: buckets[bucketId].color,
                        count: 1,
                        benchmarks: []
                    };
                } else {
                    bucketContentsObject[bucketId].count++;
                }
                bucketContentsObject[bucketId].benchmarks.push({
                    key: benchmarkDiff.key,
                    scoreDiff: benchmarkDiff.scoreDiff
                });
            }
        });
        innerUnchangedBucket.label = `${innerUnchangedBucket.count}/${benchmarkDiffs.length}`;
        innerChangedBucket.label = `${innerChangedBucket.count}/${benchmarkDiffs.length}`;
        const bucketContents = buckets.map((bucket, i) => bucketContentsObject[i]).filter(bucketContent => bucketContent);
        const cx = '28%';

        return (
            <div style={ { marginLeft: 18 } }>
              <PieChart width={ 450 } height={ 270 }>
                <Pie
                     data={ [innerUnchangedBucket, innerChangedBucket] }
                     valueKey='count'
                     cx={ cx }
                     cy={ '50%' }
                     outerRadius={ 70 }
                     fill={ blue }
                     labelLine={ false }
                     stroke="none"
                     label={ customInnerPieLabel }
                     animationDuration={ 540 }>
                  <Cell key='unchanged' fill={ blue } />
                  <Cell key='changed' fill={ blues[1] } />
                </Pie>
                <Pie
                     data={ bucketContents }
                     nameKey='name'
                     valueKey='count'
                     cx={ cx }
                     cy={ '50%' }
                     startAngle={ 90 }
                     endAngle={ -360 }
                     innerRadius={ 80 }
                     outerRadius={ 100 }
                     fill={ yellow }
                     label={ (elem) => elem.count }
                     animationDuration={ 540 }>
                  { bucketContents.map(entry => <Cell key={ entry.count } fill={ entry.color } />) }
                </Pie>
                <Tooltip
                         content={ <ChartTooltip /> }
                         offset={ 10 }
                         position={ { x: 490, y: 9 } }
                         cursor={ { stroke: green, strokeWidth: 2 } }
                         wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                <Legend verticalAlign='middle' align='right' layout='vertical' />
              </PieChart>
            </div>
        )
    }
}

const RADIAN = Math.PI / 180;
function customInnerPieLabel({cx, cy, midAngle, innerRadius, outerRadius, label}) { // eslint-disable-line react/prop-types
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 25;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (!label) {
        return null;
    }

    return (
        <Text
              width={ 145 }
              textAnchor='start'
              verticalAnchor='middle'
              dominantBaseline="middle"
              x={ x }
              y={ y }
              fill="white">
          { `${label}` }
        </Text>
    );
}

class ChartTooltip extends React.Component {

    static propTypes = {
        label: React.PropTypes.any,
        payload: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.any,
            payload: React.PropTypes.any,
            value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
            unit: React.PropTypes.any,
        })),
    };

    render() {
        const {payload} = this.props;
        if (payload.length == 0) {
            return null;
        }
        const dataPiece = payload[0].payload;
        let content;
        if (dataPiece.type === 'inner') {
            content = <ul>
                        <li key='count'>
                          Count:
                          { ' ' + dataPiece.count }
                        </li>
                        <li key='percent'>
                          Percent:
                          { ' ' + Math.round(payload[0].percent * 100) + '%' }
                        </li>
                      </ul>
        } else {
            const benchmarkComponents = dataPiece.benchmarks.map(benchmark => <li key={ benchmark.key }>
                                                                                { `${benchmark.key} (` }
                                                                                <b>{ `${benchmark.scoreDiff}%` }</b>)
                                                                              </li>);
            content = <ul style={ { whiteSpace: 'nowrap' } }>
                        { benchmarkComponents }
                      </ul>;
        }

        return (
            <div style={ { padding: 18 } }>
              <div style={ { textAlign: 'center' } }>
                <h5 style={ { color: dataPiece.color } }><u>{ dataPiece.name }</u></h5>
              </div>
              { content }
            </div>
        );
    }
}
