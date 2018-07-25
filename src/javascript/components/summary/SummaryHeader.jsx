import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Badge from 'react-bootstrap/lib/Badge';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import SummaryChangeChart from 'components/summary/SummaryChangeChart.jsx';
import SummaryChangeLevelChart from 'components/summary/SummaryChangeLevelChart.jsx';
import SummaryHistogramChart from 'components/summary/SummaryHistogramChart.jsx';

/* eslint react/prop-types: 0 */
const SummaryHeader = ({ benchmarkDiffs, minDeviation, runName1, runName2, metricKey, numberOfBenchmarkBundles, changeMinDeviationFunction }) => {

    return (
        <Grid fluid={ true }>
            <Row>
                <Col md={ 6 }>
                    <div style={ { display: 'flex' } }>
                        <SummaryChangeChart benchmarkDiffs={ benchmarkDiffs } minDeviation={ minDeviation } />
                        <SummaryChangeLevelChart benchmarkDiffs={ benchmarkDiffs } minDeviation={ minDeviation } />
                    </div>
                    Comparing
                     { ' ' }
                    <Badge>
                        { benchmarkDiffs.length }
                    </Badge>
                    { ' results out of ' }
                    <Badge>
                        { numberOfBenchmarkBundles }
                    </Badge> benchmark classes for &#39;
                     { runName1 }&#39; and &#39;
                     { runName2 }&#39; on metric &#39;
                     { metricKey }&#39;.
          </Col>
                <Col md={ 6 }>
                    <div>
                        Ignoring deviations below
                       { ' ' + minDeviation }%
                     </div>
                    <Slider
                        min={ 0 }
                        max={ 50 }
                        value={ minDeviation }
                        step={ 5 }
                        onChange={ changeMinDeviationFunction }
                        labels={ { 0: '0%', 5: '5%', 10: '10%', 20: '20%', 50: '50%' } }
                        format={ (value) => value + '%' }
                    />
                    <SummaryHistogramChart benchmarkDiffs={ benchmarkDiffs } />
                </Col>
            </Row>
        </Grid>
    );
}

export default SummaryHeader;