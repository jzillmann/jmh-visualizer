import React, { Component } from 'react';
import Badge from 'react-bootstrap/lib/Badge'

import MainView from './MainView.jsx';
import TwoRunsClassChart from './TwoRunsClassChart.jsx';


import { parseMultiRunBenchmarkMap } from '../functions/parse.jsx'

var Scroll = require('react-scroll');

var Element = Scroll.Element;

export default class TwoRunsView extends Component {

    static propTypes = {
        benchmarkRuns: React.PropTypes.array.isRequired,
        reorderFunction: React.PropTypes.func.isRequired,
        selectFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            reorderFunction: props.reorderFunction,
            selectFunction: props.selectFunction,
        };
    }


    flipRuns() {
        this.state.reorderFunction((benchmarkRuns) => benchmarkRuns.reverse());
    }

    showRun(name) {
        this.state.selectFunction(name);
    }

    showSecond() {}


    render() {
        const multiRunBenchmarkMap = parseMultiRunBenchmarkMap(this.props.benchmarkRuns);
        const runNames = this.props.benchmarkRuns.map((run) => run.name);
        return (
            <MainView benchmarkClasses={ [... multiRunBenchmarkMap.keys()] }>
              Comparing
              { ' ' }
              <Badge>
                { multiRunBenchmarkMap.size }
              </Badge> different Benchmark classes for 2 runs: [<i><a onClick={ () => this.showRun(this.props.benchmarkRuns[0].name) }>{ this.props.benchmarkRuns[0].name }</a>, <a onClick={ () => this.showRun(this.props.benchmarkRuns[1].name) }>{ this.props.benchmarkRuns[1].name }</a></i>]
              (
              <a onClick={ this.flipRuns.bind(this) }>Flip Runs</a>)
              { [...multiRunBenchmarkMap.entries()].map(([className, methodMap]) => <Element name={ className } key={ className }>
                                                                                      <TwoRunsClassChart name={ className } runNames={ runNames } methodMap={ methodMap } />
                                                                                    </Element>
                ) }
            </MainView>
        );
    }
}

