import React from 'react';

import { connect } from 'store/store.js'

import MainNavi from 'components/MainNavi.jsx';
import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';

import UploadScreen from 'components/UploadScreen.jsx';
import RunScreen from 'components/RunScreen.jsx';
import DetailScreen from 'components/DetailScreen.jsx';

/* eslint react/prop-types: 0 */
const App = ({ initialLoading, benchmarkRuns, detailedBenchmarkBundle }) => {
    if (initialLoading) {
        return (<div style={ { position: 'fixed', top: '50%', left: '50%' } }><DoingWorkSpinner /></div>);
    }

    let screen;
    if (benchmarkRuns.length == 0) {
        screen = <UploadScreen />
    } else {
        if (detailedBenchmarkBundle) { // Details View
            screen = <DetailScreen />
        } else { // Run View
            screen = <RunScreen />
        }
    }

    return (
        <div>
            <MainNavi />
            <div style={ { paddingBottom: 20 + 'px' } }>
                { screen }
            </div>
        </div>
    );
}

export default connect(({ initialLoading, benchmarkRuns, detailedBenchmarkBundle }) => ({
    initialLoading,
    benchmarkRuns: benchmarkRuns,
    detailedBenchmarkBundle: detailedBenchmarkBundle,
}))(App)
