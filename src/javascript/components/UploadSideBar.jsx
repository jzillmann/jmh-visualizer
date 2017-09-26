import React from 'react';

import PointingHandIcon from 'react-icons/lib/fa/hand-o-right'

//Sidebar for the upload view
export default class UploadSideBar extends React.Component {

    static propTypes = {
        fileUploader: React.PropTypes.object.isRequired,
        loadSingleRunExampleFunction: React.PropTypes.func.isRequired,
        loadTwoRunsExampleFunction: React.PropTypes.func.isRequired,
        loadMultiRunExampleFunction: React.PropTypes.func.isRequired,
    };

    render() {
        const {fileUploader, loadSingleRunExampleFunction, loadTwoRunsExampleFunction, loadMultiRunExampleFunction} = this.props;
        return <div style={ { whiteSpace: 'nowrap' } }>
                 <div>
                   <div className="btn btn-default" style={ { position: 'relative' } }>
                     Open File Dialog
                     <input
                            type="file"
                            multiple
                            accept=".json"
                            onChange={ (event) => fileUploader.upload([...event.target.files]) }
                            style={ { opacity: 0.0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 } } />
                   </div>
                 </div>
                 <br/>
                 <div>
                   <PointingHandIcon/>
                   { ' ' }
                   <a onClick={ loadSingleRunExampleFunction }>Load Single Run Example</a>
                 </div>
                 <div>
                   <PointingHandIcon/>
                   { ' ' }
                   <a onClick={ loadTwoRunsExampleFunction }>Load Two Runs Example</a>
                 </div>
                 <div>
                   <PointingHandIcon/>
                   { ' ' }
                   <a onClick={ loadMultiRunExampleFunction }>Load Multi Run Example</a>
                 </div>
                 <br/>
               </div>
    }
}