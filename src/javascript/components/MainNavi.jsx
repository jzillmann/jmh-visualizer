import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Popover from 'react-bootstrap/lib/Popover'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

import LinkIcon from 'react-icons/lib/fa/external-link'

import AppLogo from 'components/AppLogo.jsx';
import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';
import RunSelectionBar from 'components/RunSelectionBar.jsx'
import { blue } from 'functions/colors.js'

export default class MainNavi extends React.Component {

  static propTypes = {
    runs: PropTypes.array.isRequired,
    viewSelection: PropTypes.object.isRequired,
    selectRunsFunction: PropTypes.func.isRequired
  };

  onSelectUploadNewFiles() {
    window.onbeforeunload = null;
    window.location = window.location.href.split('#')[0].split('?')[0];
  }

  render() {
    const { runs, viewSelection, selectRunsFunction } = this.props;

    const selectionBar = createRunSelectionBar(runs, viewSelection, selectRunsFunction);

    const aboutPopover = (
      <Popover id="popover-trigger-click-root-close" title={ `About JMH Visualizer - ${process.env.version}` }>
        <p>
          <i>JMH Visualizer</i> will render charts out of your <a href="http://openjdk.java.net/projects/code-tools/jmh/" target="_blank" rel="noopener noreferrer">JMH Benchmarks</a>. All it needs
          are your benchmark results in JSON format.
          </p>
      </Popover>
    );

    const uploadNewFileItem = providedBenchmarks.length > 0 // eslint-disable-line no-undef
      ? null : <MenuItem onSelect={ this.onSelectUploadNewFiles }> Reset & Upload New
                     </MenuItem>;

    const navBar = settings.showHeader // eslint-disable-line no-undef
      ? <Navbar inverse={ true } fluid={ true }>
        <Navbar.Header>
          <Navbar.Brand>
            <Dropdown id="logo-dropdown">
              <AppLogo bsRole="toggle" />
              <Dropdown.Menu>
                { uploadNewFileItem }
                <MenuItem divider />
                <MenuItem href="https://github.com/jzillmann/jmh-visualizer/issues" target="_blank">
                  <LinkIcon />
                  { ' Feedback & Bug Reports ' }
                </MenuItem>
                <MenuItem href="http://github.com/jzillmann/jmh-visualizer" target="_blank">
                  <LinkIcon />
                  { ' Code @ Github ' }
                </MenuItem>
                <MenuItem divider />
                <MenuItem href="http://openjdk.java.net/projects/code-tools/jmh/" target="_blank">
                  <LinkIcon />
                  { ' JMH ' }
                </MenuItem>
                <MenuItem href="http://hg.openjdk.java.net/code-tools/jmh/file/tip/jmh-samples/src/main/java/org/openjdk/jmh/samples/" target="_blank">
                  <LinkIcon />
                  { ' JMH Samples' }
                </MenuItem>
                <MenuItem divider />
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="bottom"
                  overlay={ aboutPopover }>
                  <MenuItem eventKey="3"> About
                          </MenuItem>
                </OverlayTrigger>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <DoingWorkSpinner.Component color={ blue } />
          </NavItem>
        </Nav>
      </Navbar> : null;

    return (
      <div>
        { navBar }
        { selectionBar }
      </div>
    );
  }
}

function createRunSelectionBar(runs, viewSelection, selectRunsFunction) {
  if (runs.length <= 1) {
    return null;
  }


  return <RunSelectionBar
    runs={ runs }
    runSelection={ viewSelection.runSelection }
    runViews={ viewSelection.getPossibleRunViews() }
    runView={ viewSelection.runView }
    selectRunsFunction={ selectRunsFunction } />;
}
