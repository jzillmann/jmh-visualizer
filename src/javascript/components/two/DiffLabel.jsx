import React from 'react';
import PropTypes from 'prop-types';

import { yellow } from 'functions/colors.js'

export default function DiffLabel({ x, y, width, height, value, textAnchor }) {
    const xPosShift = value > 0 ? 6 : - (value.toString().length * 7);
    const xPos = x + width + xPosShift;
    return (
        <g>
            <text
                stroke={ yellow }
                fontSize={ 12 }
                textAnchor={ textAnchor }
                fill="hsla(0, 100%, 100%, 0.8)"
                x={ xPos }
                y={ y + height / 2 + 4 }
                width={ width }
                height={ height }
                className="recharts-bar-label">
                { value }
            </text>
        </g>
    );
}

DiffLabel.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    textAnchor: PropTypes.string.isRequired,
}