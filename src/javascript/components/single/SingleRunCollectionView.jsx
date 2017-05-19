import React from 'react';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'

import BadgeWithTooltip from '../lib/BadgeWithTooltip.jsx'
import BarChartView from './BarChartView.jsx'

import ScoreExtractor from '../../models/extractor/ScoreExtractor.js'
import GcAllocationRateExtractor from '../../models/extractor/GcAllocationRateExtractor.js'
import GcAllocationRateNormExtractor from '../../models/extractor/GcAllocationRateNormExtractor.js'
import GcCountExtractor from '../../models/extractor/GcCountExtractor.js'
import GcTimeExtractor from '../../models/extractor/GcTimeExtractor.js'

import { createDataSetFromBenchmarks } from './BarDataSet.js'
import { getUniqueBenchmarkModes } from '../../functions/parse.js'
import { createBadge } from '../BenchmarkModeBadge.jsx';

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class SingleRunCollectionView extends React.Component {

    static propTypes = {
        benchmarkCollection: React.PropTypes.object.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        showScores: React.PropTypes.bool.isRequired,
        showGc: React.PropTypes.bool.isRequired,
    };

    state = {
        showJson: false
    }

    toggleShowJson() {
        this.setState({
            showJson: !this.state.showJson
        });
    }

    render() {
        const {benchmarkCollection, runSelection, showScores, showGc} = this.props;

        const benchmarks = benchmarkCollection.benchmarks(runSelection);
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkCollection, runSelection);
        const benchmarkModeBadges = benchmarkModes.map(mode => createBadge(mode));

        var scoresChart;
        var gcChart;
        if (showScores) {
            let header;
            if (showGc) {
                header = <h5>Scores</h5>;
            }
            scoresChart = <div>
                            { header }
                            <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, new ScoreExtractor()) } />
                          </div>
        }
        if (showGc && benchmarks[0].secondaryMetrics) {
            //TODO put that on separate page
            let allocaRate;
            let allocaRateNorm;
            let gcCount;
            let gcTime;
            if (benchmarks[0].secondaryMetrics['·gc.alloc.rate']) {
                allocaRate = <div>
                               <h5>GC Profiler Results <sup><BadgeWithTooltip name="Allocation Rate" tooltip="The lower the bars, the better."/></sup></h5>
                               <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, new GcAllocationRateExtractor()) } />
                             </div>
            }
            if (benchmarks[0].secondaryMetrics['·gc.alloc.rate.norm']) {
                allocaRateNorm = <div>
                                   <h5>GC Profiler Results <sup><BadgeWithTooltip name="Allocation Rate Norm" tooltip="The lower the bars, the better."/></sup></h5>
                                   <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, new GcAllocationRateNormExtractor()) } />
                                 </div>
            }
            if (benchmarks[0].secondaryMetrics['·gc.count']) {
                gcCount = <div>
                            <h5>GC Profiler Results <sup><BadgeWithTooltip name="GC Count" tooltip="The lower the bars, the better."/></sup></h5>
                            <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, new GcCountExtractor()) } />
                          </div>
            }
            if (benchmarks[0].secondaryMetrics['·gc.time']) {
                gcTime = <div>
                           <h5>GC Profiler Results <sup><BadgeWithTooltip name="GC Time" tooltip="The lower the bars, the better."/></sup></h5>
                           <BarChartView dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, new GcTimeExtractor()) } />
                         </div>
            }
            gcChart = <div>
                        { allocaRate }
                        { allocaRateNorm }
                        { gcCount }
                        { gcTime }
                      </div>
        }
        let separator;
        if (showScores && showGc) {
            separator = <hr/>;
        }

        return (
            <div>
              <div>
                <h3 id={ benchmarkCollection.key }>{ benchmarkCollection.name } <sup>{ benchmarkModeBadges }</sup></h3>
              </div>
              <div style={ { fontSize: '0.90em' } }>
                { scoresChart }
                { gcChart }
              </div>
              <Button bsSize="small" onClick={ ::this.toggleShowJson }>
                Show JSON
              </Button>
              <Collapse in={ this.state.showJson }>
                <div>
                  <pre>{ JSON.stringify(benchmarks, null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.toggleShowJson }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
              { separator }
            </div>
        );
    }
}

