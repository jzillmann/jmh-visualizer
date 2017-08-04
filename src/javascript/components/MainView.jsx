import React from 'react';

// Constructs a view with sequential elements wrapping in id's sections to be # href'ed
export default class MainView extends React.PureComponent {

    static propTypes = {
        elements: React.PropTypes.array.isRequired,
    };

    render() {
        const {elements} = this.props;

        return (<div>
                  { elements.map(element => <section key={ element.key } id={ element.key }>
                                              { element }
                                            </section>) }
                </div>);
    }
}
