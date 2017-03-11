import React from "react";

export default class XMasonry extends React.Component {

    /**
     * Number of displayed columns.
     * @type {number}
     */
    columns = 3;

    state = {
        blocks: {},
        height: 0
    };

    /**
     * @type {HTMLElement}
     */
    container = null;

    /**
     * The width of the container in pixels. Is assigned dynamically.
     * @type {number}
     */
    containerWidth;

    static containerStyle = {
        position: `relative`
    };

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

    componentDidMount() {
        this.containerWidth = this.container.getBoundingClientRect().width;
        this.measureChildren();
    }

    componentDidUpdate() {
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
            heights = Array.from({ length: this.columns }, () => 0);
        for (let i = 0; i < this.container.children.length; i++) {
            let child = this.container.children[i];
            if (!blocks.hasOwnProperty(child.dataset.key)) continue;
            let blockWidth = +child.dataset.width || 1,
                { col, height } = XMasonry.getBestFitColumn(heights, blockWidth),
                newHeight = height + blocks[child.dataset.key].height;
            blocks[child.dataset.key.toString()].left =
                `${ col * Math.floor(10000 / this.columns) / 100 }%`;
            blocks[child.dataset.key.toString()].top = `${ height }px`;
            for (let i = 0; i < blockWidth; ++i) heights[col + i] = newHeight;
        }
        this.setState({ blocks, height: Math.max.apply(null, heights) });
    }

    render () {
        const cardWidth = Math.floor(10000 / this.columns) / 100;
        const [measuredElements, elementsToMeasure]
            = React.Children.toArray(this.props.children).reduce((acc, element) => {
            let measured = this.state.blocks[element.key]; // || undefined
            acc[measured ? 0 : 1].push(
                measured
                    ? React.cloneElement(element, {
                        "data-key": element.key,
                        "data-width": element.props.width,
                        "style": {
                            width: `${ cardWidth * element.props.width }%`,
                            ...measured
                        },
                        "measured": true
                    })
                    : React.cloneElement(element, {
                        "data-key": element.key,
                        "data-width": element.props.width,
                        "data-xkey": element.key,
                        "style": {
                            width: `${ cardWidth * element.props.width }%`,
                            visibility: "hidden"
                        }
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