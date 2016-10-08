import React, { Component } from 'react';

// Spinner like loading indicator
export default class Loader extends Component {
    render() {
        return (
            <svg
                 version="1.1"
                 x="0px"
                 y="0px"
                 viewBox="0 0 80 3"
                 xmlSpace="preserve">
              <rect
                    x="1"
                    fill="#c6c3b9"
                    width="16"
                    height=".2">
                <animate
                         attributeName="x"
                         attributeType="XML"
                         values="1; 64; 1"
                         begin="0s"
                         dur="1.5s"
                         repeatCount="indefinite" />
              </rect>
            </svg>

            );
    }
}
