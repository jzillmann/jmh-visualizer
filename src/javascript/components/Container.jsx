import React, { Component } from 'react';
import MainNavi from './MainNavi.jsx';

class Container extends Component {
    render() {
        return (
            <div>
              <MainNavi/>
              <section style={ { padding: 20 } }>
                { this.props.children }
              </section>
            </div>
            );
    }
}

Container.propTypes = {
    children: React.PropTypes.node,
};

export default Container
