import React from 'react';

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'


import Toggle from 'react-toggle'
import "react-toggle/style.css"

import EyeIcon from 'react-icons/lib/fa/eye'
import DetailsIcon from 'react-icons/lib/fa/search-plus'
import HelpIcon from 'react-icons/lib/md/help-outline'

import AutoAffix from 'react-overlays/lib/AutoAffix';

import PrimaryMetricExtractor from '../models/extractor/PrimaryMetricExtractor.js'
import SecondaryMetricExtractor from '../models/extractor/SecondaryMetricExtractor.js'
import { getUniqueBenchmarkModesAccrossCollections } from '../functions/parse.js'

import Scrollspy from 'react-scrollspy'

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
        selectBenchmarkSetFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            metricType: props.selectedMetric,
            metricTypeExtractor: createMetricExtractor(props.selectedMetric),
            selectedView: 'summary',
            focusedCollections: new Set(),
            axisScalesSync: true
        };
    }


    selectMetricType(event) {
        const metricType = event.target.value;
        this.props.selectMetricFunction(metricType);
        this.setState({
            metricType: metricType,
            metricTypeExtractor: createMetricExtractor(metricType)
        });
    }

    changeScalesSync() {
        this.setState({
            axisScalesSync: !this.state.axisScalesSync,
        });
    }

    selectView(view) {
        this.setState({
            selectedView: view
        });
    }

    showDetails(benchmarkCollection) {
        this.props.selectBenchmarkSetFunction(benchmarkCollection);
    }

    focusCollection(benchmarkCollectionName) {
        const focusedBenchmarks = new Set(this.state.focusedCollections);
        const alreadyFocused = focusedBenchmarks.has(benchmarkCollectionName);
        if (alreadyFocused) {
            focusedBenchmarks.delete(benchmarkCollectionName);
        } else {
            focusedBenchmarks.add(benchmarkCollectionName);
        }
        this.setState({
            focusedCollections: focusedBenchmarks
        });
    }

    render() {
        const {benchmarkCollections, runSelection, collectionViewFactory} = this.props;
        const {focusedCollections, metricType, metricTypeExtractor, axisScalesSync} = this.state;

        let filteredBenchmarkCollections = metricType === 'Score' ? benchmarkCollections : benchmarkCollections.filter(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).find(benchmark => metricTypeExtractor.hasMetric(benchmark)));
        const sideBarBenchmarks = filteredBenchmarkCollections;
        let synchronizeAxisScalesToggle;
        let dataMax;
        if (focusedCollections.size > 0) {
            filteredBenchmarkCollections = filteredBenchmarkCollections.filter(benchmarkCollection => focusedCollections.has(benchmarkCollection.name));
            const benchmarkModes = getUniqueBenchmarkModesAccrossCollections(filteredBenchmarkCollections, runSelection, metricTypeExtractor);
            if (collectionViewFactory.supportAxisScaleSync() && focusedCollections.size > 1) {
                const axisScalesSyncPossible = benchmarkModes.length == 1;
                const switchTooltip = axisScalesSyncPossible ? ' Sync Axis Scales' : `No Axis Scale syncing possible because of multiple benchmark modes: ${benchmarkModes}!`;
                synchronizeAxisScalesToggle = <div>
                                                <Toggle
                                                        id='scales-sync'
                                                        checked={ axisScalesSyncPossible && axisScalesSync }
                                                        disabled={ !axisScalesSyncPossible }
                                                        onChange={ this.changeScalesSync.bind(this) } />
                                                <OverlayTrigger placement="bottom" overlay={ <Tooltip id="switchTooltip">
                                                                                               { switchTooltip }
                                                                                             </Tooltip> }>
                                                  <label htmlFor='scales-sync'>
                                                    <HelpIcon/>
                                                  </label>
                                                </OverlayTrigger>
                                              </div>
                if (axisScalesSyncPossible && axisScalesSync) {
                    dataMax = 0;
                    filteredBenchmarkCollections.forEach(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).forEach(benchmark => {
                        dataMax = Math.max(dataMax, metricTypeExtractor.extractScore(benchmark));
                        dataMax = Math.max(dataMax, metricTypeExtractor.extractScoreConfidence(benchmark)[1]);
                    }));
                }
            }
        }
        const benchmarkCollectionViews = filteredBenchmarkCollections.map(benchmarkCollection => <section id={ benchmarkCollection.name } key={ benchmarkCollection.key }>
                                                                                                   { collectionViewFactory.createCollectionView(benchmarkCollection, runSelection, metricTypeExtractor, dataMax) }
                                                                                                 </section>);

        const metrics = new Set(['Score']);
        benchmarkCollections.forEach(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).forEach(benchmark => {
            Object.keys(benchmark.secondaryMetrics).forEach(metricKey => metrics.add(metricKey));
        }));
        const metricsOptions = Array.from(metrics).filter(aMetric => aMetric.startsWith('·') || aMetric === 'Score').map(metric => <option key={ metric } value={ metric }>
                                                                                                                                     { metric }
                                                                                                                                   </option>);
        return (
            <div style={ { paddingBottom: 250 + 'px' } }>
              <div className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    <Grid>
                      <Row className="show-grid">
                        <Col xs={ 12 } md={ 8 }>
                        { collectionViewFactory.createTopSection(filteredBenchmarkCollections, runSelection, metricType) }
                        </Col>
                        <Col xs={ 6 } md={ 4 }>
                        { synchronizeAxisScalesToggle }
                        </Col>
                      </Row>
                    </Grid>
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
                                         value={ metricType }
                                         disabled={ metrics.size < 2 }>
                              { metricsOptions }
                            </FormControl>
                            { metrics.size == 1 &&
                              <InputGroup.Addon>
                                <OverlayTrigger placement="bottom" overlay={ <Tooltip id="tooltip">
                                                                               No secondary metrics found!
                                                                             </Tooltip> }>
                                  <div>
                                    <HelpIcon/>
                                  </div>
                                </OverlayTrigger>
                              </InputGroup.Addon> }
                          </InputGroup>
                        </FormGroup>
                        <hr/>
                        <ul className="bs-docs-sidenav nav">
                          <li className={ this.state.selectedView === 'summary' ? 'active' : '' }>
                            <div>
                              <a onClick={ this.selectView.bind(this, 'summary') }>Summary</a>
                            </div>
                            <ul className="nav">
                              <li>
                                <div>
                                  <a>Improvements</a>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <a>Regressions</a>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <a>Unchanged</a>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className={ this.state.selectedView === 'benchmarks' ? 'active' : '' }>
                            <div>
                              <a onClick={ this.selectView.bind(this, 'benchmarks') }>Benchmarks</a>
                            </div>
                            <Scrollspy
                                       className="nav"
                                       items={ sideBarBenchmarks.map(benchmarkCollection => benchmarkCollection.name) }
                                       currentClassName="active"
                                       offset={ -90 }>
                              { sideBarBenchmarks.map((benchmarkCollection) => <li key={ benchmarkCollection.key }>
                                                                                 <div>
                                                                                   <span onClick={ this.focusCollection.bind(this, benchmarkCollection.name) } className={ focusedCollections.has(benchmarkCollection.name) ? ' focused' : '' + ' clickable' }><sup><EyeIcon /></sup>{ ' ' }</span>
                                                                                   <span onClick={ this.showDetails.bind(this, benchmarkCollection) } className="clickable"><sup><DetailsIcon /></sup>{ ' ' }</span>
                                                                                   <a href={ '#' + benchmarkCollection.name }>
                                                                                     { benchmarkCollection.name }
                                                                                   </a>
                                                                                 </div>
                                                                               </li>
                                
                                ) }
                            </Scrollspy>
                          </li>
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