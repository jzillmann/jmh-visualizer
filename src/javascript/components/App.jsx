import React from 'react';

import { connect } from 'store/store.js'

import TopBar from 'components/global/TopBar.jsx';
import Footer from 'components/global/Footer.jsx';
import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';

import RunSelectionBar from 'components/RunSelectionBar.jsx'
import UploadScreen from 'components/UploadScreen.jsx';
import RunScreen from 'components/RunScreen.jsx';
import DetailScreen from 'components/DetailScreen.jsx';
import SummaryScreen from 'components/SummaryScreen.jsx';

/* eslint react/prop-types: 0 */
const App = ({ initialLoading, benchmarkRuns, runSelection, runView, detailedBenchmarkBundle }) => {
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
            const selectedRuns = runSelection.filter(isSelected => isSelected);
            if (selectedRuns.length > 1 && runView === 'Summary') {
                screen = <SummaryScreen />
            } else {
                screen = <RunScreen />
            }
        }
    }

    return (
        <div>
            <TopBar />
            <div style={ { paddingTop: '20px', paddingBottom: '20px' } }>
                <RunSelectionBar />
                { screen }
            </div>
            <Footer />
        </div>
    );
}

export default connect(({ initialLoading, benchmarkRuns, runSelection, runView, detailedBenchmarkBundle }) => ({
    initialLoading,
    benchmarkRuns,
    runSelection,
    runView,
    detailedBenchmarkBundle,
}))(App)
