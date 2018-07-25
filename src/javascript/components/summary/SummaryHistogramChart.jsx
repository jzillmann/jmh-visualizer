import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Surface, Symbols } from 'recharts';

import { green, red } from 'functions/colors.js'

/* eslint react/prop-types: 0 */
class SummaryHistogramChart extends React.Component {

    static propTypes = {
        benchmarkDiffs: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            disabledLabels: ['errorDiff']
        };
    }

    switchLabelActivation(dataKey) {
        if (this.state.disabledLabels.includes(dataKey)) {
            this.setState({
                disabledLabels: this.state.disabledLabels.filter(obj => obj !== dataKey)
            });
        } else {
            this.setState({ disabledLabels: this.state.disabledLabels.concat(dataKey) });
        }
    }

    render() {
        const { benchmarkDiffs } = this.props;
        const { disabledLabels } = this.state;

        const data = benchmarkDiffs.map((benchmarkDiff, i) => ({
            idx: i,
            name: `${benchmarkDiff.bundleName} (${benchmarkDiff.benchmarkMethod.params ? benchmarkDiff.benchmarkMethod.params.map(param => param[0] + '=' + param[1]).join(':') : ''})`,
            scoreDiff: Math.max(-100, Math.min(100, benchmarkDiff.scoreDiff)),
            errorDiff: Math.max(-100, Math.min(100, benchmarkDiff.scoreErrorDiff)),
            score1stRun: benchmarkDiff.score1stRun,
            score2ndRun: benchmarkDiff.score2ndRun,
            scoreError1stRun: benchmarkDiff.scoreError1stRun,
            scoreError2ndRun: benchmarkDiff.scoreError2ndRun,
            scoreUnit: benchmarkDiff.scoreUnit
        }));

        const dataSets = [{ dataKey: 'scoreDiff', color: green }, { dataKey: 'errorDiff', color: red }];

        return (
            <ResponsiveContainer width='100%' height={ 150 }>
                <BarChart data={ data }
                    margin={ { top: 5, right: 20, left: -20, bottom: 5 } }>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="idx" />
                    <YAxis />
                    <Tooltip
                        offset={ 10 }
                        position={ { x: 90, y: 144 } }
                        labelFormatter={ (idx) => data[idx] ? data[idx].name : 'N/A' }
                        formatter={ tooltipFormat } />
                    <Legend
                        align="center"
                        verticalAlign="top"
                        wrapperStyle={ { lineHeight: '40px' } }
                        payload={ dataSets }
                        content={ this.renderCusomizedLegend.bind(this) } />
                    <ReferenceLine y={ 0 } stroke='#000' />
                    {
                        dataSets.filter(elem => !disabledLabels.includes(elem.dataKey)).map(activeElem => <Bar key={ activeElem.dataKey } dataKey={ activeElem.dataKey } fill={ activeElem.color } />)
                    }
                </BarChart>
            </ResponsiveContainer>
        )
    }

    renderCusomizedLegend({ payload }) {
        return (
            <div align="center">
                { payload.map(entry => {
                    const { dataKey, color } = entry;
                    const active = this.state.disabledLabels.includes(dataKey);
                    const style = {
                        marginRight: 10,
                        color: active ? "#AAA" : "#000"
                    };

                    return (
                        <span key={ dataKey } className="legend-item" onClick={ () => this.switchLabelActivation(dataKey) } style={ style }>
                            <Surface width={ 15 } height={ 15 } viewBox={ { x: 0, y: 0, width: 10, height: 15 } }>
                                <Symbols cx={ 5 } cy={ 11 } type="square" size={ 50 } fill={ color } />
                                { active && (<Symbols cx={ 5 } cy={ 11 } type="square" size={ 25 } fill={ "#FFF" } />) }
                            </Surface>
                            <span>{ dataKey }</span>
                        </span>
                    );
                }) }
            </div>
        );
    }
}

export default SummaryHistogramChart;

function tooltipFormat(value, name, props) {
    const { payload } = props;
    const valueString = value != null ? value : 'N/A';
    let rawValueString;
    if (name === 'scoreDiff') {
        rawValueString = `${payload.score1stRun.toLocaleString()} | ${payload.score2ndRun.toLocaleString()} ${payload.scoreUnit}`;
    } else {
        rawValueString = `${payload.scoreError1stRun.toLocaleString()} | ${payload.scoreError2ndRun.toLocaleString()}`;
    }
    return `${valueString}% (${rawValueString})`;
}

