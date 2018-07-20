import React from 'react'
import { connect } from 'store/store.js'

/* eslint react/prop-types: 0 */
const Test2 = ({ detailedBenchmarkBundle }) => {
    console.log("paint test2");

    return (
        <div>
            detail: { detailedBenchmarkBundle }
        </div>
    )
}

export default connect(({ detailedBenchmarkBundle }) => ({ detailedBenchmarkBundle }))(Test2)