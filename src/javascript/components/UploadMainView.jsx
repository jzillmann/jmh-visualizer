import React from 'react';

import Dropzone from 'react-dropzone'
import UploadIcon from 'react-icons/lib/fa/cloud-upload'
import Alert from 'react-bootstrap/lib/Alert'

import { blue, green } from '../functions/colors.js'

// Dopzone for JSON files to upload
export default class UploadMainView extends React.Component {

    static propTypes = {
        fileUploader: React.PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
    }

    onDrop(files) {
        this.props.fileUploader.upload(files);
    }

    render() {
        return (
            <Dropzone
                         onDropAccepted={ this.onDrop.bind(this) }
                         onDropRejected={ () => alert('Only drop valid JSON files!') }
                         multiple={ true }
                         accept='.json'
                         disableClick={ true }
                         disablePreview={ true }
                         className="container-fluid"
                         style={ { width: '100%', height: '81vh', borderWidth: 1, borderColor: blue, borderStyle: 'dashed', borderRadius: 25, padding: 20, textAlign: 'center', verticalAlign: 'middle' } } //TODO seems to be a bug with dropzone... rejectStyle is always taken
                         rejectStyle={ { borderColor: green, borderWidth: 3, borderStyle: 'dotted' } }
                         activeStyle={ { borderColor: green, borderWidth: 3, borderStyle: 'dotted' } }>
              <div>
                <h1 style={ { marginBottom: 20 } }>Dropzone</h1>
                <h5>Drop one or two of your JMH JSON report file(s) here!</h5>
              </div>
              <h2><UploadIcon width={ 100 } height={ 100 } /></h2>
              <br/>
              <Alert bsStyle="warning">
                <div>
                  <blockquote style={ { fontSize: 14, paddingLeft: 0, marginBottom: 5 } }>
                    <i>"<a href="http://openjdk.java.net/projects/code-tools/jmh/">JMH</a> is a Java harness for building, running, and analysing nano/micro/milli/macro benchmarks written in Java and other languages targetting the JVM."</i>
                  </blockquote>
                  <div>
                    Use this tool to visually explore your benchmark results! Simply upload<sup>*</sup> any JMH result files (in JSON format).
                  </div>
                </div>
              </Alert>
              <br/>
              <div style={ { fontSize: 12, textAlign: 'center' } }>
                * Your data stays locally in your browser, it's not send to any server!
              </div>
            </Dropzone>
        );
    }
}
