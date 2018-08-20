import React from 'react';
import PropTypes from 'prop-types';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'

import ChartHeader from 'components/ChartHeader.jsx'
import { DetailsButton, SortButton, ScaleButton } from 'components/Icons.jsx'
import BarChartView from 'components/single/BarChartView.jsx'

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class SingleRunBundle extends React.Component {

    static propTypes = {
        benchmarkBundle: PropTypes.object.isRequired,
        metricExtractor: PropTypes.object.isRequired,
        chartConfig: PropTypes.object.isRequired,
        dataMax: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            sort: props.chartConfig.sort,
            logScale: props.chartConfig.logScale,
            showJson: false,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.chartConfig.sort !== this.state.sort) {
            this.setState({ sort: nextProps.chartConfig.sort });
        }
        if (nextProps.chartConfig.logScale !== this.state.logScale) {
            this.setState({ logScale: nextProps.chartConfig.logScale });
        }
    }

    toggleSort() {
        this.setState({
            sort: !this.state.sort
        });
    }

    toggleLogScale() {
        this.setState({
            logScale: !this.state.logScale
        });
    }

    toggleShowJson() {
        this.setState({
            showJson: !this.state.showJson
        });
    }

    render() {

        const { benchmarkBundle, metricExtractor, dataMax } = this.props;
        const { sort, logScale, showJson } = this.state;
        const benchmarks = benchmarkBundle.allBenchmarks();

        return (
            <div>
                <ChartHeader benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor } >
                    <DetailsButton key='details' benchmarkBundle={ benchmarkBundle } />
                    <SortButton key='sort' active={ sort } action={ this.toggleSort.bind(this) } />
                    <ScaleButton key='scale' active={ logScale } action={ this.toggleLogScale.bind(this) } />
                </ChartHeader>
                <div style={ { fontSize: '0.90em' } }>
                    <BarChartView
                        benchmarkBundle={ benchmarkBundle }
                        metricExtractor={ metricExtractor }
                        dataMax={ dataMax }
                        chartConfig={ { sort: sort, logScale: logScale } }
                    />
                </div>
                <Button bsSize="small" onClick={ this.toggleShowJson.bind(this) }>
                    Show JSON
              </Button>
                <Collapse in={ showJson }>
                    <div>
                        <pre>{ JSON.stringify(benchmarks, null, '\t') }</pre>
                        <Button bsStyle="primary" onClick={ this.toggleShowJson.bind(this) }>
                            Collapse
                  </Button>
                    </div>
                </Collapse >
            </div >
        );
    }
}

