/**
 * This example demonstrates the basic usage of react-xmasonry component.
 * See this in action: https://zitros.github.io/react-xmasonry
 */

import React from "react";
import { XMasonry, XBlock } from "../../src/index.jsx"; // from "react-xmasonry"
import * as utils from "./utils.jsx";

const initialData = [
    {
        id: 1,
        header: "Good News",
        body: "This is the dummy body. This is successfully rendered card.",
        color: utils.getRandomColor()
    }, {
        id: 2,
        header: "Cool Masonry",
        body: "This is the dummy body. This is successfully rendered card.",
        color: utils.getRandomColor()
    }, {
        id: 3,
        header: "Layout is Here!",
        body: "This card takes 2 columns. This is successfully" +
        " rendered card. This is successfully rendered card. This is successfully" +
        " rendered card. This is successfully rendered card.",
        width: 2,
        color: utils.getRandomColor()
    }
];

export default class CardsDemo extends React.Component {

    state = {
        data: initialData
    };

    lastCardId = this.state.data.length;

    addCard () {
        this.setState({
            data: this.state.data.concat(utils.getRandomCard(++this.lastCardId))
        });
    }

    deleteCard () {
        if (this.state.data.length < 1)
            return;
        let copy = this.state.data.slice();
        copy.splice(Math.floor(Math.random()  * copy.length), 1);
        this.setState({
            data: copy
        });
    }

    replaceCard () {
        if (this.state.data.length < 1)
            return;
        let copy = this.state.data.slice();
        copy.splice(
            Math.floor(Math.random()  * copy.length), 1, utils.getRandomCard(++this.lastCardId)
        );
        this.setState({
            data: copy
        });
    }

    render () {
        return <div className="demo" id="CardsDemo">
            <div style={{ textAlign: "center" }}>
                <button onClick={ this.addCard.bind(this) }>Add Random Card</button>
                <button onClick={ this.deleteCard.bind(this) }>Delete random card</button>
                <button onClick={ this.replaceCard.bind(this) }>Replace random card</button>
            </div>
            <XMasonry>
                <XBlock key={ "persistent" }>
                    <div className="card" style={ { backgroundColor: "white" } }>
                        <h1>Persistent card</h1>
                        <p>This card should always be the first card in this demo.</p>
                    </div>
                </XBlock>{ this.state.data.map((d, i) =>
                <XBlock key={ d.id } width={ d.width || 1 }>
                    <div className="card" style={{ backgroundColor: d.color }}>
                        <h1>{ d.header }<sup>{ d.id }</sup></h1>
                        <p>{ d.body }</p>
                    </div>
                </XBlock> )}
            </XMasonry>
        </div>
    }

}