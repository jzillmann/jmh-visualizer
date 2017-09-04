import React from 'react';

// A selection bar for 2 or more runs, selecting either a single run or a compare view
export default class RunSelectionBar extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        runs: React.PropTypes.array.isRequired,
        runSelection: React.PropTypes.array.isRequired,
        selectRunsFunction: React.PropTypes.func.isRequired,
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
        this.props.selectRunsFunction(runSelection);
    }

    selectAll() {
        const runSelection = this.props.runs.map(() => true);
        this.props.selectRunsFunction(runSelection);
    }

    render() {
        const {title, runs, runSelection} = this.props;
        const showAll = runSelection.reduce((showIt, showRun) => showIt && showRun);

        const runComponents = runSelection.map((run, index) => <li key={ index } className={ !showAll && runSelection[index] ? 'active' : '' }>
                                                                 <a role='button' onClick={ this.selectSingleRun.bind(this, index) } title={ runs[index].name }>
                                                                   { runs[index].name }
                                                                 </a>
                                                               </li>);

        return (
            <div style={ { textAlign: 'center', marginTop: '-20px', marginBottom: '-10px' } }>
              <ul className='pagination pagination-sm'>
                { runComponents }
                { ' ' }
                <li key={ 'showAll' } className={ showAll ? 'active' : '' }>
                  <a role='button' onClick={ ::this.selectAll }>
                    { title }
                  </a>
                </li>
              </ul>
            </div>
        );
    }
}