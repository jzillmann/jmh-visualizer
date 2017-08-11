import React from 'react';

import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import Badge from 'react-bootstrap/lib/Badge'

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import HelpIcon from 'react-icons/lib/md/help-outline'

import TocElement from '../TocElement.jsx'
import SingleRunCollectionView from './SingleRunCollectionView.jsx'
import { getUniqueBenchmarkModesAccrossCollections } from '../../functions/parse.js'

export default class SingleRunView extends React.Component {

    static propTypes = {
        benchmarkCollections: React.PropTypes.array.isRequired,
        focusedCollections: React.PropTypes.object.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectedMetric: React.PropTypes.string.isRequired,
        selectMetricFunction: React.PropTypes.func.isRequired,
        selectBenchmarkSetFunction: React.PropTypes.func.isRequired,
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
        const {focusedCollections, benchmarkCollections, runSelection, metricExtractor, selectBenchmarkSetFunction} = this.props;
        const {axisScalesSync} = this.state;

        let synchronizeAxisScalesToggle;
        let dataMax;
        if (focusedCollections.size > 1) {
            const benchmarkModes = getUniqueBenchmarkModesAccrossCollections(benchmarkCollections, runSelection, metricExtractor);
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
                benchmarkCollections.forEach(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).forEach(benchmark => {
                    dataMax = Math.max(dataMax, metricExtractor.extractScore(benchmark));
                    dataMax = Math.max(dataMax, metricExtractor.extractScoreConfidence(benchmark)[1]);
                }));
            }
        }

        const elements = [];
        elements.push(
            <div key='summary'>
              <Badge>
                { benchmarkCollections.length }
              </Badge>
              { ` different benchmark classes for single run '${ runSelection.names[0] }' and metric '${metricExtractor.metricKey}' detected!` }
              <span style={ { position: 'absolute', right: 20 } }>{ synchronizeAxisScalesToggle }</span>
            </div>
        );

        benchmarkCollections.forEach(benchmarkSet => {
            elements.push(<TocElement key={ benchmarkSet.key } name={ benchmarkSet.key }>
                            <SingleRunCollectionView
                                                     benchmarkCollection={ benchmarkSet }
                                                     runSelection={ runSelection }
                                                     metricExtractor={ metricExtractor }
                                                     selectBenchmarkCollectionFunction={ selectBenchmarkSetFunction }
                                                     dataMax={ dataMax } />
                          </TocElement>);
        });


        return <div>
                 { elements }
               </div>
    }

}