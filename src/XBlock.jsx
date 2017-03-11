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
        let dataAttributes = {
            "data-key": this.props["data-key"],
            "data-width": this.props["data-width"]
        };
        if (this.props["data-xkey"])
            dataAttributes["data-xkey"] = this.props["data-xkey"];
        return <div { ...dataAttributes } style={ { ...this.props.style, ...XBlock.defaultStyle } }
                    className={ this.props.measured ? "xblock" : "" }>
            { this.props.children }
        </div>;
    }

}