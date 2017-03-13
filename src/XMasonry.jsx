import React from "react";

export default class XMasonry extends React.Component {

    static propTypes = {
        center: React.PropTypes.bool,
        responsive: React.PropTypes.bool,
        targetBlockWidth: React.PropTypes.number
    };

    static defaultProps = {
        center: true,
        responsive: true,
        targetBlockWidth: 300
    };

    state = {
        blocks: {},
        containerHeight: 0,
        columns: 1,
        containerWidth: 0
    };

    /**
     * XMasonry layout container.
     * @type {HTMLElement}
     */
    container = null;

    mounted = false;
    resizeListener = null;

    /**
     * De-bouncing properties used to prevent size recalculations being called very often.
     * @type {number}
     */
    debouncedResizeTimeout = 0;
    debounceRate = 50;

    /**
     * This property assigns the fixed height to XMasonry container. The purpose of this is to
     * prevent masonry layout from updating infinitely. For example, when the elements get measured
     * and placed first time, the scroll bar may appear. Because of the width change XMasonry will
     * go to recalculate sizes once more, appearing at the state 0 again because elements to
     * calculate get detached from the DOM. This creates an infinite loop. The solution for this is
     * to fix the container's previously calculated height until all the elements will be measured.
     * @type {number}
     */
    fixedHeight = 0;

    /**
     * The width of XMasonry block in pixels. Is assigned dynamically, must be in stick with the
     * state property.
     * @type {number}
     */
    containerWidth = this.state.containerWidth;
    columns = this.state.columns;

    static containerStyle = {
        position: `relative`
    };

    constructor (props) {
        super(props);
        if (this.props.responsive)
            window.addEventListener("resize", this.resizeListener = this.onResize.bind(this));
        this.onResize();
    }

    static getBestFitColumn (heights, width = 1) {
        let minIndex = 0,
            minHeight = Infinity;
        for (let i = 0; i < heights.length - width + 1; ++i) {
            let currentMinHeight = Math.max.apply(null, heights.slice(i, i + width));
            if (currentMinHeight < minHeight) {
                minHeight = currentMinHeight;
                minIndex = i;
            }
        }
        return { col: minIndex, height: minHeight };
    }

    /**
     * Get number of columns by the given width in pixels.
     * @param {number} width
     */
    getColumns (width) {
        return Math.max(1, Math.round(width / this.props.targetBlockWidth));
    }

    updateContainerWidth () {
        let newWidth = this.container.getBoundingClientRect().width;
        // console.log(`container width update attempt, ${ newWidth }=${ this.containerWidth } (new=old)`);
        if (newWidth === this.containerWidth)
            return true;
        // console.log(`need to update, columns=${ this.getColumns(newWidth) }, width=${ newWidth }, resetting blocks`);
        this.setState({
            columns: this.columns = this.getColumns(newWidth),
            containerWidth: this.containerWidth = newWidth,
            blocks: {}
        });
        return false;
    }

    componentDidMount() {
        this.mounted = true;
        if (this.updateContainerWidth())
            this.measureChildren();
    }

    componentWillUnmount () {
        this.mounted = false;
        if (this.resizeListener) window.removeEventListener("resize", this.resizeListener);
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
        if (this.updateContainerWidth())
            this.measureChildren();
    }

    measureChildren () {
        let blocks = {};
        // console.log(`Recalculating positions...`);
        // console.log(`Iterating over children:`, this.container.children);
        for (let i = 0; i < this.container.children.length; i++) {
            let child = this.container.children[i];
            // console.log(child.dataset, child.dataset.hasOwnProperty("xkey"), typeof child.dataset["xkey"] !== "undefined", child.dataset["xkey"]);
            if (typeof child.dataset["xkey"] === "undefined") continue;
            let { height } = child.getBoundingClientRect();
            blocks[child.dataset["xkey"]] = { height: Math.ceil(height) };
        }
        // console.log(`...of ${ Object.keys(blocks).length } children`);
        if (Object.keys(blocks).length > 0) this.recalculatePositions(blocks);
    }

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
            let child = this.container.children[i];
            if (!blocks.hasOwnProperty(child.dataset.key)) continue;
            if (deletedBlocks && deletedBlocks.hasOwnProperty(child.dataset.key)) continue;
            let blockWidth = +child.dataset.width || 1,
                { col, height } = XMasonry.getBestFitColumn(heights, blockWidth),
                newHeight = height + blocks[child.dataset.key].height;
            blocks[child.dataset.key].left = this.containerWidth * col / this.columns;
            blocks[child.dataset.key].top = height;
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
     * This method is triggered when component gets created (before the mount) and when resize
     * happens. This method uses de-bouncing technique to prevent updates from being called very
     * often.
     */
    onResize () {
        if (!this.mounted)
            return;
        if (this.debouncedResizeTimeout) {
            clearTimeout(this.debouncedResizeTimeout);
            this.debouncedResizeTimeout = setTimeout(() => {
                this.debouncedResizeTimeout = null;
                this.updateContainerWidth(this);
            }, this.debounceRate);
            return;
        }
        this.updateContainerWidth();
        this.debouncedResizeTimeout =
            setTimeout(() => this.debouncedResizeTimeout = 0, this.debounceRate);
    }

    render () {
        let toMeasure = 0;
        const elements = Array.prototype.slice.call(this.props.children).map((element) => {
            let measured = this.state.blocks[element.key], // || undefined
                width = Math.min(element.props.width, this.columns);
            if (!measured) ++toMeasure;
            return measured
                ? React.cloneElement(element, {
                    "data-key": element.key,
                    "data-width": width,
                    "style": {
                        width: Math.floor(width * this.containerWidth / this.columns),
                        height: measured.height,
                        left: Math.floor(measured.left),
                        top: measured.top
                    },
                    "measured": true,
                    "width": width
                })
                : React.cloneElement(element, {
                    "data-key": element.key,
                    "data-width": width,
                    "data-xkey": element.key,
                    "style": {
                        width: Math.floor(width * this.containerWidth / this.columns),
                        visibility: "hidden"
                    },
                    "width": width
                });
        });
        let actualHeight = toMeasure
            ? this.fixedHeight
            : this.fixedHeight = this.state.containerHeight;
        // console.log(`Rendering ${ elements.length - toMeasure } measured elements and ${ toMeasure } to measure`);
        return <div className="xmasonry" style={ {
            ...XMasonry.containerStyle,
            height: actualHeight
        } } ref={ (c) => this.container = c }>
            { elements }
        </div>;
    }

}