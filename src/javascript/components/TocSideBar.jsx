import React from 'react';

import AutoAffix from 'react-overlays/lib/AutoAffix';
import TocLink from './TocLink.jsx'


var Scroll = require('react-scroll');
var scrollSpy = Scroll.scrollSpy;
var scroller = Scroll.scroller;

//Constructs a sidebar with a set of controls and links to the MainView sections
export default class TocSidebar extends React.PureComponent {

    static propTypes = {
        container: React.PropTypes.object.isRequired,
        upperControls: React.PropTypes.object.isRequired,
        categories: React.PropTypes.array.isRequired,
        activeCategory: React.PropTypes.string.isRequired,
        selectCategoryFunction: React.PropTypes.func.isRequired,
        elementIds: React.PropTypes.array.isRequired,
        elementNames: React.PropTypes.array.isRequired,
        linkControlsCreators: React.PropTypes.array.isRequired,
    };

    componentDidMount() {
        scrollSpy.update();
    }

    scrollTo(elementId) {
        scroller.scrollTo(elementId, {
            duration: 500,
            delay: 50,
            smooth: 'linear',
            offset: -25
        });
    }

    render() {
        const {container, upperControls, categories, activeCategory, selectCategoryFunction, elementIds, elementNames, linkControlsCreators} = this.props;

        return (
            <AutoAffix viewportOffsetTop={ 15 } container={ container }>
              <div className="bs-docs-sidebar">
                { upperControls }
                <hr/>
                <ul className="bs-docs-sidenav nav">
                  { categories.map(category => <li key={ category } className={ category === activeCategory ? 'active' : '' }>
                                                 <div>
                                                   <a onClick={ selectCategoryFunction.bind(null, category) }>
                                                     { category }
                                                   </a>
                                                 </div>
                                                 <ul className='nav'>
                                                   { category === activeCategory ? elementIds.map((elementId, i) => <TocLink
                                                                                                                             key={ elementId }
                                                                                                                             activeClass="active"
                                                                                                                             to={ elementId }
                                                                                                                             spy={ true }
                                                                                                                             offset={ -200 }
                                                                                                                             duration={ 500 }
                                                                                                                             delay={ 50 }
                                                                                                                             smooth='linear'>
                                                                                                                      <div>
                                                                                                                        { linkControlsCreators.map(linkControlCreator => linkControlCreator(elementId)) }
                                                                                                                        <a onClick={ this.scrollTo.bind(this, elementId) }>
                                                                                                                          { elementNames[i] }
                                                                                                                        </a>
                                                                                                                      </div>
                                                                                                                    </TocLink>)
                                                     : '' }
                                                 </ul>
                                               </li>) }
                </ul>
              </div>
            </AutoAffix>
        );
    }

}

