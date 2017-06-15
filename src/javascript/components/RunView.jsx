import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'

import AutoAffix from 'react-overlays/lib/AutoAffix';

import PrimaryMetricExtractor from '../models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from '../models/extractor/SecondaryMetricExtractor.js'

var Scroll = require('react-scroll');
var scrollSpy = Scroll.scrollSpy;
var Link = Scroll.Link;
var Element = Scroll.Element;

function createMetricExtractor(metricType) {
    return metricType === 'Score' ? new PrimaryMetricExtractor() : new SecondaryMetricExtractor(metricType);
}

export default class RunView extends React.Component {

    static propTypes = {
        collectionViewFactory: React.PropTypes.object.isRequired,
        benchmarkCollections: React.PropTypes.array.isRequired,
        runSelection: React.PropTypes.object.isRequired,
        selectedMetric: React.PropTypes.string.isRequired,
        selectMetricFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            metricType: props.selectedMetric,
            metricTypeExtractor: createMetricExtractor(props.selectedMetric)
        };
    }

    componentDidMount() {
        scrollSpy.update();
    }

    selectMetricType(event) {
        const metricType = event.target.value;
        this.props.selectMetricFunction(metricType);
        this.setState({
            metricType: metricType,
            metricTypeExtractor: createMetricExtractor(metricType)
        });
    }

    render() {
        const {benchmarkCollections, runSelection, collectionViewFactory} = this.props;

        const filteredBenchmarkCollections = this.state.metricType === 'Score' ? benchmarkCollections : benchmarkCollections.filter(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).find(benchmark => this.state.metricTypeExtractor.hasMetric(benchmark)));
        const benchmarkCollectionViews = filteredBenchmarkCollections.map(benchmarkCollection => <Element name={ benchmarkCollection.key } key={ benchmarkCollection.key }>
                                                                                                   { collectionViewFactory.createCollectionView(benchmarkCollection, runSelection, this.state.metricTypeExtractor) }
                                                                                                 </Element>);

        const metrics = new Set(['Score']);
        benchmarkCollections.forEach(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).forEach(benchmark => {
            Object.keys(benchmark.secondaryMetrics).forEach(metricKey => metrics.add(metricKey));
        }));
        const metricsOptions = Array.from(metrics).map(metric => <option key={ metric } value={ metric }>
                                                                   { metric }
                                                                 </option>);

        return (
            <div style={ { paddingBottom: 250 + 'px' } }>
              <div className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    { /*in order for the children to be properly linked, they should contain scroll-spy elements*/ }
                    { collectionViewFactory.createTopSection(filteredBenchmarkCollections, runSelection, this.state.metricType) }
                    { benchmarkCollectionViews }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <div>
                        <FormGroup controlId="formControlsSelectMultiple" bsSize="small">
                          <InputGroup>
                            <FormControl
                                         componentClass="select"
                                         onChange={ this.selectMetricType.bind(this) }
                                         value={ this.state.metricType }
                                         disabled={ metrics.size < 2 }>
                              { metricsOptions }
                            </FormControl>
                            { metrics.size == 1 &&
                              <InputGroup.Addon>
                                <OverlayTrigger placement="bottom" overlay={ <Tooltip id="tooltip">
                                                                               No secondary metrics found!
                                                                             </Tooltip> }>
                                  <div>
                                    ?
                                  </div>
                                </OverlayTrigger>
                              </InputGroup.Addon> }
                          </InputGroup>
                        </FormGroup>
                        <hr/>
                        <ul className="nav">
                          { filteredBenchmarkCollections.map((benchmarkCollection) => <Link
                                                                                            key={ benchmarkCollection.key }
                                                                                            activeClass="active"
                                                                                            to={ benchmarkCollection.key }
                                                                                            spy={ true }
                                                                                            smooth={ true }
                                                                                            duration={ 500 }
                                                                                            offset={ -200 }>
                                                                                      <li role="presentation">
                                                                                        { benchmarkCollection.name }
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