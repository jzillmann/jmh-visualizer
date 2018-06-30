import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Badge from 'react-bootstrap/lib/Badge'
import Tooltipped from 'components/lib/Tooltipped.jsx'

export default class BadgeWithTooltip extends Component {

    static propTypes = {
        name: PropTypes.string,
        tooltip: PropTypes.string.isRequired,
        children: PropTypes.array,
    };

    shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
        return false;
    }

    render() {
        const { name, tooltip } = this.props;
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
