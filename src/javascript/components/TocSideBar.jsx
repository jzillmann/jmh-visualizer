import React from 'react';

import EyeIcon from 'react-icons/lib/fa/eye'
import DetailsIcon from 'react-icons/lib/fa/search-plus'

import AutoAffix from 'react-overlays/lib/AutoAffix';

import Scrollspy from 'react-scrollspy'

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
                                                 <Scrollspy
                                                            className="nav"
                                                            items={ elementIds }
                                                            currentClassName="active"
                                                            offset={ -90 }>
                                                   { category === activeCategory ? elementIds.map((elementId, i) => <li key={ elementId }>
                                                                                                                      <div>
                                                                                                                        { linkControlsCreators.map(linkControlCreator => linkControlCreator(elementId)) }
                                                                                                                        <a href={ '#' + elementId }>
                                                                                                                          { elementNames[i] }
                                                                                                                        </a>
                                                                                                                      </div>
                                                                                                                    </li>)
                                                     : '' }
                                                 </Scrollspy>
                                               </li>) }
                </ul>
              </div>
            </AutoAffix>
        );
    }

}

