import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

import DetailsIcon from 'react-icons/lib/fa/search-plus'
import EyeIcon from 'react-icons/lib/fa/eye'

import TocList from 'components/TocList.jsx'
import Tooltipped from 'components/lib/Tooltipped.jsx'

// Side bar for SingleRunView, TwoRunViews, etc...
export default class RunSideBar extends React.Component {

    static propTypes = {
        benchmarkBundles: React.PropTypes.array.isRequired,
        metrics: React.PropTypes.array.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        selectMetricFunction: React.PropTypes.func.isRequired,
        focusedBenchmarkBundles: React.PropTypes.object.isRequired,
        categories: React.PropTypes.array.isRequired,
        activeCategory: React.PropTypes.string.isRequired,
        focusBenchmarkBundleFunction: React.PropTypes.func.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired,
        selectCategoryFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {benchmarkBundles, metrics, metricExtractor, selectMetricFunction, focusedBenchmarkBundles, categories, activeCategory, selectCategoryFunction, focusBenchmarkBundleFunction, detailBenchmarkBundleFunction} = this.props;

        const metricsOptions = metrics.filter(aMetric => aMetric.startsWith('·') || aMetric === 'Score').map(metric => <option key={ metric } value={ metric }>
                                                                                                                         { metric }
                                                                                                                       </option>);

        const elementIds = benchmarkBundles.map(bundle => bundle.key);
        const elementNames = benchmarkBundles.map(bundle => bundle.name);

        const focusControlCreator = (elementId) => <span key={ `focus-${elementId}` } onClick={ (e) => {
                                                 e.stopPropagation();
                                                 focusBenchmarkBundleFunction(elementId)
                                             } } className={ focusedBenchmarkBundles.has(elementId) ? ' focused' : '' + ' clickable' }><sup><EyeIcon /></sup>{ ' ' }</span>;
        const detailsControlCreator = (elementId) => (<span key={ `detail-${elementId}` } onClick={ (e) => {
                                                  e.stopPropagation();
                                                  detailBenchmarkBundleFunction(elementId)
                                              } } className="clickable"><sup><DetailsIcon /></sup>{ ' ' }</span>);

        return <div>
                 <FormGroup controlId="formControlsSelectMultiple" bsSize="small">
                   <InputGroup>
                     <Tooltipped tooltip="No secondary metrics found!!" position="bottom" disabled={ metrics.length > 1 }>
                       <FormControl
                                    componentClass="select"
                                    onChange={ (event) => selectMetricFunction(event.target.value) }
                                    value={ metricExtractor.metricKey }
                                    disabled={ metrics.length < 2 }>
                         { metricsOptions }
                       </FormControl>
                     </Tooltipped>
                   </InputGroup>
                 </FormGroup>
                 <hr />
                 <TocList
                          categories={ categories }
                          activeCategory={ activeCategory }
                          selectCategoryFunction={ selectCategoryFunction }
                          elementIds={ elementIds }
                          elementNames={ elementNames }
                          linkControlsCreators={ [focusControlCreator, detailsControlCreator] } />
               </div>
    }

}