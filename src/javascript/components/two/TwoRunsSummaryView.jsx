import React from 'react';

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Badge from 'react-bootstrap/lib/Badge'

import TocElement from 'components/TocElement.jsx'
import TwoRunBundle from 'components/two/TwoRunBundle.jsx'
import TwoRunsSummaryChart from 'components/two/TwoRunsSummaryChart.jsx'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class TwoRunsSummaryView extends React.Component {

    static propTypes = {
        runNames: React.PropTypes.array.isRequired,
        benchmarkBundles: React.PropTypes.array.isRequired,
        minDeviation: React.PropTypes.number.isRequired,
        metricExtractor: React.PropTypes.object.isRequired,
        detailBenchmarkBundleFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            minDeviation: this.props.minDeviation
        };
    }

    changeIgnoreLevelChange(number) {
        if (number != this.state.minDeviation) {
            this.setState({
                minDeviation: number
            });
        }
    }

    render() {
        const {runNames, benchmarkBundles, metricExtractor, detailBenchmarkBundleFunction} = this.props;
        const {minDeviation} = this.state;

        const elements = [];
        elements.push(
            <div key='summary'>
              <Grid fluid={ true }>
                <Row>
                  <Col md={ 6 }> Comparing
                  { ' ' }
                  <Badge>
                    { benchmarkBundles.length }
                  </Badge> benchmark classes for '
                  { runNames[0] }' and '
                  { runNames[1] }' on metric '
                  { metricExtractor.metricKey }'.
                  <TwoRunsSummaryChart benchmarkBundles={ benchmarkBundles } metricExtractor={ metricExtractor } minDeviation={ minDeviation } />
                  </Col>
                  <Col md={ 6 }>
                  <div>
                    Ignoring deviations under
                    { ' ' + minDeviation }%
                  </div>
                  <Slider
                          min={ 0 }
                          max={ 50 }
                          value={ minDeviation }
                          step={ 5 }
                          onChange={ this.changeIgnoreLevelChange.bind(this) }
                          labels={ { 0: '0%', 5: '5%', 10: '10%', 20: '20%', 50: '50%' } }
                          format={ (value) => value + '%' } />
                  </Col>
                </Row>
              </Grid>
              <hr/>
            </div>
        );

        // benchmarkBundles.forEach(benchmarkBundle => {
        //     elements.push(<TocElement key={ benchmarkBundle.key } name={ benchmarkBundle.key }>
        //                     <TwoRunBundle
        //                                   runNames={ runNames }
        //                                   benchmarkBundle={ benchmarkBundle }
        //                                   metricExtractor={ metricExtractor }
        //                                   detailBenchmarkBundleFunction={ detailBenchmarkBundleFunction } />
        //                   </TocElement>);
        // });


        return <div>
                 { elements }
               </div>
    }

}