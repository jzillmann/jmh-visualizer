import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table'

import { formatNumber } from 'functions/util.js'
import { blue, red, green } from 'functions/colors.js'

export default class TwoRunsChartTooltip extends Component {

  static propTypes = {
    label: PropTypes.any,
    runNames: PropTypes.array,
    roundScores: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.any,
      payload: PropTypes.any,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      unit: PropTypes.any,
    })),
  };

  render() {
    const { label, payload, runNames, roundScores } = this.props;
    if (payload == null || payload.length == 0) {
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
          <b><div style={ { color: payload[0].payload.scoreDiff > 0 ? green : red } }> { payload[0].payload.scoreDiff + ' %' } </div></b>
        </div>
        <div style={ { textAlign: 'center' } }>
          <Table
            striped
            bordered
            condensed
            hover>
            <thead>
              <tr>
                <th>Run</th>
                <th>Score</th>
                <th>Error</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ runNames[0] }</td>
                <td style={ { color: blue } }>{ formatNumber(score1, roundScores) }</td>
                <td style={ { color: red } }>{ formatNumber(scoreError1, roundScores) }</td>
                <td>{ scoreUnit }</td>
              </tr>
              <tr>
                <td>{ runNames[1] }</td>
                <td style={ { color: blue } }>{ formatNumber(score2, roundScores) }</td>
                <td style={ { color: red } }>{ formatNumber(scoreError2, roundScores) }</td>
                <td>{ scoreUnit }</td>
              </tr>
              <tr>
                <td>Change</td>
                <td>{ (scoreChange > 0 ? '+' : '') + formatNumber(scoreChange, roundScores) }</td>
                <td>{ (scoreErrorChange > 0 ? '+' : '') + formatNumber(scoreErrorChange, roundScores) }</td>
                <td>{ scoreUnit }</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
