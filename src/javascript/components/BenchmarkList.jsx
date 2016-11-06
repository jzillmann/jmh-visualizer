import React, { Component } from 'react';
import Badge from 'react-bootstrap/lib/Badge'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import AutoAffix from 'react-overlays/lib/AutoAffix';
import BenchmarkReport from './BenchmarkReport.jsx';
import Waypoint from 'react-waypoint';

function groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
        let v = key instanceof Function ? key(x) : x[key];
        let el = rv.find((r) => r && r.key === v);
        if (el) {
            el.values.push(x);
        } else {
            rv.push({
                key: v,
                values: [x]
            });
        }
        return rv;
    }, []);
}

// function benchmarkToPackage(item) {
//     return item.benchmark.split('.').reverse()[2];
// }

function benchmarkToClassName(item) {
    return item.benchmark.split('.').reverse()[1];
}

export default class BenchmarkList extends Component {

    static propTypes = {
        benchmarks: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        const benchmarks = this.props.benchmarks;
        const groupByClassName = groupBy(benchmarks, benchmarkToClassName);

        var selectedBenchmarkClassName;
        const {hash} = window.location;
        if (hash == null || hash == '') {
            selectedBenchmarkClassName = groupByClassName[0].key
        } else {
            selectedBenchmarkClassName = hash.substring(1)
        }

        this.state = {
            currentBenchmarkClassName: selectedBenchmarkClassName,
            benchmarksGroupedByClassName: groupByClassName,
            scrollTrackingDisabled: false
        };
        this.setCurrentBenchmark = this.setCurrentBenchmark.bind(this);
        this.handleNavItemSelect = this.handleNavItemSelect.bind(this);
    }


    setCurrentBenchmark(benchmarkClassName) {
        const newActive = document.getElementById('a_' + benchmarkClassName).parentElement;
        const oldActive = document.getElementById('a_' + this.state.currentBenchmarkClassName).parentElement;


        if (newActive != oldActive) {
            newActive.className = 'active'
            oldActive.className = ''
            this.setState({
                currentBenchmarkClassName: benchmarkClassName
            });
        }
    }

    changeWaypoint(benchmarkClassName) {
        if (!this.state.scrollTrackingDisabled) {
            this.setCurrentBenchmark(benchmarkClassName)
        }
    }

    renderWaypoint(benchmarkClassName) {
        return (
            <Waypoint
                      onEnter={ ({previousPosition}) => (
                                previousPosition === Waypoint.above && this.changeWaypoint(benchmarkClassName, 'enter')
                                ) }
                      onLeave={ ({currentPosition}) => (
                                currentPosition === Waypoint.above && this.changeWaypoint(benchmarkClassName, 'leave')
                                ) }
                      topOffset={ '36%' }
                      bottomOffset={ '0%' } />
            );
    }

    handleNavItemSelect(key, e) {
        const link = e.target.href;
        const benchmarkClassName = link.substring(link.indexOf('#') + 1);
        this.setCurrentBenchmark(benchmarkClassName, 'click')
        this.setState({
            scrollTrackingDisabled: true
        })
        window.location = e.target.href;

        const component = this;
        setTimeout(function() {
            component.setState({
                scrollTrackingDisabled: false
            })
        }, 250);
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
                    </Badge> different Benchmark classes detected!
                    { this.state.benchmarksGroupedByClassName.map((element) => <div key={ element.key }>
                                                                                 { this.renderWaypoint(element.key) }
                                                                                 <BenchmarkReport name={ element.key } methodBenchmarks={ element.values } />
                                                                               </div>
                      ) }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar-holder">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <div className="bs-docs-sidebar hidden-print" role="complementary">
                        <Nav className="bs-docs-sidenav" activeHref={ "#" + this.state.currentBenchmarkClassName } onSelect={ this.handleNavItemSelect }>
                          { this.state.benchmarksGroupedByClassName.map((element) => <NavItem id={ 'a_' + element.key } href={ "#" + element.key } key={ element.key }>
                                                                                       { element.key }
                                                                                     </NavItem>
                            ) }
                        </Nav>
                      </div>
                    </AutoAffix>
                  </div>
                </div>
              </div>
            </div>
            );
    }
}

