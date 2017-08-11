import React from 'react';

import TocElement from '../TocElement.jsx'
import BarChartView from './BarChartView.jsx'
import { createDataSetFromBenchmarks } from './BarDataSet.js'

import PrimaryMetricExtractor from '../../models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from '../../models/extractor/SecondaryMetricExtractor.js'
import { getUniqueBenchmarkModes } from '../../functions/parse.js'
import { createMetricBadge } from '../commons.jsx';

export default class SingleDetailView extends React.Component {

    static propTypes = {
        benchmarkBundle: React.PropTypes.object.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        secondaryMetrics: React.PropTypes.array.isRequired,
    };

    render() {
        const {benchmarkBundle, runSelection, secondaryMetrics} = this.props;

        const primaryMetricExtractor = new PrimaryMetricExtractor();
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, runSelection, primaryMetricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));

        const scoreMetricView = <TocElement name={ 'Score' } key={ 'Score' }>
                                  <h4>Score <sup>{ benchmarkModeBadges }</sup></h4>
                                  <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkBundle, runSelection, primaryMetricExtractor) } />
                                  <br/>
                                  <br/>
                                </TocElement>;
        const secondaryMetricViews = secondaryMetrics.map(secondaryMetric => <TocElement name={ secondaryMetric } key={ secondaryMetric }>
                                                                               <h4>{ secondaryMetric + ' ' }<sup>{ createMetricBadge(secondaryMetric) }</sup></h4>
                                                                               <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkBundle, runSelection, new SecondaryMetricExtractor(secondaryMetric)) } />
                                                                               <br/>
                                                                               <br/>
                                                                             </TocElement>);
        return <div>
                 <h3>{ benchmarkBundle.key }</h3>
                 <br/>
                 { [scoreMetricView, ...secondaryMetricViews] }
               </div>
    }
}