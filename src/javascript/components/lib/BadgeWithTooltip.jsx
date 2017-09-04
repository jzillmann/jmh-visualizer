import React, { Component } from 'react';

import Badge from 'react-bootstrap/lib/Badge'
import Tooltipped from 'components/lib/Tooltipped.jsx'

export default class BadgeWithTooltip extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        tooltip: React.PropTypes.string.isRequired,
        children: React.PropTypes.array,
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        return false;
    }

    render() {
        const {name, tooltip} = this.props;
        return (
            <Tooltipped tooltip={ tooltip } position='top'>
              <Badge bsStyle="default">
                { name }
                { this.props.children }
              </Badge>
            </Tooltipped>
        );
    }
}
