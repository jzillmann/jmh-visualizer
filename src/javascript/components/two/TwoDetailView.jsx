import React from 'react';
import PropTypes from 'prop-types';

import TocElement from 'components/TocElement.jsx'
import DiffBarChartView from 'components/two/DiffBarChartView.jsx'
import { createDataSetFromBenchmarks } from 'components/two/DiffBarDataSet.js'

import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'
import { getUniqueBenchmarkModes } from 'functions/parse.js'
import { createMetricBadge } from 'components/commons.jsx';

export default class TwoDetailView extends React.Component {

    static propTypes = {
        runNames: PropTypes.array.isRequired,
        benchmarkBundle: PropTypes.object.isRequired,
        secondaryMetrics: PropTypes.array.isRequired,
    };

    render() {
        const { runNames, benchmarkBundle, secondaryMetrics } = this.props;

        const primaryMetricExtractor = new PrimaryMetricExtractor();
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, primaryMetricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));

        const scoreMetricView = <TocElement name={ 'Score' } key={ 'Score' }>
            <h4>Score <span className='superscript'>{ benchmarkModeBadges }</span></h4>
            <DiffBarChartView runNames={ runNames } metricExtractor={ primaryMetricExtractor } dataSet={ createDataSetFromBenchmarks(benchmarkBundle, primaryMetricExtractor) } />
            <br />
            <br />
        </TocElement>;
        const secondaryMetricViews = secondaryMetrics.map(secondaryMetric => {
            const metricExtractor = new SecondaryMetricExtractor(secondaryMetric);
            return <TocElement name={ secondaryMetric } key={ secondaryMetric }>
                <h4>{ secondaryMetric + ' ' }<span className='superscript'>{ createMetricBadge(secondaryMetric) }</span></h4>
                <DiffBarChartView runNames={ runNames } metricExtractor={ metricExtractor } dataSet={ createDataSetFromBenchmarks(benchmarkBundle, metricExtractor) } />
                <br />
                <br />
            </TocElement>
        });
        return <div>
            <h3>{ benchmarkBundle.key }</h3>
            <br />
            { [scoreMetricView, ...secondaryMetricViews] }
        </div>
    }
}