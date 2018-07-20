import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'store/store.js'
import { blue } from 'functions/colors.js'
var Spinner = require('react-spinkit');

/* eslint react/prop-types: 0 */
const DoingWorkSpinner = ({ loading }) => {
    console.log('spinner: ' + loading);

    if (!loading) {
        return null;
    }
    return (
        <Spinner
            id='spinner'
            name='three-bounce'
            color={ blue }
            fadeIn='none' />
    );
}

export default connect(({ loading }) => ({ loading }))(DoingWorkSpinner)

