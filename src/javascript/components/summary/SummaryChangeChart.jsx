import React from 'react';

import { ResponsiveContainer, Tooltip, Cell, PieChart, Pie } from 'recharts';

import { blue, green, red, tooltipBackground, yellow } from 'functions/colors.js'

/* eslint react/prop-types: 0 */
// A Pie chart giving a quick overview on number of increases/decreases/no-change from run1 vs run2
const SummaryChangeChart = ({ benchmarkDiffs, minDeviation }) => {

    const chartData = benchmarkDiffs.reduce((changeTracker, benchmarkDiff) => {
        if (benchmarkDiff.scoreDiff < -minDeviation) {
            changeTracker[0].count++;
        } else if (benchmarkDiff.scoreDiff > minDeviation) {
            changeTracker[2].count++;
        } else {
            changeTracker[1].count++;
        }
        return changeTracker;
    }, [
            {
                name: `Declined (<-${minDeviation}%)`,
                count: 0
            },
            {
                name: `Unchanged (+-${minDeviation}%)`,
                count: 0
            },
            {
                name: `Improved (>+${minDeviation}%)`,
                count: 0
            }
        ]);

    return (
        <ResponsiveContainer width='100%' height={ 150 }>
            <PieChart>
                <Pie
                    data={ chartData }
                    dataKey='count'
                    cx={ '50%' }
                    cy={ '85%' }
                    startAngle={ 180 }
                    endAngle={ 0 }
                    innerRadius={ 75 }
                    outerRadius={ 90 }
                    fill={ blue }
                    label
                    animationDuration={ 540 }>
                    <Cell key='declined' fill={ red } />
                    <Cell key='unchanged' fill={ blue } />
                    <Cell key='improved' fill={ green } />
                </Pie>
                <Tooltip
                    offset={ 10 }
                    position={ { x: 45, y: 144 } }
                    cursor={ { stroke: yellow, strokeWidth: 2 } }
                    wrapperStyle={ { backgroundColor: tooltipBackground, opacity: 0.95 } } />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default SummaryChangeChart;
