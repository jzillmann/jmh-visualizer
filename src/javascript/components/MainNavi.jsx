import React from 'react';
import AppLogo from './AppLogo.jsx';

import Navbar from 'react-bootstrap/lib/Navbar'
import Dropdown from 'react-bootstrap/lib/Dropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Popover from 'react-bootstrap/lib/Popover'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

import LinkIcon from 'react-icons/lib/fa/external-link'

class MainNavi extends React.Component {

    onSelectUploadNewFiles() {
        window.onbeforeunload = null;
        window.location = window.location.href.split('#')[0];
    }

    render() {

        const aboutPopover = (
        <Popover id="popover-trigger-click-root-close" title={ `About JMH Visualizer - ${ process.env.version }` }>
          <p>
            <i>JMH Visualizer</i> will render charts out of your <a href="http://openjdk.java.net/projects/code-tools/jmh/" target="_blank">JMH Benchmarks</a>. All it needs
            are your benchmark results in JSON format.
          </p>
        </Popover>
        );

        const uploadNewFileItem = providedBenchmarks.length > 0 // eslint-disable-line no-undef
            ? null : <MenuItem onSelect={ this.onSelectUploadNewFiles }> Reset & Upload New
                     </MenuItem>;

        const navBar = settings.showHeader // eslint-disable-line no-undef
            ? <Navbar inverse={ true }>
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
              </Navbar> : null;

        return (
            navBar
        );
    }
}

export default MainNavi;