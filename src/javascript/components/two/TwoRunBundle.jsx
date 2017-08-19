import React from 'react';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import DeatailsIcon from 'react-icons/lib/fa/search-plus'

import BadgeWithTooltip from 'components/lib/BadgeWithTooltip.jsx'
import DiffBarChartView from 'components/two/DiffBarChartView.jsx'

import { createMetricBadge } from 'components/commons.jsx';
import { createDataSetFromBenchmarks } from 'components/two/DiffBarDataSet.js'
import { getUniqueBenchmarkModes } from 'functions/parse.js'

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class TwoRunBundle extends React.Component {

    static propTypes = {
        runNames: React.PropTypes.array.isRequired,
        benchmarkBundle: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired
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
        this.props.detailBenchmarkBundleFunction(this.props.benchmarkBundle.key);
    }


    render() {
        const {runNames, benchmarkBundle, metricExtractor} = this.props;

        const benchmarks1 = benchmarkBundle.benchmarksFromRun(0);
        const benchmarks2 = benchmarkBundle.benchmarksFromRun(1);
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, metricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));
        let newBenchmarks = [];
        let removedBenchmarks = [];
        const secondaryMetrics = new Set();
        let hasSomethingToCompare = false;
        benchmarkBundle.benchmarkMethods.forEach(benchmarkMethod => {
            if (benchmarkMethod.benchmarks[0] === null || !metricExtractor.hasMetric(benchmarkMethod.benchmarks[0])) {
                newBenchmarks.push(benchmarkMethod.name);
            } else if (benchmarkMethod.benchmarks[1] === null || !metricExtractor.hasMetric(benchmarkMethod.benchmarks[1])) {
                removedBenchmarks.push(benchmarkMethod.name);
            } else {
                hasSomethingToCompare = true;
                Object.keys(benchmarkMethod.benchmarks[0].secondaryMetrics).forEach(secondayMetric => secondaryMetrics.add(secondayMetric));
                Object.keys(benchmarkMethod.benchmarks[1].secondaryMetrics).forEach(secondayMetric => secondaryMetrics.add(secondayMetric));
            }
        });

        const detailsIcon = secondaryMetrics.size > 0 ? <sup><BadgeWithTooltip tooltip={ secondaryMetrics.size + ' secondary metrics results' }> <DeatailsIcon/> { ' ' + secondaryMetrics.size } </BadgeWithTooltip> { ' | ' }</sup> : undefined;
        var scoresChart = hasSomethingToCompare ? <DiffBarChartView runNames={ runNames } dataSet={ createDataSetFromBenchmarks(benchmarkBundle, metricExtractor) } metricExtractor={ metricExtractor } /> : null;

        return (
            <div>
              <div>
                <h3 id={ benchmarkBundle.key }><span><span style={ { cursor: 'pointer' } } onClick={ this.showDetails.bind(this) }>{ benchmarkBundle.name + ' ' } { detailsIcon }</span><sup>{ benchmarkModeBadges }</sup></span></h3>
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

