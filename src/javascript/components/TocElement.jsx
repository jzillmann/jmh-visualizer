var React = require('react');

var Scroll = require('react-scroll');
var Element = Scroll.Element;

//An element in the main content of a page linked by a TocLink within a TocSideBar
export default class TocElement extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        children: React.PropTypes.node.isRequired,
    };

    render() {
        return (
            <Element {...this.props}>
              { this.props.children }
            </Element>
        );
    }
}

// const EnhancedTocElement = Scroll.Helpers.Element(TocElement);
// export { EnhancedTocElement as default }