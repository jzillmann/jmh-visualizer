import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'

import HelpIcon from 'react-icons/lib/md/help-outline'
import DetailsIcon from 'react-icons/lib/fa/search-plus'
import EyeIcon from 'react-icons/lib/fa/eye'

import TocList from './TocList.jsx'

// Side bar for SingleRunView, TwoRunViews, etc...
export default class RunSideBar extends React.Component {

    static propTypes = {
        benchmarkCollections: React.PropTypes.array.isRequired,
        metrics: React.PropTypes.array.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectMetricFunction: React.PropTypes.func.isRequired,
        focusedBenchmarkBundles: React.PropTypes.object.isRequired,
        focusBenchmarkBundleFunction: React.PropTypes.func.isRequired,
        selectBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {benchmarkCollections, metrics, metricExtractor, selectMetricFunction, focusedBenchmarkBundles, focusBenchmarkBundleFunction, selectBenchmarkBundleFunction} = this.props;

        const metricsOptions = metrics.filter(aMetric => aMetric.startsWith('·') || aMetric === 'Score').map(metric => <option key={ metric } value={ metric }>
                                                                                                                         { metric }
                                                                                                                       </option>);

        const elementIds = benchmarkCollections.map(benchmarkSet => benchmarkSet.key);
        const elementNames = benchmarkCollections.map(benchmarkSet => benchmarkSet.name);

        const focusControlCreator = (elementId) => <span key={ `focus-${elementId}` } onClick={ (e) => {
                                                 e.stopPropagation();
                                                 focusBenchmarkBundleFunction(elementId)
                                             } } className={ focusedBenchmarkBundles.has(elementId) ? ' focused' : '' + ' clickable' }><sup><EyeIcon /></sup>{ ' ' }</span>;
        const detailsControlCreator = (elementId) => (<span key={ `detail-${elementId}` } onClick={ (e) => {
                                                  e.stopPropagation();
                                                  selectBenchmarkBundleFunction(benchmarkCollections.find(bundle => bundle.key === elementId))
                                              } } className="clickable"><sup><DetailsIcon /></sup>{ ' ' }</span>);

        return <div>
                 <FormGroup controlId="formControlsSelectMultiple" bsSize="small">
                   <InputGroup>
                     <FormControl
                                  componentClass="select"
                                  onChange={ (event) => selectMetricFunction(event.target.value) }
                                  value={ metricExtractor.metricKey }
                                  disabled={ metrics.length < 2 }>
                       { metricsOptions }
                     </FormControl>
                     { metrics.length == 1 &&
                       <InputGroup.Addon>
                         <OverlayTrigger placement="bottom" overlay={ <Tooltip id="tooltip">
                                                                        No secondary metrics found!
                                                                      </Tooltip> }>
                           <div>
                             <HelpIcon />
                           </div>
                         </OverlayTrigger>
                       </InputGroup.Addon> }
                   </InputGroup>
                 </FormGroup>
                 <hr />
                 <TocList
                          categories={ ['Benchmarks'] }
                          activeCategory={ 'Benchmarks' }
                          selectCategoryFunction={ (category) => alert(category) }
                          elementIds={ elementIds }
                          elementNames={ elementNames }
                          linkControlsCreators={ [focusControlCreator, detailsControlCreator] } />
               </div>
    }

}