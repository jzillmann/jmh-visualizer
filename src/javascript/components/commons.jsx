import React from 'react';

import BadgeWithTooltip from './lib/BadgeWithTooltip.jsx'

import { getMetricType } from '../models/MetricType.js'

export function createMetricBadge(metricKey) {
    const metricType = getMetricType(metricKey);
    if (!metricType) {
        return null;
    }
    return <BadgeWithTooltip key={ metricKey } name={ metricType.displayName } tooltip={ metricType.description } />
}