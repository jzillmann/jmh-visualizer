import React from 'react';

import { Tooltip, Cell, PieChart, Pie, Text, Legend, Surface, Symbols } from 'recharts';

import { blue, green, yellow, red, tooltipBackground, greens, reds } from 'functions/colors.js'

// A Pie chart giving a quick overview on number of increases/decrease from run1 vs run2
export default class TwoRunsSummaryChart extends React.Component {

    static propTypes = {
        benchmarkDiffs: React.PropTypes.array.isRequired,
        minDeviation: React.PropTypes.number.isRequired,
    };

    render() {
        const {benchmarkDiffs, minDeviation} = this.props;

        const buckets = [
            {
                name: `> ${minDeviation}% improvement`,
                color: greens[2],
                min: minDeviation,
                max: minDeviation + 10
            },
            {
                name: `> ${minDeviation+10}% improvement`,
                color: greens[1],
                min: minDeviation + 10,
                max: minDeviation + 20
            },
            {
                name: `> ${minDeviation+20}% improvement`,
                color: greens[0],
                min: minDeviation + 20
            },
            {
                name: `> ${minDeviation}% decline`,
                color: reds[2],
                min: -(minDeviation),
                max: -(minDeviation + 10)
            },
            {
                name: `> ${minDeviation+10}% decline`,
                color: reds[1],
                min: -(minDeviation + 10),
                max: -(minDeviation + 20)
            },
            {
                name: `> ${minDeviation+20}% decline`,
                color: reds[0],
                min: -(minDeviation + 20)
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

        const bucketedBenchmarkDiffs = benchmarkDiffs.map(benchmarkDiff => {
            let benchmarkKey = benchmarkDiff.bundleKey + '#' + benchmarkDiff.benchmarkMethod.name;
            if (benchmarkDiff.benchmarkMethod.params) {
                benchmarkKey += ' [' + benchmarkDiff.benchmarkMethod.params.map(param => param[0] + '=' + param[1]).join(':') + ']';
            }
            return {
                key: benchmarkKey,
                scoreDiff: benchmarkDiff.scoreDiff,
                bucketId: getBucketId(benchmarkDiff.scoreDiff)
            }
        });



        const unchangedBucket = {
            name: `Unchanged (+-${minDeviation}%)`,
            type: 'inner',
            count: 0

        };
        const improvedBucket = {
            name: `Improved (>+${minDeviation}%)`,
            type: 'inner',
            count: 0
        };
        const worsenedBucket = {
            name: `Declined (<-${minDeviation}%)`,
            type: 'inner',
            count: 0
        };
        const bucketContentsObject = {};
        bucketedBenchmarkDiffs.forEach(benchmarkDiff => {
            const bucketId = benchmarkDiff.bucketId;
            if (bucketId == -1) {
                unchangedBucket.count++;
            } else {
                if (bucketId < 3) {
                    improvedBucket.count++;
                } else {
                    worsenedBucket.count++;
                }
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
        unchangedBucket.label = `${unchangedBucket.count}/${bucketedBenchmarkDiffs.length}`;
        improvedBucket.label = `${improvedBucket.count}/${bucketedBenchmarkDiffs.length}`;
        worsenedBucket.label = `${worsenedBucket.count}/${bucketedBenchmarkDiffs.length}`;
        const bucketContents = buckets.map((bucket, i) => bucketContentsObject[i]).filter(bucketContent => bucketContent);
        const cx = '28%';

        return (
            <div style={ { marginLeft: 18 } }>
              <PieChart width={ 450 } height={ 270 }>
                <Pie
                     data={ [unchangedBucket, improvedBucket, worsenedBucket] }
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
                  <Cell key='improved' fill={ green } />
                  <Cell key='improved' fill={ red } />
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
                         position={ { x: 490, y: 54 } }
                         cursor={ { stroke: green, strokeWidth: 2 } }
                         wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                <Legend
                        content={ renderLegend }
                        verticalAlign='middle'
                        align='right'
                        layout='vertical' />
              </PieChart>
            </div>
        )
    }
}

function renderLegend(props) {
    const {payload} = props; // eslint-disable-line react/prop-types
    let inner = true;
    return (
        <ul>
          { payload.map((entry, index) => {
                const showSeparator = inner && entry.payload.type !== 'inner';
                if (showSeparator) {
                    inner = false;
                }
                return (
                    <div className="legend-item" key={ `item-${index}` }>
                      { showSeparator &&
                        <hr/> }
                      <Surface width={ 10 } height={ 10 }>
                        <Symbols
                                 cx={ 5 }
                                 cy={ 5 }
                                 type="square"
                                 size={ 54 }
                                 fill={ entry.color } />
                      </Surface> <span>{ entry.value }</span>
                    </div>
                )
            }) }
        </ul>
    );
}

const RADIAN = Math.PI / 180;
function customInnerPieLabel({cx, cy, midAngle, innerRadius, outerRadius, label, value}) { // eslint-disable-line react/prop-types
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 25;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (!label || value == 0) {
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
            <div style={ { paddingRight: 18 } }>
              <div style={ { textAlign: 'center' } }>
                <h5 style={ { color: dataPiece.color } }><u>{ dataPiece.name }</u></h5>
              </div>
              { content }
            </div>
        );
    }
}
