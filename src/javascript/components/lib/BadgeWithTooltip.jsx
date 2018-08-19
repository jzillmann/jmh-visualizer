import React from 'react';

import Badge from 'react-bootstrap/lib/Badge'
import Tooltipped from 'components/lib/Tooltipped.jsx'

/* eslint react/prop-types: 0 */
const BadgeWithTooltip = ({ name, tooltip, children = [] }) => {
    return (
        <Tooltipped tooltip={ tooltip } position='top'>
            <Badge bsStyle="default">
                { name }
                { children }
            </Badge>
        </Tooltipped>
    );
}

export default BadgeWithTooltip;
