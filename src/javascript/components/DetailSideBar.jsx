import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

import BackIcon from 'react-icons/lib/md/keyboard-backspace'

import TocList from './TocList.jsx'

export default class DetailSideBar extends React.Component {

    static propTypes = {
        benchmarkCollection: React.PropTypes.object.isRequired,
        benchmarkCollections: React.PropTypes.array.isRequired,
        secondaryMetrics: React.PropTypes.array.isRequired,
        goBackFunction: React.PropTypes.func.isRequired,
        selectBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {benchmarkCollection, benchmarkCollections, secondaryMetrics, goBackFunction, selectBenchmarkBundleFunction} = this.props;

        const benchmarkCollectionOptions = benchmarkCollections.map((collection, index) => <option key={ collection.key } value={ index }>
                                                                                             { collection.name }
                                                                                           </option>);
        const selectedCollection = benchmarkCollections.findIndex(collection => collection.key === benchmarkCollection.key);

        const metrics = ['Score'].concat(secondaryMetrics);

        return <div>
                 <a onClick={ goBackFunction }>
                   <BackIcon /> Back..</a>
                 <br />
                 <br />
                 <FormGroup bsSize="small" controlId="theForm">
                   <InputGroup>
                     <FormControl componentClass="select" onChange={ (event) => selectBenchmarkBundleFunction(benchmarkCollections[event.target.value]) } defaultValue={ selectedCollection }>
                       { benchmarkCollectionOptions }
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