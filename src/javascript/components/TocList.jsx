import React from 'react';
import PropTypes from 'prop-types';

import { actions } from 'store/store.js'
import TocLink from 'components/TocLink.jsx'

import {  scrollSpy, scroller } from 'react-scroll'

//Constructs a sidebar with a set of controls and links to the MainView sections
export default class TocList extends React.PureComponent {

    static propTypes = {
        categories: PropTypes.array.isRequired,
        activeCategory: PropTypes.string.isRequired,
        elementIds: PropTypes.array.isRequired,
        elementNames: PropTypes.array.isRequired,
        linkControlsCreators: PropTypes.array.isRequired,
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
        const { categories, activeCategory, elementIds, elementNames, linkControlsCreators } = this.props;
        //TODO extract TocElement to own component and make onClick handlers unique: https://stackoverflow.com/a/38908620/672008
        return (
            <ul className="nav">
                { categories.map(category => <li key={ category } className={ category === activeCategory ? 'active' : '' }>
                    <div>
                        <a onClick={ () => actions.selectCategory(category) }>
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

