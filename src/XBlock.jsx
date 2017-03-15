import React from "react";

export default class XBlock extends React.Component {

    static defaultProps = {
        width: 1,
        measured: false
    };

    static defaultStyle = {
        position: `absolute`,
        boxSizing: `border-box`
    };

    render () {
        let { width, measured, style, ...rest } = this.props;
        return <div { ...rest } style={ { ...style, ...XBlock.defaultStyle } }
                    className={ this.props.measured ? `xblock` : `` }>
            { this.props.children }
        </div>;
    }

}