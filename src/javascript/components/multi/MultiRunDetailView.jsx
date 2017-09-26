import React from 'react';

import TocElement from 'components/TocElement.jsx'
import LineChartView from 'components/multi/LineChartView.jsx'

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'
import { getUniqueBenchmarkModes } from 'functions/parse.js'
import { createMetricBadge } from 'components/commons.jsx';

export default class MultiRunDetailView extends React.Component {

    static propTypes = {
        runNames: React.PropTypes.array.isRequired,
        benchmarkBundle: React.PropTypes.object.isRequired,
        secondaryMetrics: React.PropTypes.array.isRequired,
    };

    render() {
        const {runNames, benchmarkBundle, secondaryMetrics} = this.props;

        const primaryMetricExtractor = new PrimaryMetricExtractor();
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, primaryMetricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));

        const scoreMetricView = <TocElement name={ 'Score' } key={ 'Score' }>
                                  <h4>Score <span className='superscript'>{ benchmarkModeBadges }</span></h4>
                                  <LineChartView runNames={ runNames } benchmarkBundle={ benchmarkBundle } metricExtractor={ primaryMetricExtractor } />
                                  <br/>
                                  <br/>
                                </TocElement>;
        const secondaryMetricViews = secondaryMetrics.map(secondaryMetric => {
            const metricExtractor = new SecondaryMetricExtractor(secondaryMetric);
            return <TocElement name={ secondaryMetric } key={ secondaryMetric }>
                     <h4>{ secondaryMetric + ' ' }<span className='superscript'>{ createMetricBadge(secondaryMetric) }</span></h4>
                     <LineChartView runNames={ runNames } benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor } />
                     <br/>
                     <br/>
                   </TocElement>
        });
        return <div>
                 <h3>{ benchmarkBundle.key }</h3>
                 <br/>
                 { [scoreMetricView, ...secondaryMetricViews] }
               </div>
    }
}