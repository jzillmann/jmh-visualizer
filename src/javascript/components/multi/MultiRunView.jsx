import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import TocElement from 'components/TocElement.jsx'
import MultiRunBundle from 'components/multi/MultiRunBundle.jsx'

export default class MultiRunView extends React.Component {

    static propTypes = {
        runNames: React.PropTypes.array.isRequired,
        benchmarkBundles: React.PropTypes.array.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {runNames, benchmarkBundles, metricExtractor, detailBenchmarkBundleFunction} = this.props;

        const elements = [];
        elements.push(
            <div key='summary'>
              Comparing
              { ' ' }
              <Badge>
                { benchmarkBundles.length }
              </Badge> benchmark classes for
              { ' ' + runNames.length } runs on metric '
              { metricExtractor.metricKey }'.
            </div>
        );

        benchmarkBundles.forEach(benchmarkBundle => {
            elements.push(<TocElement key={ benchmarkBundle.key } name={ benchmarkBundle.key }>
                            <MultiRunBundle
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