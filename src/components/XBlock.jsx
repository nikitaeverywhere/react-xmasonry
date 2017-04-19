import React from "react";

/**
 * XBlock represents the grid cell (div). Do not apply custom styling and margins on this block.
 */
export default class XBlock extends React.Component {

    // static propTypes = { // React.propTypes are deprecated as of React v15.5
    //     width: React.PropTypes.number
    // };

    static defaultProps = {
        width: 1,
        measured: false
    };

    static defaultStyle = {
        position: `absolute`,
        boxSizing: `border-box`
    };

    /**
     * Reference to the div element.
     * @type {HTMLElement|null}
     */
    divElement = null;

    /**
     * Identifies whether this .xblock is initialized.
     * @type {boolean}
     */
    placed = false;

    componentDidUpdate () {
        if (this.placed || !this.props.parent || this.props["data-xkey"])
            return;
        this.placed = true;
        const parent = this.props.parent;
        requestAnimationFrame(() => { if (!this.divElement) return;
            let images = Array.from(this.divElement.querySelectorAll(`img`)),
                handleImages = images.length > 0 && parent.props.updateOnImagesLoad;
            if (handleImages) images.forEach(
                (img) => !img.complete && img.addEventListener(`load`, parent.update)
            );
            if (this.props.height !== this.divElement.clientHeight)
                parent.update(); // useful when f.e. image was loaded in between renders
        });
    }

    render () {
        const { width, height, measured, parent, style, ...rest } = this.props,
              maxColumns = this.props.parent.columns,
              columns = Math.min(width || 1, maxColumns);
        style.width = Math.floor(columns * this.props.parent.containerWidth / maxColumns);
        return <div data-width={ columns }
                    { ...rest }
                    style={ { ...style, ...XBlock.defaultStyle } }
                    className={ measured ? `xblock` : `` }
                    ref = { (x) => this.divElement = x }>
            { this.props.children }
        </div>;
    }

}