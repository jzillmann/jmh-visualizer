import React, { Component } from 'react';

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

export default class Benchmarks extends Component {

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
              <pre className="container">{ JSON.stringify(groupByClassName, null, "\t") }</pre>
            </div>
            );
    }
}

