import React from 'react';
import PropTypes from 'prop-types';

import { blue } from 'functions/colors.js'

export default function BarTooltipLabel({ x, y, width, height, value, textAnchor }) {
    return (
        <g>
            <text
                stroke={ blue }
                fontSize={ 9 }
                textAnchor={ textAnchor }
                fill="hsla(0, 100%, 100%, 0.8)"
                x={ x }
                y={ y - 7 }
                width={ width }
                height={ height }
                className="recharts-bar-label">
                { value.toLocaleString() }
            </text>
        </g>
    );
}

BarTooltipLabel.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    textAnchor: PropTypes.string.isRequired,
}