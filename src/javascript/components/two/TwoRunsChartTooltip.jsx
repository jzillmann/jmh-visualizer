import React, { Component, PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table'

import { blue, red } from '../../functions/colors.js'

function formatScore(value, unit) {
    return value.toLocaleString() + ' ' + unit;
}

export default class TwoRunsChartTooltip extends Component {

    static propTypes = {
        label: PropTypes.any,
        runNames: PropTypes.array,
        payload: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.any,
            payload: PropTypes.any,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            unit: PropTypes.any,
        })),
    };

    render() {
        const {label, payload} = this.props;
        if (payload.length == 0) {
            return null;
        }
        const score1 = payload[0].payload.score1stRun;
        const score2 = payload[0].payload.score2ndRun;
        const scoreError1 = payload[0].payload.scoreError1stRun;
        const scoreError2 = payload[0].payload.scoreError2ndRun;
        const scoreChange = score2 - score1;
        const scoreErrorChange = scoreError2 - scoreError1;
        const scoreUnit = payload[0].payload.scoreUnit;

        return (
            <div style={ { width: Math.max(230, label.length * 9) } }>
              <div style={ { textAlign: 'center' } }>
                <h4><u>{ label }</u></h4>
                <b><div> { payload.benchmarkMode } </div> <div> { payload[0].payload.scoreDiff + ' %' } </div></b>
              </div>
              <div style={ { textAlign: 'center' } }>
                <Table
                       striped
                       bordered
                       condensed
                       hover>
                  <thead>
                    <tr>
                      <th>
                        Run
                      </th>
                      <th>
                        Score
                      </th>
                      <th>
                        Score Error
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        { this.props.runNames[0] }
                      </td>
                      <td style={ { color: blue } }>
                        { formatScore(score1, scoreUnit) }
                      </td>
                      <td style={ { color: red } }>
                        { formatScore(scoreError1, scoreUnit) }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { this.props.runNames[1] }
                      </td>
                      <td style={ { color: blue } }>
                        { formatScore(score2, scoreUnit) }
                      </td>
                      <td style={ { color: red } }>
                        { formatScore(scoreError2, scoreUnit) }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Change
                      </td>
                      <td>
                        { (scoreChange > 0 ? '+' : '') + formatScore(scoreChange, scoreUnit) }
                      </td>
                      <td>
                        { (scoreErrorChange > 0 ? '+' : '') + formatScore(scoreErrorChange, scoreUnit) }
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
        );
    }
}
