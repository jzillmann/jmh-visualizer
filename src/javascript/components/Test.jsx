import React from 'react'
import { connect } from 'store/store.js'

/* eslint react/prop-types: 0 */
const Test = ({ selectedMetric }) => {
    console.log("paint test");

    return (
        <div>
            selected: { selectedMetric }
        </div>
    )
}

export default connect(({ selectedMetric }) => ({ selectedMetric }))(Test)