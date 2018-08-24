import React from 'react';

/* eslint react/prop-types: 0 */
const CustomTopBar = ({ title }) => {
    return (
        <h1 style={ { textAlign: 'center', paddingRight: '20%' } }>{ title }</h1>
    );
}

export default CustomTopBar;