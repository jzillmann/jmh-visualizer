import React from 'react';

import AutoAffix from 'react-overlays/lib/AutoAffix';

//Constructs a sidebar with a set of controls and links to the MainView sections
export default class TocSidebar extends React.PureComponent {

    static propTypes = {
        upperControls: React.PropTypes.object.isRequired,
        categories: React.PropTypes.array.isRequired,
        activeCategory: React.PropTypes.string.isRequired,
        selectCategoryFunction: React.PropTypes.func.isRequired,
        elementIds: React.PropTypes.array.isRequired,
        elementNames: React.PropTypes.array.isRequired,
    };

    render() {
        const {upperControls, categories, activeCategory, selectCategoryFunction, elementIds, elementNames} = this.props;

        return (
            <AutoAffix viewportOffsetTop={ 15 } container={ this }>
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
                                                 <ul className="nav">
                                                   { category === activeCategory ? elementIds.map((elementId, i) => <li key={ elementId }>
                                                                                                                      <div>
                                                                                                                        <span/><span/>
                                                                                                                        <a href={ '#' + elementId }>
                                                                                                                          { elementNames[i] }
                                                                                                                        </a>
                                                                                                                      </div>
                                                                                                                    </li>)
                                                     : '' }
                                                 </ul>
                                               </li>) }
                </ul>
              </div>
            </AutoAffix>
        );
    }

}

