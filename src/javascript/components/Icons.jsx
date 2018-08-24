import React from 'react';

import { actions } from 'store/store.js'
import { yellow } from 'functions/colors.js'
import Tooltipped from 'components/lib/Tooltipped.jsx'

import ScaleIcon from 'react-icons/lib/fa/balance-scale'
import DetailsIcon from 'react-icons/lib/fa/search-plus'
import SortIcon from 'react-icons/lib/fa/sort-amount-desc'

import LinkIcon from 'react-icons/lib/fa/external-link'
import GithubIcon from 'react-icons/lib/fa/github'
import BugIcon from 'react-icons/lib/fa/bug'

export { LinkIcon, GithubIcon, BugIcon }

const activeColor = yellow;
/* eslint react/prop-types: 0 */

export const SortButton = ({ active, action }) => {
    return <IconButton
        IconName={ SortIcon }
        tooltip='Sort by Score/Name'
        active={ active }
        action={ action } />
};

export const ScaleButton = ({ active, action }) => {
    return <IconButton
        IconName={ ScaleIcon }
        tooltip='Switch scale (log/linear)'
        active={ active }
        action={ action } />
};

export const DetailsButton = ({ benchmarkBundle }) => {
    const secondaryMetrics = new Set();
    benchmarkBundle.allBenchmarks().forEach(benchmark => {
        Object.keys(benchmark.secondaryMetrics).forEach(secondaryMetric => {
            secondaryMetrics.add(secondaryMetric)
        })
    });

    return <IconButton
        IconName={ DetailsIcon }
        tooltip={ `Show details with ${secondaryMetrics.size} secondary metrics results` }
        active={ false }
        action={ () => actions.detailBenchmarkBundle(benchmarkBundle.key) } />
};

function IconButton({ IconName, tooltip, active, action }) {
    const color = active ? activeColor : null;
    return (
        <Tooltipped key={ 'ScaleButton' } tooltip={ tooltip } position='top'>
            <IconName size={ '1em' } onClick={ action } color={ color } className='clickable' />
        </Tooltipped>
    );
}