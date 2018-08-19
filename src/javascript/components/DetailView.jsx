import React from 'react';

import TocElement from 'components/TocElement.jsx'

import { ChartDetailHeader } from 'components/ChartHeader.jsx'
import PrimaryMetricExtractor from 'models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from 'models/extractor/SecondaryMetricExtractor.js'
import { getUniqueBenchmarkModes } from 'functions/parse.js'
import { createMetricBadge } from 'components/commons.jsx';

/* eslint react/prop-types: 0 */
const DetailView = ({ runNames, benchmarkBundle, secondaryMetrics, chartConfig, chartGeneratorFunction }) => {

    const primaryMetricExtractor = new PrimaryMetricExtractor();
    const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, primaryMetricExtractor);
    const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));

    const scoreMetricView =
        <TocElement name={ 'Score' } key={ 'Score' }>
            <ChartDetailHeader name={ 'Score' } badges={ benchmarkModeBadges } />
            { chartGeneratorFunction(runNames, benchmarkBundle, primaryMetricExtractor, chartConfig) }
            <br />
            <br />
        </TocElement>;
    const secondaryMetricViews = secondaryMetrics.map(secondaryMetric => {
        const metricExtractor = new SecondaryMetricExtractor(secondaryMetric);
        return (
            <TocElement name={ secondaryMetric } key={ secondaryMetric }>
                <ChartDetailHeader name={ secondaryMetric } badges={ createMetricBadge(secondaryMetric) } />
                { chartGeneratorFunction(runNames, benchmarkBundle, metricExtractor, chartConfig) }
                <br />
                <br />
            </TocElement>)
    });
    return <div>
        <h3>Details of <i>{ benchmarkBundle.key }</i></h3>
        <br />
        { [scoreMetricView, ...secondaryMetricViews] }
    </div>
}

export default DetailView;