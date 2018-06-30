import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal'
import PointingHandIcon from 'react-icons/lib/fa/hand-o-right'

import LoadFromUrlsDialog from 'components/LoadFromUrlsDialog.jsx'
import LoadFromGistsDialog from 'components/LoadFromGistsDialog.jsx'

//Sidebar for the upload view
export default class UploadSideBar extends React.Component {

  static propTypes = {
    fileUploader: PropTypes.object.isRequired,
    loadSingleRunExampleFunction: PropTypes.func.isRequired,
    loadTwoRunsExampleFunction: PropTypes.func.isRequired,
    loadMultiRunExampleFunction: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      urlDialogVisible: false,
      gistDialogVisible: false,
    };

    this.showUrlDialog = this.showUrlDialog.bind(this);
    this.hideUrlDialog = this.hideUrlDialog.bind(this);
    this.showGistDialog = this.showGistDialog.bind(this);
    this.hideGistDialog = this.hideGistDialog.bind(this);
  }

  showUrlDialog() {
    this.setState({
      urlDialogVisible: true
    });
  }

  hideUrlDialog() {
    this.setState({
      urlDialogVisible: false
    });
  }

  showGistDialog() {
    this.setState({
      gistDialogVisible: true,
    });
  }

  hideGistDialog() {
    this.setState({
      gistDialogVisible: false
    });
  }

  render() {
    const { fileUploader, loadSingleRunExampleFunction, loadTwoRunsExampleFunction, loadMultiRunExampleFunction } = this.props;
    return <div style={ { whiteSpace: 'nowrap' } }>
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
      <br />
      <div>
        <PointingHandIcon />
        { ' ' }
        <a onClick={ loadSingleRunExampleFunction }>Load Single Run Example</a>
      </div>
      <div>
        <PointingHandIcon />
        { ' ' }
        <a onClick={ loadTwoRunsExampleFunction }>Load Two Runs Example</a>
      </div>
      <div>
        <PointingHandIcon />
        { ' ' }
        <a onClick={ loadMultiRunExampleFunction }>Load Multi Run Example</a>
      </div>
      <hr />
      <div>
        <PointingHandIcon />
        { ' ' }
        <a onClick={ this.showUrlDialog }>Load from URL(s)</a>
      </div>
      <div>
        <PointingHandIcon />
        { ' ' }
        <a onClick={ this.showGistDialog }>Load from Gist(s)</a>
      </div>
      <br />
      <Modal show={ this.state.urlDialogVisible } onHide={ this.hideUrlDialog }>
        <Modal.Header closeButton>
          <Modal.Title>
            Load JMH benchmarks from external URL(s)
                     </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoadFromUrlsDialog />
        </Modal.Body>
      </Modal>
      <Modal show={ this.state.gistDialogVisible } onHide={ this.hideGistDialog }>
        <Modal.Header closeButton>
          <Modal.Title>
            Load JMH benchmarks from external Gist(s)
                     </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoadFromGistsDialog />
        </Modal.Body>
      </Modal>
    </div>
  }
}