import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'

import BenchmarkCollection from '../../models/BenchmarkCollection.js'
import RunViewFactory from '../RunViewFactory.js'
import SingleRunCollectionView from './SingleRunCollectionView.jsx'

export default class SingleRunViewFactory extends RunViewFactory {

    constructor(options) {
        super();
        this.moreThenOneBenchmarkRun = options.moreThenOneBenchmarkRun;
        this.unselectBenchmarkFunction = options.unselectBenchmarkFunction;
    }

    unselectRun() {
        this.unselectBenchmarkFunction();
    }

    createTopSection(benchmarkCollection:BenchmarkCollection, runSelection) {
        return <div>
                 <Badge>
                   { benchmarkCollection.length }
                 </Badge> different benchmark classes for single run '
                 { runSelection.names[0] }' detected!
                 { " " }
                 { this.moreThenOneBenchmarkRun ? <a onClick={ this.unselectRun.bind(this) }>(Unselect)</a> : "" }
               </div>
    }

    createCollectionView(benchmarkCollection:BenchmarkCollection, runSelection, showScores, showGc) {
        return <SingleRunCollectionView
                                        benchmarkCollection={ benchmarkCollection }
                                        runSelection={ runSelection }
                                        showScores={ showScores }
                                        showGc={ showGc } />
    }

}