//import "babel-polyfill";
import React from "react";
import { XMasonry, XBlock } from "../src/index.jsx";

class Wrapper extends React.Component {

    state = {
        data: [
            {
                id: 1,
                header: "Hello!",
                body: "This is the body. This is successfully rendered card."
            },
            {
                id: 2,
                header: "Hello 2!",
                body: "This is the body. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card.",
                width: 2
            },
            {
                id: 3,
                header: "Hello 3!",
                body: "This is the body."
            },
            {
                id: 4,
                header: "Hello 4. This is a very long title of the card.",
                body: "This is the body. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is the body. This is successfully rendered card. This is successfully rendered card."
            },
            {
                id: 5,
                header: "Hello 5!",
                body: "This is the body. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card."
            },
            {
                id: 6,
                header: "Hello 6...",
                body: "Duck the system!"
            },
            {
                id: 7,
                header: "Hello 7!",
                body: "This block takes 2 blocks of width! This block takes 2 blocks of width! This block takes 2 blocks of width! This block takes 2 blocks of width! This block takes 2 blocks of width!",
                width: 2
            },
            {
                id: 8,
                header: "Hello 8 :)",
                body: "2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again!",
                width: 2
            },
            {
                id: 9,
                header: "Hello 9",
                body: "Dummy card"
            },
            {
                id: 10,
                header: "Hello 10",
                body: "Dummy card"
            },
            {
                id: 11,
                header: "Hello 11",
                body: "Dummy card"
            }
        ]
    };

    addCard () {
        this.setState({
            data: this.state.data.concat({
                id: this.state.data.length + 1,
                header: "This is a dummy card",
                body: ["This is a dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
                    , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
                    , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
                    , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
                    , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
                    , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
                ].slice(0, Math.floor(Math.random() * 6) + 1),
                width: Math.floor(1 + Math.random() * 1.5)
            })
        });
        setTimeout(() => { document.body.scrollTop = 999999 }, 50);
    }

    render () {
        return <div>
            <h3 style={{ textAlign: "center" }}>React-XMasonry Layout Demo</h3>
            <XMasonry>
                { this.state.data.map((d, i) =>
                    <XBlock key={ d.id } width={ d.width || 1 }>
                        <div className="card">
                            <h1>{ d.header }</h1>
                            <p>{ d.body }</p>
                        </div>
                    </XBlock>
                )}
            </XMasonry>
            <div>
                <button onClick={ this.addCard.bind(this) }>Add Card</button>
            </div>
        </div>
    }
}

window.init = function () {
    ReactDOM.render(
        <Wrapper/>,
        document.getElementById(`root`)
    );
};