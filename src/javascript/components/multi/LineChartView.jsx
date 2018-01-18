import React from 'react';

import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Line, Area } from 'recharts';

import { scaleOrdinal, schemeCategory20 } from 'd3-scale';
const lineColors = scaleOrdinal(schemeCategory20).range();
// import { lineColors ,tooltipBackground,red} from 'functions/colors.js'
import { tooltipBackground, red } from 'functions/colors.js'

import MultiRunChartTooltip from 'components/multi/MultiRunChartTooltip.jsx'
import { shouldRound, round } from 'functions/util.js'
import { formatNumber } from 'functions/util.js'

export default class LineChartView extends React.Component {

    static propTypes = {
        runNames: React.PropTypes.array.isRequired,
        benchmarkBundle: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            activeLine: null
        };
    }

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        return this.props.runNames[0] !== nextProps.runNames[0] || this.props.benchmarkBundle.key !== nextProps.benchmarkBundle.key || this.props.metricExtractor.metricKey !== nextProps.metricExtractor.metricKey || this.state.activeLine !== nextState.activeLine;
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
        const {runNames, benchmarkBundle, metricExtractor} = this.props;
        const {activeLine} = this.state;
        const shouldRoundScores = shouldRound(benchmarkBundle.benchmarkMethods, metricExtractor);

        const dataSet = runNames.map((runName, runIndex) => {
            const runObject = {
                name: runName,
            };
            benchmarkBundle.benchmarkMethods.map(benchmarkMethod => {
                const benchmark = benchmarkMethod.benchmarks[runIndex];
                if (benchmark && metricExtractor.hasMetric(benchmark)) {
                    const score = round(metricExtractor.extractScore(benchmark), shouldRoundScores);
                    const scoreError = round(metricExtractor.extractScoreError(benchmark), shouldRoundScores);
                    runObject[benchmarkMethod.key] = score;
                    runObject.scoreUnit = metricExtractor.extractScoreUnit(benchmark);
                    runObject[benchmarkMethod.key + '-scoreError'] = scoreError;
                }
            });
            return runObject;
        });

        const lines = benchmarkBundle.benchmarkMethods.map((benchmarkMethod, i) => {
            const isActive = activeLine === benchmarkMethod.key;
            const strokeWidth = isActive ? 9 : 3;
            const strokeOpacity = !activeLine || isActive ? 1 : 0.1;
            const label = isActive ? <Label runCount={ runNames.length } shouldRoundScores={ shouldRoundScores } /> : false;
            return <Line
                         key={ benchmarkMethod.key }
                         type="monotoneX"
                         dataKey={ benchmarkMethod.key }
                         stroke={ lineColors[i] }
                         strokeWidth={ strokeWidth }
                         strokeOpacity={ strokeOpacity }
                         label={ label }
                         onMouseEnter={ this.activateLine.bind(this, benchmarkMethod.key) }
                         onMouseLeave={ this.deactivateLine.bind(this) }
                         isAnimationActive={ false } />;
        });

        const tooltip = activeLine ? undefined : <Tooltip content={ <MultiRunChartTooltip roundScores={ shouldRoundScores } /> } wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />;
        const scoreErrorArea = activeLine ? <Area
                                                  type='monotone'
                                                  dataKey={ activeLine + '-scoreError' }
                                                  stroke={ red }
                                                  fill={ red }
                                                  label={ <Label runCount={ runNames.length } shouldRoundScores={ shouldRoundScores } /> }
                                                  legendType='none'
                                                  isAnimationActive={ false } /> : undefined;

        return (
            <ResponsiveContainer width='100%' height={ 450 }>
              <ComposedChart data={ dataSet }>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend onMouseEnter={ this.activateLineFromLegend.bind(this) } onMouseLeave={ this.deactivateLine.bind(this) } />
                { tooltip }
                { lines }
                { scoreErrorArea }
              </ComposedChart>
            </ResponsiveContainer>
        );
    }
}

function Label(params) {
    if (!params.payload.scoreUnit) {
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
             { formatNumber(value, params.shouldRoundScores) + ' ' + params.payload.scoreUnit }
           </text>
}