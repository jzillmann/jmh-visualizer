import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, Legend, Line, ErrorBar } from 'recharts';

import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
const lineColors = scaleOrdinal(schemeCategory10).range();

import MultiRunChartTooltip from 'components/multi/MultiRunChartTooltip.jsx'
import { tooltipBackground } from 'functions/colors.js'
import { tickFormatter } from 'functions/charts.js'
import { shouldRound, round } from 'functions/util.js'
import { formatNumber } from 'functions/util.js'

export default class LineChartView extends React.Component {

    static propTypes = {
        runNames: PropTypes.array.isRequired,
        benchmarkBundle: PropTypes.object.isRequired,
        metricExtractor: PropTypes.object.isRequired,
        logScale: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            activeLine: null
        };
    }

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        return this.props.runNames[0] !== nextProps.runNames[0]
            || this.props.benchmarkBundle.key !== nextProps.benchmarkBundle.key
            || this.props.metricExtractor.metricKey !== nextProps.metricExtractor.metricKey
            || this.props.logScale !== nextProps.logScale
            || this.state.activeLine !== nextState.activeLine;
    }

    activateLineFromLegend(params) {
        this.activateLine(params.dataKey);
    }

    activateLine(benchmarkMethodKey) {
        this.setState({
            activeLine: benchmarkMethodKey,
        });
    }

    deactivateLine() {
        this.setState({
            activeLine: null
        });
    }

    render() {
        const { runNames, benchmarkBundle, metricExtractor, logScale } = this.props;
        const { activeLine } = this.state;
        const shouldRoundScores = shouldRound(benchmarkBundle.benchmarkMethods, metricExtractor);

        let scale, domain;
        if (logScale) {
            scale = 'log';
            domain = ['auto', 'auto'];
        }

        const dataSet = runNames.map((runName, runIndex) => {
            const runObject = {
                name: runName,
            };
            benchmarkBundle.benchmarkMethods.map(benchmarkMethod => {
                const benchmark = benchmarkMethod.benchmarks[runIndex];
                if (benchmark && metricExtractor.hasMetric(benchmark)) {
                    const score = round(metricExtractor.extractScore(benchmark), shouldRoundScores);
                    const scoreError = round(metricExtractor.extractScoreError(benchmark), shouldRoundScores);
                    const minMax = metricExtractor.extractMinMax(benchmark).map(minOrMax => round(minOrMax, shouldRoundScores));
                    const scoreUnit = metricExtractor.extractScoreUnit(benchmark);
                    let errorBarInterval = 0
                    if (!isNaN(scoreError)) {
                        errorBarInterval = [score - minMax[0], minMax[1] - score];
                    }
                    runObject[benchmarkMethod.key] = score;
                    runObject.scoreUnit = scoreUnit;
                    runObject[benchmarkMethod.key + '-scoreError'] = scoreError;
                    runObject[benchmarkMethod.key + '-minMax'] = minMax;
                    runObject[benchmarkMethod.key + '-errorBarInterval'] = errorBarInterval;
                    runObject[benchmarkMethod.key + '-label'] = score.toLocaleString() + ' ' + scoreUnit;
                    runObject[benchmarkMethod.key + '-errorLabel'] = scoreError.toLocaleString() + ' ' + scoreUnit;
                }
            });
            return runObject;
        });

        const lines = benchmarkBundle.benchmarkMethods.filter(benchmarkMethod => (!logScale || isInAllRuns(runNames, benchmarkMethod))).map((benchmarkMethod, i) => {
            const isActive = activeLine === benchmarkMethod.key;
            const strokeWidth = isActive ? 7 : 3;
            const strokeOpacity = !activeLine || isActive ? 1 : 0.1;
            let label, errorBarStrokeWIdth;
            if (isActive) {
                label = <LabelList dataKey={ benchmarkMethod.key + '-label' } content={ <Label runCount={ runNames.length } shouldRoundScores={ shouldRoundScores } /> } />;
                errorBarStrokeWIdth = 1;
            } else {
                errorBarStrokeWIdth = 0;
            }
            const errorBar = (<ErrorBar dataKey={ benchmarkMethod.key + '-errorBarInterval' } width={ 4 } strokeWidth={ errorBarStrokeWIdth } />);

            return <Line
                key={ benchmarkMethod.key }
                type="monotoneX"
                dataKey={ benchmarkMethod.key }
                stroke={ lineColors[i] }
                strokeWidth={ strokeWidth }
                strokeOpacity={ strokeOpacity }
                onMouseEnter={ this.activateLine.bind(this, benchmarkMethod.key) }
                onMouseLeave={ this.deactivateLine.bind(this) }
                isAnimationActive={ true }
                animationDuration={ 540 }
            >
                { label }
                { errorBar }
            </Line>;
        });

        const tooltip = activeLine ? undefined : <Tooltip content={ <MultiRunChartTooltip roundScores={ shouldRoundScores } /> } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />;
        return (
            <ResponsiveContainer width='100%' height={ 450 }>
                <LineChart data={ dataSet } margin={ { top: 45, right: 0, left: 0, bottom: 27 } }>
                    <XAxis dataKey="name" />
                    <YAxis scale={ scale } domain={ domain } tickFormatter={ tickFormatter } />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend onMouseEnter={ this.activateLineFromLegend.bind(this) } onMouseLeave={ this.deactivateLine.bind(this) } />
                    { tooltip }
                    { lines }
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

function isInAllRuns(runNames, benchmarkMethod) {
    for (let index = 0; index < runNames.length; index++) {
        if (!benchmarkMethod.benchmarks[index]) {
            return false;
        }
    }
    return true;
}

function Label(params) {
    if (!params.value) {
        return null;
    }
    let textAnchor;
    if (params.index == 0) {
        textAnchor = 'start';
    } else if (params.index == params.runCount - 1) {
        textAnchor = 'end';
    } else {
        textAnchor = 'middle';
    }
    const value = params.value && params.value.constructor === Array ? params.value[1] : params.value;
    return <text
        key={ params.index }
        x={ params.x }
        y={ params.y - 20 }
        width={ params.width }
        height={ params.height }
        textAnchor={ textAnchor }
        fontSize='11'
        stroke={ params.stroke }>
        { formatNumber(value, params.shouldRoundScores) }
    </text>
}
