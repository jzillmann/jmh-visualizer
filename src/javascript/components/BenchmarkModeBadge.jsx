import React, { Component } from 'react';

import Badge from 'react-bootstrap/lib/Badge'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

// A badge showing the benchmark mode with a tooltip explaining it
export default class BenchmarkModeBadge extends Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        tooltip: React.PropTypes.string.isRequired,
    };


    render() {
        const {name, tooltip} = this.props;
        const tooltipComponent = <Tooltip id="tooltip">
                                   { tooltip }
                                 </Tooltip>;

        return (
            <OverlayTrigger placement="top" overlay={ tooltipComponent }>
              <Badge bsStyle="default">
                { name }
              </Badge>
            </OverlayTrigger>
        );
    }
}

export function createBadge(benchmarkMode) {
    switch (benchmarkMode) {
    case 'thrpt':
        return <BenchmarkModeBadge name="Throughput" tooltip="The higher the bars, the better." />
    case 'avgt':
        return <BenchmarkModeBadge name="AverageTime" tooltip="The lower the bars, the better." />
    case 'sample':
        return <BenchmarkModeBadge name="SamplingTime" tooltip="The lower the bars, the better." />
    case 'ss':
        return <BenchmarkModeBadge name="SingleShot" tooltip="The lower the bars, the better." />
    default:
        return <BenchmarkModeBadge name={ benchmarkMode } tooltip="Nothing to say..." />
    }

}
