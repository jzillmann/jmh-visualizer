import React from 'react';
import Dropzone from 'react-dropzone'
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload'

class FileDrop extends React.Component {

    static propTypes = {
        uploadBenchmarks: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            uploadBenchmarks: props.uploadBenchmarks,
        };
    }

    onDrop(files) {
        if (files.length > 1) {
            alert(`Only 1 file allowed to upload, not ${files.length}!`)
            return
        }
        const file = files[0]
        console.log('Received file: ', file);
        const reader = new FileReader();

        const uploadFunction = this.state.uploadBenchmarks;
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

    render() {
        return (
            <div>
              <Dropzone onDrop={ this.onDrop.bind(this) } multiple={ true } style={ { width: 400, height: 200, borderWidth: 2, borderColor: '#666', borderStyle: 'dashed', borderRadius: 5, display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' } }>
                <div className="container">
                  Drop your JMH JSON files here!
                </div>
                <h3><FaCloudUpload/></h3>
              </Dropzone>
            </div>
            );
    }
}

FileDrop.propTypes = {
    route: React.PropTypes.object,
};

export default FileDrop;