import React, { Component } from 'react';
import Badge from 'react-bootstrap/lib/Badge'
import TwoRunsClassChart from './TwoRunsClassChart.jsx';
import AutoAffix from 'react-overlays/lib/AutoAffix';

import { parseMultiRunBenchmarkMap } from '../functions/parse.jsx'

var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Element = Scroll.Element;
var scrollSpy = Scroll.scrollSpy;

export default class TwoRunsView extends Component {

    static propTypes = {
        benchmarkRuns: React.PropTypes.array.isRequired,
        reorderFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            reorderFunction: props.reorderFunction,
        };
    }

    componentDidMount() {
        scrollSpy.update();
    }

    flipRuns() {
        this.state.reorderFunction((benchmarkRuns) => benchmarkRuns.reverse());
    }


    render() {
        const multiRunBenchmarkMap = parseMultiRunBenchmarkMap(this.props.benchmarkRuns);
        const runNames = this.props.benchmarkRuns.map((run) => run.name);
        return (
            <div style={ { paddingBottom: 250 + 'px' } }>
              <div ref="main" className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    Comparing
                    { ' ' }
                    <Badge>
                      { multiRunBenchmarkMap.size }
                    </Badge> different Benchmark classes for 2 runs: [<i>{ this.props.benchmarkRuns.map((element) => element.name).join(', ') }</i>] (<a onClick={ this.flipRuns.bind(this) }>Flip Runs</a>)
                    { [...multiRunBenchmarkMap.entries()].map(([className, methodMap]) => <Element name={ className } key={ className }>
                                                                                            <TwoRunsClassChart name={ className } runNames={ runNames } methodMap={ methodMap } />
                                                                                          </Element>
                      ) }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <ul className="nav">
                        { [...multiRunBenchmarkMap.keys()].map((className) => <Link
                                                                                    key={ className }
                                                                                    activeClass="active"
                                                                                    to={ className }
                                                                                    spy={ true }
                                                                                    smooth={ true }
                                                                                    duration={ 500 }
                                                                                    offset={ -200 }>
                                                                              <li role="presentation">
                                                                                { className }
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

