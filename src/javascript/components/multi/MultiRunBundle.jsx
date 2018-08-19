import React from 'react';
import PropTypes from 'prop-types';

import ChartHeader from 'components/ChartHeader.jsx'
import { DetailsButton, ScaleButton } from 'components/Icons.jsx'
import LineChartView from 'components/multi/LineChartView.jsx'

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class MultiRunBundle extends React.Component {

    static propTypes = {
        runNames: PropTypes.array.isRequired,
        benchmarkBundle: PropTypes.object.isRequired,
        metricExtractor: PropTypes.object.isRequired,
        chartConfig: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            logScale: props.chartConfig.logScale
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.chartConfig.logScale !== this.state.logScale) {
            this.setState({ logScale: nextProps.chartConfig.logScale });
        }
    }

    toggleLogScale() {
        this.setState({
            logScale: !this.state.logScale
        });
    }

    render() {
        const { runNames, benchmarkBundle, metricExtractor } = this.props;
        const { logScale } = this.state;

        return (

            <div>
                <ChartHeader benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor }   >
                    <DetailsButton key='details' benchmarkBundle={ benchmarkBundle } />
                    <ScaleButton key='scale' active={ logScale } action={ this.toggleLogScale.bind(this) } />
                </ChartHeader>
                <div style={ { fontSize: '0.90em' } }>
                    <LineChartView runNames={ runNames } benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor } logScale={ logScale } />
                </div>
            </div>
        );
    }
}

