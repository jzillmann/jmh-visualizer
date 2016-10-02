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
        console.log('Received files: ', files);
        this.state.uploadBenchmarks()
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