import React from 'react';
import PropTypes from 'prop-types';

var Scroll = require('react-scroll');

// A link in TocSidebar pointing to a TocElement
class TocLink extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        return (
            <li {...this.props}>
              { this.props.children }
            </li>
        );
    }

}

const EnhancedTocLink = Scroll.Helpers.Scroll(TocLink);
export { EnhancedTocLink as default }


