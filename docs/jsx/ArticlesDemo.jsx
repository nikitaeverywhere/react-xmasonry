import React from "react";
import { XMasonry, XBlock } from "../../src/index.jsx"; // from "react-xmasonry"
import * as utils from "./utils.jsx";

let globalID = 0;

export default class ArticlesDemo extends React.Component {

    state = {
        data: ArticlesDemo.generateArticles()
    };

    static generateArticles = () => Array.from({ length: 7 + Math.floor(Math.random() * 5) },
        () => ({
            id: ++globalID,
            title: utils.getRandomText(1),
            text: utils.getRandomText(),
            cover: `img/wallpaper.jpg`,
            cardWidth: Math.random() > 0.8 ? 2 : 1
        })
    );

    render () {
        return <div className="demo ArticlesDemo" id="ArticlesDemo">
            <div className="centerText">
                <button onClick={ () => this.setState({ data: ArticlesDemo.generateArticles() }) }>
                    Generate New
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