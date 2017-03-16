import React from "react";
import debounce from "../utils/debounce.jsx";

/**
 * @npm react-xmasonry
 */
export default class XMasonry extends React.Component {

    static propTypes = {
        center: React.PropTypes.bool,
        maxColumns: React.PropTypes.number,
        responsive: React.PropTypes.bool,
        targetBlockWidth: React.PropTypes.number,
        updateOnAnimationEnd: React.PropTypes.bool,
        updateOnImagesLoad: React.PropTypes.bool
    };

    static defaultProps = {
        center: true,
        maxColumns: Infinity,
        responsive: true,
        targetBlockWidth: 300,
        updateOnAnimationEnd: undefined,
        updateOnImagesLoad: true
    };

    static containerStyle = {
        position: `relative`
    };

    getBestFitColumn (heights, width = 1) {
        const actualCols = Math.min(heights.length - width + 1, this.props.maxColumns - width + 1);
        let minIndex = 0,
            minHeight = Infinity;
        for (let i = 0; i < actualCols; ++i) {
            let currentMinHeight = Math.max.apply(null, heights.slice(i, i + width));
            if (currentMinHeight < minHeight) {
                minHeight = currentMinHeight;
                minIndex = i;
            }
        }
        return { col: minIndex, height: minHeight };
    }

    state = {
        blocks: {},
        containerHeight: 0,
        columns: 1,
        containerWidth: 0
    };

    /**
     * XMasonry layout container reference.
     * @type {HTMLElement}
     * @readonly
     */
    container = null;

    /**
     * Indicates if the component is mounted.
     * @type {boolean}
     * @private
     */
    mounted = false;

    /**
     * De-bouncing properties used to prevent size recalculations being called very often.
     * @type {function}
     * @private
     */
    debouncedResize = debounce(this.updateContainerWidth.bind(this));

    /**
     * This property assigns the fixed height to XMasonry container. The purpose of this is to
     * prevent masonry layout from updating infinitely. For example, when the elements get measured
     * and placed first time, the scroll bar may appear. Because of the width change XMasonry will
     * go to recalculate sizes once more, appearing at the state 0 again because elements to
     * calculate get detached from the DOM. This creates an infinite loop. The solution for this is
     * to fix the container's previously calculated height until all the elements will be measured.
     * @type {number}
     * @private
     */
    fixedHeight = 0;

    /**
     * The width of XMasonry block in pixels. Is assigned dynamically, and must be in sync with the
     * state property.
     * @type {number}
     * @readonly
     */
    containerWidth = this.state.containerWidth;
    columns = this.state.columns;

    constructor (props) {
        super(props);
        if (this.props.responsive)
            window.addEventListener("resize", this.debouncedResize);
        this.updateContainerWidth();
    }

    componentDidMount() {
        this.mounted = true;
        this.updateInternal();
    }

    componentWillUnmount () {
        this.mounted = false;
        window.removeEventListener("resize", this.debouncedResize);
    }

    componentWillReceiveProps (newProps) {
        if (newProps.children.length < this.props.children.length) {
            let newKeys = new Set(),
                deleted = {};
            for (let i = 0; i < newProps.children.length; i++)
                newKeys.add(newProps.children[i].key);
            for (let i = 0; i < this.props.children.length; i++) {
                if (!newKeys.has(this.props.children[i].key))
                    deleted[this.props.children[i].key] = {};
            }
            this.recalculatePositions(null, deleted);
        }
    }

    componentDidUpdate() {
        this.updateInternal();
    }

    /**
     * Get number of columns by the given width in pixels.
     * @param {number} width
     * @returns {number}
     */
    getColumnsNumber (width) {
        return Math.max(1, Math.round(width / this.props.targetBlockWidth));
    }

    /**
     * @private
     * @returns {boolean} - Width updated.
     */
    updateContainerWidth () {
        if (!this.mounted) return false;
        let newWidth = this.container.getBoundingClientRect().width;
        if (newWidth === this.containerWidth)
            return false;
        this.setState({
            columns: this.columns = this.getColumnsNumber(newWidth),
            containerWidth: this.containerWidth = newWidth,
            blocks: {}
        });
        return true;
    }

    /**
     * Measure non-measured blocks.
     * @param {boolean=false} force - If passed, re-measure all children, even already measured.
     * @private
     */
    measureChildren (force = false) {
        let blocks = {};
        for (let i = 0; i < this.container.children.length; i++) {
            let child = this.container.children[i];
            if (!child.hasAttribute("data-xkey") && !force) continue;
            let { height } = child.getBoundingClientRect();
            blocks[child.getAttribute("data-key")] = { height: Math.ceil(height) };
        }
        if (Object.keys(blocks).length > 0) this.recalculatePositions(blocks);
    }

