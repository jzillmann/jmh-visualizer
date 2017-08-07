import React from 'react';

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default function SplitPane(props) {

    return <Grid fluid={ true }>
             <Row>
               <Col xs={ 14 } md={ 10 }>
               { props.left }
               </Col>
               <Col xs={ 4 } md={ 2 }>
               { props.right }
               </Col>
             </Row>
           </Grid>;
}

SplitPane.propTypes = {
    left: React.PropTypes.object.isRequired,
    right: React.PropTypes.object.isRequired,
};