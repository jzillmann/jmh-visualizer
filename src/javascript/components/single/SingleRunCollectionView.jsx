import React from 'react';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'
import DetailsIcon from 'react-icons/lib/fa/search-plus'

import BadgeWithTooltip from 'components/lib/BadgeWithTooltip.jsx'
import BarChartView from 'components/single/BarChartView.jsx'

import { createDataSetFromBenchmarks } from 'components/single/BarDataSet.js'
import { getUniqueBenchmarkModes } from 'functions/parse.js'
import { createMetricBadge } from 'components/commons.jsx';

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class SingleRunCollectionView extends React.Component {

    static propTypes = {
        benchmarkCollection: React.PropTypes.object.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectBenchmarkCollectionFunction: React.PropTypes.func.isRequired,
        dataMax: React.PropTypes.number
    };

    state = {
        showJson: false
    }

    toggleShowJson() {
        this.setState({
            showJson: !this.state.showJson
        });
    }

    showDetails() {
        this.props.selectBenchmarkCollectionFunction(this.props.benchmarkCollection);
    }

    render() {
        const {benchmarkCollection, runSelection, metricExtractor, dataMax} = this.props;

        const benchmarks = benchmarkCollection.benchmarks(runSelection);
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkCollection, runSelection, metricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));

        const secondaryMetricsCount = Object.keys(benchmarks[0].secondaryMetrics).length;
        const detailsIcon = secondaryMetricsCount > 0 ? <sup><BadgeWithTooltip tooltip={ secondaryMetricsCount + ' secondary metrics results' }> <DetailsIcon/> { ' ' + secondaryMetricsCount } </BadgeWithTooltip> { ' | ' }</sup> : undefined;
        const scoresChart = <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, metricExtractor) } dataMax={ dataMax } />;

        return (
            <div>
              <div>
                <h3 id={ benchmarkCollection.key }><span><span style={ { cursor: 'pointer' } } onClick={ this.showDetails.bind(this) }>{ benchmarkCollection.name + ' ' } { detailsIcon }</span><sup>{ benchmarkModeBadges }</sup></span></h3>
              </div>
              <div style={ { fontSize: '0.90em' } }>
                { scoresChart }
              </div>
              <Button bsSize="small" onClick={ ::this.toggleShowJson }>
                Show JSON
              </Button>
              <Collapse in={ this.state.showJson }>
                <div>
                  <pre>{ JSON.stringify(benchmarks, null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.toggleShowJson }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
            </div>
        );
    }
}

