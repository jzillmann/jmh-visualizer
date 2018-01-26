import React from 'react';

import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'

export default class LoadFromUrlsDialog extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            url1: '',
            url2: ''
        };
        this.handleUrl1Change = this.handleUrl1Change.bind(this);
        this.handleUrl2Change = this.handleUrl2Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUrl1Change(event) {
        this.setState({
            url1: event.target.value
        });
    }

    handleUrl2Change(event) {
        this.setState({
            url2: event.target.value
        });
    }

    handleSubmit() {
        const params = new URLSearchParams(window.location.search);
        params.delete('source');
        params.delete('sources');
        params.delete('gist');
        params.delete('gists');

        if (this.state.url2) {
            params.set('sources', `${this.state.url1},${this.state.url2}`);
        } else {
            params.set('source', this.state.url1);
        }

        window.location.search = decodeURIComponent(params.toString());
    }

    render() {
        return (
            <Form horizontal>
              <FormGroup controlId="url1">
                <Col componentClass={ ControlLabel } sm={ 2 }> URL 1
                </Col>
                <Col sm={ 10 }>
                <FormControl type="text" onChange={ this.handleUrl1Change } />
                </Col>
              </FormGroup>
              <FormGroup controlId="url2">
                <Col componentClass={ ControlLabel } sm={ 2 }> URL 2 (optional)
                </Col>
                <Col sm={ 10 }>
                <FormControl type="text" onChange={ this.handleUrl2Change } />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={ 2 } sm={ 10 }>
                <Button onClick={ this.handleSubmit } disabled={ !this.state.url1 }>
                  Load
                </Button>
                </Col>
              </FormGroup>
            </Form>
        );
    }

}