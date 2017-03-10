import React from "react";

export default class XBlock extends React.Component {

    static defaultProps = {
        width: 1,
        measured: false
    };

    static defaultStyle = {
        position: `absolute`
    };

    render () {
        return <div { ...this.props } style={ { ...this.props.style, ...XBlock.defaultStyle } }
                    className={ this.props.measured ? "xblock" : "" }>
            { this.props.children }
        </div>;
    }

}