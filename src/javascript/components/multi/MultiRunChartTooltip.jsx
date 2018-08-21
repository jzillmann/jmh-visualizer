import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table'

import { formatNumber } from 'functions/util.js'
import { blue, red } from 'functions/colors.js'

// Tooltip for LineChartView
export default class MultiRunChartTooltip extends Component {

  static propTypes = {
    label: PropTypes.any,
    roundScores: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.any,
      payload: PropTypes.any,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      unit: PropTypes.any,
    })),
  };

  render() {
    const { label, payload, roundScores } = this.props;
    if (payload.length == 0) {
      return null;
    }
    const tableRows = payload.map(dataPoint => <tr key={ dataPoint.name }>
      <td>{ dataPoint.name }</td>
      <td style={ { color: blue } }>{ formatNumber(dataPoint.value, roundScores) }</td>
      <td style={ { color: blue } }>{ formatNumber(dataPoint.payload[dataPoint.name + '-minMax'][0], roundScores) }</td>
      <td style={ { color: blue } }>{ formatNumber(dataPoint.payload[dataPoint.name + '-minMax'][1], roundScores) }</td>
      <td style={ { color: red } }>{ formatNumber(dataPoint.payload[dataPoint.name + '-scoreError'], roundScores) }</td>
      <td>{ dataPoint.payload.scoreUnit }</td>
    </tr>);
    return (
      <div>
        <div style={ { textAlign: 'center' } }>
          <h4><u>{ label }</u></h4>
        </div>
        <div style={ { textAlign: 'center' } }>
          <Table
            striped
            bordered
            condensed
            hover>
            <thead>
              <tr>
                <th>Benchmark</th>
                <th>Score</th>
                <th>Min</th>
                <th>Max</th>
                <th>Score Error</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              { tableRows }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
