import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import TocElement from '../TocElement.jsx'
import TwoRunCollectionView from './TwoRunCollectionView.jsx'

export default class TwoRunsView extends React.Component {

    static propTypes = {
        benchmarkCollections: React.PropTypes.array.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectBenchmarkSetFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {benchmarkCollections, runSelection, metricExtractor, selectBenchmarkSetFunction} = this.props;

        const elements = [];
        elements.push(
            <div key='summary'>
              Comparing
              { ' ' }
              <Badge>
                { benchmarkCollections.length }
              </Badge> different Benchmark classes for metric '
              { metricExtractor.metricType }' on 2 runs.
            </div>
        );

        benchmarkCollections.forEach(benchmarkSet => {
            elements.push(<TocElement key={ benchmarkSet.key } name={ benchmarkSet.key }>
                            <TwoRunCollectionView
                                                  benchmarkCollection={ benchmarkSet }
                                                  runSelection={ runSelection }
                                                  metricExtractor={ metricExtractor }
                                                  selectBenchmarkCollectionFunction={ selectBenchmarkSetFunction } />
                          </TocElement>);
        });


        return <div>
                 { elements }
               </div>
    }

}