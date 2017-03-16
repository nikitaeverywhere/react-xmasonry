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

    /**
     * Reference to the div element.
     * @type {null}
     */
    divElement = null;

    /**
     * Identifies whether this .xblock is initialized.
     * @type {boolean}
     */
    placed = false;

    /**
     * Identifies whether this .xblock is in animating state.
     * @type {boolean}
     */
    animating = false;

    componentDidUpdate () {
        if (this.placed && !this.props.parent)
            return;
        this.placed = true;
        const parent = this.props.parent;
        requestAnimationFrame(() => {
            if (!this.divElement) return;
            let images = Array.from(this.divElement.querySelectorAll(`img`)),
                handleImages = images.length > 0 && parent.props.updateOnImagesLoad;
            if (handleImages) images.forEach(
                (img) => img.addEventListener(`load`, () => !this.animating && parent.update())
            );
            if (parent.props.updateOnAnimationEnd !== false // undefined !== false => auto
                    && (handleImages || parent.props.updateOnAnimationEnd)) {
                this.divElement.addEventListener(`animationstart`, () => this.animating = true);
                this.divElement.addEventListener(
                    `animationend`,
                    () => !(this.animating = false) && parent.update()
                );
            }
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