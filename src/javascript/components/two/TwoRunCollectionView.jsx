import React from 'react';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import DeatailsIcon from 'react-icons/lib/fa/search-plus'

import BadgeWithTooltip from '../lib/BadgeWithTooltip.jsx'
import DiffBarChartView from './DiffBarChartView.jsx'

import { createMetricBadge } from '../commons.jsx';
import { createDataSetFromBenchmarks } from './DiffBarDataSet.js'
import { getUniqueBenchmarkModes } from '../../functions/parse.js'

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class TwoRunCollectionView extends React.Component {

    static propTypes = {
        benchmarkCollection: React.PropTypes.object.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectBenchmarkCollectionFunction: React.PropTypes.func.isRequired
    };

    state = {
        showJson1: false,
        showJson2: false
    }

    toggleShowJson1() {
        this.setState({
            showJson1: !this.state.showJson1,
            showJson2: false
        });
    }

    toggleShowJson2() {
        this.setState({
            showJson1: false,
            showJson2: !this.state.showJson2
        });
    }

    showDetails() {
        this.props.selectBenchmarkCollectionFunction(this.props.benchmarkCollection);
    }


    render() {
        const {benchmarkCollection, runSelection, metricExtractor} = this.props;

        const benchmarks1 = benchmarkCollection.benchmarks(runSelection.subSelection(0));
        const benchmarks2 = benchmarkCollection.benchmarks(runSelection.subSelection(1));
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkCollection, runSelection, metricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));
        let newBenchmarks = [];
        let removedBenchmarks = [];
        const secondaryMetrics = new Set();
        benchmarkCollection.benchmarkResults.forEach(benchmarkResult => {
            if (benchmarkResult.benchmarks[0] === null) {
                newBenchmarks.push(benchmarkResult.name);
            } else if (benchmarkResult.benchmarks[1] === null) {
                removedBenchmarks.push(benchmarkResult.name);
            } else {
                Object.keys(benchmarkResult.benchmarks[0].secondaryMetrics).forEach(secondayMetric => secondaryMetrics.add(secondayMetric));
                Object.keys(benchmarkResult.benchmarks[1].secondaryMetrics).forEach(secondayMetric => secondaryMetrics.add(secondayMetric));
            }
        });

        const detailsIcon = secondaryMetrics.size > 0 ? <sup><BadgeWithTooltip tooltip={ secondaryMetrics.size + ' secondary metrics results' }> <DeatailsIcon/> { ' ' + secondaryMetrics.size } </BadgeWithTooltip> { ' | ' }</sup> : undefined;
        var scoresChart = <DiffBarChartView runNames={ runSelection.names } dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, metricExtractor) } metricExtractor={ metricExtractor } />;

        return (
            <div>
              <div>
                <h3 id={ benchmarkCollection.key }><span><span style={ { cursor: 'pointer' } } onClick={ this.showDetails.bind(this) }>{ benchmarkCollection.name + ' ' } { detailsIcon }</span><sup>{ benchmarkModeBadges }</sup></span></h3>
              </div>
              <div style={ { fontSize: '0.90em' } }>
                { scoresChart }
              </div>
              { removedBenchmarks.length > 0 &&
                <div>
                  <b>Removed benchmarks:</b>
                  { ' ' + removedBenchmarks.join(', ') }
                  <br/>
                  <br/>
                </div> }
              { newBenchmarks.length > 0 &&
                <div>
                  <b>New benchmarks:</b>
                  { ' ' + newBenchmarks.join(', ') }
                  <br/>
                  <br/>
                </div> }
              <Button bsSize="small" onClick={ ::this.toggleShowJson1 } active={ this.state.showJson1 }>
                Show JSON 1
              </Button>
              <Button bsSize="small" onClick={ ::this.toggleShowJson2 } active={ this.state.showJson2 }>
                Show JSON 2
              </Button>
              <Collapse in={ this.state.showJson1 }>
                <div>
                  <pre>{ JSON.stringify(benchmarks1, null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.toggleShowJson1 }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
              <Collapse in={ this.state.showJson2 }>
                <div>
                  <pre>{ JSON.stringify(benchmarks2, null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.toggleShowJson2 }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
            </div>
        );
    }
}

