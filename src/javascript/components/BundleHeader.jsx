import React from 'react';

import DeatailsIcon from 'react-icons/lib/fa/search-plus'
import BadgeWithTooltip from 'components/lib/BadgeWithTooltip.jsx'
import { getUniqueBenchmarkModes } from 'functions/parse.js'
import { createMetricBadge } from 'components/commons.jsx';

//The header of a Single/Two/Multi-RunBundle
export default class BundleHeader extends React.Component {

    static propTypes = {
        benchmarkBundle: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    showDetails() {
        this.props.detailBenchmarkBundleFunction(this.props.benchmarkBundle.key);
    }

    render() {
        const {benchmarkBundle, metricExtractor} = this.props;
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, metricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));
        const secondaryMetrics = new Set();
        benchmarkBundle.allBenchmarks().forEach(benchmark => {
            Object.keys(benchmark.secondaryMetrics).forEach(secondaryMetric => {
                secondaryMetrics.add(secondaryMetric)
            })
        });

        const detailsIcon = secondaryMetrics.size > 0 ? <span className='superscript'><BadgeWithTooltip tooltip={ secondaryMetrics.size + ' secondary metrics results' }> <DeatailsIcon/> { ' ' + secondaryMetrics.size } </BadgeWithTooltip> { ' | ' }</span> : undefined;
        return (<h3 id={ benchmarkBundle.key }><span className='clickable' onClick={ this.showDetails.bind(this) }>{ benchmarkBundle.name + ' ' } { detailsIcon }</span><span className='superscript'>{ benchmarkModeBadges }</span></h3>);
    }

}