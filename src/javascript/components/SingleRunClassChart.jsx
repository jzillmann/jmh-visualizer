import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ErrorBar } from 'recharts';

import { createBadge } from './BenchmarkModeBadge.jsx';
import SingleRunChartTooltip from './SingleRunChartTooltip.jsx';
import { parseMethodName, parseBenchmarkName, getUniqueBenchmarkModes, getUniqueParamValues } from '../functions/parse.jsx'
import { groupBy, cartesianProduct } from '../functions/util.js'
import { blue, red, green, lightBlack, tooltipBackground, barColors } from '../functions/colors.jsx'

// Gathered report for one benchmark class
export default class SingleRunClassChart extends Component {
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
        const dataSet = createDataSet(this.props.methodBenchmarks);
        const scoreUnit = this.props.methodBenchmarks[0].primaryMetric.scoreUnit;
        const chartHeight = 100 + dataSet.data.length * dataSet.barNames.length * 36;
        const maxMethodNameLength = dataSet.data.map((element) => element.name.length).reduce((previous, current) => Math.max(previous, current), 32);

        const bars = dataSet.barNames.map((barName, i) => {

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
                                         { props[barName].toLocaleString() + ' ' + scoreUnit }
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
                                                   { "'" + barName + "': n/a" }
                                                 </text>;
                return (
                    text
                );
            };

            return <Bar
                        key={ barName }
                        dataKey={ barName }
                        stroke={ barColors[i] }
                        fill={ barColors[i] }
                        unit={ ` ${scoreUnit}` }
                        isAnimationActive={ false }
                        label={ <BarLabel/> }>
                     <ErrorBar
                               dataKey={ barName + "ErrorBarInterval" }
                               width={ 4 }
                               strokeWidth={ 2 }
                               stroke={ lightBlack } />
                   </Bar>
        });

        const benchmarkModes = getUniqueBenchmarkModes(this.props.methodBenchmarks);
        const benchmarkModeBadges = benchmarkModes.map(mode => createBadge(mode));

        return (
            <div>
              <div>
                <h3 id={ this.props.name }>{ this.props.name } <sup>{ benchmarkModeBadges }</sup></h3>
              </div>
              <div style={ { fontFamily: 'sans-serif', fontSize: '0.75em' } }>
                <BarChart
                          layout="vertical"
                          width={ 900 }
                          height={ chartHeight }
                          data={ dataSet.data }
                          margin={ { top: 20, right: 30, left: maxMethodNameLength * 5, bottom: 5 } }>
                  <XAxis type="number" domain={ [0, dataSet.dataMax] } />
                  <YAxis dataKey="name" type="category" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={ <SingleRunChartTooltip scoreUnit={ scoreUnit } /> } cursor={ { stroke: green, strokeWidth: 2 } } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
                  <Legend verticalAlign='top' height={ 30 } />
                  { bars }
                </BarChart>
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

// 0 - no param => standard
// 1 - one param, single method => convert to (0)
// 2 - one param, multi methods => Bar per param Value
// 3 - 2 params, single methods => convert to (2)
// 4 - 2+ params, multi methods => combine params & convert to (2)
// 5 - 3+ params, single methods => combine params & convert to (0)
function createDataSet(benchmarks) {
    const params = benchmarks[0].params;
    const benchmarksGroupedByMethod = groupBy(benchmarks, (benchmark) => parseMethodName(benchmark));
    const methodCount = benchmarksGroupedByMethod.length;

    if (!params) {
        //case 0
        return createSingleBarDataSet(benchmarks, parseBenchmarkName);
    } else { // all other cases
        const paramNames = Object.keys(params);
        if (paramNames.length == 1) {
            if (methodCount == 1) {
                // case 1
                return createSingleBarDataSet(benchmarks, (benchmark) => benchmark.params[paramNames[0]]);
            } else {
                // case 2
                const paramValues = getUniqueParamValues(benchmarks, paramNames[0]);
                return createMultiBarDataSet(benchmarksGroupedByMethod, paramValues, (params) => params[paramNames[0]]);
            }
        } else if (paramNames.length == 2 && methodCount == 1) {
            // case 3
            const benchmarksByFirstParam = groupBy(benchmarks, (benchmark) => benchmark.params[paramNames[0]]);
            const paramValues = getUniqueParamValues(benchmarks, paramNames[1]);
            return createMultiBarDataSet(benchmarksByFirstParam, paramValues, (params) => params[paramNames[1]]);
        } else {
            if (methodCount > 1) {
                // case 4
                const paramCombinations = cartesianProduct(paramNames.map(name => getUniqueParamValues(benchmarks, name))).map(item => item.join('_'));
                return createMultiBarDataSet(benchmarksGroupedByMethod, paramCombinations, (params) => paramNames.map(param => params[param]).join('_'));
            } else {
                // case 5
                return createSingleBarDataSet(benchmarks, (benchmark) => paramNames.map(param => benchmark.params[param]).join('_'));
            }
        }
    }
}

//Each benchmark has exactly one bar
function createSingleBarDataSet(benchmarks, benchmarkNameFunction) {
    const benchmarkMode = benchmarks[0].mode;
    const scoreUnit = benchmarks[0].primaryMetric.scoreUnit;
    const barName = `${benchmarkMode} ${scoreUnit}`;

    const groupedBenchmarks = groupBy(benchmarks, benchmarkNameFunction);
    return createMultiBarDataSet(groupedBenchmarks, [barName], () => barName);
}

//Each benchmark can have multiple bar's attached
function createMultiBarDataSet(groupedBenchmarks, barNames, barNameFunction) {
    var dataMax = 0;
    const data = groupedBenchmarks.map((benchmarkGroup, i) => {
        const benchmarkName = benchmarkGroup.key;
        const dataObject = {
            index: i,
            name: benchmarkName,
        };
        benchmarkGroup.values.forEach(benchmark => {
            const score = Math.round(benchmark.primaryMetric.score);
            const scoreConfidence = [Math.round(benchmark.primaryMetric.scoreConfidence[0]), Math.round(benchmark.primaryMetric.scoreConfidence[1])];
            const scoreError = Math.round(benchmark.primaryMetric.scoreError);
            let errorBarInterval = 0
            if (!isNaN(scoreError)) {
                errorBarInterval = [score - scoreConfidence[0], scoreConfidence[1] - score];
            }
            dataMax = Math.max(dataMax, score);
            dataMax = Math.max(dataMax, scoreConfidence[1]);

            const barName = barNameFunction(benchmark.params);
            dataObject[barName] = score;
            dataObject[barName + 'Confidence'] = scoreConfidence;
            dataObject[barName + 'Error'] = scoreError;
            dataObject[barName + 'ErrorBarInterval'] = errorBarInterval;
            dataObject[barName + 'SubScores'] = benchmark.primaryMetric.rawData;
        });
        return dataObject;
    });
    return new DataSet({
        barNames: barNames,
        data: data,
        dataMax: dataMax
    });
}

class DataSet {
    constructor(options) {
        this.barNames = options.barNames;
        this.data = options.data;
        this.dataMax = options.dataMax;
    }
}
