import React from 'react';
import Dropzone from 'react-dropzone'

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
              <Dropzone onDrop={ this.onDrop.bind(this) }>
                <div>
                  <i>Drop your JMH results in JSON format!</i>
                </div>
              </Dropzone>
            </div>
            );
    }
}

FileDrop.propTypes = {
    route: React.PropTypes.object,
};

export default FileDrop;