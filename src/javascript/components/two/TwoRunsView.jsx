import React from 'react';
import PropTypes from 'prop-types';

import Badge from 'react-bootstrap/lib/Badge'

import TocElement from 'components/TocElement.jsx'
import TwoRunBundle from 'components/two/TwoRunBundle.jsx'

export default class TwoRunsView extends React.Component {

    static propTypes = {
        runNames: PropTypes.array.isRequired,
        benchmarkBundles: PropTypes.array.isRequired,
        metricExtractor: PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: PropTypes.func.isRequired,
    };

    render() {
        const { runNames, benchmarkBundles, metricExtractor, detailBenchmarkBundleFunction } = this.props;

        const elements = [];
        elements.push(
            <div key='summary'>
                Comparing
              { ' ' }
                <Badge>
                    { benchmarkBundles.length }
                </Badge> benchmark classes for &#39;
              { runNames[0] }&#39; and &#39;
              { runNames[1] }&#39; on metric &#39;
              { metricExtractor.metricKey }&#39;.
            </div>
        );

        benchmarkBundles.forEach(benchmarkBundle => {
            elements.push(<TocElement key={ benchmarkBundle.key } name={ benchmarkBundle.key }>
                <TwoRunBundle
                    runNames={ runNames }
                    benchmarkBundle={ benchmarkBundle }
                    metricExtractor={ metricExtractor }
                    detailBenchmarkBundleFunction={ detailBenchmarkBundleFunction } />
            </TocElement>);
        });


        return <div>
            { elements }
        </div>
    }

}