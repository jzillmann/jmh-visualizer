import React from 'react';

import BackIcon from 'react-icons/lib/md/keyboard-backspace'
import AutoAffix from 'react-overlays/lib/AutoAffix';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

import PrimaryMetricExtractor from '../models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from '../models/extractor/SecondaryMetricExtractor.js'

import { getUniqueBenchmarkModes } from '../functions/parse.js'
import { createMetricBadge } from './commons.jsx';

var Scroll = require('react-scroll');
var scrollSpy = Scroll.scrollSpy;
var Link = Scroll.Link;
var Element = Scroll.Element;

export default class DetailView extends React.Component {

    static propTypes = {
        benchmarkCollection: React.PropTypes.object.isRequired,
        benchmarkCollections: React.PropTypes.array.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        goBackFunction: React.PropTypes.func.isRequired,
        selectBenchmarkCollectionFunction: React.PropTypes.func.isRequired,
        metricViewFactory: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        scrollSpy.update();
    }

    goBack() {
        this.props.goBackFunction();
    }

    selectBenchmarkCollection(event) {
        const collectionIndex = event.target.value;
        const benchmarkCollection = this.props.benchmarkCollections[collectionIndex];
        this.props.selectBenchmarkCollectionFunction(benchmarkCollection);
    }

    render() {
        const {benchmarkCollection, benchmarkCollections, runSelection, metricViewFactory} = this.props;
        const primaryMetricExtractor = new PrimaryMetricExtractor();

        const metrics = Array.from(benchmarkCollection.benchmarks(runSelection).reduce((aggregate, benchmark) => {
            Object.keys(benchmark.secondaryMetrics).forEach(metricKey => aggregate.add(metricKey));
            return aggregate;
        }, new Set()));

        const metricViews = metrics.map(secondaryMetric => <Element name={ secondaryMetric } key={ secondaryMetric }>
                                                             <h4>{ secondaryMetric + ' ' }<sup>{ createMetricBadge(secondaryMetric) }</sup></h4>
                                                             { metricViewFactory.createMetricView(benchmarkCollection, runSelection, new SecondaryMetricExtractor(secondaryMetric)) }
                                                           </Element>);

        const benchmarkModes = getUniqueBenchmarkModes(benchmarkCollection, runSelection, primaryMetricExtractor);
        const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));
        metrics.unshift('Score');
        metricViews.unshift(<Element name={ 'Score' } key={ 'Score' }>
                              <h4>Score <sup>{ benchmarkModeBadges }</sup></h4>
                              { metricViewFactory.createMetricView(benchmarkCollection, runSelection, primaryMetricExtractor) }
                            </Element>);

        const benchmarkCollectionOptions = benchmarkCollections.map((collection, index) => <option key={ collection.key } value={ index }>
                                                                                             { collection.name }
                                                                                           </option>);
        const selectedCollection = benchmarkCollections.findIndex(collection => collection.key === benchmarkCollection.key);
        return (
            <div style={ { paddingBottom: 250 + 'px' } }>
              <div className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    <h3>{ benchmarkCollection.key }</h3>
                    <br/>
                    <div style={ { fontSize: '0.90em' } }>
                      { metricViews }
                    </div>
                  </div>
                  <div className="col-md-2 bs-docs-sidebar">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <div>
                        <a onClick={ this.goBack.bind(this) }>
                          <BackIcon/> Back..</a>
                        <br/>
                        <br/>
                        <FormGroup bsSize="small" controlId="theForm">
                          <InputGroup>
                            <FormControl componentClass="select" onChange={ this.selectBenchmarkCollection.bind(this) } defaultValue={ selectedCollection }>
                              { benchmarkCollectionOptions }
                            </FormControl>
                          </InputGroup>
                        </FormGroup>
                        <hr/>
                        <ul className="nav">
                          { metrics.map((secondaryMetric) => <Link
                                                                   key={ secondaryMetric }
                                                                   activeClass="active"
                                                                   to={ secondaryMetric }
                                                                   spy={ true }
                                                                   smooth={ true }
                                                                   duration={ 500 }
                                                                   offset={ -200 }>
                                                             <li role="presentation">
                                                               { secondaryMetric }
                                                             </li>
                                                             </Link>
                            ) }
                        </ul>
                      </div>
                    </AutoAffix>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}