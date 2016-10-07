import React, { Component, PropTypes } from 'react';
import { BarChart, Bar } from 'recharts';

export default class ErrorBar extends Component {

    static propTypes = {
        separator: PropTypes.string,
        formatter: PropTypes.func,
        wrapperStyle: PropTypes.object,
        itemStyle: PropTypes.object,
        labelStyle: PropTypes.object,
        labelFormatter: PropTypes.func,
        label: PropTypes.any,
        payload: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.any,
            payload: PropTypes.any,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            unit: PropTypes.any,
        })),
        itemSorter: PropTypes.func,
    };

    render() {

        const {label, payload} = this.props;
        console.debug(`label=${label} payloadName=${payload.name} payloadName=${payload.value} `);
        console.debug(payload.name);
        // console.debug(this.state.scores);
        //console.debug(this.state.scores[label]);

        console.debug(this.props);
        console.debug(this.props.payload[0].payload.error);
        console.debug(this.props.payload[0].payload.subScores);
        const score = this.props.payload[0].payload.data;
        const error = this.props.payload[0].payload.error;

        const series = this.props.payload[0].payload.subScores.map((element) => {
            return {
                data: Math.round(element),
            }
        })

        return (
            <div>
              <div style={ { textAlign: 'center' } }>
                { ` ${label}: score=${score}, error=${error}` }
              </div>
              <BarChart
                        width={ 180 }
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
