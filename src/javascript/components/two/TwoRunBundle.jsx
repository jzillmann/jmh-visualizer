import React from 'react';
import PropTypes from 'prop-types';

import Collapse from 'react-bootstrap/lib/Collapse'
import Button from 'react-bootstrap/lib/Button'

import BundleHeader from 'components/BundleHeader.jsx'
import DiffBarChartView from 'components/two/DiffBarChartView.jsx'
import { createDataSetFromBenchmarks } from 'components/two/DiffBarDataSet.js'

// The view for a bunch of benchmarks, usually all of a benchmark class
export default class TwoRunBundle extends React.Component {

  static propTypes = {
    runNames: PropTypes.array.isRequired,
    benchmarkBundle: PropTypes.object.isRequired,
    metricExtractor: PropTypes.object.isRequired,
    detailBenchmarkBundleFunction: PropTypes.func.isRequired
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
    const { runNames, benchmarkBundle, metricExtractor, detailBenchmarkBundleFunction } = this.props;

    const benchmarks1 = benchmarkBundle.benchmarksFromRun(0);
    const benchmarks2 = benchmarkBundle.benchmarksFromRun(1);
    let newBenchmarks = [];
    let removedBenchmarks = [];
    let hasSomethingToCompare = false;
    benchmarkBundle.benchmarkMethods.forEach(benchmarkMethod => {
      if (benchmarkMethod.benchmarks[0] === null || !metricExtractor.hasMetric(benchmarkMethod.benchmarks[0])) {
        newBenchmarks.push(benchmarkMethod.name);
      } else if (benchmarkMethod.benchmarks[1] === null || !metricExtractor.hasMetric(benchmarkMethod.benchmarks[1])) {
        removedBenchmarks.push(benchmarkMethod.name);
      } else {
        hasSomethingToCompare = true;
      }
    });

    var scoresChart = hasSomethingToCompare ? <DiffBarChartView runNames={ runNames } dataSet={ createDataSetFromBenchmarks(benchmarkBundle, metricExtractor) } metricExtractor={ metricExtractor } /> : null;

    return (
      <div>
        <BundleHeader benchmarkBundle={ benchmarkBundle } metricExtractor={ metricExtractor } detailBenchmarkBundleFunction={ detailBenchmarkBundleFunction } />
        <div style={ { fontSize: '0.90em' } }>
          { scoresChart }
        </div>
        { removedBenchmarks.length > 0 &&
          <div>
            <b>Removed benchmarks:</b>
            { ' ' + removedBenchmarks.join(', ') }
            <br />
            <br />
          </div> }
        { newBenchmarks.length > 0 &&
          <div>
            <b>New benchmarks:</b>
            { ' ' + newBenchmarks.join(', ') }
            <br />
            <br />
          </div> }
        <Button bsSize="small" onClick={ this.toggleShowJson1.bind(this) } active={ this.state.showJson1 }>
          Show JSON 1
              </Button>
        <Button bsSize="small" onClick={ this.toggleShowJson2.bind(this) } active={ this.state.showJson2 } >
          Show JSON 2
              </Button>
        <Collapse in={ this.state.showJson1 }>
          <div>
            <pre>{ JSON.stringify(benchmarks1, null, '\t') }</pre>
            <Button bsStyle="primary" onClick={ this.toggleShowJson1.bind(this) }>
              Collapse
                  </Button>
          </div>
        </Collapse >
        <Collapse in={ this.state.showJson2 }>
          <div>
            <pre>{ JSON.stringify(benchmarks2, null, '\t') }</pre>
            <Button bsStyle="primary" onClick={ this.toggleShowJson2.bind(this) }>
              Collapse
                  </Button>
          </div>
        </Collapse >
      </div >
    );
  }
}

