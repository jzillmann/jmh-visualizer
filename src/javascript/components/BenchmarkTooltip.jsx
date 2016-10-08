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
        const score = payload[0].payload.data;
        const error = payload[0].payload.error;
        const series = payload[0].payload.subScores.map((element) => {
            return {
                data: Math.round(element),
            }
        })
        const tooltipWidth = series.length * 30

        return (
            <div>
              <div style={ { textAlign: 'center' } }>
                <b>{ label }</b>
              </div>
              <div style={ { textAlign: 'center' } }>
                { `score=${score}, error=${error}` }
              </div>
              <BarChart
                        width={ tooltipWidth }
                        height={ 36 }
                        data={ series }
                        margin={ { top: 18 } }>
                <Bar
                     dataKey='data'
                     fill='#337ab7'
                     isAnimationActive={ false }
                     label/>
              </BarChart>
            </div>
            );
    }
}
