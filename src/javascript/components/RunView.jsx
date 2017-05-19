import React from 'react';
import ReactDOM from 'react-dom';

import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'

import AutoAffix from 'react-overlays/lib/AutoAffix';

var Scroll = require('react-scroll');
var scrollSpy = Scroll.scrollSpy;
var Link = Scroll.Link;
var Element = Scroll.Element;

export default class RunView extends React.Component {

    static propTypes = {
        collectionViewFactory: React.PropTypes.object.isRequired,
        benchmarkCollections: React.PropTypes.array.isRequired,
        runSelection: React.PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            showScores: true,
            showGc: false,
        };
    }

    componentDidMount() {
        scrollSpy.update();
    }

    toogleScores() {
        if (this.state.showScores && !this.state.showGc) {
            this.setState({
                showScores: false,
                showGc: true
            });
        } else {
            this.setState({
                showScores: !this.state.showScores
            });
        }
        ReactDOM.findDOMNode(this.refs.defaultButton).blur(); // eslint-disable-line react/no-find-dom-node
    }

    toogleGc() {
        if (this.state.showGc && !this.state.showScores) {
            this.setState({
                showGc: false,
                showScores: true
            });
        } else {
            this.setState({
                showGc: !this.state.showGc
            });
        }
        ReactDOM.findDOMNode(this.refs.defaultButton).blur(); // eslint-disable-line react/no-find-dom-node
        ReactDOM.findDOMNode(this.refs.gcButton).blur(); // eslint-disable-line react/no-find-dom-node
    }

    render() {
        const collectionViewFactory = this.props.collectionViewFactory;
        const {benchmarkCollections, runSelection} = this.props;
        const doesContainGcProfilerResults = benchmarkCollections.some(collection => collection.benchmarks(runSelection).some(benchmark => benchmark.secondaryMetrics['·gc.alloc.rate']));
        const benchmarkCollectionViews = benchmarkCollections.map(benchmarkCollection => <Element name={ benchmarkCollection.key } key={ benchmarkCollection.key }>
                                                                                           { collectionViewFactory.createCollectionView(benchmarkCollection, runSelection, this.state.showScores, this.state.showGc) }
                                                                                         </Element>);

        return (
            <div style={ { paddingBottom: 250 + 'px' } }>
              <div className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    { /*in order for the children to be properly linked, they should contain scroll-spy elements*/ }
                    { collectionViewFactory.createTopSection(benchmarkCollections, runSelection) }
                    { benchmarkCollectionViews }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <div>
                        <ButtonGroup bsSize="xsmall">
                          <Button ref="defaultButton" active={ this.state.showScores } onClick={ doesContainGcProfilerResults ? this.toogleScores.bind(this) : undefined }>
                            Scores
                          </Button>
                          { doesContainGcProfilerResults &&
                            <Button ref="gcButton" active={ this.state.showGc } onClick={ this.toogleGc.bind(this) }>
                              GC
                            </Button> }
                          { !doesContainGcProfilerResults &&
                            <OverlayTrigger placement="bottom" overlay={ <Tooltip id="tooltip">
                                                                           No GC profiler result found!
                                                                         </Tooltip> }>
                              <span style={ { cursor: 'not-allowed' } }><Button style={ { pointerEvents: 'none' } } bsSize="xsmall" disabled={ true }> GC </Button></span>
                            </OverlayTrigger> }
                        </ButtonGroup>
                        <br/>
                        <hr/>
                        <ul className="nav">
                          { benchmarkCollections.map((benchmarkCollection) => <Link
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