    /**
     * @param {object} newBlocks
     * @param {object} deletedBlocks
     * @private
     */
    recalculatePositions (newBlocks = null, deletedBlocks = null) {
        let blocks,
            heights = Array.from({ length: this.columns }, () => 0);
        if (deletedBlocks) {
            blocks = {};
            for (let key in this.state.blocks)
                if (this.state.blocks.hasOwnProperty(key) && !deletedBlocks.hasOwnProperty(key))
                    blocks[key] = this.state.blocks[key];
            for (let key in newBlocks)
                if (newBlocks.hasOwnProperty(key) && !deletedBlocks.hasOwnProperty(key))
                    blocks[key] = newBlocks[key];
        } else {
            blocks = {
                ...this.state.blocks,
                ...newBlocks
            }
        }
        for (let i = 0; i < this.container.children.length; i++) {
            let child = this.container.children[i],
                key = child.getAttribute("data-key");
            if (!blocks.hasOwnProperty(key)) continue;
            if (deletedBlocks && deletedBlocks.hasOwnProperty(key)) continue;
            let blockWidth = +child.getAttribute("data-width") || 1,
                { col, height } = this.getBestFitColumn(heights, blockWidth),
                newHeight = height + blocks[key].height;
            blocks[key].left = this.containerWidth * col / this.columns;
            blocks[key].top = height;
            for (let i = 0; i < blockWidth; ++i) heights[col + i] = newHeight;
        }
        if (this.props.center && heights[heights.length - 1] === 0) {
            let emptyColumns = 1;
            for (; heights[heights.length - 1 - emptyColumns] === 0; ++emptyColumns);
            let leftMargin = this.containerWidth * emptyColumns / this.columns / 2;
            for (let key in blocks)
                if (blocks.hasOwnProperty(key)) blocks[key].left += leftMargin;
        }
        this.setState({ blocks, containerHeight: Math.max.apply(null, heights) });
    }

    /**
     * Update nested `XBlock`s sizes and positions. It is safe to trigger this function multiple
     * times, the size update is optimized.
     */
    update = debounce(this.updateInternal.bind(this, true));

    /**
     * This flag has just an optimization purpose: it prevents layout from running updateInternal
     * twice as external update with force flag always run componentDidUpdate method, which triggers
     * updateInternal method as well.
     * @see updateInternal
     * @type {boolean}
     */
    externalUpdate = false;

    /**
     * @param {boolean=false} external - If passed, re-measure all children, even already measured.
     * @private
     */
    updateInternal (external = false) {

        // prevent from updating layout twice when force update is triggered.
        if (this.externalUpdate) { this.externalUpdate = false; return; }
        if (external) { this.externalUpdate = true; }

        if (!this.updateContainerWidth())
            this.measureChildren(external);

    }

    render () {
        let toMeasure = 0;
        const elements = this.containerWidth === 0 ? [] // wait for next render until
            : Array.prototype.slice.call(this.props.children).map((element) => {
                let measured = this.state.blocks[element.key], // || undefined
                    width = Math.min(element.props.width, this.columns);
                if (!measured) ++toMeasure;
                return measured
                    ? React.cloneElement(element, {
                        "data-key": element.key,
                        "data-width": width,
                        "style": {
                            width: Math.floor(width * this.containerWidth / this.columns),
                            // height: measured.height,
                            left: Math.floor(measured.left),
                            top: measured.top
                        },
                        "measured": true,
                        "width": width,
                        "parent": this
                    })
                    : React.cloneElement(element, {
                        "data-key": element.key,
                        "data-width": width,
                        "data-xkey": element.key,
                        "style": {
                            width: Math.floor(width * this.containerWidth / this.columns),
                            visibility: "hidden"
                        },
                        "width": width,
                        "parent": this
                    });
        });
        let actualHeight = elements.length - toMeasure > 0 || elements.length === 0
            ? this.fixedHeight = this.state.containerHeight
            : this.fixedHeight;
        const { center, maxColumns, responsive, targetBlockWidth, updateOnAnimationEnd,
            updateOnImagesLoad, className, style, ...restProps } = this.props;
        return <div className={className ? `xmasonry ${className}` : `xmasonry`}
                    style={ {
                        ...XMasonry.containerStyle,
                        height: actualHeight,
                        ...style
                    } }
                    ref={ (c) => this.container = c }
                    { ...restProps }>
            { elements }
        </div>;
    }

}