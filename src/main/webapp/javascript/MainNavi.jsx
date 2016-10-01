import React from 'react';
import { Link, IndexLink } from 'react-router'
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import Logo from './Logo.jsx';


class MainNavi extends React.Component {
    render() {
        return (
            <div>
              <AppBar
                      relative
                      flat
                      title="JMH Visualizer"
                      leftIcon={ <Logo/> }
                      onLeftIconClick={ function(){window.location='index.html'} }>
                <Navigation type='horizontal'>
                  <IndexLink
                             data-react-toolbox="link"
                             style={ { color: 'white' } }
                             className="theme__button___1iKuo theme__flat___2ui7t theme__neutral___uDC3j"
                             activeStyle={ { background: 'transparent' } }
                             to="/">
                    Charts
                  </IndexLink>
                  <Link
                        data-react-toolbox="link"
                        style={ { color: 'white' } }
                        className="theme__button___1iKuo theme__flat___2ui7t theme__neutral___uDC3j"
                        activeStyle={ { background: 'transparent' } }
                        to="/about"> About
                  </Link>
                </Navigation>
              </AppBar>
            </div>
            );
    }
}

export default MainNavi;