import React, { Component, PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table'

import { formatNumber } from 'functions/util.js'
import { blue, red } from 'functions/colors.js'

export default class MultiRunChartLineTooltip extends Component {

    static propTypes = {
        dataSet: PropTypes.array.isRequired,
        activeLine: PropTypes.string.isRequired,
        label: PropTypes.any,
        roundScores: PropTypes.bool,
        payload: PropTypes.array,
    };

    render() {
        const {dataSet, activeLine, roundScores} = this.props;

        const tableRows = dataSet.map(dataSeries => <tr key={ dataSeries.name }>
                                                      <td>
                                                        { dataSeries.name }
                                                      </td>
                                                      <td style={ { color: blue } }>
                                                        { formatNumber(dataSeries[activeLine], roundScores) }
                                                      </td>
                                                      <td style={ { color: red } }>
                                                        { formatNumber(dataSeries[activeLine + '-scoreError'], roundScores) }
                                                      </td>
                                                      <td>
                                                        { dataSeries.scoreUnit }
                                                      </td>
                                                    </tr>);

        return (
            <div>
              <div style={ { textAlign: 'center' } }>
                <h4><u>{ activeLine }</u></h4>
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
                      <th>
                        Unit
                      </th>
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
