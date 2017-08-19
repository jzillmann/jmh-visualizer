import React from 'react';

import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import Badge from 'react-bootstrap/lib/Badge'

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import HelpIcon from 'react-icons/lib/md/help-outline'

import TocElement from 'components/TocElement.jsx'
import SingleRunBundle from 'components/single/SingleRunBundle.jsx'
import { getUniqueBenchmarkModesAccrossBundles } from 'functions/parse.js'

export default class SingleRunView extends React.Component {

    static propTypes = {
        benchmarkBundles: React.PropTypes.array.isRequired,
        focusedBundles: React.PropTypes.object.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectBenchmarkBundleFunction: React.PropTypes.func.isRequired,
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
        const {focusedBundles, benchmarkBundles, runSelection, metricExtractor, selectBenchmarkBundleFunction} = this.props;
        const {axisScalesSync} = this.state;

        let synchronizeAxisScalesToggle;
        let dataMax;
        if (focusedBundles.size > 1) {
            const benchmarkModes = getUniqueBenchmarkModesAccrossBundles(benchmarkBundles, runSelection, metricExtractor);
            const axisScalesSyncPossible = benchmarkModes.length == 1;
            const switchTooltip = axisScalesSyncPossible ? ' Sync Axis Scales' : `No Axis Scale syncing possible because of multiple benchmark modes: ${benchmarkModes}!`;
            synchronizeAxisScalesToggle = <div>
                                            <Toggle
                                                    id='scales-sync'
                                                    checked={ axisScalesSyncPossible && axisScalesSync }
                                                    disabled={ !axisScalesSyncPossible }
                                                    onChange={ this.changeScalesSync.bind(this) } />
                                            <OverlayTrigger placement="bottom" overlay={ <Tooltip id="switchTooltip">
                                                                                           { switchTooltip }
                                                                                         </Tooltip> }>
                                              <label htmlFor='scales-sync'>
                                                <HelpIcon/>
                                              </label>
                                            </OverlayTrigger>
                                          </div>;
            if (axisScalesSync && axisScalesSyncPossible) {
                dataMax = 0;
                benchmarkBundles.forEach(benchmarkBundle => benchmarkBundle.benchmarks(runSelection).forEach(benchmark => {
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
              { ` different benchmark classes for single run '${ runSelection.names[0] }' and metric '${metricExtractor.metricKey}' detected!` }
              <span style={ { position: 'absolute', right: 20 } }>{ synchronizeAxisScalesToggle }</span>
            </div>
        );

        benchmarkBundles.forEach(bundle => {
            elements.push(<TocElement key={ bundle.key } name={ bundle.key }>
                            <SingleRunBundle
                                             benchmarkBundle={ bundle }
                                             runSelection={ runSelection }
                                             metricExtractor={ metricExtractor }
                                             selectBenchmarkBundleFunction={ selectBenchmarkBundleFunction }
                                             dataMax={ dataMax } />
                          </TocElement>);
        });


        return <div>
                 { elements }
               </div>
    }

}