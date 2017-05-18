import React, { Component } from 'react';
import Badge from 'react-bootstrap/lib/Badge'

import MainView from './MainView.jsx';
import SingleRunClassChart from './SingleRunClassChart.jsx';
import { groupBy } from '../functions/util.js'

var Scroll = require('react-scroll');
var Element = Scroll.Element;

// function benchmarkToPackage(item) {
//     return item.benchmark.split('.').reverse()[2];
// }

function benchmarkToClassName(item) {
    return item.benchmark.split('.').reverse()[1];
}

export default class SingleRunView extends Component {

    static propTypes = {
        benchmarkRun: React.PropTypes.object.isRequired,
        filteredBenchmarks: React.PropTypes.bool.isRequired,
        unselectBenchmarkFunction: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            unselectBenchmarkFunction: this.props.unselectBenchmarkFunction,
        };
    }

    unselectRun() {
        this.state.unselectBenchmarkFunction();
    }

    shouldComponentUpdate() {
        //TODO check for changed benchmarks (in case we can have changed benchmarks)
        return false;
    }

    render() {
        const benchmarkRun = this.props.benchmarkRun;
        const groupByClassName = groupBy(benchmarkRun.benchmarks, benchmarkToClassName);
        return (
            <MainView benchmarkClasses={ groupByClassName.map(item => item.key) }>
              <Badge>
                { groupByClassName.length }
              </Badge> different benchmark classes for single run '
              { this.props.benchmarkRun.name }' detected!
              { " " }
              { this.props.filteredBenchmarks ? <a onClick={ this.unselectRun.bind(this) }>(Unselect)</a> : "" }
              { groupByClassName.map((element) => <Element name={ element.key } key={ element.key }>
                                                    <SingleRunClassChart name={ element.key } methodBenchmarks={ element.values } />
                                                  </Element>) }
            </MainView>
        );
    }
}

