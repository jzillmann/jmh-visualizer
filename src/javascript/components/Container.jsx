import React, { Component } from 'react';
import MainNavi from './MainNavi.jsx';

class Container extends Component {
    render() {
        return (
            <div>
              <MainNavi/>
              <div ref="main" className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    { this.props.children }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar-holder">
                    aaa
                  </div>
                </div>
              </div>
            </div>
            );
    }
}

Container.propTypes = {
    children: React.PropTypes.node,
};

export default Container
