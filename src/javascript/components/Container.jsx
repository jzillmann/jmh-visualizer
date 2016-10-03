import React, { Component } from 'react';
import MainNavi from './MainNavi.jsx';

class Container extends Component {
    render() {
        return (
            <div>
              <MainNavi/>
              <div className="container">
                { this.props.children }
              </div>
            </div>
            );
    }
}

Container.propTypes = {
    children: React.PropTypes.node,
};

export default Container
