import React from 'react';

import BadgeWithTooltip from './lib/BadgeWithTooltip.jsx'

export function createBadge(benchmarkMode) {
    if (!benchmarkMode) {
        return null;
    }
    switch (benchmarkMode) {
    case 'thrpt':
        return <BadgeWithTooltip key={ benchmarkMode } name="Throughput" tooltip="The higher the bars, the better." />
    case 'avgt':
        return <BadgeWithTooltip key={ benchmarkMode } name="AverageTime" tooltip="The lower the bars, the better." />
    case 'sample':
        return <BadgeWithTooltip key={ benchmarkMode } name="SamplingTime" tooltip="The lower the bars, the better." />
    case 'ss':
        return <BadgeWithTooltip key={ benchmarkMode } name="SingleShot" tooltip="The lower the bars, the better." />
    default:
        return <BadgeWithTooltip key={ benchmarkMode } name={ benchmarkMode } tooltip="Nothing to say..." />
    }

}
