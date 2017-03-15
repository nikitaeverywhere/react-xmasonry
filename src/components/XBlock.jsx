import React from "react";

/**
 * XBlock represents the grid cell (div). Do not apply custom styling and margins on this block.
 */
export default class XBlock extends React.Component {

    static propTypes = {
        width: React.PropTypes.number
    };

    static defaultProps = {
        width: 1,
        measured: false
        // , update: () => {}
    };

    static defaultStyle = {
        position: `absolute`,
        boxSizing: `border-box`
    };

    divElement = null;
    placed = false;

    componentDidUpdate () {
        if (this.placed && !this.props.parent)
            return;
        this.placed = true;
        const parent = this.props.parent;
        if (!parent.props.updateOnAnimationEnd && !parent.props.updateOnImagesLoad)
            return;
        requestAnimationFrame(() => {
            if (!this.divElement) return;
            if (parent.props.updateOnImagesLoad)
                Array.from(this.divElement.querySelectorAll(`img`)).forEach(
                    (img) => img.addEventListener(`load`, parent.update) // rest
                );
            if (parent.props.updateOnAnimationEnd)
                this.divElement.addEventListener(`animationend`, parent.update);
        });
    }

    render () {
        let { width, measured, parent, style, ...rest } = this.props;
        return <div { ...rest } style={ { ...style, ...XBlock.defaultStyle } }
                    className={ this.props.measured ? `xblock` : `` }
                    ref = { (x) => this.divElement = x }>
            { this.props.children }
        </div>;
    }

}