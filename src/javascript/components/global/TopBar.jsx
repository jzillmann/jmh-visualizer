import React from 'react';

import { connect } from 'store/store.js'

import DefaultTopBar from 'components/global/DefaultTopBar.jsx';
import CustomTopBar from 'components/global/CustomTopBar.jsx';

/* eslint react/prop-types: 0 */
const TopBar = ({ topBar }) => {

    switch (topBar) {
        case 'default':
            return <DefaultTopBar />;
        case 'off':
            return null;
        default:
            return <CustomTopBar title={ topBar } />;
    }
}

export default connect(({ settings }) => ({
    topBar: settings.topBar,
}))(TopBar)