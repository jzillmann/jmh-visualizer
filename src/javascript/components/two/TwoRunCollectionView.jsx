import React from 'react';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'

import BadgeWithTooltip from '../lib/BadgeWithTooltip.jsx'
import DiffBarChartView from './DiffBarChartView.jsx'

import ScoreExtractor from '../../models/extractor/ScoreExtractor.js'
import GcAllocationRateExtractor from '../../models/extractor/GcAllocationRateExtractor.js'

import { createDataSetFromBenchmarks } from './DiffBarDataSet.js'
import { getUniqueBenchmarkModes } from '../../functions/parse.js'
import { createBadge } from '../BenchmarkModeBadge.jsx';

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class TwoRunCollectionView extends React.Component {

    static propTypes = {
        benchmarkCollection: React.PropTypes.object.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        showScores: React.PropTypes.bool.isRequired,
        showGc: React.PropTypes.bool.isRequired,
    };

    state = {
        showJson1: false,
        showJson2: false
    }

    toggleShowJson1() {
        this.setState({
            showJson1: !this.state.showJson1,
            showJson2: false
        });
    }

    toggleShowJson2() {
        this.setState({
            showJson1: false,
            showJson2: !this.state.showJson2
        });
    }


    render() {
        const {benchmarkCollection, runSelection, showScores, showGc} = this.props;

        const benchmarks1 = benchmarkCollection.benchmarks(runSelection.subSelection(0));
        const benchmarks2 = benchmarkCollection.benchmarks(runSelection.subSelection(1));
        const benchmarkModes = getUniqueBenchmarkModes(benchmarkCollection, runSelection);
        const benchmarkModeBadges = benchmarkModes.map(mode => createBadge(mode));
        let newBenchmarks = [];
        let removedBenchmarks = [];
        benchmarkCollection.benchmarkResults.forEach(benchmarkResult => {
            if (benchmarkResult.benchmarks[0] === null) {
                newBenchmarks.push(benchmarkResult.name);
            } else if (benchmarkResult.benchmarks[1] === null) {
                removedBenchmarks.push(benchmarkResult.name);
            }
        });

        var scoresChart;
        var gcChart;
        if (showScores) {
            scoresChart = <DiffBarChartView runNames={ runSelection.names } dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, new ScoreExtractor()) } />
        }
        if (showGc && benchmarks1[0] && benchmarks1[1]) {
            let allocaRate;
            if (benchmarks1[0].secondaryMetrics['·gc.alloc.rate']) {
                allocaRate = <div>
                               <h5>GC Profiler Results <sup><BadgeWithTooltip name="Allocation Rate" tooltip="The lower the bars, the better."/></sup></h5>
                               <DiffBarChartView runNames={ runSelection.names } dataSet={ createDataSetFromBenchmarks(benchmarkCollection, runSelection, new GcAllocationRateExtractor()) } />
                             </div>
            }
            gcChart = <div>
                        { allocaRate }
                      </div>
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
              { removedBenchmarks.length > 0 &&
                <div>
                  <b>Removed benchmarks:</b>
                  { ' ' + removedBenchmarks.join(', ') }
                  <br/>
                  <br/>
                </div> }
              { newBenchmarks.length > 0 &&
                <div>
                  <b>New benchmarks:</b>
                  { ' ' + newBenchmarks.join(', ') }
                  <br/>
                  <br/>
                </div> }
              <Button bsSize="small" onClick={ ::this.toggleShowJson1 } active={ this.state.showJson1 }>
                Show JSON 1
              </Button>
              <Button bsSize="small" onClick={ ::this.toggleShowJson2 } active={ this.state.showJson2 }>
                Show JSON 2
              </Button>
              <Collapse in={ this.state.showJson1 }>
                <div>
                  <pre>{ JSON.stringify(benchmarks1, null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.toggleShowJson1 }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
              <Collapse in={ this.state.showJson2 }>
                <div>
                  <pre>{ JSON.stringify(benchmarks2, null, '\t') }</pre>
                  <Button bsStyle="primary" onClick={ ::this.toggleShowJson2 }>
                    Collapse
                  </Button>
                </div>
              </Collapse>
            </div>
        );
    }
}

