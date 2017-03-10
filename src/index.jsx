const React = typeof window === `undefined` ? require(`react`) : window.React;

export class XMasonry extends React.Component {

    /**
     * Number of displayed columns.
     * @type {number}
     */
    columns = 2;

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
        position: `relative`,
        overflow: `hidden`
    };

    static getBestFitColumn (heights, width = 1) {
        let minIndex = 0,
            minHeight = Infinity;
        for (let i = 0; i < heights.length - width + 1; ++i) {
            let currentMinHeight = heights[i];
            for (let j = 0; j < width - 1; j++) {
                if (heights[i] < currentMinHeight) {
                    currentMinHeight = heights[i];
                }
            }
            if (currentMinHeight < minHeight) {
                minHeight = currentMinHeight;
                minIndex = i;
            }
        }
        return minIndex;
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
        for (let c of this.container.children) {
            if (!c.dataset.hasOwnProperty("xkey")) continue;
            let { height } = c.getBoundingClientRect();
            blocks[c.dataset["xkey"]] = { height: Math.ceil(height) };
        }
        if (Object.keys(blocks).length > 0) this.recalculatePositions(blocks);
    }

    recalculatePositions (newBlocks = null) {
        let blocks = {
                ...this.state.blocks,
                ...newBlocks
            },
            heights = Array.from({ length: this.columns }, () => 0);
        for (let c of this.container.children) {
            if (!blocks.hasOwnProperty(c.dataset.key)) continue;
            let col = XMasonry.getBestFitColumn(heights, 1);
            blocks[c.dataset.key].left = `${ col * Math.floor(10000 / this.columns) / 100 }%`;
            blocks[c.dataset.key].top = `${ heights[col] }px`;
            heights[col] += blocks[c.dataset.key].height;
        }
        this.setState({ blocks, height: Math.max.apply(null, heights) });
    }

    render () {
        const cardWidth = `${ Math.floor(10000 / this.columns) / 100 }%`;
        const [measuredElements, elementsToMeasure]
            = React.Children.toArray(this.props.children).reduce((acc, element) => {
                let measured = this.state.blocks[element.key]; // || undefined
                acc[measured ? 0 : 1].push(
                    measured
                        ? React.cloneElement(element, {
                            "data-key": element.key,
                            "style": {
                                width: cardWidth,
                                ...measured
                            }
                        })
                        : React.cloneElement(element, {
                            "data-key": element.key,
                            "data-xkey": element.key,
                            "style": {
                                width: cardWidth
                                // visibility: "hidden"
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

export class Card extends React.Component {

    static defaultProps = {
        width: 1
    };

    static defaultStyle = {
        position: `absolute`
    };

    render () {
        return <div { ...this.props } style={ { ...this.props.style, ...Card.defaultStyle } }>
            <div ref="content">
                { this.props.children }
            </div>
        </div>;
    }

}

if (typeof window !== `undefined`) {
    window.XMasonry = XMasonry;
    window.Card = Card;
}