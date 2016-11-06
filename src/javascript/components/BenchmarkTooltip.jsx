import React, { Component, PropTypes } from 'react';
import { BarChart, Bar } from 'recharts';

export default class BenchmarkTooltip extends Component {

    static propTypes = {
        label: PropTypes.any,
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
                <h5>{ label }</h5>
              </div>
              <div style={ { textAlign: 'center' } }>
                <b>{ `score=${score}, error=${error}` }</b>
              </div>
              { forkScoreDatas.map((data, index) => <div key={ 'fork' + index }>
                                                      <BarChart
                                                                width={ tooltipWidth }
                                                                height={ 36 }
                                                                data={ data }
                                                                margin={ { top: 18 } }>
                                                        <Bar
                                                             dataKey='data'
                                                             fill='#337ab7'
                                                             isAnimationActive={ false }
                                                             label/>
                                                      </BarChart>
                                                    </div>
                ) }
            </div>
            );
    }
}
