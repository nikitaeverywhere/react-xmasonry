/**
 * This example demonstrates the basic usage of react-xmasonry component.
 * See this in action: https://zitros.github.io/react-xmasonry
 */

import React from "react";
import { XMasonry, XBlock } from "../../src/index.jsx"; // from "react-xmasonry"
import * as utils from "./utils.jsx";

export default class ArticlesDemo extends React.Component {

    state = {
        data: utils.generateArticles()
    };

    render () {
        return <div className="demo" id="ArticlesDemo">
            <div className="centerText">
                <button onClick={ () => this.setState({ data: utils.generateArticles() }) }>
                    Regenerate
                </button>
            </div>
            <XMasonry targetBlockWidth={400}>{ this.state.data.map((article, i) =>
                <XBlock key={ article.id } width={ article.cardWidth }>
                    <div className="article">
                        <div className="imageBox">
                            <div className="image"
                                 style={{ backgroundImage: `url(${ article.cover })` }}>
                                <div className="title">
                                    { article.title }
                                </div>
                            </div>
                        </div>
                        <p>
                            { article.text }
                        </p>
                    </div>
                </XBlock>
            )}</XMasonry>
        </div>
    }

}