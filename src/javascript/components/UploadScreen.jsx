import React from 'react';

import SplitPane from 'components/lib/SplitPane.jsx'
import UploadMainView from 'components/UploadMainView.jsx';
import UploadSideBar from 'components/UploadSideBar.jsx';

const UploadScreen = () => {
    return (
        <SplitPane left={ <UploadMainView /> } right={ <UploadSideBar /> } />
    );
}

export default UploadScreen;