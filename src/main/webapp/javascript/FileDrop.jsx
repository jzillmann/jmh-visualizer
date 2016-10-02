import React from 'react';
import Dropzone from 'react-dropzone'

class FileDrop extends React.Component {

    constructor(props) {
        super(props);
        console.log('sdas' + props.route.onFileUpload)
        console.log('sdas' + props.route.xyz)
        this.state = {
            onFileUpload: props.route.onFileUpload,
            xyz: props.route.xyz,
        };
    }

    onDrop(files) {
        console.log('Received files: ', files);
        console.log(this.state.onFileUpload)
        console.log(this.state.xyz)
        this.state.onFileUpload()
    }

    render() {
        return (
            <div>
              { '' + this.props.route.onFileUpload } _
              { '' + this.props.route.xyz }_
              { '' + this.state.xyz }_
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