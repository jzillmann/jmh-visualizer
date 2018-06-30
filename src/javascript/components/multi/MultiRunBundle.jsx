import React from 'react';
import PropTypes from 'prop-types';

import BundleHeader from 'components/BundleHeader.jsx'
import LineChartView from 'components/multi/LineChartView.jsx'

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class MultiRunBundle extends React.Component {

    static propTypes = {
        runNames: PropTypes.array.isRequired,
        benchmarkBundle: PropTypes.object.isRequired,
        metricExtractor: PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: PropTypes.func.isRequired
    };

    render() {
        const { runNames, benchmarkBundle, metricExtractor, detailBenchmarkBundleFunction } = this.props;
        return (
            <div>
                <BundleHeader benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor } detailBenchmarkBundleFunction={ detailBenchmarkBundleFunction } />
                <div style={ { fontSize: '0.90em' } }>
                    <LineChartView runNames={ runNames } benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor } />
                </div>
            </div>
        );
    }
}

