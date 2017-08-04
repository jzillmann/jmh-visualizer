import React from 'react';

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import RunSelection from '../models/RunSelection.js'
import MainNavi from './MainNavi.jsx';
import MainView from './MainView.jsx';
import TocSidebar from './TocSidebar.jsx';

import BackIcon from 'react-icons/lib/md/keyboard-backspace'
import PontingHandIcon from 'react-icons/lib/fa/hand-o-right'

import Dropzone from './Dropzone.jsx';
import RunView from './RunView.jsx'
import DetailView from './DetailView.jsx'


import SingleRunViewFactory from './single/SingleRunViewFactory.jsx'
import SingleDetailViewFactory from './single/SingleDetailViewFactory.jsx'

import TwoRunViewFactory from './two/TwoRunViewFactory.jsx'
import TwoDetailViewFactory from './two/TwoDetailViewFactory.jsx'


import FileUploader from '../functions/FileUploader.js'
import { parseBenchmarkCollections } from '../functions/parse.js'
import { blue } from '../functions/colors.js'

export default class App extends React.Component {

    static propTypes = {
        appState: React.PropTypes.object.isRequired,
    };

    render() {
        const {appState} = this.props;
        const selectedBenchmarkRuns = appState.selectedBenchmarks();

        var elements = [<div key="keyA">
                          a++
                        </div>,
            <div key="divB">
              b++
            </div>];
        var upperControls = null;
        upperControls = <div>
                          <a onClick={ appState.goBack }>
                            <BackIcon/> Back..</a>
                          <br/>
                        </div>
        var categories = ['Summary', 'Benchmarks'];
        var activeCategory = 'Benchmarks';
        var selectCategoryFunction = (category) => alert(category);
        var elementIds = elements.map(element => element.key);
        var elementNames = ['A', 'B'];


        var mainView;
        if (selectedBenchmarkRuns.length == 0) {
            const fileUploader = new FileUploader(appState.uploadBenchmarkRuns);
            elements = [<Dropzone fileUploader={ fileUploader } />];
            upperControls = <div style={ { whiteSpace: 'nowrap' } }>
                              <div>
                                <div className="btn btn-default" style={ { position: 'relative' } }>
                                  Open File Dialog
                                  <input
                                         type="file"
                                         multiple
                                         accept=".json"
                                         onChange={ (event) => fileUploader.upload([...event.target.files]) }
                                         style={ { opacity: 0.0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 } } />
                                </div>
                              </div>
                              <br/>
                              <div>
                                <PontingHandIcon/>
                                { ' ' }
                                <a onClick={ () => appState.initBenchmarkRuns(appState.examples.singleRunExample) }>Load Single Run Example</a>
                              </div>
                              <div>
                                <PontingHandIcon/>
                                { ' ' }
                                <a onClick={ () => appState.initBenchmarkRuns(appState.examples.twoRunsExample) }>Load Two Run Example</a>
                              </div>
                            </div>
            categories = [];
            elementIds = [];
            elementNames = [];
        } else if (selectedBenchmarkRuns.length > 2) {
            alert("More then 2 runs not supported!");
        } else {
            if (appState.uploadedBenchmarks) {
                window.onbeforeunload = function() {
                    return "You will loose the current benchmarks.";
                };
            }

            if (appState.selectedBenchmarkCollection) {
                if (selectedBenchmarkRuns.length == 1) {
                    const benchmarkRun = selectedBenchmarkRuns[0];
                    const runSelection = new RunSelection([benchmarkRun.name], [0]);
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const metricViewFactory = new SingleDetailViewFactory();
                    mainView = <DetailView
                                           benchmarkCollection={ appState.selectedBenchmarkCollection }
                                           benchmarkCollections={ benchmarkCollections }
                                           runSelection={ runSelection }
                                           goBackFunction={ appState.goBack }
                                           selectBenchmarkCollectionFunction={ appState.selectBenchmarkCollection }
                                           metricViewFactory={ metricViewFactory } />
                } else if (selectedBenchmarkRuns.length == 2) {
                    const runSelection = new RunSelection(selectedBenchmarkRuns.map(benchmarkRun => benchmarkRun.name), [0, 1]);
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const metricViewFactory = new TwoDetailViewFactory();
                    mainView = <DetailView
                                           benchmarkCollection={ appState.selectedBenchmarkCollection }
                                           benchmarkCollections={ benchmarkCollections }
                                           runSelection={ runSelection }
                                           goBackFunction={ appState.goBack }
                                           selectBenchmarkCollectionFunction={ appState.selectBenchmarkCollection }
                                           metricViewFactory={ metricViewFactory } />
                }

            } else {
                if (selectedBenchmarkRuns.length == 1) {
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const benchmarkRun = selectedBenchmarkRuns[0];
                    const collectionViewFactory = new SingleRunViewFactory({
                        selectBenchmarkCollectionFunction: appState.selectBenchmarkCollection
                    });
                    const runSelection = new RunSelection([benchmarkRun.name], [0]);
                    mainView = <RunView
                                        benchmarkCollections={ benchmarkCollections }
                                        runSelection={ runSelection }
                                        collectionViewFactory={ collectionViewFactory }
                                        selectedMetric={ appState.selectedMetric }
                                        selectMetricFunction={ appState.selectMetric }
                                        selectBenchmarkSetFunction={ appState.selectBenchmarkCollection } />
                } else if (selectedBenchmarkRuns.length == 2) {
                    const benchmarkCollections = parseBenchmarkCollections(selectedBenchmarkRuns);
                    const collectionViewFactory = new TwoRunViewFactory({
                        benchmarkRuns: selectedBenchmarkRuns,
                        selectBenchmarkCollectionFunction: appState.selectBenchmarkCollection
                    });
                    const runSelection = new RunSelection(selectedBenchmarkRuns.map(benchmarkRun => benchmarkRun.name), [0, 1]);
                    mainView = <RunView
                                        benchmarkCollections={ benchmarkCollections }
                                        runSelection={ runSelection }
                                        collectionViewFactory={ collectionViewFactory }
                                        selectedMetric={ appState.selectedMetric }
                                        selectMetricFunction={ appState.selectMetric }
                                        selectBenchmarkSetFunction={ appState.selectBenchmarkCollection } />
                }
            }
        }

        console.debug(mainView);

        return (
            <div>
              <MainNavi runs={ appState.benchmarkRuns } runSelection={ appState.benchmarkRunSelection } selectRunsFunction={ appState.selectBenchmarkRuns } />
              <div style={ { paddingBottom: 20 + 'px' } }>
                <Grid fluid={ true }>
                  <Row>
                    <Col xs={ 14 } md={ 10 }>
                    <MainView elements={ elements } />
                    </Col>
                    <Col xs={ 4 } md={ 2 }>
                    <TocSidebar
                                upperControls={ upperControls }
                                categories={ categories }
                                activeCategory={ activeCategory }
                                selectCategoryFunction={ selectCategoryFunction }
                                elementIds={ elementIds }
                                elementNames={ elementNames } />
                    </Col>
                  </Row>
                </Grid>
              </div>
            </div>
        );
    }

}


