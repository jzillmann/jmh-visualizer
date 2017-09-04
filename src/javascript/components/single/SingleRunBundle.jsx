import React from 'react';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'

import BundleHeader from 'components/BundleHeader.jsx'
import BarChartView from 'components/single/BarChartView.jsx'


import { createDataSetFromBenchmarks } from 'components/single/BarDataSet.js'

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class SingleRunBundle extends React.Component {

    static propTypes = {
        runName: React.PropTypes.string.isRequired,
        benchmarkBundle: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired,
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

    render() {
        const {runName, benchmarkBundle, metricExtractor, detailBenchmarkBundleFunction, dataMax} = this.props;

        const benchmarks = benchmarkBundle.allBenchmarks();
        const scoresChart = <BarChartView dataSet={ createDataSetFromBenchmarks(runName, benchmarkBundle, metricExtractor) } dataMax={ dataMax } />;

        return (
            <div>
              <BundleHeader benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor } detailBenchmarkBundleFunction={ detailBenchmarkBundleFunction } />
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

