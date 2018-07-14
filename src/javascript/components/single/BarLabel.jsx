import React from 'react';
import PropTypes from 'prop-types';

import { blue } from 'functions/colors.js'

export default function BarLabel({ x, y, width, height, value, textAnchor }) {
    return (
        <g>
            <text
                stroke={ blue }
                fontSize={ 11 }
                textAnchor={ textAnchor }
                fill="hsla(0, 100%, 100%, 0.8)"
                x={ x + width + 7 }
                y={ y + height / 2 - 7 }
                width={ width }
                height={ height }
                className="recharts-bar-label">
                { value }
            </text>
        </g>
    );
}

BarLabel.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    textAnchor: PropTypes.string.isRequired,
}