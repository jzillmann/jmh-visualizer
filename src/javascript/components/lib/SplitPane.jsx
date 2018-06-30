import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import AutoAffix from 'react-overlays/lib/AutoAffix';

export default function SplitPane(props) {

    return <Grid fluid={ true }>
             <Row>
               <Col xs={ 14 } md={ 10 }>
               { props.left }
               </Col>
               <Col xs={ 4 } md={ 2 }>
               <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                 <div className='bs-docs-sidebar'>
                   { props.right }
                 </div>
               </AutoAffix>
               </Col>
             </Row>
           </Grid>;
}

SplitPane.propTypes = {
    left: PropTypes.object.isRequired,
    right: PropTypes.object.isRequired,
};