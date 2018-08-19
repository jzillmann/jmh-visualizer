import React from 'react';

import Tooltipped from 'components/lib/Tooltipped.jsx'
import { getUniqueBenchmarkModes } from 'functions/parse.js'
import { createMetricBadge } from 'components/commons.jsx';

//The header of a Single/Two/Multi-RunBundle
/* eslint react/prop-types: 0 */
const ChartHeader = ({ benchmarkBundle, metricExtractor, children }) => {
    children = Array.isArray(children) ? children : [children];
    const benchmarkModes = getUniqueBenchmarkModes(benchmarkBundle, metricExtractor);
    const benchmarkModeBadges = benchmarkModes.map(mode => createMetricBadge(mode));

    return (
        <Header fullName={ benchmarkBundle.key } name={ benchmarkBundle.name } badges={ benchmarkModeBadges } >
            { children.map(child => {
                return (
                    <span key={ child.displayName || child.name || child.key } className='superscript'>
                        { ' | ' }
                        { child }
                    </span>
                );
            }) }
        </Header >
    );

}

export const ChartDetailHeader = ({ name, badges, children }) => {
    return (
        <Header fullName={ '' } name={ name } badges={ badges } >
            { children }
        </Header >
    );

}


function Header({ fullName, name, badges, children }) {
    return (
        <h3 id={ fullName }>
            <Tooltipped tooltip={ fullName } position='right' disabled={ fullName.length == 0 }>
                <span>{ name }</span>
            </Tooltipped>
            { ' ' }
            <span className='superscript'>{ badges }</span>
            { children }
        </h3 >
    );

}

export default ChartHeader


