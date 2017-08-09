import React from 'react';

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

        const scoreMetricView = <section id={ 'Score' } key={ 'Score' }>
                                  <h4>Score <sup>{ benchmarkModeBadges }</sup></h4>
                                  <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkBundle, runSelection, primaryMetricExtractor) } />
                                  <br/>
                                  <br/>
                                </section>;
        const secondaryMetricViews = secondaryMetrics.map(secondaryMetric => <section id={ secondaryMetric } key={ secondaryMetric }>
                                                                               <h4>{ secondaryMetric + ' ' }<sup>{ createMetricBadge(secondaryMetric) }</sup></h4>
                                                                               <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkBundle, runSelection, new SecondaryMetricExtractor(secondaryMetric)) } />
                                                                               <br/>
                                                                               <br/>
                                                                             </section>);
        return <div>
                 <h3>{ benchmarkBundle.key }</h3>
                 <br/>
                 { [scoreMetricView, ...secondaryMetricViews] }
               </div>
    }
}