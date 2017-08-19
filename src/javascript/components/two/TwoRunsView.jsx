import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import TocElement from 'components/TocElement.jsx'
import TwoRunBundle from 'components/two/TwoRunBundle.jsx'

export default class TwoRunsView extends React.Component {

    static propTypes = {
        benchmarkBundles: React.PropTypes.array.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {benchmarkBundles, runSelection, metricExtractor, selectBenchmarkBundleFunction} = this.props;

        const elements = [];
        elements.push(
            <div key='summary'>
              Comparing
              { ' ' }
              <Badge>
                { benchmarkBundles.length }
              </Badge> different Benchmark classes for metric '
              { metricExtractor.metricKey }' on 2 runs.
            </div>
        );

        benchmarkBundles.forEach(benchmarkBundle => {
            elements.push(<TocElement key={ benchmarkBundle.key } name={ benchmarkBundle.key }>
                            <TwoRunBundle
                                          benchmarkBundle={ benchmarkBundle }
                                          runSelection={ runSelection }
                                          metricExtractor={ metricExtractor }
                                          selectBenchmarkBundleFunction={ selectBenchmarkBundleFunction } />
                          </TocElement>);
        });


        return <div>
                 { elements }
               </div>
    }

}