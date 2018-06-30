import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import SplitButton from 'react-bootstrap/lib/SplitButton'
import Button from 'react-bootstrap/lib/Button'
import MenuItem from 'react-bootstrap/lib/MenuItem'

// A selection bar for 2 or more runs, selecting either a single run or a compare view
export default class RunSelectionBar extends React.Component {

    static propTypes = {
        runs: PropTypes.array.isRequired,
        runSelection: PropTypes.array.isRequired,
        runViews: PropTypes.array.isRequired,
        runView: PropTypes.string.isRequired,
        selectRunsFunction: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            runSelection: props.runs.map((run, index) => index)
        };
    }

    selectSingleRun(runIndex) {
        const runSelection = this.props.runs.map((run, index) => {
            if (index == runIndex) {
                return true;
            } else {
                return false;
            }
        });
        this.props.selectRunsFunction(runSelection, this.props.runView);
    }

    selectAll(runView) {
        const runSelection = this.props.runs.map(() => true);
        this.props.selectRunsFunction(runSelection, runView);
    }

    render() {
        const {runs, runSelection, runViews, runView} = this.props;
        const showAll = runSelection.reduce((showIt, showRun) => showIt && showRun);

        const runComponents = runSelection.map((run, index) => {
            const isActive = !showAll && runSelection[index];
            return <Button
                           key={ index }
                           bsStyle={ isActive ? 'primary' : 'default' }
                           bsSize="small"
                           onClick={ this.selectSingleRun.bind(this, index) }>
                     { runs[index].name }
                   </Button>
        });
        let allButton;
        if (runViews.length > 1) {
            const runViewMenuItems = runViews.map(runViewLabel => <MenuItem key={ runViewLabel } onClick={ this.selectAll.bind(this, runViewLabel) }>
                                                                  { runViewLabel }
                                                                  </MenuItem>);
            allButton = <SplitButton
                                     id='all'
                                     title={ runView }
                                     bsStyle={ showAll ? 'primary' : 'default' }
                                     bsSize="small"
                                     onClick={ this.selectAll.bind(this, runView) }>
                          { runViewMenuItems }
                        </SplitButton>;
        } else {
            allButton = <Button bsStyle={ showAll ? 'primary' : 'default' } bsSize="small" onClick={ this.selectAll.bind(this, runView) }>
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
}