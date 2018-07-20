import React from 'react';
import PropTypes from 'prop-types';

import Badge from 'react-bootstrap/lib/Badge'

import TocElement from 'components/TocElement.jsx'
import MultiRunBundle from 'components/multi/MultiRunBundle.jsx'

export default class MultiRunView extends React.Component {

    static propTypes = {
        runNames: PropTypes.array.isRequired,
        benchmarkBundles: PropTypes.array.isRequired,
        metricExtractor: PropTypes.object.isRequired,
    };

    render() {
        const { runNames, benchmarkBundles, metricExtractor } = this.props;

        const elements = [];
        elements.push(
            <div key='summary'>
                Comparing
              { ' ' }
                <Badge>
                    { benchmarkBundles.length }
                </Badge> benchmark classes for
              { ' ' + runNames.length } runs on metric &#39;
              { metricExtractor.metricKey }&#39;.
            </div>
        );

        benchmarkBundles.forEach(benchmarkBundle => {
            elements.push(<TocElement key={ benchmarkBundle.key } name={ benchmarkBundle.key }>
                <MultiRunBundle
                    runNames={ runNames }
                    benchmarkBundle={ benchmarkBundle }
                    metricExtractor={ metricExtractor }
                />
            </TocElement>);
        });


        return <div>
            { elements }
        </div>
    }

}