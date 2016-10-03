import React, { Component } from 'react';
import { Scrollspy } from 'react-scrollspy';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import BenchmarkReport from './BenchmarkReport.jsx';

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

function benchmarkToPackage(item) {
    return item.benchmark.split('.').reverse()[2];
}

function benchmarkToClassName(item) {
    return item.benchmark.split('.').reverse()[1];
}

export default class BenchmarkList extends Component {

    static propTypes = {
        benchmarks: React.PropTypes.array.isRequired,
    };

    render() {

        const benchmarks = this.props.benchmarks;
        console.debug(benchmarks.length);

        const groupByPackage = groupBy(benchmarks, benchmarkToPackage);
        console.debug(groupByPackage.length);
        groupByPackage.forEach(function(element) {
            console.debug(element)
        });

        const groupByClassName = groupBy(benchmarks, benchmarkToClassName);
        console.debug(groupByClassName.length);
        groupByClassName.forEach(function(element) {
            console.debug(element)
        });

        return (
            <div>
              <div ref="main" className="container bs-docs-container">
                <div className="row">
                  <p>
                    { groupByClassName.length } different Benchmark classes detected!
                  </p>
                  <div className="col-md-10" role="main">
                    { groupByClassName.map((element) => <BenchmarkReport key={ element.key } name={ element.key } methodBenchmarks={ element.values } />
                      ) }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar-holder">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <Scrollspy items={ groupByClassName.map((element) => element.key) } currentClassName="is-current">
                        { groupByClassName.map((element) => <li key={ element.key }>
                                                              <a href={ "#" + element.key }>
                                                                { element.key }
                                                              </a>
                                                            </li>
                          ) }
                      </Scrollspy>
                    </AutoAffix>
                  </div>
                </div>
              </div>
            </div>
            );
    }
}

