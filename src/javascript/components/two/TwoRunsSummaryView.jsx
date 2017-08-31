import React from 'react';

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Table from 'react-bootstrap/lib/Table'
import Badge from 'react-bootstrap/lib/Badge'

import Tooltip from 'react-tooltip'

// import UpIcon from 'react-icons/lib/fa/thumbs-up'
// import DownIcon from 'react-icons/lib/fa/thumbs-down'
import UpIcon from 'react-icons/lib/fa/location-arrow'


import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import TwoRunsSummaryChart from 'components/two/TwoRunsSummaryChart.jsx'
import { getMetricType } from 'models/MetricType.js'
import { flatten } from 'functions/util.js'
import { shouldRound, round } from 'functions/util.js'
import { green, red } from 'functions/colors.js'

export default class TwoRunsSummaryView extends React.Component {

    static propTypes = {
        runNames: React.PropTypes.array.isRequired,
        benchmarkBundles: React.PropTypes.array.isRequired,
        minDeviation: React.PropTypes.number.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            minDeviation: this.props.minDeviation
        };
    }

    changeMinDeviation(number) {
        if (number != this.state.minDeviation) {
            this.setState({
                minDeviation: number
            });
        }
    }

    render() {
        const {runNames, benchmarkBundles, metricExtractor, detailBenchmarkBundleFunction} = this.props;
        const {minDeviation} = this.state;

        const benchmarkDiffs = flatten(benchmarkBundles.map(benchmarkBundle => benchmarkBundle.benchmarkMethods.map(benchmarkMethod => {
            const shouldRoundScores = shouldRound(benchmarkBundle.benchmarkMethods, metricExtractor);
            const firstRunBenchmark = benchmarkMethod.benchmarks[0];
            const secondRunBenchmark = benchmarkMethod.benchmarks[1];

            if (firstRunBenchmark && secondRunBenchmark && metricExtractor.hasMetric(firstRunBenchmark) && metricExtractor.hasMetric(secondRunBenchmark)) {
                const metricType = getMetricType(metricExtractor.extractType(firstRunBenchmark));
                const score1stRun = round(metricExtractor.extractScore(firstRunBenchmark), shouldRoundScores);
                const score2ndRun = round(metricExtractor.extractScore(secondRunBenchmark), shouldRoundScores);
                const scoreError1stRun = round(metricExtractor.extractScoreError(firstRunBenchmark), shouldRoundScores);
                const scoreError2ndRun = round(metricExtractor.extractScoreError(secondRunBenchmark), shouldRoundScores);
                const scoreUnit = metricExtractor.extractScoreUnit(firstRunBenchmark);

                let scoreDiff;
                if (metricType && metricType.increaseIsGood) {
                    // i.e. for throughput decrease is an increase, its worse basically
                    scoreDiff = round((score2ndRun - score1stRun) / score1stRun * 100, shouldRoundScores);
                } else {
                    scoreDiff = round((score1stRun - score2ndRun) / score2ndRun * 100, shouldRoundScores);
                }

                return {
                    bundleKey: benchmarkBundle.key,
                    bundleName: benchmarkBundle.name,
                    benchmarkMethod: benchmarkMethod,
                    score1stRun: score1stRun,
                    score2ndRun: score2ndRun,
                    scoreError1stRun: scoreError1stRun,
                    scoreError2ndRun: scoreError2ndRun,
                    scoreUnit: scoreUnit,
                    scoreDiff: scoreDiff,
                }
            }
        }).filter(element => element !== undefined)));
        const deviatingBenchmarkDiffs = benchmarkDiffs.filter(element => (element.scoreDiff > minDeviation || element.scoreDiff < -minDeviation));



        const headers = ['#', 'Benchmark', 'Params', 'Mode/Unit', 'Score', 'Error'].map(header => <th key={ header }>
                                                                                                    { header }
                                                                                                  </th>)
        const rows = deviatingBenchmarkDiffs.map((benchmarkDiff, i) => {
            const color = benchmarkDiff.scoreDiff > 0 ? green : red;
            const icon = benchmarkDiff.scoreDiff > 0 ? <UpIcon /> : <UpIcon transform="rotate(90)" />;
            return <tr key={ i }>
                     <td>
                       { i }
                     </td>
                     <td>
                       <Tooltip
                                id={ 'class' + i }
                                place='top'
                                globalEventOff='click'
                                effect='float'>
                         { benchmarkDiff.bundleKey + '#' + benchmarkDiff.benchmarkMethod.name + '()' }
                       </Tooltip>
                       <span
                             data-tip
                             data-for={ 'class' + i }
                             style={ { cursor: 'pointer' } }
                             onClick={ detailBenchmarkBundleFunction.bind(null, benchmarkDiff.bundleKey) }>{ benchmarkDiff.bundleName + ' - ' + benchmarkDiff.benchmarkMethod.name + ' ' }</span>
                       <span style={ { color: color } }>{ icon } { benchmarkDiff.scoreDiff }%</span>
                     </td>
                     <td>
                       { benchmarkDiff.benchmarkMethod.params ? benchmarkDiff.benchmarkMethod.params.map(param => param[0] + '=' + param[1]).join(':') : '' }
                     </td>
                     <td>
                       { benchmarkDiff.benchmarkMethod.benchmarks[1].mode + ' in ' + benchmarkDiff.scoreUnit }
                     </td>
                     <td>
                       <div>
                         { benchmarkDiff.score1stRun.toLocaleString() }
                       </div>
                       <div>
                         { benchmarkDiff.score2ndRun.toLocaleString() }
                       </div>
                     </td>
                     <td>
                       <div>
                         { benchmarkDiff.scoreError1stRun.toLocaleString() }
                       </div>
                       <div>
                         { benchmarkDiff.scoreError2ndRun.toLocaleString() }
                       </div>
                     </td>
                   </tr>
        });

        return <div>
                 <Grid fluid={ true }>
                   <Row>
                     <Col md={ 6 }> Comparing
                     { ' ' }
                     <Badge>
                       { benchmarkBundles.length }
                     </Badge> benchmark classes for '
                     { runNames[0] }' and '
                     { runNames[1] }' on metric '
                     { metricExtractor.metricKey }'.
                     <TwoRunsSummaryChart benchmarkDiffs={ benchmarkDiffs } minDeviation={ minDeviation } />
                     </Col>
                     <Col md={ 6 }>
                     <div>
                       Ignoring deviations below
                       { ' ' + minDeviation }%
                     </div>
                     <Slider
                             min={ 0 }
                             max={ 50 }
                             value={ minDeviation }
                             step={ 5 }
                             onChange={ this.changeMinDeviation.bind(this) }
                             labels={ { 0: '0%', 5: '5%', 10: '10%', 20: '20%', 50: '50%' } }
                             format={ (value) => value + '%' } />
                     </Col>
                   </Row>
                 </Grid>
                 <hr/>
                 <Table striped>
                   <thead>
                     <tr>
                       { headers }
                     </tr>
                   </thead>
                   <tbody>
                     { rows }
                   </tbody>
                 </Table>
               </div>
    }

}