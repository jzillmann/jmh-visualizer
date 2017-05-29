import React from 'react';

import DetailViewFactory from '../DetailViewFactory.js'
import BenchmarkCollection from '../../models/BenchmarkCollection.js'
import RunSelection from '../../models/RunSelection.js'
import MetricExtractor from '../../models/MetricExtractor.js'

import BarChartView from './BarChartView.jsx'
import { createDataSetFromBenchmarks } from './BarDataSet.js'

export default class SingleDetailViewFactory extends DetailViewFactory {

    createMetricView(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) {
        return <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, metricExtractor) } />
    }

}