import React from 'react';

import DetailViewFactory from '../DetailViewFactory.js'
import BenchmarkCollection from '../../models/BenchmarkCollection.js'
import RunSelection from '../../models/RunSelection.js'
import MetricExtractor from '../../models/MetricExtractor.js'

import DiffBarChartView from './DiffBarChartView.jsx'
import { createDataSetFromBenchmarks } from './DiffBarDataSet.js'

export default class TwoDetailViewFactory extends DetailViewFactory {

    createMetricView(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) {
        return <DiffBarChartView runNames={ runSelection.names } dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, metricExtractor) } metricExtractor={ metricExtractor } />
    }

}