import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

import BackIcon from 'react-icons/lib/md/keyboard-backspace'

import { actions } from 'store/store.js'
import TocList from 'components/TocList.jsx'

export default class DetailSideBar extends React.Component {

  static propTypes = {
    benchmarkBundle: PropTypes.object.isRequired,
    benchmarkBundles: PropTypes.array.isRequired,
    secondaryMetrics: PropTypes.array.isRequired,
  };

  render() {
    const { benchmarkBundle, benchmarkBundles, secondaryMetrics } = this.props;
    const benchmarkBundleOptions = benchmarkBundles.map(bundle => <option key={ bundle.key } value={ bundle.key }>
      { bundle.name }
    </option>);

    const metrics = ['Score'].concat(secondaryMetrics);

    return <div>
      <a onClick={ () => actions.goBack() }>
        <BackIcon /> Back..</a>
      <br />
      <br />
      <FormGroup bsSize="small" controlId="theForm">
        <InputGroup>
          <FormControl componentClass="select" onChange={ (event) => actions.detailBenchmarkBundle(event.target.value) } defaultValue={ benchmarkBundle.key }>
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