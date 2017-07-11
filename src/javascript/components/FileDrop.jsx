import React from 'react';

import Dropzone from 'react-dropzone'
import UploadIcon from 'react-icons/lib/fa/cloud-upload'
import PontingHandIcon from 'react-icons/lib/fa/hand-o-right'
import DocumentIcon from 'react-icons/lib/fa/file-text'
import Loader from './lib/Loader.jsx';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Alert from 'react-bootstrap/lib/Alert'

import BenchmarkRun from '../models/BenchmarkRun.js';

export default class FileDrop extends React.Component {

    static propTypes = {
        examples: React.PropTypes.object.isRequired,
        uploadBenchmarkRunsFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            uploadBenchmarkRunsFunction: props.uploadBenchmarkRunsFunction,
            examples: props.examples,
            loading: false
        };
    }

    onDrop(files) {
        if (files.length > 2) {
            alert(`Maximum 2 files allowed to upload, but not ${files.length}!`)
            return
        }
        this.setState({
            loading: true
        });
        const benchmarkRuns = [];
        const uploadFunction = this.state.uploadBenchmarkRunsFunction;
        files.forEach((file, i) => {
            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    var parsedBenchmarks = JSON.parse(evt.target.result);
                    const benchmarkRun = new BenchmarkRun({
                        name: file.name,
                        benchmarks: parsedBenchmarks
                    });
                    benchmarkRuns.push(benchmarkRun);
                    if (i == files.length - 1) {
                        benchmarkRuns.sort((a, b) => a.name.localeCompare(b.name));
                        uploadFunction(benchmarkRuns);
                    }
                } catch ( e ) {
                    alert(e); //error in the above string(in this case,yes)!
                }
            };
            reader.readAsText(file);
        });
    }

    onLoadSingleRunExample() {
        this.onLoadExample(this.state.examples.singleRunExample)
    }

    onLoadTwoRunsExample() {
        this.onLoadExample(this.state.examples.twoRunsExample)
    }

    onLoadExample(examples: BenchmarkRun[]) {
        if (!this.state.loading) {
            this.setState({
                loading: true
            });
            const uploadFunction = this.state.uploadBenchmarkRunsFunction;
            setTimeout(function() {
                uploadFunction(examples);
            }.bind(this), 450);
        }
    }

    render() {
        var uploadIcon;
        if (this.state.loading) {
            uploadIcon = <Loader/>
        } else {
            uploadIcon = <UploadIcon width={ 100 } height={ 100 } /> ;
        }

        return (
            <div>
              <Dropzone onDrop={ this.onDrop.bind(this) } multiple={ true } style={ { width: 400, height: 500, borderWidth: 2, borderColor: '#666', borderStyle: 'dashed', borderRadius: 5, display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' } }>
                <div className="container">
                  <h2>Drop one or two of your JMH JSON file(s) here!</h2>
                </div>
                <h1>{ uploadIcon }</h1>
                <br/>
                <Alert bsStyle="warning">
                  <div>
                    <i>"JMH is a Java harness for building, running, and analysing nano/micro/milli/macro benchmarks written in Java and other languages targetting the JVM."</i>
                    <br/>
                    <span>This tool helps you to visually explore your benchmark results! All your have to do, is to provide the result files in JSON format.</span>
                  </div>
                </Alert>
              </Dropzone>
              <div>
                <h2 style={ { textAlign: 'center' } }>Or load an Example:</h2>
                <br/>
                <Grid>
                  <Row className="show-grid">
                    <Col xs={ 6 } md={ 6 } style={ { textAlign: 'center' } }>
                    <PontingHandIcon />
                    <span style={ { cursor: 'pointer' } } onClick={ this.onLoadSingleRunExample.bind(this) }><DocumentIcon width={ 70 } height={ 70 } /> Single Run</span>
                    </Col>
                    <Col xs={ 6 } md={ 6 } style={ { textAlign: 'center' } }>
                    <PontingHandIcon />
                    <span style={ { cursor: 'pointer' } } onClick={ this.onLoadTwoRunsExample.bind(this) }><DocumentIcon width={ 70 } height={ 70 } /> <DocumentIcon width={ 70 } height={ 70 } /> Two Runs</span>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </div>
        );
    }
}
