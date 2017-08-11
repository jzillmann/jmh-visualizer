var React = require('react');

var Scroll = require('react-scroll');

// A link in TocSidebar pointing to a TocElement
class TocLink extends React.Component {

    static propTypes = {
        children: React.PropTypes.node.isRequired,
    };

    render() {
        return (
            <li {...this.props}>
              { this.props.children }
            </li>
        );
    }

}

const EnhancedTocLink = Scroll.Helpers.Scroll(TocLink);
export { EnhancedTocLink as default }


