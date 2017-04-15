import React, { Component, PropTypes } from 'react';
import { BarChart, Bar } from 'recharts';

import { blue } from '../functions/colors.jsx'

export default class SingleRunChartTooltip extends Component {

    static propTypes = {
        label: PropTypes.any,
        scoreUnit: PropTypes.string,
        payload: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.any,
            payload: PropTypes.any,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            unit: PropTypes.any,
        })),
    };

    render() {
        const {label, payload} = this.props;
        const score = payload[0].payload.score;
        const error = payload[0].payload.scoreError;
        const forkScores = payload[0].payload.subScores;
        const scoreUnit = this.props.scoreUnit;

        const forkScoreDatas = forkScores.map((iterationScoreArray) => {
            return iterationScoreArray.map((element) => {
                return {
                    data: Math.round(element),
                }
            })
        })

        const tooltipWidth = forkScores[0].length * 54

        return (
            <div>
              <div style={ { textAlign: 'center' } }>
                <u><h4>{ label }</h4></u>
              </div>
              <b><div style={ { textAlign: 'center' } }> { `score = ${score.toLocaleString()} ${scoreUnit}` } </div> <div style={ { textAlign: 'center' } }> { `error = ${error.toLocaleString()} ${scoreUnit}` } </div></b>
              { forkScoreDatas.map((data, index) => <div key={ 'fork' + index }>
                                                      <BarChart
                                                                width={ tooltipWidth }
                                                                height={ 36 }
                                                                data={ data }
                                                                margin={ { top: 18 } }>
                                                        <Bar
                                                             dataKey='data'
                                                             fill={ blue }
                                                             strike={ blue }
                                                             isAnimationActive={ false }
                                                             label/>
                                                      </BarChart>
                                                    </div>
                ) }
            </div>
        );
    }
}
