import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import RunViewFactory from '../RunViewFactory.js'
import BenchmarkCollection from '../../models/BenchmarkCollection.js'
import RunSelection from '../../models/RunSelection.js'
import MetricExtractor from '../../models/MetricExtractor.js'

import TwoRunCollectionView from './TwoRunCollectionView.jsx'

export default class TwoRunViewFactory extends RunViewFactory {

    constructor(options) {
        super();
        this.benchmarkRuns = options.benchmarkRuns;
        this.selectBenchmarkCollectionFunction = options.selectBenchmarkCollectionFunction;
    }

    createTopSection(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricType) {
        return <div>
                 Comparing
                 { ' ' }
                 <Badge>
                   { benchmarkCollection.length }
                 </Badge> different Benchmark classes for metric '
                 { metricType }' on 2 runs.
               </div>
    }

    createCollectionView(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) {
        return <TwoRunCollectionView
                                     benchmarkCollection={ benchmarkCollection }
                                     runSelection={ runSelection }
                                     metricExtractor={ metricExtractor }
                                     selectBenchmarkCollectionFunction={ this.selectBenchmarkCollectionFunction } />
    }

}