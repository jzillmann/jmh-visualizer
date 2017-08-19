import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

import BackIcon from 'react-icons/lib/md/keyboard-backspace'

import TocList from 'components/TocList.jsx'

export default class DetailSideBar extends React.Component {

    static propTypes = {
        benchmarkBundle: React.PropTypes.object.isRequired,
        benchmarkBundles: React.PropTypes.array.isRequired,
        secondaryMetrics: React.PropTypes.array.isRequired,
        goBackFunction: React.PropTypes.func.isRequired,
        selectBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {benchmarkBundle, benchmarkBundles, secondaryMetrics, goBackFunction, selectBenchmarkBundleFunction} = this.props;

        const benchmarkBundleOptions = benchmarkBundles.map((bundle, index) => <option key={ bundle.key } value={ index }>
                                                                                 { bundle.name }
                                                                               </option>);
        const selectedBundle = benchmarkBundles.findIndex(bundle => bundle.key === benchmarkBundle.key);

        const metrics = ['Score'].concat(secondaryMetrics);

        return <div>
                 <a onClick={ goBackFunction }>
                   <BackIcon /> Back..</a>
                 <br />
                 <br />
                 <FormGroup bsSize="small" controlId="theForm">
                   <InputGroup>
                     <FormControl componentClass="select" onChange={ (event) => selectBenchmarkBundleFunction(benchmarkBundles[event.target.value]) } defaultValue={ selectedBundle }>
                       { benchmarkBundleOptions }
                     </FormControl>
                   </InputGroup>
                 </FormGroup>
                 <hr />
                 <TocList
                          categories={ ['Metrics'] }
                          activeCategory={ 'Metrics' }
                          selectCategoryFunction={ (category) => alert(category) }
                          elementIds={ metrics }
                          elementNames={ metrics }
                          linkControlsCreators={ [] } />
               </div>
    }


}