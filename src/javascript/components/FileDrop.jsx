import React from 'react';
import Dropzone from 'react-dropzone'
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload'
import FaHandORight from 'react-icons/lib/fa/hand-o-right'
import FaFileText from 'react-icons/lib/fa/file-text'
import Loader from './Loader.jsx';

export default class FileDrop extends React.Component {

    static propTypes = {
        uploadBenchmarksFunction: React.PropTypes.func.isRequired,
        loadExamplesFunction: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            uploadBenchmarksFunction: props.uploadBenchmarksFunction,
            loadExamplesFunction: props.loadExamplesFunction,
            loading: false
        };
    }

    onDrop(files) {
        if (files.length > 1) {
            alert(`Only 1 file allowed to upload, not ${files.length}!`)
            return
        }
        this.setState({
            loading: true
        });
        const file = files[0]
        const reader = new FileReader();

        const uploadFunction = this.state.uploadBenchmarksFunction;
        reader.onload = function(evt) {
            try {
                var parsedBenchmarks = JSON.parse(evt.target.result);
                uploadFunction(parsedBenchmarks)
            } catch ( e ) {
                alert(e); //error in the above string(in this case,yes)!
            }
        };
        reader.readAsText(file);
    }

    onLoadExample() {
        this.setState({
            loading: true
        });
        setTimeout(function() {
            this.state.loadExamplesFunction();
        }.bind(this), 450);
    }

    render() {
        var uploadIcon;
        if (this.state.loading) {
            uploadIcon = <Loader/>
        } else {
            uploadIcon = <FaCloudUpload width={ 100 } height={ 100 } /> ;
        }

        return (
            <div>
              <Dropzone onDrop={ this.onDrop.bind(this) } multiple={ true } style={ { width: 400, height: 500, borderWidth: 2, borderColor: '#666', borderStyle: 'dashed', borderRadius: 5, display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' } }>
                <div className="container">
                  <h3>Drop your JMH JSON file here!</h3>
                </div>
                <h1>{ uploadIcon }</h1>
              </Dropzone>
              <div className="container" style={ { width: 400 } }>
                <br/>
                <br/>
                <h3>Or load a Sample: <FaHandORight/> <FaFileText onMouseOver={ this.onLoadExample.bind(this) } width={ 70 } height={ 70 }/></h3>
              </div>
            </div>
            );
    }
}
