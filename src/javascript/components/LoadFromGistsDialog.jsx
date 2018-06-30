import React from 'react';

import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'

export default class LoadFromGistsDialog extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            gist1: '',
            gist2: ''
        };
        this.handleGist1Change = this.handleGist1Change.bind(this);
        this.handleGist2Change = this.handleGist2Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleGist1Change(event) {
        this.setState({
            gist1: event.target.value
        });
    }

    handleGist2Change(event) {
        this.setState({
            gist2: event.target.value
        });
    }

    handleSubmit() {
        const params = new URLSearchParams(window.location.search);
        params.delete('source');
        params.delete('sources');
        params.delete('gist');
        params.delete('gists');

        if (this.state.gist2) {
            params.set('gists', `${this.state.gist1},${this.state.gist2}`);
        } else {
            params.set('gist', this.state.gist1);
        }

        window.location.search = decodeURIComponent(params.toString());
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="gist1">
                    <Col componentClass={ ControlLabel } sm={ 2 }> Gist 1
                </Col>
                    <Col sm={ 10 }>
                        <FormControl type="text" onChange={ this.handleGist1Change } />
                    </Col>
                </FormGroup>
                <FormGroup controlId="gist2">
                    <Col componentClass={ ControlLabel } sm={ 2 }> Gist 2 (optional)
                </Col>
                    <Col sm={ 10 }>
                        <FormControl type="text" onChange={ this.handleGist2Change } />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={ 2 } sm={ 10 }>
                        <Button onClick={ this.handleSubmit } disabled={ !this.state.gist1 }>
                            Load
                </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

}