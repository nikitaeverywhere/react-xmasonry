import React from "react";

export default class XMasonry extends React.Component {

    static defaultProps = {
        responsive: true
    };

    state = {
        blocks: {},
        height: 0,
        columns: 3,
        containerWidth: 0
    };

    /**
     * @type {HTMLElement}
     */
    container = null;

    mounted = false;
    resizeListener = null;
    debouncedResizeTimeout = null;
    debounceRate = 50;

    /**
     * The width of XMasonry block in pixels. Is assigned dynamically, must be in stick with the
     * state property.
     * @type {number}
     */
    containerWidth = 0;

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

    updateContainerWidth () {
        let newWidth = this.container.getBoundingClientRect().width;
        if (newWidth === this.containerWidth)
            return;
        this.setState({
            containerWidth: this.containerWidth = newWidth,
            blocks: {}
        });
    }

    componentDidMount() {
        this.mounted = true;
        this.updateContainerWidth();
        this.measureChildren();
    }

    componentWillUnmount () {
        this.mounted = false;
        if (this.resizeListener) window.removeEventListener("resize", this.resizeListener);
    }

    componentDidUpdate() {
        this.updateContainerWidth();
        this.measureChildren();
    }

    measureChildren () {
        let blocks = {};
        for (let i = 0; i < this.container.children.length; i++) {
            let child = this.container.children[i];
            if (!child.dataset.hasOwnProperty("xkey")) continue;
            let { height } = child.getBoundingClientRect();
            blocks[child.dataset["xkey"].toString()] = { height: Math.ceil(height) };
        }
        if (Object.keys(blocks).length > 0) this.recalculatePositions(blocks);
    }

    recalculatePositions (newBlocks = null) {
        let blocks = {
                ...this.state.blocks,
                ...newBlocks
            },
            heights = Array.from({ length: this.state.columns }, () => 0);
        for (let i = 0; i < this.container.children.length; i++) {
            let child = this.container.children[i];
            if (!blocks.hasOwnProperty(child.dataset.key)) continue;
            let blockWidth = +child.dataset.width || 1,
                { col, height } = XMasonry.getBestFitColumn(heights, blockWidth),
                newHeight = height + blocks[child.dataset.key].height;
            blocks[child.dataset.key].left =
                `${ col * Math.floor(10000 / this.state.columns) / 100 }%`;
            blocks[child.dataset.key].top = `${ height }px`;
            for (let i = 0; i < blockWidth; ++i) heights[col + i] = newHeight;
        }
        this.setState({ blocks, height: Math.max.apply(null, heights) });
    }

    /**
     * This method is triggered when component gets created (before the mount) and when resize
     * happens.
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
            setTimeout(() => this.debouncedResizeTimeout = null, this.debounceRate);
    }

    render () {
        const cardWidth = Math.floor(10000 / this.state.columns) / 100;
        const [measuredElements, elementsToMeasure]
            = React.Children.toArray(this.props.children).reduce((acc, element) => {
            let measured = this.state.blocks[element.key], // || undefined
                width = Math.min(element.props.width, this.state.columns);
            acc[measured ? 0 : 1].push(
                measured
                    ? React.cloneElement(element, {
                        "data-key": element.key,
                        "data-width": width,
                        "style": {
                            width: `${ cardWidth * element.props.width }%`,
                            ...measured
                        },
                        "measured": true,
                        "width": width
                    })
                    : React.cloneElement(element, {
                        "data-key": element.key,
                        "data-width": width,
                        "data-xkey": element.key,
                        "style": {
                            width: `${ cardWidth * element.props.width }%`,
                            visibility: "hidden"
                        },
                        "width": width
                    })
            );
            return acc;
        }, [[], []]);
        return <div className="xmasonry" style={ {
            ...XMasonry.containerStyle,
            height: this.state.height
        } } ref={ (c) => this.container = c }>
            { measuredElements }
            { elementsToMeasure }
        </div>;
    }

}