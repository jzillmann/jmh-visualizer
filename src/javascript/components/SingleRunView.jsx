import React, { Component } from 'react';
import Badge from 'react-bootstrap/lib/Badge'
import AutoAffix from 'react-overlays/lib/AutoAffix';

import SingleRunClassChart from './SingleRunClassChart.jsx';
import { groupBy } from '../functions/util.js'

var Scroll = require('react-scroll');
var Link = Scroll.Link;
var Element = Scroll.Element;
var scrollSpy = Scroll.scrollSpy;



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

        const benchmarkRun = this.props.benchmarkRun;
        const groupByClassName = groupBy(benchmarkRun.benchmarks, benchmarkToClassName);

        this.state = {
            benchmarksGroupedByClassName: groupByClassName,
            unselectBenchmarkFunction: this.props.unselectBenchmarkFunction,
        };
    }

    unselectRun() {
        this.state.unselectBenchmarkFunction();
    }

    componentDidMount() {
        scrollSpy.update();
    }

    shouldComponentUpdate() {
        //TODO check for changed benchmarks (in case we can have changed benchmarks)
        return false;
    }

    render() {
        return (
            <div style={ { paddingBottom: 250 + 'px' } }>
              <div ref="main" className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    <Badge>
                      { this.state.benchmarksGroupedByClassName.length }
                    </Badge> different benchmark classes for single run '
                    { this.props.benchmarkRun.name }' detected!
                    { " " }
                    { this.props.filteredBenchmarks ? <a onClick={ this.unselectRun.bind(this) }>(Unselect)</a> : "" }
                    { this.state.benchmarksGroupedByClassName.map((element) => <Element name={ element.key } key={ element.key }>
                                                                                 <SingleRunClassChart name={ element.key } methodBenchmarks={ element.values } />
                                                                               </Element>
                      ) }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <ul className="nav">
                        { this.state.benchmarksGroupedByClassName.map((element) => <Link
                                                                                         key={ element.key }
                                                                                         activeClass="active"
                                                                                         to={ element.key }
                                                                                         spy={ true }
                                                                                         smooth={ true }
                                                                                         duration={ 500 }
                                                                                         offset={ -200 }>
                                                                                   <li role="presentation">
                                                                                     { element.key }
                                                                                   </li>
                                                                                   </Link>
                          ) }
                      </ul>
                    </AutoAffix>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

