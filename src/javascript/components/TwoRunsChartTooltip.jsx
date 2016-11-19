import React, { Component, PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table'

import { blue, red } from '../functions/colors.jsx'

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
        const label = this.props.label;
        const payload = this.props.payload[0].payload;
        const score1 = payload.score1stRun;
        const score2 = payload.score2ndRun;
        const scoreError1 = payload.scoreError1stRun;
        const scoreError2 = payload.scoreError2ndRun;
        const scoreChange = score2 - score1;
        const scoreErrorChange = scoreError2 - scoreError1;

        return (
            <div style={ { width: Math.max(230, label.length * 9) } }>
              <div style={ { textAlign: 'center' } }>
                <h4><u>{ label }</u></h4>
                <b><div> { payload.benchmarkMode } </div> <div> { payload.scoreDiff + ' %' } </div></b>
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
                        { formatScore(score1, payload.scoreUnit) }
                      </td>
                      <td style={ { color: red } }>
                        { formatScore(scoreError1, payload.scoreUnit) }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { this.props.runNames[1] }
                      </td>
                      <td style={ { color: blue } }>
                        { formatScore(score2, payload.scoreUnit) }
                      </td>
                      <td style={ { color: red } }>
                        { formatScore(scoreError2, payload.scoreUnit) }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Change
                      </td>
                      <td>
                        { (scoreChange > 0 ? '+' : '') + formatScore(scoreChange, payload.scoreUnit) }
                      </td>
                      <td>
                        { (scoreErrorChange > 0 ? '+' : '') + formatScore(scoreErrorChange, payload.scoreUnit) }
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            );
    }
}
