import React from 'react';
import PropTypes from 'prop-types';

import TocElement from 'components/TocElement.jsx'
import BarChartView from 'components/single/BarChartView.jsx'
import { createDataSetFromBenchmarks } from 'components/single/BarDataSet.js'

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'
import { getUniqueBenchmarkModes } from 'functions/parse.js'
import { createMetricBadge } from 'components/commons.jsx';

export default class SingleDetailView extends React.Component {

    static propTypes = {
        runName: PropTypes.string.isRequired,
        benchmarkBundle: PropTypes.object.isRequired,
        secondaryMetrics: PropTypes.array.isRequired,
    };

    render() {
        const { runName, benchmarkBundle, secondaryMetrics } = this.props;

        const primaryMetricExtractor = new PrimaryMetricExtractor();
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, primaryMetricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));

        const scoreMetricView = <TocElement name={ 'Score' } key={ 'Score' }>
            <h4>Score <span className='superscript'>{ benchmarkModeBadges }</span></h4>
            <BarChartView dataSet={ createDataSetFromBenchmarks(runName, benchmarkBundle, primaryMetricExtractor) } />
            <br />
            <br />
        </TocElement>;
        const secondaryMetricViews = secondaryMetrics.map(secondaryMetric => <TocElement name={ secondaryMetric } key={ secondaryMetric }>
            <h4>{ secondaryMetric + ' ' }<span className='superscript'>{ createMetricBadge(secondaryMetric) }</span></h4>
            <BarChartView dataSet={ createDataSetFromBenchmarks(runName, benchmarkBundle, new SecondaryMetricExtractor(secondaryMetric)) } />
            <br />
            <br />
        </TocElement>);
        return <div>
            <h3>{ benchmarkBundle.key }</h3>
            <br />
            { [scoreMetricView, ...secondaryMetricViews] }
        </div>
    }
}