import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import BenchmarkCollection from '../../models/BenchmarkCollection.js'
import RunViewFactory from '../RunViewFactory.js'
import TwoRunCollectionView from './TwoRunCollectionView.jsx'

export default class TwoRunViewFactory extends RunViewFactory {

    constructor(options) {
        super();
        this.benchmarkRuns = options.benchmarkRuns;
        this.reorderFunction = options.reorderFunction;
        this.selectFunction = options.selectFunction;
    }

    flipRuns() {
        this.reorderFunction((benchmarkRuns) => benchmarkRuns.reverse());
    }

    showRun(name) {
        this.selectFunction(name);
    }

    createTopSection(benchmarkCollection:BenchmarkCollection, runSelection) {
        return <div>
                 Comparing
                 { ' ' }
                 <Badge>
                   { benchmarkCollection.length }
                 </Badge> different Benchmark classes for 2 runs: [<i><a onClick={ () => this.showRun(runSelection.names[0]) }>{ runSelection.names[0] }</a>, <a onClick={ () => this.showRun(runSelection.names[1]) }>{ runSelection.names[1] }</a></i>]
                 (
                 <a onClick={ this.flipRuns.bind(this) }>Flip Runs</a>)
               </div>
    }

    createCollectionView(benchmarkCollection:BenchmarkCollection, runSelection, showScores, showGc) {
        return <TwoRunCollectionView
                                     benchmarkCollection={ benchmarkCollection }
                                     runSelection={ runSelection }
                                     showScores={ showScores }
                                     showGc={ showGc } />
    }

}