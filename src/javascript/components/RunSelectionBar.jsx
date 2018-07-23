import React from 'react';

import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import SplitButton from 'react-bootstrap/lib/SplitButton'
import Button from 'react-bootstrap/lib/Button'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import { connect, actions } from 'store/store.js'

function selectSingleRun(benchmarkRuns, runView, runIndex) {
    const runSelection = benchmarkRuns.map((run, index) => {
        if (index == runIndex) {
            return true;
        } else {
            return false;
        }
    });
    actions.selectBenchmarkRuns(runSelection, runView);
}

function selectAll(benchmarkRuns, runView) {
    const runSelection = benchmarkRuns.map(() => true);
    actions.selectBenchmarkRuns(runSelection, runView);
}

function getPossibleRunViews(benchmarkRuns, detailedBenchmarkBundle) {
    if (benchmarkRuns.length < 2) {
        return [];
    }
    if (detailedBenchmarkBundle) {
        return ['Compare']
    }
    return ['Summary', 'Compare'];
}

/* eslint react/prop-types: 0 */
// A selection bar for 2 or more runs, selecting either a single run or a compare view
const RunSelectionBar = ({ benchmarkRuns, runSelection, runView, detailedBenchmarkBundle }) => {
    if (benchmarkRuns.length <= 1) {
        return null;
    }

    const runViews = getPossibleRunViews(benchmarkRuns, detailedBenchmarkBundle);
    const showAll = runSelection.reduce((showIt, showRun) => showIt && showRun);

    const runComponents = runSelection.map((run, index) => {
        const isActive = !showAll && runSelection[index];
        return <Button
            key={ index }
            bsStyle={ isActive ? 'primary' : 'default' }
            bsSize="small"
            onClick={ () => selectSingleRun(benchmarkRuns, runView, index) }>
            { benchmarkRuns[index].name }
        </Button>
    });
    let allButton;
    if (runViews.length > 1) {
        const runViewMenuItems = runViews.map(runViewLabel => <MenuItem key={ runViewLabel } onClick={ () => selectAll(benchmarkRuns, runViewLabel) }>
            { runViewLabel }
        </MenuItem>);
        allButton = <SplitButton
            id='all'
            title={ runView }
            bsStyle={ showAll ? 'primary' : 'default' }
            bsSize="small"
            onClick={ () => selectAll(benchmarkRuns, runView) }>
            { runViewMenuItems }
        </SplitButton>;
    } else {
        allButton = <Button bsStyle={ showAll ? 'primary' : 'default' } bsSize="small" onClick={ () => selectAll(benchmarkRuns, runView) }>
            { runViews[0] }
        </Button>
    }

    return (
        <div style={ { textAlign: 'center', marginTop: '-9px', marginBottom: '15px' } }>
            <ButtonGroup>
                { runComponents }
            </ButtonGroup>
            { ' ' }
            <ButtonGroup>
                { allButton }
            </ButtonGroup>
        </div>
    );

}

export default connect(({ benchmarkRuns, runSelection, runView, detailedBenchmarkBundle }) => ({ benchmarkRuns, runSelection, runView, detailedBenchmarkBundle }))(RunSelectionBar)