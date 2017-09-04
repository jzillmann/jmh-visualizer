import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import Tooltipped from 'components/lib/Tooltipped.jsx'
import TocElement from 'components/TocElement.jsx'
import SingleRunBundle from 'components/single/SingleRunBundle.jsx'
import { getUniqueBenchmarkModesAccrossBundles } from 'functions/parse.js'

export default class SingleRunView extends React.Component {

    static propTypes = {
        runName: React.PropTypes.string.isRequired,
        benchmarkBundles: React.PropTypes.array.isRequired,
        focusedBundles: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            axisScalesSync: true
        };
    }

    changeScalesSync() {
        this.setState({
            axisScalesSync: !this.state.axisScalesSync,
        });
    }

    render() {
        const {runName, focusedBundles, benchmarkBundles, metricExtractor, detailBenchmarkBundleFunction} = this.props;
        const {axisScalesSync} = this.state;

        let synchronizeAxisScalesToggle;
        let dataMax;
        if (focusedBundles.size > 1) {
            const benchmarkModes = getUniqueBenchmarkModesAccrossBundles(benchmarkBundles, metricExtractor);
            const axisScalesSyncPossible = benchmarkModes.length == 1;
            const switchTooltip = axisScalesSyncPossible ? ' Sync Axis Scales' : `No Axis Scale syncing possible because of multiple benchmark modes: ${benchmarkModes}!`;
            synchronizeAxisScalesToggle = <div>
                                            <Tooltipped tooltip={ switchTooltip } position='bottom'>
                                              <Toggle
                                                      id='scales-sync'
                                                      checked={ axisScalesSyncPossible && axisScalesSync }
                                                      disabled={ !axisScalesSyncPossible }
                                                      onChange={ this.changeScalesSync.bind(this) } />
                                            </Tooltipped>
                                          </div>;
            if (axisScalesSync && axisScalesSyncPossible) {
                dataMax = 0;
                benchmarkBundles.forEach(benchmarkBundle => benchmarkBundle.allBenchmarks().forEach(benchmark => {
                    dataMax = Math.max(dataMax, metricExtractor.extractScore(benchmark));
                    dataMax = Math.max(dataMax, metricExtractor.extractScoreConfidence(benchmark)[1]);
                }));
            }
        }

        const elements = [];
        elements.push(
            <div key='summary'>
              <Badge>
                { benchmarkBundles.length }
              </Badge>
              { ` different benchmark classes for single run '${ runName }' and metric '${metricExtractor.metricKey}' detected!` }
              <span style={ { position: 'absolute', right: 20 } }>{ synchronizeAxisScalesToggle }</span>
            </div>
        );

        benchmarkBundles.forEach(bundle => {
            elements.push(<TocElement key={ bundle.key } name={ bundle.key }>
                            <SingleRunBundle
                                             runName={ runName }
                                             benchmarkBundle={ bundle }
                                             metricExtractor={ metricExtractor }
                                             detailBenchmarkBundleFunction={ detailBenchmarkBundleFunction }
                                             dataMax={ dataMax } />
                          </TocElement>);
        });


        return <div>
                 { elements }
               </div>
    }

}