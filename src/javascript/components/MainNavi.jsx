import React from 'react';
import AppLogo from './AppLogo.jsx';

import Navbar from 'react-bootstrap/lib/Navbar'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Popover from 'react-bootstrap/lib/Popover'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

class MainNavi extends React.Component {

    onSelectUploadNewFiles() {
        window.location = window.location.href.split('#')[0]
    }

    render() {

        const aboutPopover = (
        <Popover id="popover-trigger-click-root-close" title="About JMH Visualizer">
          <p>
            <i>JMH Visualizer</i> will render charts out of your <a href="http://openjdk.java.net/projects/code-tools/jmh/" target="_blank">JMH Benchmarks</a>. All you have
            to do, is to upload your benchmark results in JSON format.
          </p>
          <p>
            For tips and tricks see XXX.
          </p>
          <p>
            There is also an Gradle integration available: XXX
          </p>
        </Popover>
        );

        return (
            <Navbar inverse>
              <Navbar.Header>
                <Navbar.Brand>
                  <Dropdown id="logo-dropdown">
                    <AppLogo bsRole="toggle" />
                    <Dropdown.Menu>
                      <MenuItem onSelect={ this.onSelectUploadNewFiles }> Upload new files
                      </MenuItem>
                      <MenuItem divider />
                      <MenuItem href="http://github.com/jzillmann/jmh-visualizer" target="_blank"> Github
                      </MenuItem>
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
            </Navbar>
            );
    }
}

export default MainNavi;