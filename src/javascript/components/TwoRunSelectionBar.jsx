import React from 'react';

// A selection bar for 2 runs, selecting either a single run or a compare view
export default class TwoRunSelectionBar extends React.Component {

    static propTypes = {
        runs: React.PropTypes.array.isRequired,
        runSelection: React.PropTypes.array.isRequired,
        selectRunsFunction: React.PropTypes.func.isRequired,
    };

    show1stRun() {
        this.props.runSelection[0] = true;
        this.props.runSelection[1] = false;
        this.props.selectRunsFunction(this.props.runSelection);
    }

    show2ndRun() {
        this.props.runSelection[0] = false;
        this.props.runSelection[1] = true;
        this.props.selectRunsFunction(this.props.runSelection);
    }

    showCompare() {
        this.props.runSelection[0] = true;
        this.props.runSelection[1] = true;
        this.props.selectRunsFunction(this.props.runSelection);
    }

    clickRun(runIndex) {
        let runSelection;
        if (this.props.runSelection[runIndex] && this.props.runSelection.filter(e => e == true).length == 1) {
            // if this click disable the only selected one
            runSelection = this.props.runSelection.map(e => !e);
        } else {
            runSelection = this.props.runSelection.slice(0);
            runSelection[runIndex] = !runSelection[runIndex];

        }
        this.props.selectRunsFunction(runSelection);
    }

    render() {
        const {runs, runSelection} = this.props;

        return (
            <div style={ { textAlign: 'center', marginTop: '-20px', marginBottom: '-10px' } }>
              <ul className='pagination pagination-sm'>
                <li key={ runs[0].name } className={ runSelection[0] && !runSelection[1] ? 'active' : '' }>
                  <a role='button' onClick={ ::this.show1stRun }>
                    { runs[0].name }
                  </a>
                </li>
                <li key={ runs[1].name } className={ !runSelection[0] && runSelection[1] ? 'active' : '' }>
                  <a role='button' onClick={ ::this.show2ndRun }>
                    { runs[1].name }
                  </a>
                </li>
                { ' ' }
                <li key={ 'compareView' } className={ runSelection[0] && runSelection[1] ? 'active' : '' }>
                  <a role='button' onClick={ ::this.showCompare }>Compare View</a>
                </li>
              </ul>
            </div>
        );
    }
}