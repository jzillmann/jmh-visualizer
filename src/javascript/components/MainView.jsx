import React from 'react';

import AutoAffix from 'react-overlays/lib/AutoAffix';

var Scroll = require('react-scroll');
var Link = Scroll.Link;
var scrollSpy = Scroll.scrollSpy;

export default class MainView extends React.Component {

    static propTypes = {
        children: React.PropTypes.array.isRequired,
        benchmarkClasses: React.PropTypes.array.isRequired,
    };

    componentDidMount() {
        scrollSpy.update();
    }

    render() {
        return (
            <div style={ { paddingBottom: 250 + 'px' } }>
              <div ref="main" className="container bs-docs-container">
                <div className="row">
                  <div className="col-md-10" role="main">
                    { /*in order for the children to be properly linked, they should contain scroll-spy elements*/ }
                    { this.props.children }
                  </div>
                  <div className="col-md-2 bs-docs-sidebar">
                    <AutoAffix viewportOffsetTop={ 15 } container={ this }>
                      <div>
                        <ul className="nav">
                          { this.props.benchmarkClasses.map((benchmarkClass) => <Link
                                                                                      key={ benchmarkClass }
                                                                                      activeClass="active"
                                                                                      to={ benchmarkClass }
                                                                                      spy={ true }
                                                                                      smooth={ true }
                                                                                      duration={ 500 }
                                                                                      offset={ -200 }>
                                                                                <li role="presentation">
                                                                                  { benchmarkClass }
                                                                                </li>
                                                                                </Link>
                            ) }
                        </ul>
                      </div>
                    </AutoAffix>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}