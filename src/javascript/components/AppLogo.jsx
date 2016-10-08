import React, { Component } from 'react';
import FaAlignLeft from 'react-icons/lib/fa/align-left'

export default class MyLogo extends Component {

    static propTypes = {
        onClick: React.PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(e);
    }



    render() {
        return (
            <a href="" onClick={ this.handleClick }>
              <FaAlignLeft/> JMH Visualizer</a>
            );
    }
}
