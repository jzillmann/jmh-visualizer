import React from 'react';

import TocLink from 'components/TocLink.jsx'

var Scroll = require('react-scroll');
var scrollSpy = Scroll.scrollSpy;
var scroller = Scroll.scroller;

//Constructs a sidebar with a set of controls and links to the MainView sections
export default class TocList extends React.PureComponent {

    static propTypes = {
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
        const {categories, activeCategory, selectCategoryFunction, elementIds, elementNames, linkControlsCreators} = this.props;

        return (
            <ul className="nav">
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
                                                                                                                         duration={ 720 }
                                                                                                                         delay={ 50 }
                                                                                                                         smooth='easeOutSine'>
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
        );
    }

}

