import React from 'react';
import Dropzone from 'react-dropzone'

class FileDrop extends React.Component {
    onDrop(files) {
        console.log('Received files: ', files);
    }
    render() {
        return (
            <div>
              <Dropzone onDrop={ this.onDrop }>
                <div><i>Drop your JMH results in JSON format!</i></div>
              </Dropzone>
            </div>
            );
    }
}
export default FileDrop;